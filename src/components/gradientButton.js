import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimmensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure this package is installed
import fonts from '../constants/fonts';
import { rfs, rhp, rwp, hp, wp, height } from '../constants/dimensions';

const GradientButton = ({ onPress, buttonText, style }) => (
    <TouchableOpacity style={[styles.ctaStart, style]} onPress={onPress}>
        <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            // locations={[0.1, 0.5,0.9]}
            colors={['#53E88B', '#15BE77']}
            style={styles.linearGradient}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    ctaStart: {
        marginTop: rhp(40),
        width: rwp(165),
        height: rhp(65),
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: rfs(22),
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold, // Make sure the font is correctly linked
    },
    linearGradient: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 10,
        // width: '100%',
        height: hp(9),
    },
});

export default GradientButton;
