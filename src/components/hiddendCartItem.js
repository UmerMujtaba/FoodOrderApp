import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '../assets/images';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';


const HiddenCartItem = ({ item, handleRemoveItem, scheme, images }) => {


    return (
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveItem(item.id)}>
            <Image source={scheme === 'dark' ? images.deleteIconWhite : images.deleteIconBlack} style={styles.deleteImg} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    deleteButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'flex-end',
        //backgroundColor: 'red'
    },

    deleteImg: {
        width: rwp(30),
        height: rhp(30),
        color: 'white',
        marginRight: rwp(32)
    },
})
export default HiddenCartItem;
