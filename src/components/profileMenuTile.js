// AccountButton.js
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Assuming you are using React Navigation for theming
import fonts from '../constants/fonts';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';

const ProfileMenuTile = ({ onPress, userIcon, name }) => {
  const { colors } = useTheme(); // Access current theme colors

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.buttonContainer}
      onPress={onPress} // Pass the onPress function as a prop
    >
      <View style={styles.row}>
        <Image
          source={userIcon}
          style={styles.icon}
        />
        <Text style={[styles.text, { color: colors.text }]}>
          {name}
        </Text>
      </View>
      <View style={[styles.separator(colors)]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    //backgroundColor:'red',
    height: rhp(55),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: rhp(12),
    marginBottom: rhp(5),
    marginLeft: rwp(5),
    marginRight: rwp(5)
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    width: rwp(30),
    height: rhp(30),
    marginLeft: rwp(10),
    opacity: 0.8,
  },
  text: {
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    alignSelf: 'center',
    marginLeft: rwp(20),
  },
  separator: (colors) => ({
    width: rwp(320),
    height: rhp(1), // Add height for the separator
    backgroundColor: colors.tabBackgroundColor, // Use a background color instead
    alignSelf: 'center',
    marginTop: rwp(12), // Add margin if needed


  }),
});

export default ProfileMenuTile;
