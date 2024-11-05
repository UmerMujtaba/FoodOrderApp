import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import DropDownPicker from 'react-native-dropdown-picker';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native';
import { images } from '../assets/images';
import { rfs, rhp, rwp, wp } from '../constants/dimensions';
import GradientButton from './gradientButton';



const AddOptionModal = ({ visible, onClose, onAddOption }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [selectedIcon, setSelectedIcon] = useState(null); // Default icon
    const [open, setOpen] = useState(false); // State to control dropdown visibility
    const [items, setItems] = useState([
        { label: 'Jazzcash', value: 'Jazzcash' },
        { label: 'Easypaisa', value: 'Easypaisa' },
        { label: 'Sadapay', value: 'Sadapay' },
        { label: 'Nayapay', value: 'Nayapay' },
    ]);

    const handleDropdownChange = (value) => {
        setSelectedPaymentMethod(value);
        // Automatically select the corresponding image
        switch (value) {
            case 'Jazzcash':
                setSelectedIcon(images.jazzCashImage);
                break;
            case 'Easypaisa':
                setSelectedIcon(images.easyPaisaImage);
                break;
            case 'Sadapay':
                setSelectedIcon(images.sadaPayImage);
                break;
            case 'Nayapay':
                setSelectedIcon(images.nayaPayImage);
                break;
            default:
                setSelectedIcon(null); // Reset if no valid option is selected
                break;
        }
    };

    // Reset values when modal becomes visible
    useEffect(() => {
        if (visible) {
            setSelectedPaymentMethod('Type'); 
            setSelectedIcon(null); 
        }
    }, [visible]);

    const { colors } = useTheme(); return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}

        >
            <TouchableOpacity style={styles.modalOverlay} onPress={() => onClose()}>
                <View style={styles.modalContainer(colors)}>

                    <Text style={styles.modalTitle(colors)}>Merchant Category</Text>
                    {/* Dropdown for Payment Methods */}

                    <DropDownPicker
                        open={open}
                        value={selectedPaymentMethod}
                        items={items}
                        setOpen={setOpen}
                        setValue={handleDropdownChange}
                        setItems={setItems}

                        placeholder="Select an option"
                        theme="DARK"
                        containerStyle={{
                            width: 'auto',
                            borderColor: 'transparent',
                            zIndex: 1,
                        }}
                        style={{
                            backgroundColor: colors.tabBackgroundColor,
                            borderColor: 'transparent',
                            borderRadius: 16,
                            minHeight: rhp(65),
                            width: wp(90),
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 12,
                        }}
                        textStyle={{
                            color: colors.text,
                            fontSize: rfs(18),
                            fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: colors.tabBackgroundColor,
                            borderColor: 'transparent',
                            borderRadius: 10,
                            width: wp(90),
                        }}
                        placeholderStyle={{
                            fontSize: rfs(19),
                            color: '#F5F5F5'
                        }}
                        listItemContainerStyle={{
                            borderTopWidth: 0.5, // Add a bottom border to simulate a divider
                            borderTopColor: '#CCCCCC', // Color for the divider
                            paddingVertical: 10, // Add some spacing around items
                        }}

                    />

                    {/* Icon Selection */}


                    <View style={styles.iconSelection}>
                        <Text style={styles.iconTitle(colors)}>Select an icon:</Text>
                        {/* Jazzcash Icon */}
                        <TouchableOpacity
                            onPress={() => setSelectedIcon(images.jazzCashImage)}
                            style={[
                                styles.imgContainer,
                                selectedIcon === images.jazzCashImage ? styles.selectedBorder : {}
                            ]}
                        >
                            <Image source={images.jazzCashImage} style={styles.imgStyle} />
                        </TouchableOpacity>

                        {/* Easypaisa Icon */}
                        <TouchableOpacity
                            onPress={() => setSelectedIcon(images.easyPaisaImage)}
                            style={[
                                styles.imgContainer,
                                selectedIcon === images.easyPaisaImage ? styles.selectedBorder : {}
                            ]}
                        >
                            <Image source={images.easyPaisaImage} style={styles.imgStyle} />
                        </TouchableOpacity>

                        {/* Sadapay Icon */}
                        <TouchableOpacity
                            onPress={() => setSelectedIcon(images.sadaPayImage)}
                            style={[
                                styles.imgContainer,
                                selectedIcon === images.sadaPayImage ? styles.selectedBorder : {}
                            ]}
                        >
                            <Image source={images.sadaPayImage} style={styles.imgStyle} />
                        </TouchableOpacity>

                        {/* Nayapay Icon */}
                        <TouchableOpacity
                            onPress={() => setSelectedIcon(images.nayaPayImage)}
                            style={[
                                styles.imgContainer,
                                selectedIcon === images.nayaPayImage ? styles.selectedBorder : {}
                            ]}
                        >
                            <Image source={images.nayaPayImage} style={styles.imgStyle} />
                        </TouchableOpacity>
                    </View>



                    {/* Add Option Button */}
                    <GradientButton
                        buttonText={'Add Option'}
                        onPress={() => {
                            console.log({ selectedPaymentMethod, selectedIcon });
                            onAddOption({
                                selectedPaymentMethod,
                                selectedIcon: selectedIcon // Just pass the icon key
                            });
                            onClose(); // Close the modal after adding the option
                        }}
                        style={{ marginTop: rhp(25) }}
                    />

                </View>



            </TouchableOpacity>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //backgroundColor: 'red',
    },
    modalContainer: (colors) => ({
        width: wp(100),
        height: rwp(350),
        backgroundColor: colors.modalColor,
        padding: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center',

    }),
    modalTitle: (colors) => ({
        fontSize: rfs(20),
        marginBottom: rhp(20),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        color: colors.text,
    }),
    iconTitle: (colors) => ({
        fontSize: rfs(20),

        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        color: colors.text,

    }),


    iconSelection: {
        // backgroundColor:"red",
        marginTop: rhp(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(95),
        marginBottom: rhp(20),
    },
    addButton: {
        backgroundColor: '#53E88B',
        padding: 10,
        borderRadius: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    selectedBorder: {
        borderColor: 'lightgreen', // Gold color for selected border
        borderWidth: 2,
        borderRadius: 10,
    },

    imgContainer: {
        // padding: 5,
    },
    imgStyle: {
        resizeMode: 'contain',
        width: rwp(45),
        height: rhp(45)
    }
});

export default AddOptionModal;
