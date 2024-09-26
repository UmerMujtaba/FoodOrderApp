import React, { useState, useRef } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { ScreenNames, Strings } from '../../../constants/string';
import { images } from '../../../assets/images';
import CustomTextInput from '../../../components/cutomTextInput';
import SocialLoginTouchable from '../../../components/touchableComponents';
import { loginUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { navigateReset,navigate } from '../../../navigator/navigationRef';



const LoginScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();

    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const loginSuccess = await loginUser(Email, Password);
            setLoading(false);

            if (loginSuccess.user) {
                await AsyncStorage.setItem('session', JSON.stringify(loginSuccess.user)); // Store user session
                navigateReset('BottomStack', { screen: ScreenNames.Home });
            } else {
                const errorMessage = loginSuccess.error?.message || 'Login failed';
                setErrorMessage(errorMessage);
               


                ToastAndroid.showWithGravity(
                    errorMessage,
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
                console.log('Login failed:', errorMessage);
            }
        } catch (err) {
            setLoading(false); // Stop loading on error
            console.error('Error during login:', err); 
         


            ToastAndroid.showWithGravity(
                'An unexpected error occurred. Please try again.',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
        }
    };

    return (
        <View style={styles.container(colors)}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                <Image source={images.appLogo} style={styles.logoStyle} />
                <Text style={styles.mainText(colors)}>
                    {Strings.loginToYourAcc}
                </Text>
            </ImageBackground>

            <View style={styles.body}>
                <CustomTextInput
                    ref={firstRef}
                    placeholder='Email'
                    value={Email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoFocus={true}
                    showSoftInputOnFocus={true}
                    returnKeyType='next'
                    blurOnSubmit={false}
                    autoCorrect={false}
                    onSubmitEditing={() => secondRef.current.focus()}
                />
                <CustomTextInput
                    ref={secondRef}
                    placeholder='Password'
                    value={Password}
                    onChangeText={setPassword}
                    keyboardType='default'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    returnKeyType='done'
                    autoCorrect={false}
                />

                <Text style={styles.optText(colors)}>{Strings.orContinueWith}</Text>

                <View style={styles.socialLoginContainer}>
                    <SocialLoginTouchable
                        onPress={() => { /* handle press */ }}
                        imageSource={images.fbLogo}
                        text={Strings.Facebook}
                    />
                    <SocialLoginTouchable
                        onPress={() => { /* handle press */ }}
                        imageSource={images.gmailLogo}
                        text={Strings.Google}
                    />
                </View>

                <TouchableOpacity>
                    <Text
                        style={[styles.forgotPswrdText, { marginTop: 10 }]}>
                        {Strings.forgotPassword}
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=> navigate(ScreenNames.Registeration)}>
                    <Text
                        style={[styles.forgotPswrdText, { marginTop: 10 }]}>
                        {Strings.dontHaveAnAccount}
                    </Text>
                </TouchableOpacity>

                
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <GradientButton
                    style={{ marginTop: 10 }}
                    onPress={handleLogin}
                    buttonText="Next"
                    textStyle={{ fontSize: 18 }}
                />
            )}
        </View>
    );
};

export default LoginScreen;
