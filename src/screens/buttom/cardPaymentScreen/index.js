import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StatusBar, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { useStripe, initPaymentSheet } from '@stripe/stripe-react-native';
import { images } from '../../../assets/images';
import { useRoute, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { useColorScheme } from 'react-native';
import fonts from '../../../constants/fonts';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity } from '../../../redux/slices/cartSlice';
import { ScreenNames } from '../../../constants/string';
import { supabase } from '../../../utils/supabase';
import GradientButton from '../../../components/gradientButton';
import CartItem from '../../../components/cartItem';

const CardPaymentScreen = ({ navigation }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const scheme = useColorScheme();
  const { colors } = useTheme();
  const { cardType } = route.params;

  const dispatch = useDispatch();

  const cartItemsFromStore = useSelector((state) => state.cart.cartItems);
  const cartItems = cartItemsFromStore.map(item => ({
    ...item,
    totalPrice: item.price + (item.selectedAddon ? item.selectedAddon.price : 0),
  }))
  console.log("🚀 ~ cartItems ~ cartItems:", cartItems)




  const renderItem = ({ item }) => {
    console.log("🚀 ~ CardPaymentScreen ~ item:", item)
    return (
      <View style={styles.itemContainer(colors)}>
        <Image source={images[item.imagePath]} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName(colors)}>{item.name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemDescription(colors)}>
            {item.description}
          </Text>

          <Text style={styles.itemPrice}>Price: ${item.price.toFixed(2)}</Text>
          {item.selectedAddon && (
            <Text style={styles.addOnName(colors)}>Addon: {item.selectedAddon.name} (+${item.selectedAddon.price.toFixed(2)})</Text>
          )}

        </View>
      </View>
    );
  };

  const saveOrderToSupabase = async () => {
    try {
      // Check if a session exists
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !sessionData?.session) {
        console.error("Error fetching session or no session available:", sessionError);
        return; // Return or redirect to login if no session
      }

      // Fetch the current authenticated user
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError);
        return;
      }

      const userId = userData?.user?.id;
      if (!userId) {
        console.error("No user ID found.");
        return;
      }

      // Prepare cart items and insert into Supabase
      const orderItems = cartItems.map(item => ({
        user_id: userId,
        item_name: item.name,
        description: item.description || 'No description available',
        image: item.imagePath,
        price: item.totalPrice,
        created_at: new Date(),
      }));

      const { data, error } = await supabase
        .from('order_history')
        .insert(orderItems);

      if (error) {
        console.error("Error saving order to Supabase:", error);
      } else {
        console.log("Order successfully saved to Supabase:", data);
      }
    } catch (err) {
      console.error("Error during order insertion:", err);
    }
  };

  const customAppearance = {
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
        borderRadius: 20,
      },
      colors: {
        background: '#73757b', // Button background color
        text: '#000000', // Button text color
      },
    },

    colors: {
      primary: '#fcfdff',
      background: '#ffffff',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      icon: scheme === 'dark' ? '#000000' : '#ffffff', // Icon color
      placeholderText: '#73757b',
      error: "#FF0000",
      //selectionColor:"#FF0000"
    },
  };

  useEffect(() => {
    const initializeAndOpenSheet = async () => {
      const initError = await initializePaymentSheet(); // Wait for the payment sheet to initialize

      if (!initError) {
        await openPaymentSheet(); // Now, open the payment sheet
      } else {
        console.log(`Error initializing payment sheet: ${initError.message}`);
        Alert.alert(`Error initializing payment sheet: ${initError.message}`);
      }
    };

    initializeAndOpenSheet();
  }, []);

  const initializePaymentSheet = async () => {
    try {
      const response = await fetch('http://10.2.2.163:3000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 50,
          currency: 'usd',
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API Error: ${errorMessage}`);
      }

      const { clientSecret } = await response.json();
      console.log('Client Secret:', clientSecret);

      if (!clientSecret) {
        throw new Error('Client secret is missing');
      }

      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Aeroplane',
        appearance: customAppearance,

      });

      if (error) {
        return error; // Return the error to handle it in the useEffect
      }

      setLoading(true); // Set loading to true if initialization is successful
      return null; // Return null if no error

    } catch (error) {
      Alert.alert(`Error initializing payment sheet: ${error.message}`);
      return error; // Return the error to handle it in the useEffect
    }
  };

  const openPaymentSheet = async () => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        console.log("🚀 ~ openPaymentSheet ~ `Error:", `Error: ${error.message}`);
        Alert.alert('You canceled payment request!');
      } else {
        console.log("🚀 ~ openPaymentSheet ~ ", 'Success', 'Your payment is confirmed!');
        //Alert.alert('Success', 'Your payment is confirmed!');
        navigation.navigate(ScreenNames.ReceiptScren);
        saveOrderToSupabase();
        setTimeout(() => {
          dispatch(clearCart()); // Clear the cart

        }, 5000); // Delay for 1 second
      }

    } catch (error) {
      console.log("🚀 ~ openPaymentSheet ~", `Payment failed: ${error.message}`);
      Alert.alert(`Payment failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      <View style={styles.appBar}>
        <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
          <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
            <Image source={images.backIcon} style={styles.backImage} />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <Text style={styles.title(colors)}>{cardType}</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()} // Assuming unique keys are provided by index
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      {/* <GradientButton
      buttonText={"add"}
      onPress={()=> saveOrderToSupabase()}/> */}
    </View>
  );
};

export default CardPaymentScreen;
