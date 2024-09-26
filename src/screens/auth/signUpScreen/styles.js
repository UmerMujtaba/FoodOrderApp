import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";



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
    mainText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: 24,
        color: colors.text,
        alignSelf: 'center',
        top: '28%',

    }),
    body: {
        height: 450,
        width: 'auto',
        //backgroundColor:'red',
        marginLeft: 18,
        marginRight: 18,
        //  marginTop: 8
    },
    forgotPswrdText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: 14,
        marginTop: 12,
        marginBottom: 5,
        color: '#15BE77',
        marginBottom: 5,
       // textDecorationLine: 'underline',
    },

});