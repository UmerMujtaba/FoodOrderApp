import { useTheme } from '@react-navigation/native';
import React,{forwardRef} from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';

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
