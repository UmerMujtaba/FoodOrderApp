import React, { useState, useRef } from 'react';
import { View, Text, Image, StatusBar, ImageBackground, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native';
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

const LoginScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const { colors } = useTheme();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const handleLogin = () => {
        dispatch(login({ email: Email, password: Password }))
        .then((result) => {
            if (result.type === 'auth/login/fulfilled') {
                // Login successful, navigate to home screen

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
                    <ActivityIndicator size="large" color="#0000ff" />
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
