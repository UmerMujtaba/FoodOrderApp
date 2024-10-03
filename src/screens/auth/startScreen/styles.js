import {StyleSheet, Dimensions} from 'react-native';
import fonts from "../../../constants/fonts";
import {hp, rfs, rhp, rwp, width, wp} from '../../../constants/dimensions';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    illustrationImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: rhp(5),
        width: rwp(400),
    },
    mainText: {
        fontSize: rfs(28),
        // fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        color: '#333333'
    },
    description: {
        fontSize: rfs(18),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        textAlign: 'center',
        marginTop: rhp(20),
        // marginBottom: 50,
        color: '#333333'
    },
   
});