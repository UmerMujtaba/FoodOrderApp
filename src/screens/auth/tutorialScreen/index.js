import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from "react-native-linear-gradient";
import { images } from '../../../assets/images'
import { ScreenNames, Strings } from '../../../constants/string'
import GradientButton from '../../../components/gradientButton';
import { useTheme } from '@react-navigation/native';
import { navigate, navigationRef } from '../../../navigator/navigationRef';



const TutorialScreen = ({navigation}) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar translucent backgroundColor="transparent" />
            <View>
                <Image source={images.IllustrationImage} style={styles.illustrationImage} />
            </View>
            <Text style={[styles.mainText,{ color: colors.text }]}>
                {Strings.starterText}
            </Text>

            <Text style={[styles.description,{ color: colors.text }]}>
                {Strings.starterDescription}
            </Text>

            <GradientButton
                onPress={() => navigate(ScreenNames.Start)}
                buttonText="Next"
              
            />

        </View>
    )
}
export default TutorialScreen;