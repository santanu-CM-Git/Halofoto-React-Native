import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler'
import { LogBox, Alert } from 'react-native'
import GlobalProvider from "./src/context/Provider"
import AppNavContainer from "./src/navigations"
import messaging from '@react-native-firebase/messaging';

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);
export default function App() {
  useEffect(() => {
    if (Platform.OS == 'android') {
      const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
        // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        console.log('Received foreground message:', JSON.stringify(remoteMessage));

      });

      const unsubscribeBackground = messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Received background message:', remoteMessage);

      });

      return () => {
        unsubscribeForeground();
        //unsubscribeBackground();
      };
    }
    if (Platform.OS === 'ios') {
      messaging().onMessage(async remoteMessage => {
        //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        console.log('IOS - Received foreground message:', remoteMessage);
        // Handle foreground messages here
      });

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('IOS - Received background message:', remoteMessage);
        // Handle background messages here
      });
    }
  }, [])
  return (
    <>
      <GlobalProvider>
        <AppNavContainer />
      </GlobalProvider>
    </>

  )
}