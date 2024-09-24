import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from "react-native-linear-gradient";
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import GradientButton from '../../../components/gradientButton';
import { useTheme } from '@react-navigation/native';



const StartScreen = ({navigation}) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <View>
                <Image source={images.IllustrationImage2} style={styles.illustrationImage} />
            </View>
            <Text style={[styles.mainText,{ color: colors.text }]}>
                {Strings.comfortFood}
            </Text>

            <Text style={[styles.description,{ color: colors.text }]}>
                {Strings.fastAndSmoothDelivery}
            </Text>

            <GradientButton
                onPress={() => navigation.navigate('Login')}
                buttonText="Next"
                textStyle={{ fontSize: 18 }}
            />


        </View>
    )
}
export default StartScreen;