import { View, Text, TouchableOpacity, ImageBackground, Image, StatusBar, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../../assets/images'
import { ScreenNames, Strings } from '../../../constants/string'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'
import fonts from '../../../constants/fonts'
import { hp, rhp, rwp } from '../../../constants/dimensions'
import { navigate } from '../../../navigator/navigationRef'
import AddOptionModal from '../../../components/addOptionModal'
import Icons from 'react-native-vector-icons/MaterialIcons';


const ChoosePaymentScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [addedOptions, setAddedOptions] = useState([]);

    const handleAddOption = (option) => {
        setAddedOptions([...addedOptions, option]); // Add the new option to the list

    };


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

                <Text style={styles.title(colors)}>{Strings.choosePaymentOption}</Text>

                <View style={styles.optMainContainer}>


                    <TouchableOpacity style={styles.optContainer(colors)} activeOpacity={0.5} onPress={() => navigate(ScreenNames.CardPaymentScreen, { cardType: Strings.debitCreditCard })}>
                        <Text style={styles.optText(colors)}>{Strings.debitCreditCard}</Text>
                        <Image source={images.creditCardIcon} style={{ resizeMode: 'contain', height: 40, width: 40 }} />
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.optContainer(colors)} activeOpacity={0.5}>
                        <Text style={styles.optText(colors)}>{Strings.internetBanking}</Text>
                        <Image source={images.paypalIcon} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.optContainer(colors)} activeOpacity={0.5}>
                        <Text style={[styles.optText(colors), { height: rhp(30) }]}>
                            {Strings.googlePay}
                        </Text>
                        <Image source={images.gmailLogo} style={[styles.optImage, { height: rhp(35), width: rwp(35) }]} />

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.optContainer(colors)} activeOpacity={0.5} onPress={() => navigate(ScreenNames.JazzCashScreen)}>
                        <Text style={styles.optText(colors)}>{Strings.phonePe}</Text>
                        <Image source={images.rupayIcon} style={[styles.optImage, { height: rhp(50), width: rwp(45) }]} />
                    </TouchableOpacity>


                    <View style={styles.optionsList}>
                        {addedOptions.map((option, index) => {
                            console.log(`Rendering icon for: ${option.selectedPaymentMethod}, Icon: ${option.selectedIcon}`);

                            return (
                                <TouchableOpacity key={index} style={styles.optContainer(colors)} activeOpacity={0.5}>
                                    <Text style={styles.optText(colors)}>{option.selectedPaymentMethod}</Text>
                                    <Image source={option.selectedIcon} style={styles.imgStyle2} />
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <TouchableOpacity
                        style={[styles.optContainer(colors), { justifyContent: 'center' }]}
                        activeOpacity={0.5}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.optText(colors)}>{Strings.addAnotherOption}</Text>
                    </TouchableOpacity>


                    <AddOptionModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        onAddOption={handleAddOption}
                    />




                </View>
            </ScrollView>
        </View>

    )
}

export default ChoosePaymentScreen