import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StatusBar, ImageBackground, Image, TouchableOpacity,ToastAndroid } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { images } from '../../../assets/images';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ScreenNames, Strings } from '../../../constants/string';
import CustomTextInput from '../../../components/cutomTextInput';
import CustomCheckbox from '../../../components/customCheckbox';
import { navigate, navigationRef } from '../../../navigator/navigationRef';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFCMToken } from '../../../utils/helper/firebaseServies';
import { supabase } from '../../../utils/supabase';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const forthRef = useRef(null);

    const handleCheckboxPress = (isChecked) => {
        console.log('Checkbox 1 is checked:', isChecked);
    };


    // const handleCheckboxSecondPress = (isCheckedSecond) => {
    //     console.log('Checkbox 2 is checked:', isCheckedSecond);
    // };


    const handleRegister = async () => {
        try {
            const { user, error: registrationError } = await registerUser(email, password);
            if (registrationError) {
                setErrorMessage(registrationError.message);
                console.error('Registration error:', registrationError);
                return; // Exit if there's a registration error
            }
    
            const fcm_token = await getFCMToken(); // Ensure this function returns the token
            console.log("🚀 ~ handleRegister ~ fcm_token:", fcm_token);
    
            await AsyncStorage.setItem('fcm_token', fcm_token);
    
            const { data, error: upsertError } = await supabase
                .from('registered_user')
                .upsert({
                    email: email, // Primary key (unique) for upsert
                    username: username, // User's name
                    phone_number: phoneNo, // User's phone number
                    fcm_token: fcm_token, // FCM token
                    updated_at: new Date().toISOString(), // Timestamp for last update
                }, {
                    onConflict: ['email'] // Conflict resolution based on email
                });
    
            if (upsertError) {
                console.error('Error inserting user data:', upsertError);
                ToastAndroid.showWithGravity(
                    'Failed to save user data.',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
            } else {
                console.log('User data saved successfully during registration!');
                console.log('Registration successful:', user);
                navigate(ScreenNames.Confirmation);
            }
    
        } catch (error) {
            console.error('Unexpected error during registration:', error);
            ToastAndroid.showWithGravity(
                'User already exists or an unexpected error occurred.',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };
    


    return (
        <View style={styles.container(colors)}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                    <Image source={images.appLogo} style={styles.logoStyle} />
                    <Text style={styles.mainText(colors)}>
                        Sign Up For Free
                    </Text>
                </ImageBackground>

                <View style={styles.body}>

                    <CustomTextInput
                        ref={firstRef}
                        placeholder='Username'
                        value={username}
                        onChangeText={setUserName}
                        keyboardType='default'
                        autoFocus={true}
                        showSoftInputOnFocus={true}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        autoCorrect={false}
                        onSubmitEditing={() => secondRef.current.focus()}
                        rightIcon
                        imageSource={images.profileIcon}
                        suffixIconStyle={{ width: 24, height: 26.4, }}
                    />

                    <CustomTextInput
                        ref={secondRef}
                        placeholder='Phone No'
                        value={phoneNo}
                        onChangeText={setPhoneNo}
                        keyboardType='phone-pad'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        autoCorrect={false}
                        onSubmitEditing={() => thirdRef.current.focus()}
                        rightIcon
                        imageSource={images.smartPhoneIcon}
                        suffixIconStyle={{ width: 24, height: 26.4, opacity: 0.5 }}

                    />

                    <CustomTextInput
                        ref={thirdRef}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        returnKeyType='next'
                        blurOnSubmit={false}
                        autoCorrect={false}
                        onSubmitEditing={() => forthRef.current.focus()}
                        rightIcon
                        imageSource={images.emailIcon}
                        suffixIconStyle={{ width: 24, height: 26.4, }}

                    />



                    <CustomTextInput
                        ref={forthRef}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='default'
                        secureTextEntry={true}
                        rightIcon
                        imageSource={images.lockIcon}
                        suffixIconStyle={{ width: 24, height: 26.4, }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        autoCorrect={false}
                    //   onSubmitEditing={handleRegister}

                    />


                    <CustomCheckbox label={Strings.keepMeSignedIn} onPress={handleCheckboxPress}>

                    </CustomCheckbox>

                    {/* <CustomCheckbox label={Strings.emailMeAboutSpecialPricing} onPress={handleCheckboxSecondPress}>

                    </CustomCheckbox> */}

                    <TouchableOpacity onPress={() => navigate(ScreenNames.Login)}>
                        <Text
                            style={styles.forgotPswrdText}>
                            {Strings.alreadyHaveAnAccount}
                        </Text>
                    </TouchableOpacity>

                    <GradientButton buttonText='Create Account' onPress={handleRegister} style={{ marginTop: 10 }} />
                    {errorMessage ? <Text>{errorMessage}</Text> : null}




                    {/* <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
                    <Text
                        style={styles.forgotPswrdText}>
                        {Strings.alreadyHaveAnAccount}
                    </Text>
                </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;
