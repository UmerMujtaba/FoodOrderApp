import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: rwp(20),
        paddingVertical: rhp(15),
        flex: 1
    },
    avatar: (colors) => ({

        borderRadius: 50,
        marginTop: hp(5),
        width: rwp(110),
        height: rhp(110),

        justifyContent: 'center',
        alignItems: 'center'
    }),
    name: (colors) => ({
        fontSize: rfs(24),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        alignSelf: 'center',
        color: colors.text,
        marginTop: rhp(10),

    }),
    imgStyle: {
        width: rwp(110),
        height: rhp(110),
        resizeMode: 'cover',
        borderRadius: 55,
    },
    body: {
        height: 400,
        width: rwp(330),
        //backgroundColor:'red',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10
    },

})