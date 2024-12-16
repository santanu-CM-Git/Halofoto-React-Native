import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  Platform,
  StatusBar
} from "react-native";

import { REGISTER, FACEBOOK_LOGIN, GOOGLE_LOGIN, FORGOT_PASSWORD, APPLE_LOGIN } from "../../../constants/RouteNames";
import AppSettings from "../../../global/AppSettings";
import StaticText from "../../../global/StaticText";
import Input from "../../Helper/Form/Input";
import Icon from "../../Helper/Button/Icon";
import CheckBoxTick from "../../Helper/SvgImg/CheckBoxTick";
import styles from "./style";
import LogoInner from "../../Helper/SvgImg/LogoInner";
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import CheckBox from "../../Helper/SvgImg/CheckBox";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient';



export default function Login({
  inptPassword,
  onPress,
  onSubmit,
  onChange,
  errors,
  error,
  loading,
  onClickStaySignIn,
  staySignIn,
}) {
  return (

    // <ImageBackground
    //   resizeMode="cover"
    //   style={styles.overlayWrap}
    //   source={AppSettings.background_inner_image}
    // >
    <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
      <SafeAreaView>
      <ScrollView
        style={styles.scrollWrap}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrap}>
          <LogoInner/>
        </View>
        <Text style={styles.textHeader}>
          {StaticText.screen.login.heading}
        </Text>
        <View style={styles.formWrapp}>
          <Input
            wrapperStyle={styles.inputWrapp}
            labelText={StaticText.screen.login.form.email}
            labeStyle={styles.textLabel}
            inputStyle={styles.textInput}
            keyboardType="email"
            autoCapitalize="none"
            icon="envelop"
            inputContainerStyle={styles.inputContainer}
            returnKeyType="next"
            autoFocus={true}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
            onSubmitEditing={() => inptPassword.current.focus()}
            error={errors?.email || error?.email?.[0]}
          />
          <Input
            wrapperStyle={styles.inputWrapp}
            labelText={StaticText.screen.login.form.password}
            labeStyle={styles.textLabel}
            inputStyle={styles.textInput}
            secureTextEntry={true}
            autoCapitalize="none"
            icon="eye"
            inputContainerStyle={styles.inputContainer}
            returnKeyType="go"
            ref={inptPassword}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            onSubmitEditing={onSubmit}
            error={errors?.password || error?.password?.[0]}
          />
          <View style={styles.formWrappFooter}>
            <View style={styles.checkboxContainer}>
              <Pressable onPress={() => onClickStaySignIn()}>
                {staySignIn ? <CheckBoxTick />:<CheckBox />}
                
              </Pressable>
              <Text style={styles.textCheckLabel}>
                {StaticText.screen.login.form.chk_stay_login}
              </Text>
            </View>
            <Pressable onPress={() => onPress(FORGOT_PASSWORD)}>
              <Text style={styles.textCheckLabel}>
                {StaticText.screen.login.form.forgot_password}
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonWrap}>
            <RoundedCornerGradientStyleBlueFullWidth
              onPress={onSubmit}
              label={StaticText.button.login}
              disabled={loading}
              showLoader={loading}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.socialMediaLogin}>
          <View style={styles.textWrap}>
            <Text style={styles.textNewAccount}>{StaticText.screen.login.form.qry_new_account}</Text>
            <Pressable>
              <Text
                style={[styles.labelSignUp, styles.textSignLink]}
                onPress={() =>  (REGISTER)}
              >
                {StaticText.button.sign_up}
              </Text>
            </Pressable>
          </View>
          <View style={styles.iconBoxWrap}>
            {/* <Pressable onPress={() => onPress(FACEBOOK_LOGIN)}><Icon icon={"facebook"} wrapperStyle={styles.iconBox} /></Pressable> */}
            <Pressable onPress={() => onPress(GOOGLE_LOGIN)}><Icon icon={"google"} wrapperStyle={styles.iconBox} /></Pressable>
            {Platform.OS == 'ios' && <Pressable onPress={() => onPress(APPLE_LOGIN)}><Icon icon={"apple"} wrapperStyle={styles.iconBox} /></Pressable>}
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
      </LinearGradient>
    //  </ImageBackground>
     
  );
}
