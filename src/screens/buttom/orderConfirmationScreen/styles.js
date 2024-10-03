import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";


export default StyleSheet.create({
    container: (colors) => ({
        flex: 1,
        backgroundColor: colors.background,
    }),
    bgImage: {
        resizeMode: 'cover',
        width: 'auto',
        height: 350,
    },
    logoStyle:
    {
        // borderColor: 'lightgreen',
        height: 150,
        width: 150,
        // borderRadius: 75,
        // borderWidth: 4,
        alignSelf: 'center',
        zIndex: 2,
        top: '35%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
        fontSize: 28,
        color: colors.text,
        alignSelf: 'center',
        top: '45%'
    }),
    body: {
        // backgroundColor:'red',
        height: 285,
        width: 340,
        marginTop: '10%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    rateText: (colors) => ({
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: 18,
        color: colors.text,
        marginTop: 5,


    }),

    stars: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '7%',
        marginBottom: '10%'

    },
    starUnselected: {
        color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 340,
        height: 55,
        justifyContent: 'space-between',
        marginTop: 20

    },
    skipBtn: {
        backgroundColor: '#424242',
        width: '25%',
        marginTop: 0,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    skipBtnText: {
        color: 'lightgreen',
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        fontSize: 18

    }

})