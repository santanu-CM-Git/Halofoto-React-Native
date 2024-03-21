import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native"
import Colors from "../../../global/Colors"
import Constants from 'expo-constants'
import { responsiveScreenWidth } from "react-native-responsive-dimensions"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    display: "flex",
  },
  topHeader: {
    display: 'flex',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === 'ios' ? 60 : 60),
    paddingBottom: Platform.OS === 'ios' ? 20 : 20,
    width: '100%',
  },

  titleHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  backWrap: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },

  backArrow: {
    height: 14,
    width: 8,
  },
  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  fileIco: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },
  filteBtn: {
    height: 21,
    width: 21,
  },
  newsCardWrap: {
    display: "flex",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  arrowWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    zIndex: 100,
    top: Platform.OS === 'ios' ? '22%' : Dimensions.get("window").height * 0.25,
  },
  imageWrap: {
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  prevButtonWrap: {
    width: 44,
    height: 44,
    borderRadius: 40,
    backgroundColor: "rgba(211, 212, 213, 0.2)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  nxtButtonWrap: {
    width: 44,
    height: 44,
    borderRadius: 40,
    backgroundColor: "rgba(211, 212, 213, 0.2)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '180deg' }]
  },
  image: {
    width: "80%",
    height: "100%",
  },
  contentWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerInfoWrap: {
    width: '80%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContentWrap: {
    marginTop: 11,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  blueDot: {
    height: 10,
    width: 10,
    borderRadius: 20,
    borderColor: Colors.blue_ribbon,
  },
  categoryWrap: {
    width: "100%",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  categorySmallWrap: {
    width: "100%",
    height: '20%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: 'wrap',
  },
  certificateWrap: {
    width: responsiveScreenWidth(48),
    height: 40,
    borderRadius: 30,
    paddingLeft: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(5, 23, 71, 0.9)",
    borderColor: "rgba(7, 31, 95, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 18,
  },

  bannerMainWrap: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  bannerNavWrap: {
    position: "absolute",
    zIndex: 1000,
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    // marginBottom:Platform.OS === 'ios' ? 120 : 100,
  },

  bannerNav: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  textPageHeading: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    lineHeight: 27,
  },
  textContentHeader: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    lineHeight: 24,
    textDecorationLine: "underline",
    textAlign: "center",
    marginRight: 5,
  },
  textContentSerial: {
    marginTop: 11,
    fontSize: 16,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  textDateContent: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
    lineHeight: 17,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  textDate: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  textCard: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
    lineHeight: 17,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  registerStatus: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
  },
  registerStatusView: {
    position: 'absolute',
    top: 0,
    right: 10,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10
  }
})
