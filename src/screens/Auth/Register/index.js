import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Animated,
  TextInput
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LinearGradient from 'react-native-linear-gradient';
import { LOGIN } from "../../../constants/RouteNames"
import Container from "../../Helper/Container"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import Input from "../../Helper/Form/Input"
import InputSmall from "../../Helper/Form/InputSmall"
import Submit from "../../Helper/Button/Submit"
import CountryExtCodeModal from "../../Helper/Modal/CountryExtCodeModal"
import RadioModalSmall from "../../Helper/Modal/RadioModalSmall"
import CountryModal from "../../Helper/Modal/CountryModal"
import styles from "./style"
import CheckBoxTick from "../../Helper/SvgImg/CheckBoxTick"
import CheckBox from "../../Helper/SvgImg/CheckBox"
import NavigationHeader from "../../Helper/NavigationHeader"
import CalendarModal from "../../Helper/Modal/CalendarModal"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Instagram', value: '1' },
  { label: 'Website', value: '2' },
  { label: 'Youtube', value: '3' },
  { label: 'Toko Kamera', value: '4' },
  { label: 'Influencer', value: '5' },
  { label: 'Teman', value: '6' },
  { label: 'Lainnya', value: '7' },
];

export default function Register({
  form,
  inptEmail,
  inptPassword,
  inptPhone,
  inptAddressLine1,
  countryList,
  countryListloading,
  showLoader,
  onPress,
  onSubmit,
  onChange,
  setIsTamronUser,
  isTamronUser,
  setCities,
  cities,
  errors,
  error,
}) {
  let AnimatedHeader = new Animated.Value(0)
  const Header_Maximum_Height = 56
  const Header_Min_Height = 56

  const [value, setValue] = useState('0');
  const [isFocus, setIsFocus] = useState(false);
  const [other, setOther] = useState('')

  return (
    <Container style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView style={styles.containerWrap}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            style={styles.containerWrap}
          >
            <NavigationHeader
              AnimatedHeader={AnimatedHeader}
              headerMaxHeight={Header_Maximum_Height}
              headerMinHeight={Header_Min_Height}
              previosPageLabel={StaticText.screen.register.heading}
              previousBtnOnpress={() => onPress(LOGIN)}
            />

            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: { y: AnimatedHeader },
                    },
                  },
                ],
                { useNativeDriver: false }
              )}
              style={styles.serollWrap}
              keyboardShouldPersistTaps={"handled"}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formWrapp}>
                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.register.form.name}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  icon="singleman"
                  autoCapitalize="words"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  autoFocus={true}
                  onChangeText={(value) => {
                    onChange({ name: "name", value });
                  }}
                  onSubmitEditing={() => inptEmail.current.focus()}
                  error={errors?.name || error?.errors?.name?.[0]}
                />
                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.register.form.email}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  keyboardType={"email-address"}
                  autoCapitalize="none"
                  icon="envelop"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "email", value });
                  }}
                  ref={inptEmail}
                  onSubmitEditing={() => inptPassword.current.focus()}
                  error={errors?.email || error?.errors?.email?.[0]}
                />

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.register.form.password}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon="eye"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "password", value });
                  }}
                  ref={inptPassword}

                  error={errors?.password || error?.errors?.password?.[0]}
                />

                <View style={[styles.callWrapp]}>
                  <Text style={[styles.labelText, styles.labelTextSingle]}>
                    {StaticText.screen.register.form.phone}</Text>
                  <View style={[styles.callWrappInner]}>
                    <CountryExtCodeModal
                      wrapperStyle={[styles.inputWrapSmall]}
                      heading={StaticText.screen.register.form.country_code}
                      value={
                        form?.phone_country_code?.code
                          ? `${form?.phone_country_code?.code} - ${form?.phone_country_code?.ext_code}`
                          : ``
                      }
                      fields={countryList}
                      loadStatus={countryListloading}
                      onSelect={(value) => {
                        onChange({ name: "phone_country_code", value });
                      }}
                      style={styles}
                      error={
                        errors?.phone_country_code ||
                        error?.errors?.phone_country_code?.[0]
                      }
                    />

                    <InputSmall
                      wrapperStyle={[styles.inputWrapNumber]}
                      labeStyle={styles.labelTextSmall}
                      inputStyle={styles.inputSmall}
                      keyboardType={"phone-pad"}
                      autoCapitalize="none"
                      icon="call"
                      inputContainerStyle={styles.inputContainerSmall}
                      returnKeyType="next"
                      onChangeText={(value) => {
                        onChange({ name: "phone", value });
                      }}
                      style={styles}
                      error={errors?.phone || error?.errors?.phone?.[0]}
                      ref={inptPhone}
                    />
                  </View>
                </View>

                <View style={styles.genderDobWrap}>
                  <RadioModalSmall
                    heading={StaticText.screen.register.form.gender}
                    value={
                      form?.gender
                        ? StaticText.screen.register.form[form?.gender]
                        : ""
                    }
                    fields={[
                      {
                        label: StaticText.screen.register.form.male,
                        value: `male`,
                      },
                      {
                        label: StaticText.screen.register.form.female,
                        value: `female`,
                      },
                    ]}
                    onSelect={(value) => {
                      onChange({ name: "gender", value });
                    }}
                    style={styles}
                    error={errors?.gender || error?.errors?.gender?.[0]}

                  />

                  <CalendarModal
                    heading={StaticText.screen.register.form.dob}
                    value={form?.dob ? form?.dob : ``}
                    onSelect={(value) => {
                      value?.length && onChange({ name: "dob", value });
                    }}
                    style={styles}
                    labeStyle={styles.labelText}
                    error={errors?.dob || error?.errors?.dob?.[0]}
                  />
                </View>

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.register.form.address_line1}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  autoCapitalize="words"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "address_line1", value });
                  }}
                  error={
                    errors?.address_line1 || error?.errors?.address_line1?.[0]
                  }
                  ref={inptAddressLine1}
                />

                <CountryModal
                  heading={StaticText.screen.register.form.country}
                  value={form?.country?.name ? `${form?.country?.name}` : ``}
                  fields={countryList}
                  loadStatus={countryListloading}
                  onSelect={(value) => {
                    setCities([])
                    onChange({ name: "state", value: '' })
                    onChange({ name: "city", value: '' })
                    onChange({ name: "country", value });
                  }}
                  style={styles}
                  error={errors?.country || error?.errors?.country?.[0]}
                />

                {form?.country?.id && form?.country?.id == 103 && (
                  <CountryModal
                    heading={StaticText.screen.register.form.state}
                    value={form?.state?.name ? `${form?.state?.name}` : ``}
                    fields={countryList.filter(country => country.id == 103)[0]?.provinces}
                    loadStatus={countryListloading}
                    onSelect={(value) => {
                      setCities(value?.childrens)
                      onChange({ name: "city", value: '' })
                      onChange({ name: "state", value })
                    }}
                    style={styles}
                    displayList={'state'}
                    error={errors?.state || error?.errors?.state?.[0]}
                  />
                )}

                {cities?.length > 0 &&
                  <CountryModal
                    heading={StaticText.screen.register.form.city}
                    value={form?.city?.name ? `${form?.city?.name}` : ``}
                    fields={cities}
                    loadStatus={countryListloading}
                    onSelect={(value) => {
                      onChange({ name: "city", value })
                    }}
                    style={styles}
                    displayList={'city'}
                    error={errors?.city || error?.errors?.city?.[0]}
                  />
                }

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.register.form.insta}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  autoCapitalize="none"
                  onChangeText={(value) => {
                    onChange({ name: "insta_id", value })
                  }}
                  error={errors?.insta_id || error?.errors?.insta_id?.[0]}
                />
                {/* <View style={[styles.inputWrapp, { height: responsiveHeight(10) }]}>
                  <Text style={styles.labelText}>Dari mana anda mengetahui Halofoto App?</Text>
                  <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    itemTextStyle={styles.itemTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
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
                      onChange({ name: "ques", value: item.value });
                      setIsFocus(false);
                      if(item.value != '7'){
                        onChange({ name: "other", value:"" })
                      }
                    }}
                  />
                </View> */}
                {/* {value == '7'?
                <View style={[styles.inputWrapp, { height: responsiveHeight(10) }]}>
                <TextInput
                  style={styles.inputTextColor}
                  placeholder={""}
                  placeholderTextColor={
                   "#fff"
                  }
                  onChangeText={(value) => {
                    setOther(value)
                    onChange({ name: "other", value });
                  }}
                  // onFocus={() => setFocused(true)}
                  // onBlur={() => setFocused(false)}
                  multiline={false}
                />
                </View>:<></>} */}
                <View style={styles.formWrappFooter}>
                  <View style={styles.checkboxContainer}>
                    <Pressable onPress={() => {
                      onChange({ name: "tamron_user", value: !isTamronUser }),
                        setIsTamronUser(!isTamronUser)
                    }}>
                      {isTamronUser ? <CheckBoxTick /> : <CheckBox />}
                    </Pressable>
                    <Text style={styles.checkLabel}>{StaticText.screen.register.form.tamron_user}</Text>
                  </View>
                </View>

                <View style={styles.buttonWrap}>
                  <RoundedCornerGradientStyleBlueFullWidth
                    onPress={onSubmit}
                    label={StaticText.button.next}
                    disabled={showLoader}
                    showLoader={showLoader}
                  />
                </View>

                {/* <Submit
                  onPress={onSubmit}
                  label={StaticText.button.next}
                  labelStyle={styles.buttonText}
                  btnStyle={styles.buttonWrap}
                  disabled={showLoader}
                  showLoader={showLoader}
                /> */}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  )
}
