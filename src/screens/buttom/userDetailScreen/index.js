import { View, Text, StatusBar, Alert, ImageBackground, Image, TouchableOpacity, useColorScheme, ToastAndroid, PermissionsAndroid, Linking } from 'react-native';
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
import { fetchUserImagePath } from '../../../utils/helper/logoutHelper';
import { launchImageLibrary } from 'react-native-image-picker';

const UserDetailScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const [imagePath, setImagePath] = useState('');
    const [savedEmail, setSavedEmail] = useState('');



    useEffect(() => {
        const checkSession = async () => {

            const sessionEmail = await AsyncStorage.getItem('active_email');
            console.log("🚀 ~ fetchUserData ~ sessionEmail:", sessionEmail);

            if (savedEmail) {
                const { data, error } = await supabase
                    .from('registered_user')
                    .select('imagePath')
                    .eq('email', savedEmail)
                    .single();

                if (error) {
                    console.error('🚀 ~ Error fetching image path:', error.message);
                } else {
                    setImagePath(data?.imagePath || ''); // Set existing image path if available
                }
            }
        };
        checkSession();
    }, []);


   

    const saveImagePath = async (path) => {
        console.log("saveImagePath called");
        const activeEmail = await AsyncStorage.getItem('active_email');
    
        if (!path) {
            ToastAndroid.show(
                'Please select or capture an image before proceeding.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return;
        }
    
        const fileName = `image_${Date.now()}.jpg`;
        const storagePath = `${activeEmail}/images/${fileName}`;
    
        // Update this section to use `path` for the file URI
        const { data, error } = await supabase.storage
            .from('userprofileimages') 
            .upload(storagePath, {
                uri: path,  // Use the `path` variable here
                type: 'image/jpeg',  // Specify type as needed
            });
    
        if (error) {
            console.error('Error uploading image to storage:', error.message);
            ToastAndroid.show(
                'Failed to upload image to storage.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            return;
        }
    
        await saveImagePathInDatabase(data?.path);
    };
    
    const saveImagePathInDatabase = async (path) => {
        const activeEmail = await AsyncStorage.getItem('active_email');

        const { data, error: updateError } = await supabase
            .from('registered_user')
            .update({ imagePath: path })
            .eq('email', activeEmail);

        if (updateError) {
            console.error('Error updating imagePath in registered_user:', updateError.message);
            ToastAndroid.show(
                'Failed to save image path in database.',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        } else {
            console.log('Image path updated successfully:', data);
            ToastAndroid.show(
                'Image path saved successfully!',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
            navigation.goBack();
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
                onPress={()=>saveImagePath(imagePath)}
                style={{ marginTop: hp(10) }}
            />
        </View>
    );
};

export default UserDetailScreen;
