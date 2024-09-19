import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from "react-native-linear-gradient";
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import GradientButton from '../../../components/gradientButton';


const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <View>
                <Image source={images.IllustrationImage2} style={styles.illustrationImage} />
            </View>
            <Text style={styles.mainText}>
                {Strings.comfortFood}
            </Text>

            <Text style={styles.description}>
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