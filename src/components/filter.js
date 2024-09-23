import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
import SearchField from './searchFields';
import { images } from '../assets/images';

const FilterComponent = ({ onSearch }) => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterModal = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
      <SearchField imageSource={images.searchIcon} onSearch={onSearch} />
      <TouchableOpacity
        style={{
          backgroundColor: '#F9A84D',
          height: 49,
          width: 50,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={toggleFilterModal}
      >
        <Image source={images.filterIcon} resizeMode='contain' style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal visible={filterVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: 300, backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10,color:'red' }}>Filters</Text>
            <TextInput placeholder="Price Range" style={{ marginBottom: 10 ,color:'red',backgroundColor:'green'}} />
            <TextInput placeholder="Type" style={{ marginBottom: 10 ,backgroundColor:'blue'}} />
            <Button title="Apply Filters" onPress={toggleFilterModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FilterComponent;
