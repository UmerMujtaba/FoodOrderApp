import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: rwp(10),
            paddingVertical: rhp(10),
            marginLeft: rwp(5),
            marginRight: rwp(5),
        },
        appBar: {
            height: rhp(70),
            width: wp(90),
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
        optMainContainer: {
            width: wp(90),
            alignSelf: 'center',
            marginTop: rhp(35),

        },
        optContainer: (colors) => ({
            backgroundColor: colors.tabBackgroundColor,
            height: rhp(65),
            marginBottom: rhp(15),
            borderRadius: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: rwp(15)
        }),

        optText: (colors) => ({
            fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
            fontSize: rfs(19),
            color: colors.text,
        }),
        optImage: {
            resizeMode: 'contain',
            height: rhp(33),
            width: rwp(33)

        },
        imgStyle2:{
            resizeMode:'contain',
            width:40,
            height:40
        }
    });