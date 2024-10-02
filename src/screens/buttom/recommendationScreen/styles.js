import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            marginLeft:5,
            marginRight:5,
        },
        backIconContainer: (colors) => ({
            backgroundColor: colors.backContainer,
            height: 45,
            width: 45,
            justifyContent: 'center',
            borderRadius: 16,
            marginTop: 30,
            //marginLeft: 10
        }),
        backImage: {
            resizeMode: 'contain',
            height: 16.36,
            width: 10,
            alignSelf: 'center',
        },
        title: (colors) => ({
            fontSize: 24,
            marginBottom: 15,
            textAlign: 'center',
            color: colors.text,
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

        }),
        loaderContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        tile: (colors) => ({
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            backgroundColor: colors.tabBackgroundColor,
            padding: 14,
            borderRadius: 10,
            elevation: 3,
        }),
        image: {
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
        },
        textContainer: {
            marginLeft: 16,
            flex: 1,
        },
        itemName: (colors) => ({
            fontSize: 18,
            color: colors.text,
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold
        }),
        description: (colors) => ({
            fontSize: 16,
            color: colors.text,
            marginTop: 4,
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
            lineHeight: 20,
        }),
        price: (colors) => ({
            fontSize: 18,
            color: colors.text,
            marginTop: 8,
            fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,

        }),

    })