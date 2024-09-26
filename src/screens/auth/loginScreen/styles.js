import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";



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
        width: 'auto',
        height: 350,
    },


    logoStyle:
    {
        resizeMode: 'contain',
        height: 200,
        width: 200,
        alignSelf: 'center',
        zIndex: 2,
        top: '25%',

    },
    mainText:(colors)=> ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: 24,
        color: colors.text,
        alignSelf: 'center',
        top: '35%'
    }),
    body: {
        height: 280,
        width: 'auto',
        marginLeft: 18,
        marginRight: 18,
        marginTop: 15
    },
    optText:(colors)=>( {
        alignSelf: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15
    }),
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        marginTop: 15
    },

    forgotPswrdText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: 14,
        marginTop: 10,
        marginBottom:5,
        color: '#15BE77',
        marginBottom: 5,
        textDecorationLine: 'underline',
    },


});