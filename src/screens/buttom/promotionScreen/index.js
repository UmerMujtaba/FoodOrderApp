import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import { useTheme } from '@react-navigation/native'


const PromotionsScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.appBar}>
                    <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
                        <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
                            <Image source={images.backIcon} style={styles.backImage} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <Text style={styles.title(colors)}>{Strings.promotionCoupons}</Text>


                <TouchableOpacity activeOpacity={0.2} style={{ height: 150 }}>
                    <Image
                        source={images.promotionImage1}
                        style={styles.promotionImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.2} style={{ height: 150 }}>
                    <Image
                        source={images.promotionImage2}
                        style={styles.promotionImage}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PromotionsScreen