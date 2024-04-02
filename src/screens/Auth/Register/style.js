import { StyleSheet, StatusBar, Platform } from "react-native";
import Colors from "../../../global/Colors";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  inputWrapSmall: {
    width: '40%',
    marginLeft: -10,
    marginRight: 20,
  },
  inputWrapNumber: {
    width: '60%',
  },

  callWrapp: {
    height: 90,
    marginBottom: 30,
    backgroundColor: Colors.alto_1,
    borderRadius: 20,
  },

  callWrappInner: {
    marginTop: 10,
    paddingLeft: 22,
    paddingRight: 22,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
  },

  containerWrap: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  serollWrap: {
    display: "flex",
    width: "100%",
    marginBottom: Platform.OS == "android" ? 10 : 0,
  },

  logoWrap: {
    height: 45,
    width: "100%",
    marginBottom: 55,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
  },

  logoSmall: {
    height: 40,
    width: 97,
  },

  headerText: {
    fontSize: 36,
    color: Colors.white,
    textTransform: "capitalize",
    // fontWeight: '300',
    marginBottom: 50,
    fontFamily: "Montserrat-Light",
    textAlign: "center",
  },

  formWrapp: {
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 25,
  },
  genderDobWrap: {
    display: "flex",
    flexDirection: "row",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainerSmall: {
    paddingLeft: 18,
    paddingRight: 18,
    height: 40,
    width: '100%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -20,

  },
  inputWrapModal: {
    width: '50%',
    marginRight: 10,
  },
  inputWrapp: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    backgroundColor: Colors.alto_1,
    color: Colors.white,
    borderRadius: 20,
    marginBottom: 20,
    flex: 1,
    width: "100%",
  },

  inputWrappSmall: {
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 20,
    paddingBottom: 10,
    fontSize: 14,
    backgroundColor: Colors.alto_1,
    color: Colors.white,
    borderRadius: 20,
    marginBottom: 20,
    // flex: 1,
    width: "100%",

  },
  inputWrappNoMarginSingle: {
    backgroundColor: "transparent",
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 0,
    // width: "50%",
    paddingLeft: 0,

  },

  inputWrappNoMargin: {
    marginBottom: 0,
    backgroundColor: "transparent",
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
    borderRadius: 0,
    height: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
  },

  labelText: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "300",
    marginBottom: responsiveHeight(1),
  },
  labelTextSmall: {
    fontSize: 14,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "300",
    marginBottom: 10,
  },
  labelTextSingle: {
    marginTop: 10,
    margin: 0,
    marginBottom: 5,
    marginLeft: 22,
  },
  labelTextSinglLarge: {
    fontSize: 20,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 5,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginLeft: 0,
  },

  input: {
    height: 40,
    fontSize: responsiveFontSize(2),
    color: Colors.white,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSmall: {
    fontSize: 15,
    color: Colors.white,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },

  formWrappFooter: {
    height: 35,
    fontSize: 20,
    color: Colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkLabel: {
    fontSize: 14,
    color: Colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  textLink: {
    margin: 8,
    fontSize: 14,
    color: Colors.white,
  },

  buttonWrap: {
    width: '100%',
    height: 60,
    borderRadius: 60,
  },

  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
  socialMediaLogin: {
    padding: 20,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    height: 168,
    borderTopColor: Colors.denim,
    borderTopWidth: 1,
  },
  textWrap: {
    margin: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: Colors.deep_cove,
    height: 76,
    width: 76,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
  iconBoxWrap: {
    justifyContent: "center",
    flexDirection: "row",
  },
  iconWrap: {
    height: 17,
    width: 20,
  },

  labelSignUp: {
    color: Colors.azure_radiance_1,
  },

  inputTxt: {
    marginRight: 10,
    fontSize: 20,
    color: Colors.white,
    flex: 1,
  },

  // input: {
  //   marginRight: 10,
  //   fontSize: 20,
  //   color: Colors.white,
  //   flex: 1,
  // },

  inputCountry: {
    paddingTop: 0,
    paddingBottom: 10,
    paddingRight: 0,
    width: "100%",
  },
  errorWrap: {
    borderColor: Colors.red_violet,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
  },
  /*-----for dropdown-----*/
  dropdown: {
    height: responsiveHeight(4),
    borderColor: 'gray',
    //borderWidth: 0.7,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 5
  },
  placeholderStyle: {
    fontSize: 16,
    //color: '#2F2F2F',
    color: Colors.white,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.white,
    //color: '#2F2F2F'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#2F2F2F'
  },
  itemTextStyle:{
    color:'#2F2F2F'
  },
  itemContainerStyle:{
    backgroundColor: Colors.catalina_blue
  },
  inputTextColor:{
    color: Colors.white
  },
  iconStyle: {
    width: 30,
    height: 30,
    color: Colors.white
  },
});
