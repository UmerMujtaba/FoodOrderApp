import React, { useState,useRef } from 'react';
import { View, TextInput, Button, Text, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { images } from '../../../assets/images';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ScreenNames, Strings } from '../../../constants/string';
import CustomTextInput from '../../../components/cutomTextInput';
import CustomCheckbox from '../../../components/customCheckbox';
import { navigate, navigationRef } from '../../../navigator/navigationRef';




const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();
    const ref_input2 = useRef();
    const ref_input3 = useRef();


    const handleCheckboxPress = (isChecked) => {
        console.log('Checkbox 1 is checked:', isChecked);
    };


    const handleCheckboxSecondPress = (isCheckedSecond) => {
        console.log('Checkbox 2 is checked:', isCheckedSecond);
    };

    const handleRegister = async () => {
        const { user, error } = await registerUser(email, password);
        if (error) {
            setErrorMessage(error.message);
        } else {
            console.log('Registration successful:', user);
            navigate(ScreenNames.Confirmation)
            // Handle successful registration (e.g., navigate to login)
        }
    };


    return (
        <View style={styles.container(colors)}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                <Image source={images.appLogo} style={styles.logoStyle} />
                <Text style={styles.mainText(colors)}>
                    Sign Up For Free
                </Text>
            </ImageBackground>

            <View style={styles.body}>

                <CustomTextInput
                    placeholder='Username'
                    value={username}
                    onChangeText={setUserName}
                    keyboardType='default'
                    rightIcon
                    imageSource={images.profileIcon}
                    suffixIconStyle={{ width: 24, height: 26.4, }}
                />

                <CustomTextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    rightIcon
                    imageSource={images.emailIcon}
                    suffixIconStyle={{ width: 24, height: 26.4, }}
                />
                <CustomTextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    keyboardType='default'
                    secureTextEntry={true}
                    rightIcon
                    imageSource={images.lockIcon}
                    suffixIconStyle={{ width: 24, height: 26.4, }}
                />


                <CustomCheckbox label={Strings.keepMeSignedIn} onPress={handleCheckboxPress}>

                </CustomCheckbox>

                <CustomCheckbox label={Strings.emailMeAboutSpecialPricing} onPress={handleCheckboxSecondPress}>

                </CustomCheckbox>
            

                <GradientButton buttonText='Create Account' onPress={handleRegister} style={{ marginTop: 15 }} />
                {errorMessage ? <Text>{errorMessage}</Text> : null}

                <TouchableOpacity onPress={() => navigate(ScreenNames.Login)}>
                    <Text
                        style={styles.forgotPswrdText}>
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
        </View>
    );
};

export default Register;
