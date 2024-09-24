import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';




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
        height: 'auto',
        width: 130,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#F4F4F4',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        textAlign: 'center',
        marginLeft: 10,
        fontFamily: 'SF Pro Text Medium', // Adjust fontFamily as needed
        color: 'black',
        fontSize: 16,
    },
});

export default SocialLoginTouchable;


