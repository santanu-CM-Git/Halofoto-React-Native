import { Platform, StyleSheet } from "react-native";
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
    // justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid'
  },
  contentWrap: {
    display: "flex",
    alignItems: "center",
    padding: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid'
  },
  logoWrap: {
    height: 150,
    width: 150,
    marginTop: 150,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
  },
  textContentWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center'
  },
  buttonWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 374,
    height: 60,
    borderRadius: 60,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
  uploadButtonWrap: {
    width: 370,
    display: "flex",
    justifyContent: "center",
    marginTop: Platform.OS == 'android' ? 50 : 0,
  },
  text: {
    color: Colors.white,
    paddingTop: responsiveHeight(20),
    fontSize: responsiveFontSize(3),
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
    textAlign: 'center',
    //lineHeight: 29,
  },
  text1: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 29,
    textAlign: "center"
  },
  textSize: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: '300',
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
    width: 376,
    textAlign: 'center'
  },
  textPointsSize: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: '600',
    lineHeight: 49,
    fontFamily: 'Montserrat-Regular',
    color: Colors.white,
  }
});
