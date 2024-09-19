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
  
})