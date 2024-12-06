import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, Platform } from "react-native"
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { GlobalContext } from '../../../context/Provider'
import dashboardBanner from '../../../context/actions/dashboard/dashboardBanner'
import myProfile from '../../../context/actions/dashboard/myProfile'
import notificationCounter from '../../../context/actions/dashboard/notificationCounter'
import Orientation from 'react-native-orientation-locker';

import { showNavigation } from '../../../context/actions/common/manageNavigation'
import HomeScreen from '../../../screens/Dashboard/Home'
import StaticText from '../../../global/StaticText'
import { MY_PRODUCT_LIST, NEWS_LIST, HALO_STORY_LIST, PRODUCT_CATALOG, REVIEW_LIST, REDEMPTION_CENTRE, VOUCHER, MY_PROFILE, POIN_SAYA, MESSAGE_LIST, GIFT_COUPON } from '../../../constants/RouteNames'

const Home = () => {
  const { dashboardBannerDispatch, dashboardBannerState: { error, loading, data },
    navigationDispatch, navigationState: { display },
    myProfileState: { profileError, profileLoading, profileData },
    counterDispatch, counterState: { counterData, counterError, counterLoading },
    myProfileDispatch } = useContext(GlobalContext)

  const { navigate, goBack } = useNavigation()
  const isFocused = useIsFocused()
  const { height, width } = Dimensions.get('window')
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const regex = /(<([^>]+)>)/ig
  const navMenus = [
    {
      name: 'my_product',
      label: StaticText.screen.dashboard.tabs.my_product,
      navigation: MY_PRODUCT_LIST,
      component: 'MyProduct'

    },
    {
      name: 'coupon',
      label: StaticText.screen.dashboard.tabs.coupon,
      navigation: VOUCHER,
      component: 'Coupon'
    },
    {
      name: 'redemption_center',
      label: StaticText.screen.dashboard.tabs.redemption_center,
      navigation: REDEMPTION_CENTRE,
    },
    {
      name: 'product_catalog',
      label: StaticText.screen.dashboard.tabs.product_catalog,
      navigation: PRODUCT_CATALOG,
    },
    {
      name: 'halo_foto_story',
      label: StaticText.screen.dashboard.tabs.halo_foto_story,
      navigation: HALO_STORY_LIST
    },
    {
      name: 'review_center',
      label: StaticText.screen.dashboard.tabs.review_center,
      navigation: REVIEW_LIST,
      component: 'ReviewList'
    },
    {
      name: 'my_points',
      label: StaticText.screen.dashboard.tabs.my_points,
      navigation: POIN_SAYA,
      component: 'PoinSaya'
    },
    {
      name: 'news',
      label: StaticText.screen.dashboard.tabs.news,
      navigation: NEWS_LIST
    },
    {
      name: 'message',
      label: StaticText.screen.dashboard.tabs.message,
      navigation: MESSAGE_LIST,
      component: 'MessageList'
    },
    {
      name: 'gift_coupon',
      label: StaticText.screen.dashboard.tabs.gift_coupon,
      navigation: GIFT_COUPON,
      component: 'GiftCoupon'
    }
  ]


  useEffect(() => {
    isFocused && (
      showNavigation()(navigationDispatch),
      myProfile()(myProfileDispatch),
      dashboardBanner()(dashboardBannerDispatch),
      notificationCounter()(counterDispatch)
    )
  }, [isFocused])

  useEffect(() => {
    if (Platform.OS == 'ios') {
      Orientation.lockToPortrait();
    }
  }, [])

  const onPress = route => (route == MY_PRODUCT_LIST) ? navigate(route, {
    slideIndex: 0
  }) : navigate(route)

  //console.log(counterData,'uuuuuuuu')
  return (
    <HomeScreen
      loading={loading}
      data={data}
      currentBannerIndex={currentBannerIndex}
      screenHeight={height}
      screenWidth={width}
      setCurrentBannerIndex={setCurrentBannerIndex}
      onPress={onPress}
      regex={regex}
      navMenus={navMenus}
      profileLoading={profileLoading}
      profileData={profileData}
      notificationCount={counterData}
    />
  )
}
export default Home