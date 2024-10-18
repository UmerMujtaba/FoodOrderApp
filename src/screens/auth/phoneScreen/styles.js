import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
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
        fontSize: rfs(25),
        //marginBottom: rhp(10),
        marginTop: hp(6),
        marginLeft: wp(2),
        //textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,

    }),

    body: {
        // height: rhp(370),
        // marginTop: hp(10),
        // flex: 1,
        alignSelf: "center",
        //backgroundColor: 'red',
        justifyContent: 'center',
    },
    descriptionText: (colors) => ({
        color: colors.text,
        fontSize: rfs(17),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        paddingHorizontal: rwp(10),
        textAlign: 'center',
        marginTop: rhp(19)

    }),
    codeFieldRoot: {
        marginTop: hp(10),
        marginHorizontal: rwp(5)
    },
    cell: (colors) => ({

        //alignSelf: "center",
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: colors.tabBackgroundColor,
        borderBottomWidth: 0,
        width: rwp(49),
        height: rhp(50),//IS_IPHONE_X ? rwp(45) : IS_IPHONE ? rwp(45) : rwp(48),

    }),
    cellText: (colors) => ({

        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: rfs(28),
        textAlign: 'center',
        paddingTop: rwp(5),
    }),
    resendOtpText:{
       // textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        fontSize: rfs(18),
        marginTop: rhp(15),
        textAlign:'right',
        color: '#15BE77',
        marginBottom: rhp(5),
    }

})