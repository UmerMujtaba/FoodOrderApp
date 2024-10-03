import { StyleSheet, Dimensions } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";
itemWidth = (width - 30) / 2;


export default StyleSheet.create({
    container: {
        flex: 1,
    },
    advertiseBg: {
        resizeMode: 'contain',
        width: wp(100),
        height: rhp(180),
        marginTop: rhp(15),
    },
    containerRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      
        paddingHorizontal:rwp(10),
        paddingVertical:rhp(15),
        marginTop: rhp(10),
        //backgroundColor:'red',

    },
    itemImageStyle: {
        width: itemWidth,
        borderRadius: 12,
        // padding: 10,
        alignItems: 'center',
        marginBottom: rhp(15),
        height: rhp(210),

        elevation: 5,
        justifyContent: 'center',
    },
    itemImage: {
        width: rwp(100),
        height: rhp(100),
        resizeMode: 'contain',

    },
    itemName: {
        marginTop: rhp(10),
        fontSize: rfs(22),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        // The text color will be dynamically set in the component using theme colors
    },
});
