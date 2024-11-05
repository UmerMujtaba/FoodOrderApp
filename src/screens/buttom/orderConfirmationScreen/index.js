import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { images } from '../../../assets/images';
import { ScreenNames, Strings } from '../../../constants/string';
import { useTheme } from '@react-navigation/native';
import CustomTextInput from '../../../components/cutomTextInput';
import GradientButton from '../../../components/gradientButton';
import { rhp, rwp, wp } from '../../../constants/dimensions';
import StarComponenet from '../../../components/starComponent';
import { navigate } from '../../../navigator/navigationRef';

const OrderConfirmationScreenModal = ({ navigation }) => {
    const { colors } = useTheme();
    const [feedBack, setFeedBack] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(true); 

    return (
        <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsModalVisible(false)} 
        >
            <View style={styles.modalOverlay}>

                <View style={styles.modalContainer(colors)} >
                    <ImageBackground source={images.BackgroundImage} style={styles.bgImage}>
                        <Image source={images.appLogo} style={styles.logoStyle} />
                        <Text style={styles.mainText(colors)}>
                            {Strings.thankYou}
                        </Text>
                        <Text style={styles.mainText(colors)}>
                            {Strings.enjoyYourMeal}
                        </Text>
                    </ImageBackground>

                    <View style={styles.body}>
                        <Text style={styles.rateText(colors)}>{Strings.pleaseRateYourFood}</Text>
                        <StarComponenet />

                        <CustomTextInput
                            placeholder='Leave Feedback'
                            value={feedBack}
                            onChangeText={setFeedBack}
                            keyboardType='default'
                            showSoftInputOnFocus={true}
                            returnKeyType='next'
                            blurOnSubmit={false}
                            autoCorrect={false}
                            rightIcon
                            imageSource={images.feedbackIcon}
                            suffixIconStyle={{ width: rwp(22), height: rhp(26.4), }}
                        />

                        <View style={styles.buttonContainer}>
                            <GradientButton
                                buttonText={'Submit'}
                                style={{ marginTop: 0, width: wp(65) }}
                                onPress={() => {
                                    setIsModalVisible(false);
                                    navigate(ScreenNames.Dashboard);
                                }}
                            />
                            <TouchableOpacity style={styles.skipBtn} onPress={() => setIsModalVisible(false)}>
                                <Text style={styles.skipBtnText}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default OrderConfirmationScreenModal;
