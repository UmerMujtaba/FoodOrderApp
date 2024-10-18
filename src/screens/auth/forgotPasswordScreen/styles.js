import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";


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
        //marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    appBarContainer: { 
        height: 50, 
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight: 30 
        
    },
    imgStyle: {
        width: width,
        height: rhp(250),
        resizeMode: 'cover',

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
        fontSize: rfs(30),
        marginBottom: rhp(20),
        //textAlign: 'center',
        color: colors.text,
        marginTop: hp(5),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    }),
    body: { 
        justifyContent: 'center', 
        flex: 1
    },
    subtitleImage: {
        height: rhp(50), 
        width: wp(70), 
        resizeMode: 'contain' 
        
    },
})