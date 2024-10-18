import { View, Text, StatusBar, Alert, ImageBackground, Image, TouchableOpacity, useColorScheme, ToastAndroid, PermissionsAndroid,Linking } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { images } from '../../../assets/images';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { Strings } from '../../../constants/string';
import styles from './styles';
import GradientButton from '../../../components/gradientButton';
import { hp, rhp } from '../../../constants/dimensions';
import { supabase } from '../../../utils/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { openCamera, openGallery } from '../../../utils/helper/cameraHelper';

const UserDetailScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const [imagePath, setImagePath] = useState('');
    const [savedEmail, setSavedEmail] = useState('');



    useEffect(() => {
        const checkSession = async () => {

            const active = await AsyncStorage.getItem('email');
            console.log("🚀 ~ checkSession ~ savedEmail:", active)



            if (savedEmail) {
                const { data, error } = await supabase
                    .from('registered_user')
                    .select('imagePath')
                    .eq('email', savedEmail)
                    .single();

                if (error) {
                    console.error('Error fetching image path:', error.message);
                } else {
                    setImagePath(data?.imagePath || ''); // Set existing image path if available
                }
            }

        };

        checkSession();
    }, []);




    const saveImagePath = async () => {
        if (!imagePath) {

            ToastAndroid.show(
                'Please select or capture an image before proceeding.',
                ToastAndroid.SHORT, // Duration of the toast
                ToastAndroid.BOTTOM // Position of the toast
            );
            return;
        }

        try {
            const active = await AsyncStorage.getItem('email');
            if (active) {
                const { data, error } = await supabase
                    .from('registered_user')
                    .update({ imagePath })
                    .eq('email', active);

                if (error) {
                    console.error('Error updating imagePath:', error.message);
                    ToastAndroid.show(
                        'Failed to save image path.',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM
                    );
                } else {
                    console.log('Image path updated successfully:', data);
                    navigation.goBack();
                    // Check if the imagePath is not empty
                    if (imagePath) {
                        ToastAndroid.show(
                            'Image path saved successfully!',
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM
                        );
                    }

                    // Optionally navigate back after saving
                    // You can call a function here to reload the image
                    // navigation.goBack();
                }
            }
        } catch (error) {
            console.error("Error retrieving active email:", error);
            ToastAndroid.show(
                'Failed to retrieve active email.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        }
    };


    const removeImage = () => {
        setImagePath(''); // Clear the image path
    };


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.appBar}>


                <ImageBackground source={images.userScreenBgImage} style={styles.imgBgStyle}>
                    <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
                        <Image source={images.backIcon} style={styles.backImage} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <Text style={styles.title(colors)}>{Strings.uploadYourPhotoProfile}</Text>

            <Image source={scheme === 'dark' ? images.dataTextWhite : images.dataTextBlack} style={styles.descriptionImg} />

            <View style={styles.body}>
                {imagePath ? (
                    <View>
                        <Image source={{ uri: imagePath }} style={styles.previewImage} />
                        <TouchableOpacity style={styles.crossIcon} onPress={removeImage}>
                            <Image source={images.crossIcon} style={styles.crossImage} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.containerStyle(colors), { marginBottom: rhp(20) }]} onPress={() => openGallery(setImagePath)}>
                            <Image source={images.galleryIcon} style={styles.imgStyle} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={styles.containerStyle(colors)} onPress={() => openCamera(setImagePath)}>
                            <Image source={images.cameraIcon} style={styles.imgStyle} />
                        </TouchableOpacity>
                    </>
                )}


            </View>

            <GradientButton
                buttonText={'Next'}
                onPress={saveImagePath}
                style={{ marginTop: hp(10) }}
            />
        </View>
    );
};

export default UserDetailScreen;
