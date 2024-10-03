import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import fonts from '../constants/fonts';
import { Strings } from '../constants/string';
import { useTheme } from '@react-navigation/native';
import { rfs, rhp, rwp } from '../constants/dimensions';



const CustomCheckbox = ({ label, onPress, style }) => {
  const [isChecked, setIsChecked] = useState(null); // Checkbox state
  const { colors } = useTheme();


  const toggleCheckbox = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
    if (onPress) onPress(!isChecked); // Call the onPress callback if provided
  };


  return (
    <View style={[styles.checkboxContainer, style]}>
      <TouchableOpacity onPress={toggleCheckbox}>

        <View style={[styles.checkbox(colors), isChecked && styles.checked]}>
          {isChecked && <Text style={styles.tick}>✓</Text>}
        </View>
      </TouchableOpacity>
      <Text style={styles.label(colors)}>{label}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rhp(8),
  },
  checkbox:(colors)=> ({
    width: rwp(25),
    height: rhp(25),
    borderWidth: rwp(1),
    borderRadius: 20,
    borderColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rwp(12),
  }),
  checked: {
    backgroundColor: '#4CAF50', // Change background when checked
    borderColor: 'transparent',
  },
  tick: {
    color: '#fff',
    fontSize: rfs(18),
    //ontWeight: 'bold',
  },
  label:(colors)=> ({
    fontSize: rfs(16),
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular
  }),
})

export default CustomCheckbox