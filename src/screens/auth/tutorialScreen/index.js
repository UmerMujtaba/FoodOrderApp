import { View, Text,Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from "react-native-linear-gradient";
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'


const TutorialScreen =  () => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={images.IllustrationImage} style={styles.illustrationImage}/>
        </View>
        <Text style={styles.mainText}>
           {Strings.starterText}
        </Text>

        <Text style={styles.description}>
          {Strings.starterDescription}
        </Text>

        <TouchableOpacity style={styles.ctaStart}>
        <LinearGradient
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1.0, y: 0.5 }}
        locations={[0.2, 0.7]}
        colors={['#53E88B', '#15BE77']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{Strings.buttonText}</Text>
      </LinearGradient>
           
        </TouchableOpacity>
    </View>
  )
}
export default TutorialScreen;