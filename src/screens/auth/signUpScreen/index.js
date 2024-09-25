import React, { useState } from 'react';
import { View, TextInput, Button, Text, StatusBar, ImageBackground, Image } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';
import { images } from '../../../assets/images';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../constants/string';
import CustomTextInput from '../../../components/cutomTextInput';




const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { colors } = useTheme();


    const handleRegister = async () => {
        const { user, error } = await registerUser(email, password);
        if (error) {
            setErrorMessage(error.message);
        } else {
            console.log('Registration successful:', user);
            navigation.navigate('Login')
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


                <Button title="Register" onPress={handleRegister} />


                <GradientButton buttonText='Login?' onPress={() => navigation.navigate('Login')} />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            </View>



        </View>
    );
};

export default Register;
