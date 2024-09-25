import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';

const CustomTextInput = ({ placeholder, value, onChangeText, keyboardType, secureTextEntry, rightIcon, imageSource, suffixIconStyle, style }) => {
    const { colors, dark } = useTheme();
    return (
        <View style={[styles.container(colors), style]}>
            {rightIcon && (
                <Image
                    style={[styles.icon, { ...suffixIconStyle }]}
                    resizeMode="contain"
                    source={imageSource}
                />
            )}
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={dark ? '#FFFFFF' : '#3B3B3B'} // Adjust color based on theme
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={{ flex: 1, marginLeft: 5 }}
            //style={[styles.input, { backgroundColor: colors.tabBackgroundColor, borderColor: colors.tabBackgroundColor, color:colors.text }]}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: (colors) => ({
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 5,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: colors.tabBackgroundColor, borderColor: colors.tabBackgroundColor, color: colors.text,
        //paddingHorizontal: 16,
        height: 55,
        // width:"80%",
        paddingLeft: 10,
        //justifyContent: 'space-between',
        // alignItems: 'center',
        // marginBottom: 30
    }),
    icon: {


    }

});

export default CustomTextInput;
