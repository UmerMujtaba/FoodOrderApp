import { StyleSheet,Dimmensions } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";




export default StyleSheet.create({
    container: (colors) => ({
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.background,
    }),
    bgImage: {
        resizeMode: 'cover',
        width: 'auto',
        height: rhp(370),
       // backgroundColor:'green'
    },


    logoStyle:
    {
        resizeMode: 'contain',
        height: rhp(210),
        width: rhp(200),
        alignSelf: 'center',
        zIndex: 2,
        top: hp(8),

    },
    mainText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: rfs(28),
        color: colors.text,
        alignSelf: 'center',
        top: hp(10),

    }),
    body: {
        //height: rhp(470),
        width: wp(90),
       // backgroundColor:'red',
        marginLeft: rwp(20),
        marginRight: rwp(20),
        //  marginTop: 8
    },
    HaveAnAccText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: rfs(16),
        marginTop: rhp(12),
        marginBottom: rhp(10),
        color: '#15BE77',
       
       // textDecorationLine: 'underline',
    },

});