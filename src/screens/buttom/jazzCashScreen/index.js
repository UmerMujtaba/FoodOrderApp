import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import CryptoJS from 'crypto-js';

const JazzCashForm = () => {
    const [formData, setFormData] = useState({
        pp_Version: '1.1',
        pp_TxnType: '',
        pp_MerchantID: 'MC132557',
        pp_Language: 'EN',
        pp_Password: 'null',
        pp_TxnRefNo: 'T20241023143105',
        pp_Amount: '10000',
        pp_TxnCurrency: 'PKR',
        pp_TxnDateTime: '20241023143105',
        pp_BillReference: 'billRef',
        pp_Description: 'Description of transaction',
        pp_ReturnURL: '',
        salt: 'c0i0qzowrip',
    });

    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitForm = async () => {
        const hashString = calculateHash();
        const IntegritySalt = formData.salt;
        console.log("🚀 ~ submitForm ~ IntegritySalt:", IntegritySalt)
        const hash = CryptoJS.HmacSHA256(hashString, IntegritySalt).toString();
        console.log("🚀 ~ submitForm ~ hash:", hash)
    
        try {
            const response = await axios.post('http://10.2.2.163:5000/api/payment', {
                ...formData,
                pp_TransactionHash: hash // Include the hash in the request
            });
    
            console.log('Payment Response:', response.data);
            // Handle response (e.g., navigate to a success screen, show a message, etc.)
        } catch (error) {
            console.error('Payment submission failed:', error);
            Alert.alert('Payment Failed', 'Please try again later.');
        }
    };

    const calculateHash = () => {
        let hashString = formData.salt + '&';

        if (formData.pp_Amount) hashString += formData.pp_Amount + '&';
        if (formData.pp_BillReference) hashString += formData.pp_BillReference + '&';
        if (formData.pp_Description) hashString += formData.pp_Description + '&';
        if (formData.pp_Language) hashString += formData.pp_Language + '&';
        if (formData.pp_MerchantID) hashString += formData.pp_MerchantID + '&';
        if (formData.pp_Password) hashString += formData.pp_Password + '&';
        if (formData.pp_ReturnURL) hashString += formData.pp_ReturnURL + '&';
        if (formData.pp_TxnCurrency) hashString += formData.pp_TxnCurrency + '&';
        if (formData.pp_TxnDateTime) hashString += formData.pp_TxnDateTime;

        return hashString;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>JazzCash HTTP POST (Page Redirection) Testing</Text>
            {Object.keys(formData).map((key) => (
                <View key={key} style={styles.formField}>
                    <Text>{key}</Text>
                    <TextInput
                        style={styles.input}
                        value={formData[key]}
                        onChangeText={(value) => handleChange(key, value)}
                        editable={key !== 'pp_Version'} // Make pp_Version readonly
                    />
                </View>
            ))}
            <Button title="Submit" onPress={submitForm} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
        color: 'rgba(196, 21, 28, 1)',
        fontSize: 24,
    },
    formField: {
        marginBottom: 12,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
    },
});

export default JazzCashForm;
