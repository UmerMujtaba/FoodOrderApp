import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { supabase } from '../../../utils/supabase';
import styles from './styles';
import { images } from '../../../assets/images';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../constants/string';
import { rhp, wp } from '../../../constants/dimensions';
import CustomTextInput from '../../../components/cutomTextInput';
import GradientButton from '../../../components/gradientButton';
import { handleForgotPassword } from '../../../utils/helper';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            {/* appbar */}
            <View style={styles.appBar}>

                <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
                    <View style={styles.appBarContainer}>
                        <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
                            <Image source={images.backIcon} style={styles.backImage} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

            <Text style={styles.title(colors)}>{Strings.resetYourPassword}</Text>
            <Image source={images.subtitleTextImage} style={styles.subtitleImage} />
            <View style={styles.body}>

                <CustomTextInput
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    style={{
                        marginTop: rhp(-100),
                        marginBottom: rhp(10),
                    }}
                />

                <GradientButton
                    buttonText={loading ? 'Sending...' : 'Send Reset Link'}
                    onPress={() => handleForgotPassword(setLoading, email)}
                    style={{ marginTop: 10 }}
                />
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;
