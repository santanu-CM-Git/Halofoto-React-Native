import React, {
  useState,
  useCallback,
  useEffect
} from "react"
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
  Alert,
} from "react-native";

import RenderHtml from "react-native-render-html";
import AppSettings from "../../../../global/AppSettings";
import StaticText from "../../../../global/StaticText";
import BluePoints from "../../../Helper/SvgImg/BluePoints";
import YellowPoints from "../../../Helper/SvgImg/YellowPoints";
import styles from "./style";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import Colors from "../../../../global/Colors";
import RoundedCornerGradientStyleBlueFullWidth from "../../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import TickGreen from "../../../Helper/SvgImg/TickGreen";
import { MY_PROFILE_MANAGE, MY_PROFILE } from "../../../../constants/RouteNames";
import { useFocusEffect } from "@react-navigation/native"

const SingleRedemption = ({
  data,
  loading,
  onPress,
  onSubmit,
  reedemVoucherLoading,
  reedemVoucherData,
}) => {
  //console.log(data,'dtatadatadtata')
  const [addressStatus, setAddressStatus] = useState(false)
  const { width } = useWindowDimensions();
  const contentDetails = {
    html: `<div style="color:white;word-wrap:break-word;font-size:18px;font-weight:400;">${data?.voucher_details?.content?.length
        ? data?.voucher_details?.content
        : ``
      }</div>`,
  };

  useEffect(() => {
    console.log('useEffectbbbbbb', data)
    setAddressStatus(data?.address_status)
  }, [])

  useFocusEffect(
    useCallback(() => {
      console.log('useFocusEffectbbbbbb', data)
      setAddressStatus(data?.address_status)
    }, [data])
  )

  const checkbefore = (id, status) => {
    //console.log(id)
    console.log(status, 'status from check before')
    //onSubmit(id)
    if (status == false) {
      Alert.alert('', 'Mohon Pastikan Kamu Sudah Memasukkan Nomor Telpon dan Alamat Yang Benar', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => onPress(MY_PROFILE_MANAGE) },
      ])
    } else {
      onSubmit(id)
    }
  }

  return (
    <>
      <View style={styles.container}>
        {/* <ImageBackground
          resizeMode="cover"
          style={styles.overlayWrap}
          source={AppSettings.background_inner_image_dark}
        > */}
        <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
          <SafeAreaView>
            <AnimatedHeader
              label={StaticText.screen.redemption_detail.heading}
              mainWrapperStyle={styles.topHeader}
              mainWrapperConditionalStyle={[
                styles.topHeaderAdditional,
                styles.topHeaderAnimatedActive,
              ]}
              innerWraperStyle={styles.titleHolder}
              buttonWrapStyle={styles.backWrap}
              labelStyle={styles.pageHeading}
              onPress={onPress}
            />
            <ScrollView style={styles.contentWrap}>
              {loading ? (
                <ActivityIndicator size="large" color={Colors.royal_blue} />
              ) : (
                <>
                  {data?.voucher_details && (
                    <>
                      <View style={styles.bannerWrap}>
                        <View style={styles.couponContent}>
                          <Text style={styles.textCardHeading}>
                            {StaticText.screen.redemption_detail.content.redeem}
                          </Text>
                          <View style={styles.pointsInnerWrap}>
                            <Text style={styles.textDigitSmall}>
                              {data?.voucher_details?.point}
                            </Text>
                            <Text style={styles.textCardSmall}>
                              {StaticText.screen.redemption_detail.content.point}
                            </Text>
                            <View style={styles.piontsIcoBanner}>
                              {data?.voucher_details?.point_category?.id == 1 ? (
                                <YellowPoints />
                              ) : (
                                <BluePoints />
                              )}
                            </View>
                          </View>
                          <Text style={styles.textCardContent}>
                            {
                              StaticText.screen.redemption_detail.content
                                .total_point
                            }{" "}
                            :
                          </Text>
                          <View style={styles.bannerPointsSmallWrap}>
                            <View style={styles.bannerSmallPointWrap}>
                              <Text style={styles.textDigitBottom}>
                                {data?.user_points?.halofoto_points?.point}
                              </Text>
                              <Text style={styles.textCardBottom}>
                                {
                                  StaticText.screen.redemption_detail.content
                                    .point
                                }
                              </Text>
                              <View style={styles.piontsIcoSmall}>
                                <YellowPoints />
                              </View>
                            </View>
                            <View style={styles.bannerSmallPointWrap}>
                              <Text style={styles.textDigitBottom}>
                                {data?.user_points?.blue_points?.point}
                              </Text>
                              <Text style={styles.textCardBottom}>
                                {
                                  StaticText.screen.redemption_detail.content
                                    .point
                                }
                              </Text>
                              <View style={styles.piontsIcoSmall}>
                                <BluePoints />
                              </View>
                            </View>
                          </View>
                        </View>
                        {data?.voucher_details?.voucher_image &&
                          data?.voucher_details?.voucher_image?.length > 0 && (
                            <View style={styles.imageBox}>
                              <Image
                                source={{
                                  uri: `${data?.voucher_details?.voucher_image}`,
                                }}
                                loadingIndicatorSource={AppSettings.loader_image}
                                style={styles.couponCardImg}
                                resizeMode="cover"
                                resizeMethod="resize"
                              />
                            </View>
                          )}
                      </View>
                      {data?.voucher_details?.voucher_category && (
                        <Text style={styles.textContentHeading}>
                          {data?.voucher_details?.voucher_category?.name}
                        </Text>
                      )}
                      {data?.voucher_details?.title && (
                        <Text style={styles.textContentName}>
                          {data?.voucher_details?.title}
                        </Text>
                      )}
                      <View style={styles.contentInnerWrap}>
                        <RenderHtml
                          contentWidth={width}
                          source={contentDetails}
                          enableExperimentalMarginCollapsing={true}
                        />
                      </View>

                      {reedemVoucherData?.message?.length ? (
                        <>
                          {reedemVoucherData?.message?.length && (
                            <View style={styles.buttonTickWrap}>
                              <TickGreen color={'#32bea6'} />
                              <Text style={styles.textBottom}>
                                {
                                  StaticText.screen.redemption_detail.content
                                    .success_text
                                }
                              </Text>
                            </View>
                          )}
                        </>
                      ) : (
                        <>
                          {((data?.voucher_details?.point_category_id == 1 &&
                            data?.user_points?.halofoto_points?.point >=
                            data?.voucher_details?.point) ||
                            (data?.voucher_details?.point_category_id == 2 &&
                              data?.user_points?.blue_points?.point >=
                              data?.voucher_details?.point)) && (
                              <View style={styles.uploadButtonWrap}>
                                <RoundedCornerGradientStyleBlueFullWidth
                                  onPress={() =>
                                    checkbefore(data?.voucher_details?.id, addressStatus)
                                  }
                                  label={StaticText.button.change_point}
                                  disabled={loading}
                                  showLoader={reedemVoucherLoading}
                                />
                              </View>
                            )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
        {/* </ImageBackground> */}
      </View>
    </>
  );
};

export default SingleRedemption;
