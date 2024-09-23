import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';

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
    height: 50,
    width: 250,
    backgroundColor: '#FFCC80',
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#3B3B3B',
  },
});

export default SearchField;
