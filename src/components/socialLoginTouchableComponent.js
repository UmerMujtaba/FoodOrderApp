import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import fonts from '../constants/fonts';




const SocialLoginTouchable = ({ onPress, imageSource, text }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: colors.tabBackgroundColor, borderColor: colors.tabBackgroundColor }]}
            onPress={onPress}
        >
            <View style={styles.content}>
                <Image source={imageSource} resizeMode='contain' style={styles.image} />
                <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        height: hp(7.5),
        paddingHorizontal: rhp(15),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

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
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: rfs(18),
    },
});

export default SocialLoginTouchable;


