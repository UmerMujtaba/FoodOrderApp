import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 10
    },
    backContainer: {
        backgroundColor: '#FFE0B5',
        height: 45,
        width: 45,
        justifyContent: 'center',
        borderRadius: 16
    },
    backImage: {
        resizeMode: 'contain',
        height: 16.36,
        width: 10,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 10,


    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 18,
        color: 'black',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium
    },
    itemPrice: {
        fontSize: 24
        ,
        color: '#15BE77',
        //fontWeight: 'bold',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 8,
        textAlign: 'center', // Center the text
    },
    button2: {
        fontSize: 18,
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
        padding: 10,
        paddingTop: 2,
        paddingBottom: 2,
    },
    gradientButton2: {
        borderRadius: 8,
        padding: 10,
        paddingTop: 2,
        paddingBottom: 2,
        opacity: 0.8
    },
    quantity: {
        marginHorizontal: 15,
        fontSize: 18,
        color: 'black',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
    },

   
    cardGradient: {
        borderRadius: 16,
        width: 346,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },

    bgImageStyle: {
        resizeMode: 'contain',
        height: 206,
        width: 346,
        alignSelf: 'center',
    },
    cardContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginRight: 5,
        width: 346,
        height: 306
    },
    cardContainerCol: {
        flexDirection: 'column',
        padding: 10
    },
    headingText: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: 20,
        color: 'black',
        marginTop: 5
    },
    priceText: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: 22,
        color: 'black',
        marginTop: 15
    },
    ctaBtn: {
        backgroundColor: 'white',
        height: 55,
        width: 325,
        borderRadius: 16,
        position: 'absolute',
        zIndex: 2,
        bottom: 5,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },

    OrderText: {
        fontSize: 22
        ,
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
        height: 100,
        width: 300
    },
    deleteButton: {
        flexDirection: 'row',
        // alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 45,
    },
    crossIcon: {
        width: 30,
        height: 30,
        //marginRight: 10,
        // marginRight:40,
        color: 'white'
    },

    total: {
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: 24,
        color: 'black',
        marginTop: 40,
    },
    emptyMessage: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: 'black',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        height: '30%',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        textAlign: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'row',

    },
    modalButton: {
        //backgroundColor: '#15BE77',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,

    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    },


});