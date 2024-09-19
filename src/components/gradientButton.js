import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Ensure this package is installed

const GradientButton = ({ onPress, buttonText }) => (
    <TouchableOpacity style={styles.ctaStart} onPress={onPress}>
        <LinearGradient
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            locations={[0.2, 0.7]}
            colors={['#53E88B', '#15BE77']}
            style={styles.linearGradient}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    ctaStart: {
        marginTop: 20,
        width: 157,
        height: 57,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'SF_PRO_TEXT_inter_Regular', // Make sure the font is correctly linked
    },
    linearGradient: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        height: '100%',
    },
});

export default GradientButton;
