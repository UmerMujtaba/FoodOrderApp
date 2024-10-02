import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button, TextInput, StyleSheet } from 'react-native';
import SearchField from './searchFields';
import { images } from '../assets/images';
import { useTheme } from '@react-navigation/native';
import fonts from '../constants/fonts';
import GradientButton from './gradientButton';

const FilterComponent = ({ onSearch, onFilter, onApply, showPriceFilter }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(''); // Store the selected type
  const [selectedPrice, setSelectedPrice] = useState(''); // Store the selected price
  const { colors } = useTheme();

  const toggleFilterModal = () => {
    setFilterVisible(!filterVisible);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type); // Set selected type but don’t apply yet
    onFilter(type);        // Pass selected type to parent for temporary storage
    console.log("🚀 ~ handleTypeSelect ~ setSelectedType:", type)
  };

  const handlePriceSelect = (price) => {
    setSelectedPrice(price);
    onFilter({ type: selectedType, price });
    console.log("🚀 ~ handlePriceSelect ~ price:", price)

  };

  const applyFilterAndClose = () => {
    onApply();  // Apply the filter on button click
    toggleFilterModal(); // Close the modal
  };

  
  return (
    <View style={styles.mainView}>
      <SearchField imageSource={images.searchIcon} onSearch={onSearch} />
      <TouchableOpacity style={styles.searchContainer} onPress={toggleFilterModal}>
        <Image source={images.filterIcon} style={styles.imgStyle} />
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal visible={filterVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
        <TouchableOpacity style={styles.modalContainer} onPress={toggleFilterModal}>
          <View style={styles.modalView(colors)}>


            {!showPriceFilter && (
              <>
                <Text style={styles.heading(colors)}>Type</Text>

                <View style={styles.modalBody}>

                  <View style={{ flexDirection: 'column' }}>

                    <TouchableOpacity style={[
                      styles.touchableContainer(colors), selectedType === 'Fast Food' && { backgroundColor: colors.primary } ]}
                       onPress={() => handleTypeSelect('Fast Food')}>
                      <Text style={styles.subHeading(colors)}>Fast Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[
                      styles.touchableContainer(colors), selectedType === 'Vegan' && { backgroundColor: colors.primary } ]}
                       onPress={() => handleTypeSelect('Vegan')}>
                      <Text style={styles.subHeading(colors)}>Vegan</Text>
                    </TouchableOpacity>

                  </View>

                  <View style={{ flexDirection: 'column' }}>

                    <TouchableOpacity style={[
                      styles.touchableContainer(colors), selectedType === 'Sides' && { backgroundColor: colors.primary }]} 
                      onPress={() => handleTypeSelect('Sides')}>
                      <Text style={styles.subHeading(colors)}>Sides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableContainer(colors), selectedType === 'Drinks' && { backgroundColor: colors.primary } ]} onPress={() => handleTypeSelect('Drinks')}>
                      <Text style={styles.subHeading(colors)}>Drinks</Text>
                    </TouchableOpacity>

                  </View>

                </View>
              </>
            )}

            {showPriceFilter && (
              <>
                <Text style={styles.heading(colors)}>Price</Text>
                <View style={[styles.modalBody, { marginBottom: 20 }]}>
                  <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={[styles.touchableContainer(colors), selectedPrice === '1.5' && { backgroundColor: colors.primary }]} onPress={() => handlePriceSelect('1.5')}>
                      <Text style={styles.subHeading(colors)}>{'> 1.5 $'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableContainer(colors), selectedPrice === '5.0' && { backgroundColor: colors.primary }]} onPress={() => handlePriceSelect('5.0')}>
                      <Text style={styles.subHeading(colors)}>{'> 5.0 $'}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity style={[styles.touchableContainer(colors), selectedPrice === '2.5' && { backgroundColor: colors.primary }]} onPress={() => handlePriceSelect('2.5')}>
                      <Text style={styles.subHeading(colors)}>{'> 2.5 $'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableContainer(colors), selectedPrice === '9.0' && { backgroundColor: colors.primary }]} onPress={() => handlePriceSelect('9.0')}>
                      <Text style={styles.subHeading(colors)}>{'< 9.0 $'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}

            {/* Gradient Button to Apply Filter */}
            <GradientButton onPress={applyFilterAndClose} buttonText={'Apply Filter'} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  searchContainer: {
    backgroundColor: '#F9A84D',
    height: 49,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: (colors) => ({
    width: 320,
    height: 300,
    backgroundColor: colors.modalColor,
    borderRadius: 10,
    padding: 20,
    marginTop: 10

  }),
  heading: (colors) => ({
    fontSize: 18,
    marginBottom: 10,
    color: colors.text,
    marginTop: 20,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold

  }),
  placeHolderText: {
    marginBottom: 10,
    color: 'red',
    backgroundColor: 'green'

  },
  placeHolderContainer: {
    marginBottom: 10,
    backgroundColor: 'blue'

  },
  modalBody: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10

  },
  touchableContainer: (colors) => ({
    backgroundColor: colors.tabBackgroundColor,
    height: 40,
    width: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }),
  subHeading: (colors) => ({
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    fontSize: 16, color:
      colors.text
  })
})
export default FilterComponent;
