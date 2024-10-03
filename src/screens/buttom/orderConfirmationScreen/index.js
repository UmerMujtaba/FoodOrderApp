import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import { useTheme } from '@react-navigation/native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import CustomTextInput from '../../../components/cutomTextInput'
import GradientButton from '../../../components/gradientButton'
import fonts from '../../../constants/fonts'

const OrderConfirmationScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [starRating, setStarRating] = useState(null);
    const [feedBack, setFeedBack] = useState(null);
    return (
        <View style={styles.container}>
            <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                <Image source={images.appLogo} style={styles.logoStyle} />
                {/* <View style={styles.logoStyle}>
                    <Text>ok</Text>
                </View> */}
                <Text style={styles.mainText(colors)}>
                    {Strings.thankYou}
                </Text>
                <Text style={styles.mainText(colors)}>
                    {Strings.enjoyYourMeal}
                </Text>
            </ImageBackground>

            <View style={styles.body}>
                <Text style={styles.rateText(colors)}>{Strings.pleaseRateYourFood}</Text>

                <View style={styles.stars}>
                    <TouchableOpacity onPress={() => setStarRating(1)}>
                        <Icons
                            name={starRating >= 1 ? 'star' : 'star-border'}
                            size={32}
                            style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStarRating(2)}>
                        <Icons
                            name={starRating >= 2 ? 'star' : 'star-border'}
                            size={32}
                            style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStarRating(3)}>
                        <Icons
                            name={starRating >= 3 ? 'star' : 'star-border'}
                            size={32}
                            style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStarRating(4)}>
                        <Icons
                            name={starRating >= 4 ? 'star' : 'star-border'}
                            size={32}
                            style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStarRating(5)}>
                        <Icons
                            name={starRating >= 5 ? 'star' : 'star-border'}
                            size={32}
                            style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
                        />
                    </TouchableOpacity>
                </View>

                <CustomTextInput
                    placeholder='Leave Feedback'
                    value={feedBack}
                    onChangeText={setFeedBack}
                    keyboardType='default'
                    //autoFocus={true}
                    showSoftInputOnFocus={true}
                    returnKeyType='next'
                    blurOnSubmit={false}
                    autoCorrect={false}
                    rightIcon
                    imageSource={images.feedbackIcon}
                    suffixIconStyle={{ width: 22, height: 26.4, }}
                />

                <View style={styles.buttonContainer}>
                    <GradientButton
                        buttonText={'Submit'}
                        style={{ marginTop: 0, width: '70%' }}
                    // onPress={}
                    />
                    <TouchableOpacity style={styles.skipBtn}>
                        <Text style={styles.skipBtnText}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderConfirmationScreen