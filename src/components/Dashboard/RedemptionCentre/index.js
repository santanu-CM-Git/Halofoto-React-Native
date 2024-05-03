import { useNavigation, useFocusEffect, useIsFocused } from "@react-navigation/native"
import React, { useContext, useEffect, useState, useCallback } from "react"
import { Alert, InteractionManager, Share } from "react-native"
import redemptionCentreList from "../../../context/actions/dashboard/redemptionCentreList"
import { GlobalContext } from "../../../context/Provider"
import { hideNavigation } from "../../../context/actions/common/manageNavigation"
import RedemptionCentreListScreen from "../../../screens/Dashboard/RedemptionCentre/RedemptionCentreList"
import { clearVoucherState } from "../../../context/actions/dashboard/reedemVoucher"
import StaticText from "../../../global/StaticText"
import env from '../../../config/env'

const RedemptionCentre = () => {
  const {
    myProfileState: { profileError, profileLoading, profileData },
    redemptionCentreListState: { data, error, loading },
    redemptionCentreListDispatch,
    reedemVoucherState: {
      reedemVoucherData,
      reedemVoucherError,
      reedemVoucherLoading,
    },
    reedemVoucherDispatch,
    navigationDispatch,
    navigationState: { display },
  } = useContext(GlobalContext)
  const { navigate, goBack } = useNavigation()
  const [currentPage, setCurrentPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const [pagination, setPagination] = useState(false)
  const [voucherData, setVoucherData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(0)
  const isFocused = useIsFocused()

  const onPress = (route, params) =>
    route ? navigate(route, params) : goBack()


  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        reedemVoucherData?.message &&
          (clearVoucherState()(reedemVoucherDispatch),
          redemptionCentreList({
            page: currentPage,
            categgory: currentCategory > 0 ? currentCategory : "",
          })(redemptionCentreListDispatch))
        hideNavigation()(navigationDispatch)
      })
      return () => task.cancel()
    }, [])
  )

  useEffect(() => {
    let params = {
      page: currentPage,
      categgory: currentCategory > 0 ? currentCategory : "",
    }
    redemptionCentreList(params)(redemptionCentreListDispatch)
    if (currentPage > 1 && !pagination) {
      setPagination(true)
    } else if (currentPage == 1) {
      setPagination(false)
    }
    return () => {}
  }, [currentPage, currentCategory, isFocused])

  const onShare = async () => {
    try {
      // const result = await Share.share({
      //   message: `${StaticText.screen.my_profile.content.download_helofoto} https://play.google.com/store/apps`,
      // })
      const result = await Share.share({
        message: `${StaticText.screen.my_profile.content.download_helofoto
          }  Android https://play.google.com/store/apps/details?id=${env.playStoreId} | ATAU | Halofoto App untuk IOS https://apps.apple.com/${env.appStoreLocale}/app/${env.appName}/id${env.appStoreId} | Jangan lewatkan Podcast yang menarik, berita terbaru dan segala merchandise keren GRATIS dari Halofoto App. ${profileData?.user?.referral_code?.length &&
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
    if (!loading && data?.vouchers) {
      if (currentPage == 1) {
        setVoucherData(data?.vouchers?.data)
      } else {
        setVoucherData((voucherData) => [
          ...voucherData,
          ...data?.vouchers?.data,
        ])
      }
      setTotalPages(data.vouchers.last_page)
    }
    if (refreshing && !loading) {
      setRefreshing(false)
    }
    return () => {}
  }, [loading])

  const onEndReached = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  const onRefresh = () => {
    if (currentPage > 1) {
      setRefreshing(true)
      setCurrentPage(1)
    }
  }

  const onChangeCategory = (category) => {
    setCurrentPage(1)
    setCurrentCategory(category)
  }

  return (
    <RedemptionCentreListScreen
      voucherData={voucherData}
      data={data}
      loading={pagination || refreshing ? false : loading}
      isLoading={loading}
      onPress={onPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onChangeCategory={onChangeCategory}
      currentCategory={currentCategory}
      onShare={onShare}
    />
  )
}

export default RedemptionCentre
