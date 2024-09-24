import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import fonts from '../constants/fonts'

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
        width: '100%',
        height: 34,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        // backgroundColor:'red'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 76,
        marginLeft: 10
    },
    popularContainerImage: {
        resizeMode: 'contain',
        height: 34,
        width: 76,
        marginLeft: 10,
    },
    popText: {
        fontSize: 16,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
        textAlign: 'center',
        left: '18%',
        color: '#15BE77'
    },
    popularText: {
        position: 'absolute',
        top: 6,
        left: 0,

    },
    container2: {
        width: 100,
        height: 34,
        justifyContent: 'center'
    },
    containerRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    circularContainer: {
        height: 38,
        width: 38,
        borderRadius: 18.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(83, 232, 139, 0.15)'
    },
    circularContainer2: {
        height: 38,
        width: 38,
        borderRadius: 18.5,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 29, 29, 0.15)'
    },
    iconImage: {
        height: 21,
        width: 18,
        alignSelf: 'center',
        resizeMode: 'cover'
    },

    iconImage2: {
        resizeMode: 'contain',
        height: 22,
        width: 22,
        alignSelf: 'center'
    },
});
export default ModalAppBar