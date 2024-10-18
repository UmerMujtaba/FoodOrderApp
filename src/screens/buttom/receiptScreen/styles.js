import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { height, hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export default styles = StyleSheet.create({
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
       // marginTop: rhp(30),
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
        fontSize: rfs(28),
        marginBottom: rhp(5),
        marginTop: hp(5),
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    }),
    greeting: (colors) => ({
        fontSize: rfs(24),
        marginTop: rhp(20),

        marginBottom: rhp(20),
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
    }),
    dottedContainer: (colors) => ({
       //height: rhp(300),
       // backgroundColor: 'grey',
        width: wp(80),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.text,
        borderStyle: 'dotted',
        paddingVertical: rhp(10),
    }),
    receiptText: (colors) => ({
        fontSize: rfs(18),
        marginTop: rhp(20),
        marginBottom: rhp(10),
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    }),
    timeNdDateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: rhp(10),
        paddingHorizontal: rwp(10)
    },
    time: (colors) => ({
        fontSize: rfs(16),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    }),


    dottedLine: (colors) => ({
        borderBottomWidth: 1,
        borderColor: colors.text,
        borderStyle: 'dotted',
        width: wp(73), // Adjust width as needed,
        paddingHorizontal: rwp(10),
        alignSelf: 'center',
        marginVertical: rhp(5), // Adjust margin as needed
    }),
    cartItemsContainer: {
        paddingHorizontal: rwp(10),
    },
    cartItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cartItemHeading: (colors) => ({
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(18)
    }),
    cartItemText: (colors) => ({
        marginLeft: rwp(15),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        fontSize: rfs(16)
    }),
    noItemsText: (colors) => ({
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    }),
    totalContainer: {
        marginVertical: 10,
        paddingHorizontal: rwp(10),
    },

    totalText: (colors) => ({
        fontSize: 16,
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    }),
    addOnHeading: (colors) => ({
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(18)
    }),
    addOnName: (colors) => ({
        marginLeft: rwp(15),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        fontSize: rfs(16)
    }),
    estimatedTime: (colors) => ({
        marginTop: rhp(10),
        paddingHorizontal: rwp(25),
        fontSize: rfs(18),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
    }),
    usernameText:(colors) => ({
        fontSize: rfs(20),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    }),
    driverText: (colors)=>({
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        fontSize: rfs(14),
        marginTop: rhp(5)
    }),
    //  modalOverlay: {
    //     flex: 1,
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // modalContainer: {
    //     width: wp(90),  // Modal container width
    //     backgroundColor: 'white', 
    //     borderRadius: 20,
    //     padding: 20,
    //     alignItems: 'center',
    // }
    
});

