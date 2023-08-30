import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../config';
import {useNavigation} from '@react-navigation/native';

const Login = (props: any) => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signin!');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('@@@ User Record=====', res.user.uid);
          console.log('User logged-in successfully!');
          navigation.navigate('HomeScreen');
        })
        .catch(error => console.log('@@@ Went Wrong======', error));
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login User</Text>
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
      <TouchableOpacity onPress={() => userLogin()}>
        <Text>Login User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
