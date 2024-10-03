import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import fonts from '../constants/fonts'
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions'

const ModalAppBar = () => {
    return (
        <View style={styles.containerRow}>
            <View style={styles.textContainer}>
                <Image source={images.popularContainer}style={{width:76, height:34}} resizeMode='contain'/>
                <Text style={[styles.popularText, styles.popText, { alignSelf: "center" }]}>Popular</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.containerRow2}>
                    <View style={styles.circularContainer}>
                        <TouchableOpacity>
                            <Image source={images.locationIcon} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circularContainer2}>
                        <TouchableOpacity>
                            <Image source={images.heartIcon} style={styles.iconImage2} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRow: {
        width: wp(100),
        height: rwp(36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: rhp(12),
        // backgroundColor:'red'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: rwp(76),
        marginLeft: rwp(15)
    },
  
    popText: {
        fontSize: rfs(18),
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        textAlign: 'center',
        left: wp(3),
        color: '#15BE77'
    },
    popularText: {
        position: 'absolute',
        top: rhp(7),
        left: 0,

    },
    container2: {
        width: rwp(110),
        height: rwp(36),
        justifyContent: 'center'
    },
    containerRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: rwp(12)
    },
    circularContainer: {
        height: rhp(42),
        width: rwp(42),
        borderRadius: 18.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(83, 232, 139, 0.15)'
    },
    circularContainer2: {
        height: rhp(42),
        width: rwp(42),
        borderRadius: 18.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 29, 29, 0.15)'
    },
    iconImage: {
        height: rhp(22),
        width: rwp(18),
        alignSelf: 'center',
        resizeMode: 'cover'
    },

    iconImage2: {
        resizeMode: 'contain',
        height: rhp(24),
        width: rwp(24),
        alignSelf: 'center'
    },
});
export default ModalAppBar