import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { registerUser } from '../../../services/authServices';
import GradientButton from '../../../components/gradientButton';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    const { user, error } = await registerUser(email, password);
    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log('Registration successful:', user);
      navigation.navigate('Login')
      // Handle successful registration (e.g., navigate to login)
    }
  };


  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />


      <GradientButton buttonText='Login?' onPress={() => navigation.navigate('Login')}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default Register;
