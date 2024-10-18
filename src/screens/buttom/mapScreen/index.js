import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markerPosition, setMarkerPosition] = useState(null);

  // Function to request location permission
  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Get the current location
  useEffect(() => {
    requestLocationPermission();
    Geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          ...region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  // Handler for selecting a location
  const handleSelectLocation = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onPress={handleSelectLocation} // User can tap on the map to select a location
      >
        {markerPosition && (
          <Marker
            coordinate={markerPosition}
            title="Selected Location"
            description="This is where you tapped!"
          />
        )}
      </MapView>
      <View style={styles.info}>
        {markerPosition ? (
          <Text>
            Selected Latitude: {markerPosition.latitude.toFixed(5)}, Longitude:{' '}
            {markerPosition.longitude.toFixed(5)}
          </Text>
        ) : (
          <Text>Tap on the map to select your location</Text>
        )}
      </View>
      <Button title="Confirm Location" onPress={() => console.log('Location selected:', markerPosition)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  info: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default MapScreen;
