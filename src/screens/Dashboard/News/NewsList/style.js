import { Platform, StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"
import Constants from 'expo-constants'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

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
  },

  topHeader: {
    display: 'flex',
    alignItems:'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    //height:Constants.statusBarHeight+(Platform.OS === 'ios' ? 50 : 60),
    height:responsiveHeight(13),
    paddingBottom:Platform.OS === 'ios' ? 20 : 20,
    width:'100%',

  },

  titleHolder: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backWrap: {
    display: 'flex',
    justifyContent: 'center',
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
    textTransform: 'capitalize',
    fontWeight: '300',
  },
  fileIco: {
    display: 'flex',
    justifyContent: 'center',
    height: 24,
    width: 24,
    marginRight: 5,
  },
  filteBtn: {
    height: 21,
    width: 21,
  },
  mainScroll: {
    height: "100%",
    paddingBottom:responsiveHeight(2)
  },
  
  newsSlider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    height: 350,
    paddingLeft:10,
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

  newsCardWrapMain:{
    marginBottom:Platform.OS === 'ios' ? '30%' : '25%',
  },

  newsCardWrap: {
    // marginBottom: 180,
    marginBottom:Platform.OS === 'ios' ? '50%' : '47%',
    
  },
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
    marginRight:10,
  },
  categorySlider: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 25,
    paddingLeft:20,
  },
  categoryBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //width: responsiveWidth(40),
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
    //width: "100%",
    height: 40,
    borderRadius: 40,
    paddingHorizontal:40
  },

  newsListWrap: {
    display: "flex",
    marginTop: 5,
  },

  newsCard: {
    marginLeft:16,
    marginRight:16,
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  newsCardContent: {
    width: "60%",
    marginTop: 16,
    marginLeft: 16,
    paddingBottom: 10,
  },

  // categoryTagCard: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 40,
  //   backgroundColor: "#020818",
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   height: 25,
  //   alignSelf: "flex-start",
  //   marginBottom: 10,
  // },

  newsCardImg: {
    width: "35%",
    height:'80%',
    right: 0,
    height: "100%",
    borderTopRightRadius: 19,
    borderBottomRightRadius: 19,
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
    fontSize: responsiveFontSize(2),
    paddingRight:5,
    color: Colors.white,
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "Montserrat-SemiBold",
    overflow: "hidden",
  },
  textCardSmall: {
    fontSize: 11,
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
    justifyContent:'center',
    height: 200,
    width:414,
    width:'100%',
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

  categoryWrappOuter:{
    //display:'flex',
    flexWrap: 'wrap',
    flexDirection:'row',
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
    marginBottom: 10,
    marginRight:5,
    
  },

});
