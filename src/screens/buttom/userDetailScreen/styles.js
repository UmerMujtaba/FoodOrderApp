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
       // marginTop: rhp(30),
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    imgBgStyle: {
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
        //marginLeft: 10
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
        marginTop: hp(4),
        marginLeft: wp(2),
        //textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    }),

    containerStyle: (colors) => ({
        height: rhp(155),
        backgroundColor: colors.tabBackgroundColor,
        borderRadius: 20,
        justifyContent: 'center'

    }),

    imgStyle: {
        height: rhp(100),
        alignSelf: 'center',
        resizeMode: 'contain'

    },
    descriptionImg: {
        height: rhp(47),
        width: rwp(320),
        resizeMode: 'contain'

    },
    body: {
        height: rhp(370),
        marginTop: rhp(12),
       // backgroundColor: 'red',
        justifyContent: 'center',
    },
    previewImage: {
        width: rwp(285), // Set desired width
        height: rhp(285), // Set desired height
        // marginTop: 20,
        borderRadius: 30,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
   
    crossIcon: {
        position: 'absolute',
        top: 20,
        right: 55,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 7,
    },
    crossImage: {
        width: 20,
        height: 20,
        tintColor: 'white', // Optional: for white cross icon
    },
})