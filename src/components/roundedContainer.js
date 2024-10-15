import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '../assets/images'

const RoundedContainer = ({ onPress, iconSource }) => {
    return (
        <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'grey', justifyContent: "center", alignItems: 'center' }} onPress={onPress}>
            <Image source={iconSource} resizeMode='contain' style={{ width: 25, height: 25, }} />
        </TouchableOpacity>
    )
}
export default RoundedContainer