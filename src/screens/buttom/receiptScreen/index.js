import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { images } from '../../../assets/images';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { ScreenNames, Strings } from '../../../constants/string';
import { supabase } from '../../../utils/supabase';
import RoundedContainer from '../../../components/roundedContainer';
import { navigate } from '../../../navigator/navigationRef';
import OrderConfirmationScreenModal from '../orderConfirmationScreen';

const ReceiptScreen = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(true); // Modal starts as visible
    const { colors } = useTheme();
    const now = new Date();
    const dispatch = useDispatch();
    const [randomUser, setRandomUser] = useState(null);
    const cartItemsFromStore = useSelector((state) => state.cart.cartItems);
    const date = now.toISOString().split('T')[0];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
    let estimatedHours = hours;
    let estimatedMinutes = minutes + 45;

    if (estimatedMinutes >= 60) {

        estimatedHours += Math.floor(estimatedMinutes / 60);
        estimatedMinutes = estimatedMinutes % 60;
    }

    // Handle overflow for 12-hour format
    if (estimatedHours >= 24) {
        estimatedHours = estimatedHours % 24;
    }


    const EstimatedDeliveryTime = `${estimatedHours % 12 || 12}:${String(estimatedMinutes).padStart(2, '0')} ${estimatedHours >= 12 ? 'PM' : 'AM'}`;



    const cartItems = cartItemsFromStore.map(item => ({
        ...item,
        totalPrice: item.price + (item.selectedAddon ? item.selectedAddon.price : 0),
    }));

    const subTotal = () => {
        return cartItems.reduce((total, item) => {
            const addOnPrice = item.selectedAddon ? item.selectedAddon.price : 0;
            return total + (item.price + addOnPrice) * item.quantity;
        }, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const deliveryCharge = 10; // Delivery charge
        const discount = 5; // Discount
        const total = parseFloat(subTotal()) + deliveryCharge - discount;
        return `${total.toFixed(2)}$`;
    };

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    // Function to fetch one random username
    async function fetchRandomUserData() {
        try {
            const { data: users, error: userFetchError } = await supabase
                .from('registered_user')
                .select('*'); // Fetch all fields

            if (userFetchError) {
                throw userFetchError;
            }

            if (users.length === 0) {
                console.log('No users found');
                setRandomUser(null);
                return null;
            }

            const randomIndex = Math.floor(Math.random() * users.length);
            const randomUser = users[randomIndex];

            console.log("🚀 ~~~~~~~~~~ fetchRandomUserData ~~~~~~~~~~~~~~ randomUser:", randomUser.email)
            setRandomUser(randomUser); // Store the whole user object
            return randomUser;
        } catch (error) {
            console.error('Error fetching random user:', error);
            setRandomUser(null);
            throw error;
        }

    }

    useEffect(() => {
        fetchRandomUserData();
    }, []);


    return (
        <View style={styles.container}>
            {/* App bar */}

            {/* Reuse the OrderConfirmationScreen inside the modal */}
            <OrderConfirmationScreenModal navigation={navigation} />
            {/* Button to close modal */}

            <View style={styles.appBar}>


                <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
                    <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigate(ScreenNames.CartScreen)}>
                        <Image source={images.backIcon} style={styles.backImage} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <Text style={styles.title(colors)}>{Strings.deliveryIsInProgress}</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={styles.greeting(colors)}>{Strings.thankYouForYourOrder}</Text>

                <View style={styles.dottedContainer(colors)}>
                    <Text style={styles.receiptText(colors)}>
                        {Strings.hereIsYourReceipt}
                    </Text>

                    <View style={styles.timeNdDateRow}>
                        <Text style={styles.time(colors)}>{date}</Text>
                        <Text style={styles.time(colors)}>{formattedTime}</Text>
                    </View>

                    <View style={styles.dottedLine(colors)} />

                    {/* Display Cart Items */}
                    {cartItems.length > 0 ? (
                        <View style={styles.cartItemsContainer}>
                            {cartItems.map((item, index) => (
                                <View key={index} style={styles.cartItem}>
                                    <Text style={styles.cartItemHeading(colors)}>Item:</Text>
                                    <Text style={styles.cartItemText(colors)}>{item.name} (x{item.quantity})</Text>
                                    <Text style={styles.cartItemText(colors)}>${item.totalPrice.toFixed(2)}</Text>

                                    {item.selectedAddon && (
                                        <View>
                                            <Text style={styles.addOnHeading(colors)}>{Strings.addOn}</Text>
                                            <Text style={styles.addOnName(colors)}>{item.selectedAddon.name}: ${item.selectedAddon.price}</Text>
                                        </View>
                                    )}
                                </View>

                            ))}

                        </View>
                    ) : (
                        <Text style={styles.noItemsText(colors)}>{Strings.noItemsInCart}</Text>
                    )}

                    <View style={styles.dottedLine(colors)} />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText(colors)}>{Strings.totalItems}{cartItems.reduce((total, item) => total + item.quantity, 0)}</Text>
                        <Text style={styles.totalText(colors)}>{Strings.totalPrice}{calculateTotal()}</Text>
                    </View>
                </View>

                {cartItems.length > 0 ? (
                    <Text style={styles.estimatedTime(colors)}>
                        {Strings.estimatedDeliveryTimeIs}  {EstimatedDeliveryTime}
                    </Text>
                ) : (
                    <Text style={styles.estimatedTime(colors)}>{Strings.estimatedDeliveryTimeIs}</Text>
                )}


            </View>

            {/* it should be at the bottom of screen */}
            <View style={{ backgroundColor: colors.tabBackgroundColor, height: 80, borderRadius: 40, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                        <RoundedContainer iconSource={images.userIcon2}></RoundedContainer>
                        <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                            {randomUser && (
                                <>
                                    <Text style={styles.usernameText(colors)}>
                                        {randomUser.username} {/* Display username */}
                                    </Text>
                                    <Text style={styles.driverText(colors)}>
                                        Driver
                                    </Text>
                                </>
                            )}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", width: 150, paddingHorizontal: 5 }}>

                        <RoundedContainer iconSource={images.messageIcon}></RoundedContainer>

                        <RoundedContainer iconSource={images.phoneCall}

                            onPress={() => {
                                navigate(ScreenNames.CallScreen, { randomUser });
                            }}
                        ></RoundedContainer>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ReceiptScreen;
