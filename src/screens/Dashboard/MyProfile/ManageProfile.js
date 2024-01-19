import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Container from "../../Helper/Container";
import AppSettings from "../../../global/AppSettings";
import StaticText from "../../../global/StaticText";
import Colors from "../../../global/Colors";
import Input from "../../Helper/Form/Input";
import InputSmall from "../../Helper/Form/InputSmall";
import Submit from "../../Helper/Button/Submit";
import CountryExtCodeModal from "../../Helper/Modal/CountryExtCodeModal";
import RadioModalSmall from "../../Helper/Modal/RadioModalSmall";
import CountryModal from "../../Helper/Modal/CountryModal";
import CheckBoxTick from "../../Helper/SvgImg/CheckBoxTick";
import CheckBox from "../../Helper/SvgImg/CheckBox";
import EditSmall from "../../Helper/SvgImg/EditSmall";
import NavigationHeader from "../../Helper/NavigationHeader";
import CalendarModal from "../../Helper/Modal/CalendarModal";

import styles from "./manageProfileStyle";
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";

const ManageProfile = ({
  onChange,
  onSubmit,
  inptEmail,
  inptPhone,
  inptAddressLine1,
  form,
  errors,
  error,
  onPress,
  showLoader,
  countryList,
  countryListloading,
  isTamronUser,
  setIsTamronUser,
  setCities,
  cities,
  loading,
  pickDocument,
  profileImage,
}) => {
  let AnimatedHeader = new Animated.Value(0);
  const Header_Maximum_Height = 56;
  const Header_Min_Height = 56;
  
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
              previosPageLabel={StaticText.screen.my_profile_detail.heading}
              previousBtnOnpress={() => onPress()}
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
              {loading ? (
                <View style={styles.bannerMainWrap}>
                  <ActivityIndicator size="large" color={Colors.royal_blue} />
                </View>
              ) : (
                <>
                  <Pressable
                    style={styles.nameCard}
                    onPress={() => pickDocument()}
                  >
                    <View style={styles.nameContentWrap}>
                      <LinearGradient
                        colors={[Colors.spring_green, Colors.royal_blue_3]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.profileTitleOuter}
                      >
                        {form?.profile_thumb_image || form?.profile_image || profileImage ? (
                          <Image
                            source={{
                              uri: profileImage
                                ? profileImage
                                : form?.profile_thumb_image ? form?.profile_thumb_image : form?.profile_image,
                            }}
                            style={styles.profileImage}
                            resizeMode="cover"
                            resizeMethod="resize"
                            loadingIndicatorSource={
                              <ActivityIndicator
                                size="small"
                                color={Colors.royal_blue}
                              />
                            }
                          />
                        ) : (
                          <Text style={styles.profileTitle}>
                            {form?.name?.match(/\b(\w)/g).join("")}
                          </Text>
                        )}
                      </LinearGradient>
                      <View style={styles.editIconWrap}>
                        <EditSmall />
                      </View>
                    </View>
                  </Pressable>
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
                      value={form?.name}
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
                      value={form?.email}
                      ref={inptEmail}
                      error={errors?.email || error?.errors?.email?.[0]}
                    />

                    <View style={[styles.callWrapp]}>
                      <Text style={[styles.labelText, styles.labelTextSingle]}>
                        {StaticText.screen.register.form.phone}
                      </Text>
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
                          value={form?.phone}
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
                          form?.gender &&
                          StaticText.screen.register.form[form?.gender]
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
                        value={form?.dob && form?.dob}
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
                      icon="location"
                      autoCapitalize="words"
                      inputContainerStyle={styles.inputContainer}
                      returnKeyType="next"
                      onChangeText={(value) => {
                        onChange({ name: "address_line1", value });
                      }}
                      value={form?.address_line1}
                      error={
                        errors?.address_line1 ||
                        error?.errors?.address_line1?.[0]
                      }
                      ref={inptAddressLine1}
                    />

                    <CountryModal
                      heading={StaticText.screen.register.form.country}
                      value={form?.country?.name && `${form?.country?.name}`}
                      fields={countryList}
                      loadStatus={countryListloading}
                      onSelect={(value) => {
                       setCities([]);
                       onChange({ name: "state", value: "" });
                       onChange({ name: "city", value: "" });
                        onChange({ name: "country", value });
                      }}
                      style={styles}
                      error={errors?.country || error?.errors?.country?.[0]}
                    />

                    {((form?.country?.id && form?.country?.id == 103) ||
                      (form?.country?.id && form?.country?.id == 103)) && (
                        <CountryModal
                          heading={StaticText.screen.register.form.state}
                          value={form?.state?.name && form?.state?.name}
                          fields={
                            countryList.filter((country) => country.id == 103)[0]
                              ?.provinces
                          }
                          loadStatus={countryListloading}
                          onSelect={(value) => {
                            setCities(value?.childrens);
                            onChange({ name: "city", value: "" });
                            onChange({ name: "state", value });
                          }}
                          style={styles}
                          displayList={"state"}
                          error={errors?.state || error?.errors?.state?.[0]}
                        />
                      )}

                    {cities?.length > 0 && (
                      <CountryModal
                        heading={StaticText.screen.register.form.city}
                        value={form?.city?.name && form?.city?.name}
                        fields={cities}
                        loadStatus={countryListloading}
                        onSelect={(value) => {
                          onChange({ name: "city", value });
                        }}
                        style={styles}
                        displayList={"city"}
                        error={errors?.city || error?.errors?.city?.[0]}
                      />
                    )}

                    <Input
                      wrapperStyle={styles.inputWrapp}
                      labelText={StaticText.screen.register.form.insta}
                      labeStyle={styles.labelText}
                      inputStyle={styles.input}
                      inputContainerStyle={styles.inputContainer}
                      returnKeyType="next"
                      autoCapitalize="none"
                      onChangeText={(value) => {
                        onChange({ name: "insta_id", value });
                      }}
                      value={form?.insta_id != 'null'?form?.insta_id:''}
                      error={errors?.insta_id || error?.errors?.insta_id?.[0]}
                    />

                    <View style={styles.formWrappFooter}>
                      <View style={styles.checkboxContainer}>
                        <Pressable
                          onPress={() => {
                            onChange({
                              name: "tamron_user",
                              value: !isTamronUser,
                            }),
                              setIsTamronUser(!isTamronUser);
                          }}
                        >
                          {(isTamronUser && isTamronUser != 'false') ? <CheckBoxTick /> : <CheckBox />}
                        </Pressable>
                        <Text style={styles.checkLabel}>
                          {StaticText.screen.register.form.tamron_user}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.buttonWrap}>
                      <RoundedCornerGradientStyleBlueFullWidth
                        onPress={onSubmit}
                        label={StaticText.button.update_profile}
                        disabled={showLoader}
                        showLoader={showLoader}
                      />
                    </View>
                  </View>
                </>
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  );
};

export default ManageProfile;
