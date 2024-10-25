import { View, Text, StatusBar, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, Image, useColorScheme, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '../../../assets/images'
import { ScreenNames, Strings } from '../../../constants/string'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { styles } from './styles'
import { supabase } from '../../../utils/supabase'
import { navigate, navigateReset } from '../../../navigator/navigationRef'
import GradientButton from '../../../components/gradientButton'
import { fetchOrderHistory } from '../../../utils/helper'
import { rhp, rwp } from '../../../constants/dimensions'



const HistoryOrderScreen = ({ navigation }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { colors } = useTheme();
    const { scheme } = useColorScheme();




    useFocusEffect(
        React.useCallback(() => {
            fetchOrderHistory(setOrderHistory, setLoading);
        }, [])
    );


    const renderOrderItem = ({ item }) => (
        <TouchableOpacity key={item.id} style={styles.tile(colors)} activeOpacity={0.7}>
            <Image
                style={styles.image}
                source={images[item.image]}
            />
            <View style={styles.textContainer}>
                <Text style={styles.itemName(colors)}>{item.item_name}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.description(colors)}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderEmptyComponent = () => (

        <View style={{ flex: 1 }}>
            {loading ? (
                <View style={styles.loaderContent}>
                    <ActivityIndicator size="large" color={scheme === 'dark' ? '#ffffff' : '#0000ff'} />
                </View>
            ) : (

                <View style={styles.loaderContent}>
                    <Text style={styles.itemName(colors)}>No order history found.</Text>
                    <GradientButton
                        buttonText={'Order Now'}
                        onPress={() => navigate(ScreenNames.Dashboard)}
                        style={{ marginTop: rhp(25), width: rwp(150) }}
                    />
                </View>
            )}
        </View>
    );

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

            <Text style={styles.title(colors)}>{Strings.orderHistory}</Text>

            <FlatList
                data={orderHistory}
                renderItem={renderOrderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={renderEmptyComponent}
                contentContainerStyle={{ flexGrow: 1 }} // Ensure the empty component is centered
            />
        </View >
    )
}
export default HistoryOrderScreen