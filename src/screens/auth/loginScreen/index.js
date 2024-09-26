import { View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { images } from '../../../assets/images'
import { ScreenNames, Strings } from '../../../constants/string'
import fonts from '../../../constants/fonts'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomTextInput from '../../../components/cutomTextInput'
import SocialLoginTouchable from '../../../components/touchableComponents'
import GradientButton from '../../../components/gradientButton'
import { useTheme } from '@react-navigation/native';

import { loginUser } from '../../../services/authServices';
import { supabase } from '../utils/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, navigationRef } from '../../../navigator/navigationRef';




const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = async () => {
        setLoading(true);
        try {
            const loginSuccess = await loginUser(Email, Password);
            setLoading(false);

            if (loginSuccess.user) {
                await AsyncStorage.setItem('session', JSON.stringify(loginSuccess.user)); // Store user session

               // navigate(ScreenNames.Login)
                navigate(ScreenNames.BottomStack,{screen: ScreenNames.Home})
                // 'AuthStack', { screen: 'Login' }
                // navigateReset('AuthStack', { screen: 'Login' });
            } else {
                setErrorMessage(loginSuccess.error?.message || 'Login failed'); 
                console.log('Login failed:', loginSuccess.error?.message);
            }
        } catch (err) {
            setLoading(false); // Stop loading on error
            console.error('Error during login:', err); // Log any unexpected errors
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
                    placeholder='Email'
                    value={Email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />
                <CustomTextInput
                    placeholder='Password'
                    value={Password}
                    onChangeText={setPassword}
                    keyboardType='default'
                    secureTextEntry={true}
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
                        style={[styles.forgotPswrdText, { marginTop: 20}]}>
                        {Strings.forgotPassword}
                    </Text>
                </TouchableOpacity>
            </View>
            {errorMessage ? (
                <Text style={{ color: 'red',marginTop:5 }}>{errorMessage}</Text>
            ) : null}
            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <GradientButton
                    style={{ marginTop: 20 }}
                    onPress={handleLogin} // Call the handleLogin function
                    buttonText="Next"
                    textStyle={{ fontSize: 18 }}
                />
            )}

        </View>
    )
}

export default LoginScreen;