import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, value, onChangeText, keyboardType }) => {
    const { colors, dark } = useTheme();
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={dark ? '#FFFFFF' : '#3B3B3B'} // Adjust color based on theme
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            style={[styles.input, { backgroundColor: colors.tabBackgroundColor, borderColor: colors.tabBackgroundColor, color:colors.text }]}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#3B3B3B',
        height: 55,
        // borderColor: '#F4F4F4',
        borderWidth: 1,
        paddingLeft: 20,
        //backgroundColor: colors.,
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
    },
});

export default CustomTextInput;
