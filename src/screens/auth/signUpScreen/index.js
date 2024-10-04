import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { images } from '../../../assets/images';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ScreenNames, Strings } from '../../../constants/string';
import CustomTextInput from '../../../components/cutomTextInput';
import CustomCheckbox from '../../../components/customCheckbox';
import { navigate, navigationRef } from '../../../navigator/navigationRef';




const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    const handleCheckboxPress = (isChecked) => {
        console.log('Checkbox 1 is checked:', isChecked);
    };


    const handleCheckboxSecondPress = (isCheckedSecond) => {
        console.log('Checkbox 2 is checked:', isCheckedSecond);
    };
    const handleRegister = async () => {
        try {
            const { user, error } = await registerUser(email, password);
            if (error) {
                setErrorMessage(error.message);
                console.error('Registration error:', error);
            } else {
                console.log('Registration successful:', user); // This should now show the user object
                navigate(ScreenNames.Confirmation);
                // Handle successful registration (e.g., navigate to confirmation)
            }
        } catch (error) {
            console.error('Unexpected registration error:', error);
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
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    autoCorrect={false}
                    onSubmitEditing={() => thirdRef.current.focus()}
                    rightIcon
                    imageSource={images.emailIcon}
                    suffixIconStyle={{ width: 24, height: 26.4, }}
                    
                />
                <CustomTextInput
                    ref={thirdRef}
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

                <CustomCheckbox label={Strings.emailMeAboutSpecialPricing} onPress={handleCheckboxSecondPress}>

                </CustomCheckbox>

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
