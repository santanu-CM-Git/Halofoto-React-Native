import React, { useContext, useEffect, useState, useRef } from "react"
import { Share, Alert } from "react-native"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import * as DocumentPicker from "expo-document-picker"
import Toast from "react-native-root-toast"
import * as Clipboard from "expo-clipboard"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage"
import env from '../../../config/env'
import { Linking } from 'react-native'
import { GlobalContext } from "../../../context/Provider"
import MyProfileScreen from "../../../screens/Dashboard/MyProfile"
import myProfile from "../../../context/actions/dashboard/myProfile"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import manageProfileImage, { clearProfileImage } from "../../../context/actions/dashboard/manageProfileImage"

import StaticText from "../../../global/StaticText"
import { logout } from "../../../context/actions/auth/login"

const MyProfile = () => {
  const isFocused = useIsFocused()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const { navigate, goBack } = useNavigation()
  const MAX_FILE_UPLOAD_SIZE = 1024 * 1024 * 2

  const {
    myProfileState: { profileError, profileLoading, profileData },
    profileImageUpdateState: {
      profileImageData,
      profileImageError,
      profileImageLoading,
    },
    profileImageUpdateDispatch,
    myProfileDispatch,
    navigationDispatch,
    navigationState: { display },
    authState: { data, error, loading },
    authDispatch,
  } = useContext(GlobalContext)

  const onPress = (route) => (route ? navigate(route) : goBack())

  const onSignOut = async () => {
    AsyncStorage.removeItem("user")
    AsyncStorage.removeItem("token")
    AsyncStorage.removeItem("otp")
    AsyncStorage.removeItem("fcmToken")
    AsyncStorage.removeItem("stay_signin")

    if (!!profileData?.user?.logon_type && (profileData?.user?.logon_type == 'google' || profileData?.user?.logon_type == 'apple' || profileData?.user?.logon_type == 'facebook')) {
      profileData?.user?.logon_type == 'google' && await GoogleSignin.signOut()
      profileData?.user?.logon_type == 'apple' && await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGOUT,
      });
      await auth().signOut();
    }
    logout()(authDispatch)
    Alert.alert(StaticText.screen.logout.heading)
  }

  // const onDeletee = async () => {
  //   console.log(`${env.WEB_URL}/remove-account`)
  //   const uri = `${env.WEB_URL}/remove-account`;
  //   const supported = await Linking.canOpenURL(uri);
  //   if (supported) {
  //     await Linking.openURL(uri);
  //   } else {
  //     await Linking.openURL(uri);
  //   }

  // }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${StaticText.screen.my_profile.content.download_helofoto
          } https://play.google.com/store/apps/details?id=${env.playStoreId} | atau | https://apps.apple.com/${env.appStoreLocale}/app/${env.appName}/id${env.appStoreId} ${profileData?.user?.referral_code?.length &&
          ` | ${StaticText.screen.my_profile.content.referral_code}: ${profileData?.user?.referral_code}`
          }`,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  useEffect(() => {

    if (!!profileImageError) {
      Toast.show(profileImageError?.error ? profileImageError?.error : profileImageError)
    } else if (!!profileError) {
      Toast.show(typeof profileError?.error !== 'undefined' ? profileError?.error : profileError)
    }
  }, [profileImageError, profileError])

  const onChange = ({ name, value }) => {
    setForm((form) => {
      return {
        ...form,
        profile_image: {
          uri: value.uri,
        },
      }
    })



    if (value?.size > MAX_FILE_UPLOAD_SIZE) {
      setErrors((prev) => {
        return { ...prev, [name]: StaticText.alert.error }
      })
      Toast.show(StaticText.alert.upload_limit_error)
    } else {
      manageProfileImage({
        value
      })(profileImageUpdateDispatch)((response) => {
        Toast.show(StaticText.alert.record_update_success)
      })
      setErrors((prev) => {
        return { ...prev, [name]: null }
      })
      // onSubmit()
    }
  }

  // const onSubmit = () => {
  //   if (
  //     Object.values(errors).every((item) => !item) &&
  //     Object.values(form).every((item) => item || item?.trim()?.length > 0)
  //   ) {
  //     manageProfileImage(form)(profileImageUpdateDispatch)((response) => {
  //       Toast.show(StaticText.alert.record_update_success)
  //     })
  //   }
  // }

  useEffect(() => {
    isFocused && (showNavigation()(navigationDispatch), myProfile()(myProfileDispatch))
    !isFocused && clearProfileImage()(profileImageUpdateDispatch)
  }, [isFocused])

  const copyToClipboard = async (membershipCode) => {
    await Clipboard.setStringAsync(membershipCode)
    Toast.show(StaticText.alert.copy_clipboard_success)
  }

  // const getFileMimeType = (fileUri) => {
  //   let fileExt = fileUri.split(".").pop()
  //   if (
  //     fileExt == "jpeg" ||
  //     fileExt == "jpg" ||
  //     fileExt == "JPEG" ||
  //     fileExt == "JPG"
  //   ) {
  //     return "image/jpeg"
  //   } else if (fileExt == "PNG" || fileExt == "png") {
  //     return "image/png"
  //   } else if (fileExt == "GIF" || fileExt == "gif") {
  //     return "image/gif"
  //   }
  // }

  // const getFileName = (fileUri) => {
  //   return fileUri.split("/").pop()
  // }

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    })
    //console.log('profile picture', result)
    if (result?.mimeType == "image/jpeg" || result?.mimeType == "image/png") {
      if (result?.name && result.name != "" && result?.size) {
        onChange({ name: "profile_image", value: result })
      }
    } else {
      Alert.alert('Warring', 'You need to use JPEG or PNG file', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])
    }

  }

  return (
    <MyProfileScreen
      pickDocument={pickDocument}
      data={profileImageData?.user ? profileImageData : profileData}
      loading={profileLoading}
      onShare={onShare}
      onPress={onPress}
      profileImageLoad={profileImageLoading}
      copyToClipboard={copyToClipboard}
      onSignOut={onSignOut}
      
    />
  )
}

export default MyProfile
