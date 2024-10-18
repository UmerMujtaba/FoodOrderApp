import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'

const RoundedContainer = ({ onPress, iconSource }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Image source={iconSource} style={styles.imgStyle} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'grey',
        justifyContent: "center",
        alignItems: 'center'
    },
    imgStyle: {
        width: 25,
        height: 25,
        resizeMode: 'contain'

    }

})
export default RoundedContainer