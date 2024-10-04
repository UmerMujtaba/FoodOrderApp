import { useTheme } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
import { rhp, rwp } from '../constants/dimensions';

const CustomTextInput = forwardRef(({
    placeholder,
    value,
    onChangeText,
    keyboardType,
    secureTextEntry,
    rightIcon,
    imageSource,
    suffixIconStyle,
    style,
    showSoftInputOnFocus,
    autoFocus,
    returnKeyType,
    blurOnSubmit,
    autoCorrect,
    onSubmitEditing
}, ref) => {
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
                ref={ref}
                placeholder={placeholder}
                placeholderTextColor={dark ? '#FFFFFF' : '#3B3B3B'} // Adjust color based on theme
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                style={{ flex: 1, marginLeft: 5 }}
                showSoftInputOnFocus={showSoftInputOnFocus}
                autoFocus={autoFocus}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                blurOnSubmit={blurOnSubmit}
                autoCorrect={autoCorrect}
            //style={[styles.input, { backgroundColor: colors.tabBackgroundColor, borderColor: colors.tabBackgroundColor, color:colors.text }]}
            />

        </View>
    );
});

const styles = StyleSheet.create({
    container: (colors) => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: rhp(5),
        marginBottom: rhp(12),
        borderRadius: 15,
        backgroundColor: colors.tabBackgroundColor,
        borderColor: colors.tabBackgroundColor,
        color: colors.text,
        height: rhp(60),
        paddingLeft: rwp(10),
    }),


});

export default CustomTextInput;
