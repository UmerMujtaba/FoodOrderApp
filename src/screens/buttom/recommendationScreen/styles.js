import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export const styles = StyleSheet.create({
        container: {
            flex: 1,

            paddingHorizontal: rwp(10),
            paddingVertical: rhp(10),
            marginLeft: rwp(5),
            marginRight: rwp(5),
        },
        appBar: {
            // backgroundColor:'red',
            height: rhp(70),
            width: wp(90),
            // marginTop: rhp(30),
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        imgStyle: {
            width: width,
            height: rhp(250),
            resizeMode: 'cover'
        },
        backIconContainer: (colors) => ({
            backgroundColor: colors.backContainer,
            height: rhp(55),
            width: rwp(50),
            justifyContent: 'center',
            borderRadius: 16,
            marginTop: hp(5),
            //marginLeft: 10
        }),
        backImage: {
            resizeMode: 'contain',
            height: rhp(18.36),
            width: rwp(14),
            alignSelf: 'center',
        },
        title: (colors) => ({
            fontSize: rfs(28),
            marginBottom: rhp(20),
            textAlign: 'center',
            color: colors.text,
            marginTop: hp(5),
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
            marginBottom: rhp(25),
            backgroundColor: colors.tabBackgroundColor,
            paddingHorizontal: rwp(15),
            paddingVertical: rhp(15),
            borderRadius: 10,
            elevation: 3,
        }),
        image: {
            width: rwp(100),
            height: rhp(130),
            resizeMode: 'cover',
            borderRadius: 10,
        },
        textContainer: {
            marginLeft: rwp(15),
            flex: 1,
        },
        itemName: (colors) => ({
            fontSize: rfs(20),
            color: colors.text,
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold
        }),
        description: (colors) => ({
            fontSize: rfs(16),
            color: colors.text,
            marginTop: rhp(6),
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
            lineHeight: 20,
        }),
        price: (colors) => ({
            fontSize: rfs(20),
            color: colors.text,
            // marginTop: rhp(10),
            fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,

        }),
        noDataStyle:(colors)=> ({
            textAlign: 'center',
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
            fontSize: rfs(16),
            color: colors.text
        }),

    })