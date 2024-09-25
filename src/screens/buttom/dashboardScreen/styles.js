import { StyleSheet, Dimensions } from "react-native";
import fonts from "../../../constants/fonts";
const { width } = Dimensions.get('window'); // Get screen width
const itemWidth = (width - 30) / 2; // Calculate width for each item (2 columns with 15px margin)

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    advertiseBg: {
        resizeMode: 'contain',
        width: 'auto',
        height: 150,
        marginTop: 10,
    },
    containerRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        marginTop:10,
        //backgroundColor:'red',
        
    },
    itemImageStyle: {
        width: itemWidth,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom: 15,
        height: 184,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        justifyContent: 'center',
    },
    itemImage: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    itemName: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        // The text color will be dynamically set in the component using theme colors
    },
});
