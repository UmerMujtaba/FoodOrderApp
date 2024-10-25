import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ActivityIndicator, TouchableOpacity, ToastAndroid, Linking, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { ScreenNames, Strings } from '../../../constants/string';
import { images } from '../../../assets/images';
import CustomTextInput from '../../../components/cutomTextInput';
import SocialLoginTouchable from '../../../components/socialLoginTouchableComponent';
import GradientButton from '../../../components/gradientButton';
import { navigateReset, navigate } from '../../../navigator/navigationRef';
import { login } from '../../../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rhp, rwp } from '../../../constants/dimensions';
import { supabase } from '../../../utils/supabase';
import * as Keychain from 'react-native-keychain';


const LoginScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [isSecureCheck, setIsSecureCheck] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const {scheme}= useColorScheme();
    const handleLogin = () => {
        
        dispatch(login({ email: Email, password: Password }))
            .then((result) => {
                if (result.type === 'auth/login/fulfilled') {
                    // Login successful, navigate to home screen
                    AsyncStorage.setItem('active_email',Email);

                    navigateReset('BottomStack', { screen: ScreenNames.Home });
                } else if (result.type === 'auth/login/rejected') {
                    ToastAndroid.showWithGravity(
                        result.payload || 'Login failed',
                        ToastAndroid.LONG,
                        ToastAndroid.TOP
                    );
                }
            });
    };
  

    const handleGoogleLogin = async () => {
        console.log("🚀 ~ handleLogin ~ handleGOOGLELogin:")
       
        const redirectUri = Linking.canOpenURL('login-callback');
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: redirectUri,  // Redirect URL for React Native app
          }
        });
    
        if (error) {
          Alert.alert('Error', error.message);
        } else {
          Alert.alert('Success', 'You have successfully logged in!');
        }
      };

      
    useEffect(() => {
        const loadCredentials = async () => {
            try {
                if (rememberMe) {
                    await Keychain.setGenericPassword(Email, Password);
                } else {
                    await Keychain.resetGenericPassword();
                }

                
                const savedEmail = await AsyncStorage.getItem('email');
                console.log("🚀 ~ loadCredentials ~ savedEmail:", savedEmail)
                const savedPassword = await AsyncStorage.getItem('password');

                if (savedEmail) {
                    const { data, error } = await supabase
                        .from('registered_user')
                        .select('remember_me_flag')
                        .eq('email', savedEmail)
                        .single();

                    if (error) {
                        console.error('Error fetching user data from Supabase:', error);
                        return;
                    }
                    if (data && data.remember_me_flag) {
                        const credentials = await Keychain.getGenericPassword();
                        if (credentials) {
                            setEmail(credentials.username); // Email
                            setPassword(credentials.password); // Password
                        }
                
                    } else {
                        console.log('rememberMeFlag is false, not setting email and password.');
                    }
                }
            } catch (error) {
                console.error('Error loading saved credentials:', error);
            }
        }

        loadCredentials();
    }, []);

    
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
                    //autoFocus={true}
                    showSoftInputOnFocus={true}
                    returnKeyType='next'
                    rightIcon
                    imageSource={images.emailIcon}
                    suffixIconStyle={{ width: 24, height: 26.4 }}
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
                    secureTextEntry={isSecureCheck}
                    autoCapitalize='none'
                    rightIcon
                    imageSource={images.lockIcon}
                    returnKeyType='done'
                    autoCorrect={false}
                    suffixIconStyle={{ width: 24, height: 26.4 }}
                    eyeSource={
                        isSecureCheck
                            ? images.eyeOpenIcon
                            : images.eyeHideIcon

                    }
                    eye
                    eyePress={() => setIsSecureCheck(!isSecureCheck)}
                />

                <TouchableOpacity onPress={() => navigate(ScreenNames.PhoneSignin)}>
                    <Text style={styles.optText(colors)}>{Strings.orContinueWith}</Text>
                </TouchableOpacity>

                <View style={styles.socialLoginContainer}>
                    <SocialLoginTouchable
                        onPress={() => { /* handle press */ }}
                        imageSource={images.fbLogo}
                        text={Strings.Facebook}
                        style={{
                            width: rwp(35),
                            height: rhp(35),
                        }}
                    />
                    <SocialLoginTouchable
                        onPress={handleGoogleLogin }
                        imageSource={images.gmailLogo}
                        text={Strings.Google}
                    />
                </View>

                <TouchableOpacity onPress={() => navigate(ScreenNames.ForgotPasswordScreen)}>
                    <Text style={[styles.forgotPswrdText]}>
                        {Strings.forgotPassword}

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate(ScreenNames.Registeration)}>
                    <Text style={[styles.forgotPswrdText]}>
                        {Strings.signUp}
                    </Text>
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size="large" color={scheme === 'dark' ? '#ffffff' : '#0000ff'} />
                </View>
            ) : (
                <GradientButton
                    style={{ marginTop: 5 }}
                    onPress={handleLogin}
                    buttonText="Next"
                />
            )}
        </View>
    );
};

export default LoginScreen;
