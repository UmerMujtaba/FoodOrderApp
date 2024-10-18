import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../assets/images';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import { Strings } from '../constants/string';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import fonts from '../constants/fonts';



const CartItem = ({ item, colors, handleQuantityChange }) => {




  return (
    <View style={[styles.itemContainer(colors)]}>
      <Image source={images[item.imagePath]} style={styles.itemImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.itemName(colors)}>{item.name}</Text>
        <TouchableOpacity>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemDescription(colors)}>
            {item.description}
          </Text>
        </TouchableOpacity>

        {item.selectedAddon && (
          <View>
            <Text style={styles.addOnHeading(colors)}>{Strings.addOn}</Text>
            <Text style={styles.addOnName(colors)}>{item.selectedAddon.name}: ${item.selectedAddon.price}</Text>
          </View>
        )}

        <LinearGradientText
          colors={['#15BE77', '#53E88B']}
          text={`$ ${item.price.toFixed(2)}`}
          start={{ x: 0.1, y: 0.1 }}  // Optional
          end={{ x: 0.5, y: 0.4 }}  // Optional
          textStyle={[styles.itemPrice, { color: colors.text }]}  // Optional
        />

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}>
            <LinearGradient colors={['#53E88B', '#53E88B']} style={styles.gradientButton2}>
              <Text style={[styles.button2, item.quantity <= 1 && styles.disabledButton]}>-</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.quantity(colors)}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
            <LinearGradient colors={['#15BE77', '#53E88B']} style={styles.gradientButton}>
              <Text style={styles.button}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: (colors) => ({
    flexDirection: 'row',
    paddingHorizontal: rwp(12),
    paddingVertical: rhp(12),
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: rhp(12),
    backgroundColor: colors.tabBackgroundColor,

  }),
  itemName: (colors) => ({
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    color: colors.text,

  }),
  itemDescription: (colors) => ({
    fontSize: rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    color: colors.text
  }),

  itemPrice: {
    fontSize: rfs(20),
    color: '#15BE77',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  },
  itemImage: {
    borderRadius: 8,
    height: rhp(120),
    width: rwp(90)
  },
  detailsContainer: {
    flex: 1,
    marginLeft: rhp(10),
  },

  addOnHeading: (colors) => ({
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    fontSize: rfs(16)
  }),
  addOnName: (colors) => ({
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    fontSize: rfs(16)
  }),

  disabledButton: {
    opacity: 0.6,
  },
  gradientButton: {
    borderRadius: 8,

    paddingHorizontal: rwp(8),
    paddingVertical: rhp(8),
    paddingTop: rhp(2),
    paddingBottom: rhp(2),
  },
  gradientButton2: {
    borderRadius: 8,
    paddingHorizontal: rwp(8),
    paddingVertical: rhp(8),
    paddingTop: rhp(2),
    paddingBottom: rhp(2),
    opacity: 0.8
  },
  button: {
    fontSize: rfs(20),
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 8,
    textAlign: 'center', // Center the text
  },
  button2: {
    fontSize: rfs(20),
    fontWeight: 'bold',
    color: '#185519',
    borderRadius: 8,
    textAlign: 'center', // Center the text

  },

  quantity: (colors) => ({
    marginHorizontal: rwp(15),
    fontSize: rfs(20),
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
  }),
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

})
export default CartItem;
