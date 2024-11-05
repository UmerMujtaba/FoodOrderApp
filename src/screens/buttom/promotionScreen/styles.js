import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
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
    promotionImage: {
        resizeMode: 'contain',
        width: wp(91),
        height: hp(20)
    }
})