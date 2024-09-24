import { View, Text, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import fonts from '../../../constants/fonts'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import CustomTextInput from '../../../components/cutomTextInput'
import SocialLoginTouchable from '../../../components/touchableComponents'
import GradientButton from '../../../components/gradientButton'
import { useTheme } from '@react-navigation/native';



const LoginScreen = ({navigation}) => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const { colors } = useTheme();
    const handlePress = () => {
        // Handle button press
    };


    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                <Image source={images.appLogo} style={styles.logoStyle} />
                <Text style={styles.mainText}>
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
                />

                <Text style={styles.optText}>{Strings.orContinueWith}</Text>

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
                <Text
                    style={styles.forgotPswrdText}>
                    {Strings.forgotPassword}
                </Text>
            </View>
            <GradientButton
                 onPress={() =>  navigation.navigate('BottomStack', {
                    screen: 'Home', // This is correct if you named the tab as "DashboardTab"
                  })}
                buttonText="Next"
                textStyle={{ fontSize: 18 }}
            />


        </View>
    )
}

export default LoginScreen;