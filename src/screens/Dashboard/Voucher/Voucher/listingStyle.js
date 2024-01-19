import { Dimensions, Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "../../../../global/Colors";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const {height,width} = Dimensions.get('window')

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
    // height: "100%",
    width: "100%",
    display: "flex",
    // borderColor:'red',
    // borderWidth:1,
    // borderStyle:'solid',
  },

  topHeader: {
    display: "flex",
    alignItems: Platform.OS === "ios" ? "flex-end" : "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === "ios" ? responsiveHeight(10) : 140),
    paddingBottom: Platform.OS === "ios" ? 20 : 20,
    width: "100%",
  },

  topHeaderAnimatedActive: {
    backgroundColor: "rgba(2, 8, 24, 0.8)",
    height: Platform.OS === "ios" ? 110 : 80,
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1000,
    paddingBottom: 20,
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
  mainScroll: {
    //height:'100%',
    paddingBottom:responsiveHeight(20)
  },
  contentContainer: {
    paddingBottom: responsiveHeight(50),
  },
  newsSlider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    height: 350,
    paddingLeft: 10,
  },
  newsSliderBox: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    height: 350,
    width: 318,
    overflow: "hidden",
    position: "relative",
    marginRight: 5,
    marginLeft: 5,
  },
  slidebg: {
    width: "100%",
    height: "100%",
    borderRadius: 19,
  },

  newsTag: {
    position: "absolute",
    right: 15,
    top: 15,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#0F46D5",
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 2,
  },

  newsTagInner: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "600",
  },

  newsslideboxOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },

  newsslideboxOverlayInner: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },

  // newsCardWrap: {
  //   borderColor: "red",
  //   borderStyle: "solid",
  //   borderWidth: 1,
  // },
  newsMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },

  captionWrap: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "400",
  },

  categoryTag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#020818",
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    marginRight: 10,
  },
  categorySlider: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft: 20,
  },
  categoryBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  btnActive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 212, 213, 0.20)",
    height: 40,
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

  btnNormal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 212, 213, 0.20)",
    height: 40,
    borderRadius: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },

  newsListWrap: {
    display: "flex",
    marginTop: 5,
  },

  newsCard: {
    marginLeft: 16,
    marginRight: 16,
    // borderColor: "rgba(255, 255, 255, 0.2)",
    // backgroundColor: "rgba(17, 78, 237, 0.1)",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderRadius: 20,
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent:"center",
    marginTop: 15,
  },

  couponCardMain: {
    display: "flex",
    height: 160,
    width: Platform.OS == 'ios' ? responsiveWidth(94) : responsiveWidth(93),
  },

  couponWrapp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: Platform.OS == 'ios' ? responsiveWidth(94) : responsiveWidth(93)
  },

  imageBox: {
    width: Platform.OS == 'ios' ? width * 0.2 : responsiveWidth(10),
    height: height * 0.15,
    flex: 0.55,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    // paddingRight: 10,
  },

  couponCardImg: {
    width: Platform.OS == 'ios' ? width * 0.2 : responsiveWidth(20),
    height: height * 0.15,
    resizeMode: "contain",
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    marginLeft: Platform.OS == 'ios' ? 0 : responsiveWidth(3)
  },

  couponCardContent: {
    flex: 1,
    marginLeft: 25,
    marginTop:10,
    display: "flex",
    flexDirection: "column",
  },

  couponCategory: {
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
    color: "#D3D4D5",
    marginBottom: 5,
  },

  pointsWrapCard: {
    display: "flex",
    flexDirection: "row",
  },
  couponPoints: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 22,
    color: "#fff",
  },

  pountsWrappBadch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },

  couponPointsSmall: {
    fontFamily: "Montserrat-Regular",
    fontSize: 11,
    color: "#D3D4D5",
  },

  pountsBadch: {
    height: 15,
    width: 15,
  },

  couponTitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    marginBottom: 10,
  },

  validWrapp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },

  ValidDate: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 11,
    color: "#D3D4D5",
  },

  couponDownload: {
    width: 55,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: [{rotate: '180deg'}]
  },
  tickSvg:{
    width: 55,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  newsCardContent: {
    width: 200,
    marginTop: 16,
    marginLeft: 16,
    paddingBottom: 10,
  },

  categoryTagCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#020818",
    paddingLeft: 10,
    paddingRight: 10,
    height: 25,
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  readMoreWrap: {
    width: "100%",
    marginBottom: 110,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textCardNews: {
    width: "100%",
    height: 64,
    fontSize: 18,
    color: Colors.white,
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "Montserrat-SemiBold",
    overflow: "hidden",
  },
  textCardSmall: {
    fontSize: 13,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    
  },
  textReadMore: {
    fontSize: 16,
    color: Colors.azure_radiance_1,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
  },

  categoryBtnWrap: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },

  categoryListBanner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 200,
    // width: 414,
    width: "100%",
    marginBottom: 23,
  },

  newsCategorybannerbg: {
    width: "200%",
    height: "100%",
  },

  newsCategoryBannerOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 16,
    paddingBottom: 33,
  },

  categoryWrappOuter: {
    display: "flex",
  },
  newsMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
  },
  categoryTagCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#020818",
    paddingLeft: 10,
    paddingRight: 10,
    height: 25,
    alignSelf: "flex-start",
    marginBottom: 5,
    marginRight: 5,
  },

  couponBanner: {
    width: width*0.9,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
    alignSelf:'center',
    //    borderWidth:1,
    // borderStyle:'solid',
    // borderColor:'red'
  },

  pointsWrapmain: {
    display: "flex",
    flexDirection: "row",
  },

  pointsWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    width:'50%',
    borderTopLeftRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    // borderWidth:1,
    // borderStyle:'solid',
    // borderColor:'red'
  },

  bluePoints: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
  },
  bluePointsWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    marginLeft:20
  },
  yellowPointsWrap:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  iconWrap: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 5,
  },
  separatorVertical: {
    marginTop: 30,
    width: 2,
    height: 60,
    backgroundColor: "#4171F1",
    position: "absolute",
    left: "50%",
    top: -6,
    zIndex: 1,
  },
  pointsContent:{
    width:'70%'

  },
  buttonWrapp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  btnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 20,
    height: 38,
    borderRadius: 40,
    backgroundColor: "#071F5F",
    borderColor: "#071F5F",
    borderWidth: 1,
    borderStyle: "solid",
  },

  textDigitPoints: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Montserrat-Light",
  },

  textBannerSmall: {
    color: "#fff",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    marginLeft: 8,
  },
});
