import {StyleSheet, Dimensions} from 'react-native';
import fonts from "../../../constants/fonts";
import { rhp,rwp,hp,wp,width,height, rfs } from '../../../constants/dimensions';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
       
     
    },
    illustrationImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: rwp(400),
        marginTop: rhp(5)
    },
    mainText: {
        fontSize: rfs(28),
        // fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        color: '#333333'
    },
    description: {
        fontSize: rfs(16),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
        textAlign: 'center',
        marginTop: rhp(25),
        // marginBottom: 50,
        color: '#333333'
    },
   
});