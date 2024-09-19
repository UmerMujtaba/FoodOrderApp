import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, value, onChangeText, keyboardType }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor='#3B3B3B'
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#3B3B3B',
        height: 55,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 10,
    },
});

export default CustomTextInput;
