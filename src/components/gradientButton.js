import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimmensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure this package is installed
import fonts from '../constants/fonts';
import { rfs, rhp, rwp, hp, wp, height } from '../constants/dimensions';

const GradientButton = ({ onPress, buttonText, style }) => (
    <TouchableOpacity style={[styles.ctaStart, style]} onPress={onPress}>
        <LinearGradient
            start={{ x: 0.1, y: 0.3 }}  // Adjusted for the 241-degree angle
            end={{ x: 1, y: 1 }}       // Adjusted direction for the gradient
            colors={['#53E88B', '#15BE77']}
            style={styles.linearGradient}
        >
            {/* Your content here */}
            <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>

    </TouchableOpacity>
);

const styles = StyleSheet.create({
    ctaStart: {
        marginTop: rhp(40),
        width: wp(88),
        // height: rhp(20),
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
        height: rhp(60),
    },
});

export default GradientButton;

