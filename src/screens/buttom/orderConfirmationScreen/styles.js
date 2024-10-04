import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { height, hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export default StyleSheet.create({
    container: (colors) => ({
        flex: 1,
        backgroundColor: colors.background,
    }),
    bgImage: {
        resizeMode: 'cover',
        width: 'auto',
        height: rhp(400),
    },
    logoStyle:
    {
        // borderColor: 'lightgreen',
        height: rhp(170),
        width: rwp(180),
        // borderRadius: 75,
        // borderWidth: 4,
        alignSelf: 'center',
        zIndex: 2,
        top: hp(15),
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(32),
        color: colors.text,
        alignSelf: 'center',
        top: hp(22)
    }),
    body: {
        // backgroundColor:'red',
        // height: rhp(290),
        width: rwp(360),
        marginTop: hp(5),
        alignSelf: 'center',
        alignItems: 'center'
    },
    rateText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: rfs(20),
        color: colors.text,
        marginTop: rhp(5),


    }),

   
    buttonContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        width: wp(95),
        justifyContent: 'space-around',
        marginTop: rhp(20),
    },
    skipBtn: {
        backgroundColor: '#424242',
        width: rwp(95),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: rhp(75),

    },
    skipBtnText: {
        color: 'lightgreen',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(20),


    }

})