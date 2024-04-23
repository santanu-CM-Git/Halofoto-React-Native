import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler'
import { LogBox, Alert, Button,View,StyleSheet,Linking } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import GlobalProvider from "./src/context/Provider"
import AppNavContainer from "./src/navigations"
import messaging from '@react-native-firebase/messaging';
import env from './src/config/env'
import SpInAppUpdates, {
  UPDATE_TYPE,
  NeedsUpdateResponseAndroid,
  SemverVersion,
  NeedsUpdateResponse,
  IncomingStatusUpdateEvent,
} from 'sp-react-native-in-app-updates';
LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);
const HIGH_PRIORITY_UPDATE = 5;

export default function App() {
  const [needsUpdate, setNeedsUpdate] = useState(false);
  const [otherData, setOtherData] = useState(null);
  const inAppUpdates = new SpInAppUpdates();
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

  useEffect(()=>{
    //checkForUpdates()
    console.log(env.PLATFORM)
    if(env.PLATFORM != 'dev'){
      checkForUpdates()
    }
  },[])

  const checkForUpdates = () => {
    inAppUpdates.checkNeedsUpdate({
      toSemverConverter: (ver) => {
        const androidVersionNo = parseInt(ver, 10);
        const majorVer = Math.trunc(androidVersionNo / 10000);
        const minorVerStarter = androidVersionNo - majorVer * 10000;
        const minorVer = Math.trunc(minorVerStarter / 100);
        const patchVersion = Math.trunc(minorVerStarter - minorVer * 100);
        return `${majorVer}.${minorVer}.${patchVersion}`;
      },
    }).then((result) => {
      setNeedsUpdate(result.shouldUpdate);
      setOtherData(result);
      console.log('we dont need to update');
    });
  };

  const startUpdating = () => {
    if (needsUpdate) {
      let updateType;
      if (Platform.OS === 'android' && otherData) {
        const updatePriority = otherData.updatePriority;
        updateType = updatePriority >= HIGH_PRIORITY_UPDATE
          ? UPDATE_TYPE.IMMEDIATE
          : UPDATE_TYPE.FLEXIBLE;
      }
      inAppUpdates.addStatusUpdateListener(onStatusUpdate);
      inAppUpdates.startUpdate({ updateType });
    } else {
      Alert('doesnt look like we need an update');
    }
  };

  const onStatusUpdate = (status) => {
    const { bytesDownloaded, totalBytesToDownload } = status;
    console.log(`@@ ${JSON.stringify(status)}`);
  };

  const linkingggg = async () => {
    const buildNumber = await DeviceInfo.getBuildNumber();
    const versionNumber = await DeviceInfo.getVersion();
    console.log(versionNumber)
  }
  
  return (
    <>
    
      <GlobalProvider>
        <AppNavContainer />
      </GlobalProvider>
      {needsUpdate && (
          <View style={styles.aButton}>
            <Button
              title="Update Available!! Start Updating"
              color="#841584"
              onPress={()=>startUpdating()}
            />
          </View>
        )}
    </>

  )
}

const styles = StyleSheet.create({
  aButton: {
    backgroundColor: '#80CBC4',
    // marginVertical: 25,
    //borderRadius: 8,
    // marginHorizontal: 50,
   
  },
  textStyle: {
    color: 'black',
    fontSize: 26,
  },
});