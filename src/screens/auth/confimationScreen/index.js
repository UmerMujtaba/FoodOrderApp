import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import fonts from '../../../constants/fonts';
import { images } from '../../../assets/images';
import GradientButton from '../../../components/gradientButton';
import { useNavigation } from '@react-navigation/native';
import { navigate,navigationRef } from '../../../navigator/navigationRef';
import { ScreenNames } from '../../../constants/string';

const ConfirmationScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                <Image source={images.appLogo} style={styles.logoStyle} />
                <Image 
                    source={images.confirmationImage} 
                    resizeMode='contain' 
                    style={styles.confirmationImage}
                />
            </ImageBackground>
            <View style={styles.content}>
                <Text style={styles.congratsText}>
                    Congrats!
                </Text>

                <Text style={styles.profileReadyText}>
                    Your Profile is Ready to Use
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <GradientButton
                    onPress={() =>  navigate(ScreenNames.BottomStack,{screen: ScreenNames.Home})}
                    
                    buttonText={'Go to Home'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // This ensures the content and button are separated
    },
    bgImage: {
        resizeMode: 'cover',
        width: '100%',
        height: 350,
    },
    logoStyle: {
        resizeMode: 'contain',
        height: 200,
        width: 200,
        alignSelf: 'center',
        zIndex: 2,
        top: '20%',
    },
    confirmationImage: {
        width: 172,
        height: 162,
        alignSelf: 'center',
        marginTop: '25%',
    },
    content: {
        flex: 1,
        justifyContent: 'center', // Centers the text content vertically
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    congratsText: {
        fontSize: 30,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.ExtraBold,
        color: '#53E88B',
    },
    profileReadyText: {
        fontSize: 26,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        color: 'white',
        marginTop: 20,
    },
    buttonContainer: {
        padding: 20, // Adds padding around the button
    },
});

export default ConfirmationScreen;
