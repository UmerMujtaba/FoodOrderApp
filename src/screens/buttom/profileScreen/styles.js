import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
   
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1
    },
    avatar:(colors)=> ({
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: '15%',
        borderRadius: 50,
        borderColor: colors.tabBackgroundColor,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    name: (colors) => ({
        fontSize: 20,
        fontFamily:fonts.SF_PRO_TEXT.Spectral.Medium,
        alignSelf: 'center',
        color: colors.text,
        marginTop: 10,
        
    }),
    imgStyle: {
        width: 90,
        height: 85,
        resizeMode: 'contain',
        
    },
    body: {
        height: 400,
        width: 310,
        //backgroundColor:'red',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10
    },

})