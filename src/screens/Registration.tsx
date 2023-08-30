import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import { firebase } from '../config';

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);


  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      setLoading(false)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          res.user.updateProfile({
            displayName: userName,
          });
          console.log('@@@ Log',res)
          console.log('User registered successfully!');
          setLoading(false)
          setUserName('')
          setEmail('')
          setPassword('')
        //   this.props.navigation.navigate('Login');
        })
        .catch(error => console.log('@@@ Went Wrong======', error));
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>User Registration</Text>
      <TextInput
        placeholder="Enter User Name"
        value={userName}
        onChangeText={val => setUserName(val)}
        style={{
          width: '80%',
          height: 50,
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <TextInput
        placeholder="Enter Address"
        value={address}
        onChangeText={val => setAddress(val)}
        style={{
          width: '80%',
          height: 50,
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={val => setEmail(val)}
        style={{
          width: '80%',
          height: 50,
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        secureTextEntry
        style={{
          width: '80%',
          height: 50,
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={val => setPassword(val)}
      />
      <TouchableOpacity onPress={() => registerUser()}>
        <Text>Register User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
