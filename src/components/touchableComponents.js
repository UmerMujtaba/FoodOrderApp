import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const SocialLoginTouchable = ({ onPress, imageSource, text }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.content}>
                <Image source={imageSource} resizeMode='contain' style={styles.image} />
                <Text style={styles.text}>{text}</Text>
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
        marginLeft: 5,
        fontFamily: 'SF Pro Text Medium', // Adjust fontFamily as needed
        color: 'black',
        fontSize: 16,
    },
});

export default SocialLoginTouchable;


