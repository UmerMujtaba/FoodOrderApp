import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { height, hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: rwp(10),
        paddingVertical: rhp(10),
        marginLeft: rwp(5),
        marginRight: rwp(5),

    },
    backIconContainer: (colors) => ({
        backgroundColor: colors.backContainer,
        height: rhp(55),
        width: rwp(50),
        justifyContent: 'center',
        borderRadius: 16,
        marginTop: rhp(40),
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
        marginBottom: rhp(20),
        textAlign: 'center',
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    }),
    itemContainer: (colors) => ({
        flexDirection: 'row',
        paddingHorizontal: rwp(12),
        paddingVertical: rhp(12),
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: rhp(10),
        backgroundColor: colors.tabBackgroundColor

    }),
    itemImage: (isExpanded) => ({
        borderRadius: 8,
        alignSelf: 'center',
        height: isExpanded ? rhp(140) : rhp(120), 
        width: isExpanded ? rwp(110) : rwp(90)

    }),
    detailsContainer: {
        flex: 1,
        marginLeft: rhp(10),
        //height:90,
        justifyContent: 'center',
        //backgroundColor:'red'
    },
    itemName: (colors, isExpanded) => ({
        fontSize: rfs(24),
        // color: 'black',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        // marginTop:5,
        // backgroundColor:'green'
        //marginTop:5
        color: colors.text,
        marginTop: isExpanded ? rhp(70) : rhp(40)
    }),
    itemDescription: (colors) => ({
        fontSize: rfs(16),
        // color: 'grey',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        color: colors.text
        //backgroundColor:'blue'
    }),
    addOnHeading: (colors) => ({
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(16)
    }),
    addOnName: (colors) => ({
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        fontSize: rfs(16)
    }),
    addOnsContainer: {
        marginTop: rhp(5),
        paddingBottom: rhp(5),
        //backgroundColor:'pink'
    },

    displayMsg: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    itemPrice: {
        fontSize: rfs(24),
        color: '#15BE77',
        //fontWeight: 'bold',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        //backgroundColor:'teal'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        fontSize: rfs(20),
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 8,
        textAlign: 'center', // Center the text
    },
    button2: {
        fontSize: rfs(20),
        fontWeight: 'bold',
        color: '#185519',
        borderRadius: 8,
        textAlign: 'center', // Center the text

    },
    disabledButton: {
        opacity: 0.6,
    },
    gradientButton: {
        borderRadius: 8,
    
        paddingHorizontal:rwp(8),
        paddingVertical:rhp(8),
        paddingTop: rhp(2),
        paddingBottom: rhp(2),
    },
    gradientButton2: {
        borderRadius: 8,
        paddingHorizontal:rwp(8),
        paddingVertical:rhp(8),
        paddingTop: rhp(2),
        paddingBottom: rhp(2),
        opacity: 0.8
    },
    quantity: (colors) => ({
        marginHorizontal: rwp(15),
        fontSize: rfs(20),
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
    }),


    cardGradient: {
        borderRadius: 16,
        width: rwp(380),
        alignSelf: 'center',
        // position: 'absolute',
        //bottom: 0,
        // height:300
    },

    bgImageStyle: {
        resizeMode: 'contain',
        height: rhp(186),
        width: rwp(370),
        marginRight: rwp(2),
        alignSelf: 'center',
    },
    cardContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: rwp(5),
        marginRight: rwp(5),
        width: rwp(370),
        // height: 2
    },
    cardContainerCol: {
        flexDirection: 'column',
        paddingHorizontal:rwp(10),
        paddingVertical:rhp(10),
    },
    headingText: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: rfs(24),
        color: 'black',
        marginTop: rhp(5)
    },
    priceText: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(26),
        color: 'black',
        marginTop: rhp(15)
    },
    ctaBtn: (colors) => ({

        height: rhp(50),
        width: rwp(355),
        borderRadius: 16,
        marginBottom: rhp(5),
        //position: 'absolute',
        //zIndex: 2,
        bottom: rhp(5),
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.tabBackgroundColor,
    }),

    OrderText: {
        fontSize: rfs(26),
        color: '#15BE77',
        //fontWeight: 'bold',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        alignSelf: 'center',

    },



    hiddenItem: {
        //alignItems: 'flex-end',
        backgroundColor: '#FB8C00',
        //width:350,
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'flex-end',

        borderRadius: 16,
        height: rhp(210),
        width: rwp(350)
    },
    deleteButton: {
        flexDirection: 'row',
        // alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: rwp(45),
    },
    deleteImg: {
        width: rwp(30),
        height: rhp(30),
        //marginRight: 10,
        // marginRight:40,
        color: 'white'
    },

    total: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: rfs(26),
        color: 'black',
        marginTop: rhp(50),
    },
    emptyMessage: (colors) => ({
        fontSize: rfs(24),
        textAlign: 'center',

        // marginTop: 20,
        color: colors.text,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,

    }),
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: (colors) => ({
        width: wp(95),
        borderRadius: 16,
        paddingHorizontal:rwp(20),
        paddingVertical:rhp(20),
        height: hp(25),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.tabBackgroundColor
    }),
    modalText: (colors) => ({
        fontSize: rfs(20),
        color: colors.text,
        marginBottom: rhp(20),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        textAlign: 'center',
    }),
    modalButtonContainer: {
        flexDirection: 'row',

    },
    modalButton: {
        //backgroundColor: '#15BE77',
        paddingHorizontal:rwp(15),
        paddingVertical:rhp(15),
        borderRadius: 5,
        marginHorizontal: rwp(10),

    },
    modalButtonText: {
        color: 'black',
        fontSize: rfs(20),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    },


});