import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useTheme } from '@react-navigation/native';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import { ScreenNames, Strings } from '../constants/string';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import fonts from '../constants/fonts';
import { images } from '../assets/images';



const OrderSummary = ({ cartItems, subTotal, calculateTotal, navigate }) => {
  const { colors } = useTheme();




  return (
    <LinearGradient
      colors={['#15BE77', '#53E88B']}
      start={{ x: 0.2, y: 0.5 }}
      end={{ x: 0.5, y: 0.2 }}
      style={styles.cardGradient}
    >
      <ImageBackground source={images.cardBackground} style={styles.bgImageStyle}>
        <View style={styles.cardContainerRow}>
          <View style={styles.cardContainerCol}>
            <Text style={styles.headingText}>{Strings.subTotal}</Text>
            {cartItems.length > 0 && (
              <>
                <Text style={styles.headingText}>{Strings.deliveryCharges}</Text>
                <Text style={styles.headingText}>{Strings.discount}</Text>
                <Text style={styles.priceText}>{Strings.total}</Text>
              </>
            )}
          </View>
          <View style={styles.cardContainerCol}>
            <Text style={[styles.headingText, { textAlign: 'center' }]}>{subTotal()}$</Text>
            {cartItems.length > 0 && (
              <>
                <Text style={[styles.headingText, { textAlign: 'center' }]}>{10}$</Text>
                <Text style={[styles.headingText, { textAlign: 'center' }]}>{5}$</Text>
                <Text style={[styles.priceText, { textAlign: 'center' }]}>{calculateTotal()}</Text>
              </>
            )}
          </View>
        </View>
      </ImageBackground>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.ctaBtn(colors)}
        // onPress={() => navigate(ScreenNames.OrderConfirmation)}
        onPress={() => navigate(ScreenNames.ChoosePaymentScreen)}
      >
        <LinearGradientText
          colors={['#15BE77', '#53E88B']}
          text={Strings.placeMyOrder}
          start={{ x: 0.4, y: 0.4 }}
          end={{ x: 0.1, y: 0.5 }}
          textStyle={[styles.OrderText]}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  cardGradient: {
    borderRadius: 16,
    width: rwp(370),
    alignSelf: 'center',
    justifyContent: 'center',

  },
  bgImageStyle: {
    resizeMode: 'cover',
    height: rhp(186),
    width: rwp(370),
    // marginRight: rwp(2),
    alignSelf: 'center',
  },
  cardContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: rwp(5),
    marginRight: rwp(5),
    width: rwp(370),

  },
  cardContainerCol: {
    flexDirection: 'column',
    paddingHorizontal: rwp(10),
    paddingVertical: rhp(10),
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
    bottom: rhp(5),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  }),

  OrderText: {
    fontSize: rfs(22),
    color: '#53E88B',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    alignSelf: 'center',

  },


})
export default OrderSummary;
