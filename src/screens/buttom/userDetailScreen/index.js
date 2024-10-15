import { View, Text, StatusBar, StyleSheet, ImageBackground, Image, TouchableOpacity, useColorScheme, Alert, PermissionsAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '../../../assets/images';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../constants/string';
import styles from './styles';
import GradientButton from '../../../components/gradientButton';
import { hp, rhp } from '../../../constants/dimensions';
import { supabase } from '../../../utils/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UserDetailScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const [imagePath, setImagePath] = useState('');
    const [activeEmail,setActiveEmail] = useState('');
  
    useEffect(() => {
        const checkSession = async () => {
         
                const active = await AsyncStorage.getItem('active_email');
                console.log("🚀 ~ checkSession ~ activeEmail:", active);

                //setActiveEmail(active);
                // console.log("🚀 ~ UserDetailScreen ~ activeEmail:", activeEmail)


                if (activeEmail) {
                    // Fetch current imagePath if needed
                   // const imagePath = '';
                    const { data, error } = await supabase
                        .from('registered_user')
                        .select('imagePath')
                        .eq('email', activeEmail)
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

    const openGallery = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false, // Change this if you want base64
            },
            (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.error('ImagePicker Error: ', response.error);
                } else {
                    const uri = response.assets[0].uri;
                    //setImagePath(uri); // Set the selected image path
                    setImagePath(uri);
                }
            }
        );
    };


    const openCamera = async () => {
        // Check and request camera permission
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Permission granted, proceed to launch camera
            launchCamera(
                {
                    mediaType: 'photo',
                    includeBase64: false,
                    quality: 1,
                },
                (response) => {
                    console.log("Camera Response:", response); // Log the response

                    // Check if response is valid
                    if (response && !response.didCancel && !response.error) {
                        // Make sure assets exist in the response
                        if (response.assets && response.assets.length > 0) {
                            const uri = response.assets[0].uri;
                            setImagePath(uri); // Set the captured image path
                        } else {
                            console.error('No assets found in camera response:', response);
                        }
                    } else if (response.didCancel) {
                        console.log('User cancelled camera');
                    } else if (response.error) {
                        console.error('Camera Error: ', response.error);
                    }
                }
            );
        } else {
            console.log('Camera permission denied');
        }
    };

    const saveImagePath = async () => {
        if (!imagePath) {
            // Show alert if imagePath is empty
            Alert.alert('Error', 'Please select or capture an image before proceeding.');
            return;
        }
    
        try {
            const activeEmail = await AsyncStorage.getItem('active_email');
            if (activeEmail) {
                const { data, error } = await supabase
                    .from('registered_user')
                    .update({ imagePath })
                    .eq('email', activeEmail);
    
                if (error) {
                    console.error('Error updating imagePath:', error.message);
                    Alert.alert('Error', 'Failed to save image path.');
                } else {
                    console.log('Image path updated successfully:', data);
                    if(imagePath='')
                        {Alert.alert('Success', 'Image path saved successfully!');
                        }
                    // Optionally navigate back after saving
                    // navigation.goBack();
                }
            }
        } catch (error) {
            console.error("Error retrieving active email:", error);
        }
    };
    
    useEffect(() => {
        // Reset imagePath when component mounts
        setImagePath('');
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <StatusBar translucent backgroundColor="transparent" />

                <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
                    <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
                        <Image source={images.backIcon} style={styles.backImage} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>

            <Text style={styles.title(colors)}>{Strings.uploadYourPhotoProfile}</Text>

            <Image source={scheme === 'dark' ? images.dataTextWhite : images.dataTextBlack} style={styles.descriptionImg} />

            <View style={styles.body}>
               {/* <View  style={styles.previewImage}>
               {imagePath && (
                <Image
                    source={{ uri: imagePath }}
                    style={styles.previewImage} // Add styles for the preview image
                />
            )}
               </View> */}
                <TouchableOpacity activeOpacity={0.7} style={[styles.containerStyle(colors), { marginBottom: rhp(20) }]} onPress={openGallery}>
                    <Image source={images.galleryIcon} style={styles.imgStyle} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} style={styles.containerStyle(colors)} onPress={openCamera}>
                    <Image source={images.cameraIcon} style={styles.imgStyle} />
                </TouchableOpacity>
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
