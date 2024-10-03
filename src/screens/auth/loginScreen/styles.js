import { StyleSheet,Dimmensions } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";



export default StyleSheet.create({
    container:(colors) => ({
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.background,
    }),
    bgImage: {
        resizeMode: 'cover',
        width: wp(100),
        height: rhp(400),
    },


    logoStyle:
    {
        resizeMode: 'contain',
        height: rhp(220),
        width: rwp(210),
        alignSelf: 'center',
        zIndex: 2,
        top: rhp(100),

    },
    mainText:(colors)=> ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: rfs(28),
        color: colors.text,
        alignSelf: 'center',
        top: rhp(145)

    }),
    body: {
        //backgroundColor:'red',
        height: hp(42),
        width:  wp(90),
        marginLeft: rwp(20),
        marginRight: rwp(20),
        marginTop: rhp(15)
    },
    optText:(colors)=>( {
        alignSelf: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(20),
        marginBottom: rhp(5),
        marginTop: rhp(5)
    }),
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: rhp(70),
        marginTop: rhp(12)
    },

    forgotPswrdText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: rfs(16),
        marginTop: rhp(10),
        marginBottom:5,
        color: '#15BE77',
        marginBottom: rhp(5),
       // textDecorationLine: 'underline',
    },


});