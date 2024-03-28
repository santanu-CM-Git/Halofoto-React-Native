import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TextInput
} from "react-native"
import Carousel from 'react-native-banner-carousel';
import Modal from "react-native-modal";
import { FlashList } from "@shopify/flash-list"
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context"
import AppSettings from "../../../global/AppSettings"
import styles from "./style"
import DashboardHeader from "../../Helper/DashboardHeader"
import Colors from "../../../global/Colors"
import { WARENTY_REGISTRATION_PACKAGE_QR_CODE } from "../../../constants/RouteNames"
import DashboardButtons from "./DashboardButtons"
import StaticText from "../../../global/StaticText"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useState,useEffect } from "react";
import { Dropdown } from 'react-native-element-dropdown';

const datadropdown = [
  { label: 'Instagram', value: '1' },
  { label: 'Website', value: '2' },
  { label: 'Youtube', value: '3' },
  { label: 'Toko Kamera', value: '4' },
  { label: 'Influencer', value: '5' },
  { label: 'Teman', value: '6' },
  { label: 'Lainnya', value: '7' },
];

const BannerWidth = Dimensions.get('window').width;
const noOfNotification = 5;

const Home = ({
  loading,
  data,
  currentBannerIndex,
  setCurrentBannerIndex,
  screenHeight,
  screenWidth,
  onPress,
  regex,
  navMenus,
  profileLoading,
  profileData,
  notificationCount
}) => {
  // console.log(profileData,'profileDataprofileData')
  const [isModalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('0');
  const [dropdownError, setDropdownError] = useState('Silakan pilih salah satu opsi')
  const [isFocus, setIsFocus] = useState(false);
  const [other, setOther] = useState('')
  const [otherError, setOtherError] = useState('Silahkan tulis nama referensinya')
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    // if(profileData?.user?.tamron_user == "false"){
    //   setModalVisible(true)
    // }
  }, []);

  const updateReference = () => {
    console.log(value + ' ' + other,'firstttt');
    if (value === '0') {
      setDropdownError('Silakan pilih salah satu opsi');
      setOtherError(''); // Clear other error when dropdown is selected as '0'
    } else {
      setDropdownError('');
      if (value === '7') {
        if (other.trim() !== '') {
          console.log(value + ' ' + other, 'insideeee');
          setOtherError(''); // Clear other error when '7' is selected and other field is not empty
        } else {
          setOtherError('Silahkan tulis nama referensinya');
        }
      } else {
        setOtherError(''); // Clear other error when '7' is not selected
      }
    }
  }

  return (

    // <ImageBackground
    //   resizeMode="cover"
    //   style={styles.overlayWrap}
    //   source={AppSettings.background_inner_image}
    // >
    <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>

      <DashboardHeader profileData={{
        profile_status: profileLoading,
        profile_info: profileData,
      }} onPress={onPress} />
      <View style={styles.catalogBanner}>
        {/* <ImageBackground
          resizeMode="cover"
          style={styles.overlayWrapBanner}
          source={AppSettings.banner_overlay}
        > */}
        <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrapBanner}>
          {/* <View style={styles.bannerMainWrap}>
                  {!loading && data?.length &&
                    <FlashList
                      pagingEnabled
                      horizontal
                      onScroll={(e) => {
                        setCurrentBannerIndex((e.nativeEvent.contentOffset.x / screenWidth).toFixed(0))
                      }}
                      data={data}
                      showsHorizontalScrollIndicator={false}
                      scrollEnabled
                      scrollEventThrottle={16}
                      estimatedItemSize={280}
                      renderItem={({ item, index }) => {
                        return (
                          <View style={{ width: screenWidth, height: 210 }}>
                            <Image
                              source={{ uri: item?.banner_image }}
                              style={styles.bannerBg}
                            />
                            <View style={styles.textWrap}>
                              {item?.title && <Text style={styles.bannerText}>{item?.title?.replace(regex, '')}</Text>}
                              {item?.description && <Text style={styles.bannerSubText}>{item?.description?.replace(regex, '')}</Text>}
                            </View>
                          </View>
                        )
                      }}
                    />}
                </View> */}
          <View style={styles.bannerMainWrap}>
            {!loading && data?.length &&
              <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageIndicatorStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                activePageIndicatorStyle={{ backgroundColor: Colors.white }}
                pageSize={BannerWidth}
              >
                {data.map((item, index) => {
                  return (
                    <View style={{ width: screenWidth, height: responsiveHeight(25) }}>
                      <Image
                        source={{ uri: item?.banner_image }}
                        style={styles.bannerBg}
                      />
                      <View style={styles.textWrap}>
                        {item?.title && <Text style={styles.bannerText}>{item?.title?.replace(regex, '')}</Text>}
                        {item?.description && <Text style={styles.bannerSubText}>{item?.description?.replace(regex, '')}</Text>}
                      </View>
                    </View>
                  )
                })}
              </Carousel>}
          </View>


          {/* {!loading && data?.length && <>
            <View style={styles.bannerNavWrap}>
              {data.map((item, index) => <View style={[styles.bannerNav, { backgroundColor: index == currentBannerIndex ? Colors.white : 'rgba(255, 255, 255, 0.6)' }]} key={item?.id}></View>)}
            </View>
          </>} */}
        </LinearGradient>
        {/* </ImageBackground> */}
      </View>

      <View style={styles.buttonWrap}>
        <RoundedCornerGradientStyleBlueFullWidth
          onPress={() => onPress(WARENTY_REGISTRATION_PACKAGE_QR_CODE)}
          label={StaticText.button.product_registration}
        // disabled={loading}
        // showLoader={loading}
        />
      </View>
      <View style={styles.tabWrap}>
        {navMenus.length && navMenus.map((item, index) =>
          <DashboardButtons key={item.name} menu={item} onPress={onPress} isNewNotification={notificationCount} />
        )}
      </View>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        animationInTiming={1000}
        animationOut="slideOutDown"
        style={{
          margin: 0, // Add this line to remove the default margin
          justifyContent: 'flex-end',
        }}>
        {/* <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: 50, width: 50, borderRadius: 25, position: 'absolute', bottom: '75%', left: '45%', right: '45%' }}>
          <Icon name="cross" size={30} color="#900" onPress={toggleModal} />
        </View> */}
        <View style={{ height: '40%', backgroundColor: Colors.link_water, position: 'absolute', bottom: 0, width: '100%' }}>
          <View style={{ padding: 20 }}>
            <View style={[styles.inputWrapp, { height: responsiveHeight(10) }]}>
              <Text style={styles.labelText}>Dari mana anda mengetahui Halofoto App?</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemTextStyle={styles.itemTextStyle}
                iconStyle={styles.iconStyle}
                data={datadropdown}
                //search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'pilih satu opsi' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setDropdownError('')
                  setIsFocus(false);
                }}
              />

            </View>
            {dropdownError ?
              <Text style={styles.labelErrorText}>{dropdownError}</Text> : <></>}
            {value == '7' ?
              <>
                <View style={[styles.inputWrapp, { height: responsiveHeight(10), marginTop: responsiveHeight(4) }]}>
                  <TextInput
                    style={styles.inputTextColor}
                    placeholder={" silahkan tulis nama referensinya"}
                    placeholderTextColor={
                      "#2F2F2F"
                    }
                    onChangeText={(value) => {
                      setOther(value)
                      setOtherError('')
                    }}
                    // onFocus={() => setFocused(true)}
                    // onBlur={() => setFocused(false)}
                    multiline={false}
                  />

                </View><Text style={styles.labelErrorText}>{otherError}</Text></> : <></>}
            <View style={[styles.buttonWrap, { marginTop: responsiveHeight(3) }]}>
              <RoundedCornerGradientStyleBlueFullWidth
                onPress={() => updateReference()}
                label={"Kirim"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
    // </ImageBackground>


  )
}
export default Home