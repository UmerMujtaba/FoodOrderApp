import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';

const SearchField = ({ placeholder = 'What do you want to order?', value, onChangeText, keyboardType, imageSource, style, ...props }) => {
    return (
        <View style={[styles.container, style]}>
            {imageSource && (
                <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={imageSource}
                />
            )}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='#DA6317'
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                style={styles.input}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        height: 50,
        width:250,
        backgroundColor: '#FFCC80',
     marginLeft: 10,
        paddingHorizontal: 10, // Adjusted padding to add space for the icon
    },
    icon: {
        width: 24, // Adjust icon size as needed
        height: 24, // Adjust icon size as needed
        marginRight: 10, // Space between icon and text input
    },
    input: {
        flex: 1,
        color: '#3B3B3B',
    },
});

export default SearchField;
