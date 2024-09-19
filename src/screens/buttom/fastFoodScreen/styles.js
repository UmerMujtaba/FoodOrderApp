import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";

export default StyleSheet.create({
  
        row: {
          justifyContent: 'space-between',
          marginBottom: 20,
        },
        itemContainer: {
          backgroundColor: 'lightgray',
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 8,
          alignItems: 'center',
          borderRadius: 8,
          width: '45%', // Adjust width for grid layout
        },
        image: {
          width: 150,
          height: 150,
          marginBottom: 10,
        },
        itemName: {
          fontSize: 16,
          fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
          fontWeight: 'bold',
          color:'black'
        },
        modalBackground: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContainer: {
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 20,
          justifyContent: 'center',
          flex:1,
          alignItems: 'center',
        },
        modalImage: {
          width: 300,
          height: 300,
          borderRadius: 10,
        },
        modalName: {
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
          color: 'black',
        },
        modalDescription: {
          fontSize: 16,
          textAlign: 'center',
          marginVertical: 10,
          color: 'black',
        },
        modalPrice: {
          fontSize: 18,
          fontWeight: 'bold',
          marginVertical: 10,
          color: 'black',
        },
        closeButton: {
          marginTop: 20,
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 5,
          
        },
        closeButtonText: {
          color: 'black',
          fontSize: 16,
        },
      
})