import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    illustrationImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        
        width: 370
    },
    mainText: {
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        color: '#333333'
    },
    description: {
        fontSize: 14,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        textAlign: 'center',
        marginTop: 20,
        // marginBottom: 50,
        color: '#333333'
    },
    ctaStart: {
        marginTop: 10,
        width: 157,
        height: 57,

        justifyContent: 'center',
        alignSelf: 'center'

    },
    buttonText: {
        color: '#FFFFFF',
        //fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.inter.Regular,
    },
    linearGradient: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        height: '100%',
    },
});