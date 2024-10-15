import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { height, hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: rwp(10),
        paddingVertical: rhp(10),
        marginLeft: rwp(5),
        marginRight: rwp(5),

    },
    appBar: {
        // backgroundColor:'red',
        height: rhp(70),
        width: wp(90),
        marginTop: 30,
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
        //marginTop: hp(1),
       // marginLeft: wp(2),
        borderRadius: 16,
    }),
    backImage: {
        resizeMode: 'contain',
        height: rhp(18.36),
        width: rwp(14),
        alignSelf: 'center',
    },
    deleteImg: {
        resizeMode: 'contain',
        height: rhp(25),
        width: rwp(25),
        alignSelf: 'center',
       // color:'#2596be'
    },
    title: (colors) => ({
        fontSize: rfs(28),
        marginBottom: rhp(20),
        marginTop: hp(1),
        marginLeft: wp(2),
        //textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    }),
    displayMsg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    emptyMessage: (colors) => ({
        fontSize: rfs(24),
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,

    }),
});