import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
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
    mainText: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        top: '35%'
    },
    body: {
        height: 280,
        width: 'auto',
        marginLeft: 18,
        marginRight: 18,
        marginTop: 15
    },
    optText: {
        alignSelf: 'center',
        color: '#000000',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: 16,
        marginBottom: 5,
        marginTop: 5
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        marginTop: 5
    },

    forgotPswrdText: {
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: 14,
        marginTop: 15,
        color: '#15BE77',
        marginBottom: 5,
        textDecorationLine: 'underline',
    },


});