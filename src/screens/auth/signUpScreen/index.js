import React, { useState, useRef, useCallback } from 'react';
import { View, ScrollView, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { images } from '../../../assets/images';
import styles from './styles';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { ScreenNames, Strings } from '../../../constants/string';
import CustomTextInput from '../../../components/cutomTextInput';
import CustomCheckbox from '../../../components/customCheckbox';
import { navigate } from '../../../navigator/navigationRef';
import { rhp } from '../../../constants/dimensions';
import { handleCheckboxPress, handleRegister } from '../../../utils/helper/registerHelper';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();
    const [rememberMe, setRememberMe] = useState(false);
    const [isSecureCheck, setIsSecureCheck] = useState(true);
   

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const forthRef = useRef(null);


    useFocusEffect(
        useCallback(() => {
            // Reset filter states when navigating to the screen
            setUserName('');
            setPhoneNo('');
            setEmail('');
            setPassword('');
            setRememberMe('');
        }, [])
    );


   
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

                    {/* user name text field */}
                    <CustomTextInput
                        ref={firstRef}
                        placeholder='Username'
                        value={username}
                        onChangeText={setUserName}
                        keyboardType='default'
                        //autoFocus={true}
                        showSoftInputOnFocus={true}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        autoCorrect={false}
                        onSubmitEditing={() => secondRef.current.focus()}
                        rightIcon
                        imageSource={images.profileIcon}
                        suffixIconStyle={{ width: 24, height: 26.4, }}
                    />


                    {/* phone text field */}
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

                    {/* email text field */}
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

                    {/* password text field */}
                    <CustomTextInput
                        ref={forthRef}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='default'
                        secureTextEntry={isSecureCheck}
                        rightIcon
                        imageSource={images.lockIcon}
                        suffixIconStyle={{ width: 24, height: 26.4 }}
                        autoCapitalize='none'
                        returnKeyType='next'
                        autoCorrect={false}
                        eyeSource={
                            isSecureCheck
                                ? images.eyeOpenIcon
                                : images.eyeHideIcon

                        }
                        eye
                        eyePress={() => setIsSecureCheck(!isSecureCheck)}
                    //   onSubmitEditing={handleRegister}
                    />


                    <CustomCheckbox label={Strings.keepMeSignedIn}  onPress={(isChecked) => handleCheckboxPress(isChecked, setRememberMe)}></CustomCheckbox>

                    {/* <CustomCheckbox label={Strings.emailMeAboutSpecialPricing} onPress={handleCheckboxSecondPress}></CustomCheckbox> */}
                    <GradientButton buttonText='Create Account' onPress={()=>handleRegister(setErrorMessage, email, username, phoneNo, password, rememberMe)} style={{ marginTop: rhp(20) }} />
                    {errorMessage ? <Text>{errorMessage}</Text> : null}


                    <TouchableOpacity onPress={() => navigate(ScreenNames.Login)}>
                        <Text
                            style={styles.HaveAnAccText}>
                            {Strings.alreadyHaveAnAccount}
                        </Text>
                    </TouchableOpacity>


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
