import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { height, hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export default StyleSheet.create({
    // Modal specific styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: (colors) => ({
        // width: wp(100),  // Modal container width
        backgroundColor: colors.modalColor,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // alignItems: 'center',
        height: hp(90)
    }),
    bgImage: {
        resizeMode:"contain",
        width: wp(100),

        height: rhp(380),
    },
    logoStyle:
    {
        height: rhp(170),
        width: rwp(180),
        alignSelf: 'center',
        zIndex: 2,
        top: hp(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(32),
        color: colors.text,
        alignSelf: 'center',
        top: hp(15),
    }),
    body: {
        width: rwp(360),
        marginTop: hp(5),
        alignSelf: 'center',
        alignItems: 'center',
    },
    rateText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: rfs(20),
        color: colors.text,
        marginTop: rhp(5),
    }),
    buttonContainer: {
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
    },

});
