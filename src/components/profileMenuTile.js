// AccountButton.js
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Assuming you are using React Navigation for theming
import fonts from '../constants/fonts';

const ProfileMenuTile = ({ onPress,userIcon,name }) => {
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
  
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
    marginLeft:10,
    marginRight:10
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    marginLeft: 10,
    opacity:0.8 ,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium,
    alignSelf: 'center',
    marginLeft: 20,
  },
  separator:(colors)=> ({
    width: 250,
    height: 1, // Add height for the separator
    backgroundColor: colors.tabBackgroundColor, // Use a background color instead
    alignSelf: 'center',
    marginTop: 10, // Add margin if needed

    
  }),
});

export default ProfileMenuTile;
