import React from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native';
import { images } from '../assets/images';


const ConfirmationModal = ({
    modalVisible,
    setModalVisible,
    confirmDelete,
    confirmationMsg,
    Strings
}) => {
    const { colors } = useTheme(); // Extracting colors from the theme

    return (
        <Modal
            statusBarTranslucent={true}
            transparent={true}
            visible={modalVisible}
            animationType="fade"
        >
            <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
                <View style={styles.modalContainer(colors)}>
                   <TouchableOpacity onPress={() => setModalVisible(false)}>
                   <Image source={images.crossIcon} resizeMode='contain' style={styles.crossIconStyle} />
                   </TouchableOpacity>
                    <Text style={styles.modalText(colors)}>{confirmationMsg || Strings.confirmationMsg}</Text>
                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity onPress={confirmDelete} style={styles.modalButton}>
                            <LinearGradient
                                colors={['#15BE77', '#53E88B']} // Your gradient colors
                                start={{ x: 0.2, y: 0.7 }}  // Optional
                                end={{ x: 0.5, y: 0.4 }}  // Optional
                                style={styles.gradientButton}
                            >
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                            <LinearGradient
                                colors={['#15BE77', '#53E88B']} // Your gradient colors
                                start={{ x: 0.2, y: 0.7 }}  // Optional
                                end={{ x: 0.5, y: 0.4 }}  // Optional
                                style={styles.gradientButton}
                            >
                                <Text style={styles.modalButtonText}>No</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: (colors) => ({
        width: wp(95),
        borderRadius: 16,
        paddingHorizontal: rwp(20),
        height: hp(25),
        paddingTop: rhp(20),
        backgroundColor: colors.tabBackgroundColor
    }),
    crossIconStyle: {
        height: rhp(18),
        width: rwp(18),
        alignSelf: 'flex-end',
        marginRight: rhp(10),
    },
    modalText: (colors) => ({
        fontSize: rfs(20),
        color: colors.text,
        marginBottom: rhp(20),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        textAlign: 'center',
        paddingTop: rhp(30),
    }),
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    modalButton: {
        //backgroundColor: '#15BE77',
        paddingHorizontal: rwp(15),
        paddingVertical: rhp(15),
        borderRadius: 5,
        marginHorizontal: rwp(10),

    },
    modalButtonText: {
        color: 'black',
        fontSize: rfs(20),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    },
    gradientButton: {
        borderRadius: 8,
        paddingHorizontal: rwp(8),
        paddingVertical: rhp(8),
        paddingTop: rhp(2),
        paddingBottom: rhp(2),
    },
    gradientButton2: {
        borderRadius: 8,
        paddingHorizontal: rwp(8),
        paddingVertical: rhp(8),
        paddingTop: rhp(2),
        paddingBottom: rhp(2),
        opacity: 0.8
    },
})
export default ConfirmationModal;
