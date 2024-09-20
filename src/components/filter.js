import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SearchField from './searchFields'
import { images } from '../assets/images'

const FilterComponent = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <SearchField imageSource={images.searchIcon} />
            <TouchableOpacity style={{
                backgroundColor: '#F9A84D',
                height: 49,
                width: 50,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={images.filterIcon} resizeMode='contain' style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
        </View>
    )
}

export default FilterComponent