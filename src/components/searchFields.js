import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';

const SearchField = ({ placeholder = 'What do you want to order?', imageSource, style, onSearch, ...props }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text); // Ensure onSearch is only called if it's passed as a prop
    }
  };

  return (
    <View style={[styles.container, style]}>
      {imageSource && (
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={imageSource}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#DA6317'
        onChangeText={handleSearch}
        value={searchText}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    height: rhp(55),
    width: rwp(300),
    backgroundColor: '#FFCC80',
    //marginLeft: 10,
    paddingHorizontal: rwp(10),
  },
  icon: {
    width: rwp(26),
    height: rhp(26),
    marginRight: rwp(10),
  },
  input: {
    flex: 1,
    color: '#3B3B3B',
  },
});

export default SearchField;
