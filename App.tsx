import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {fcmService} from './src/notifications/FCMService';
import {localNotificationService} from './src/notifications/LocalNotificationService';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import Survey from './src/screens/Survey';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    setupNotification();
  }, []);

  const setupNotification = async () => {
    let userToken = '';
    if (!userToken) {
      try {
        fcmService.register(
          (token: any) => onRegister(token),
          (notify: any) => onNotification(notify),
          () => onOpenNotification(),
        );
        localNotificationService.configure((notify: any) =>
          onOpenNotification(),
        );
      } catch (error) {}
    }
  };

  const onRegister = async (token: any) => {
    console.log('@@@ FCM Registeration Token ==========', token);
  };

  const onNotification = (notify: any) => {
    let uniquedNotifId = Math.floor(Math.random() * 1000 + 1);
    const options = {
      soundName: 'default',
      playSound: true,
    };
    localNotificationService.showNotification(
      uniquedNotifId,
      notify.title,
      notify.message,
      notify,
      options,
    );
  };

  const onOpenNotification = () => {};

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Survey">
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Lgin" component={Login} />
          <Stack.Screen name="Survey" component={Survey} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
