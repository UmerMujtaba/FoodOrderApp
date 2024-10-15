import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";


export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: rwp(10),
        flex: 1,
        paddingVertical: rhp(10),
        marginLeft: rwp(5),
        marginRight: rwp(5),
    },
    appBar: {
        // backgroundColor:'red',
        height: rhp(70),
        width: wp(90),
        marginTop: rhp(30),
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
        marginTop: hp(2),
        marginLeft: wp(2),
        borderRadius: 16,
    }),
    backImage: {
        resizeMode: 'contain',
        height: rhp(18.36),
        width: rwp(14),
        alignSelf: 'center',
    },
    title: (colors) => ({
        fontSize: rfs(32),
        marginBottom: rhp(10),
        marginTop: hp(1),
        marginLeft: wp(2),
        //textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    }),

    containerStyle: (colors) => ({ 
        height: 150,
         backgroundColor: colors.tabBackgroundColor, 
        borderRadius: 20, 
        justifyContent: 'center' 

    }),

    imgStyle: { 
        height: 100, 
        alignSelf: 'center', 
        resizeMode: 'contain' 

    },
    descriptionImg: { 
        height: 45, 
        width: 320, 
        resizeMode: 'contain' 

    },
    body: { 
        height: 350, 
        padding: 10, 
        marginTop: 10 

    },
    previewImage: {
        width: 120, // Set desired width
        height: 120, // Set desired height
       // marginTop: 20,
        borderRadius: 60,
        alignSelf:'center',
    },
})