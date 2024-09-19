import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from "react-native-linear-gradient";
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import GradientButton from '../../../components/gradientButton';


const TutorialScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <View>
                <Image source={images.IllustrationImage} style={styles.illustrationImage} />
            </View>
            <Text style={styles.mainText}>
                {Strings.starterText}
            </Text>

            <Text style={styles.description}>
                {Strings.starterDescription}
            </Text>

            <GradientButton
                onPress={() => navigation.navigate('Start')}
                buttonText="Next"
                textStyle={{ fontSize: 18 }}
            />

        </View>
    )
}
export default TutorialScreen;