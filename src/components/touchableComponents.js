import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';




const SocialLoginTouchable = ({ onPress, imageSource, text }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[styles.container,{backgroundColor:colors.tabBackgroundColor,borderColor:colors.tabBackgroundColor}]}
            onPress={onPress}
        >
            <View style={styles.content}>
                <Image source={imageSource} resizeMode='contain' style={styles.image} />
                <Text style={[styles.text,{color:colors.text}]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: hp(8),
        width: rwp(140),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F4F4F4',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: rwp(30),
        height: rhp(30),
    },
    text: {
        textAlign: 'center',
        marginLeft: rwp(10),
        fontFamily: 'SF Pro Text Medium', // Adjust fontFamily as needed
        color: 'black',
        fontSize: rfs(18),
    },
});

export default SocialLoginTouchable;


