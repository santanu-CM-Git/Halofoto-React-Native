import { StyleSheet } from 'react-native'
import Constants from "expo-constants"
import Colors from '../../../../global/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

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
    alignItems:Platform.OS === 'ios' ? 'center' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height:Constants.statusBarHeight+(Platform.OS === 'ios' ? responsiveHeight(10) : 70),
    paddingBottom:Platform.OS === 'ios' ? 0 : 20,
    width:'100%',
  },

  topHeaderAdditional: {
    height: 85,
    paddingTop: Constants.statusBarHeight + 5,
  },

  topHeaderAnimatedActive: {
    backgroundColor: 'rgba(2, 8, 24, 0.8)',
  },

  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  titleIconWrap: {
    width: 340,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backWrap: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },

  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },

  mainScroll: {
    height: "100%",
  },
  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: '15%',
  },

  categoryListBanner: {
    display: "flex",
    flexDirection: "row",
    height: responsiveHeight(82),
    marginLeft: -20,
    marginRight: -20,
    marginBottom: 30,
  },
  newsCategorybannerbg: {
    width: "100%",
    height: responsiveHeight(82),
    position: "relative",
    zIndex:-5,
  },

  newsCategoryBannerOverlay: {
    position: "absolute",
    height: responsiveHeight(82),
    width: "100%",
    //display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 33,
    
    
  },

  newsMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
  },

  categoryTag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  profileTitleOuter: {
    height: 30,
    width: 30,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 2,
    borderStyle: "solid",
    marginRight: 10,
  },
  profileTitle: {
    fontSize: responsiveFontSize(1),
    color: Colors.white,
  },
  iconWrap: {
    width: responsiveWidth(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsListWrap: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginRight: -10,
  },
  newsCard: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column-reverse",
    width: 170,
    marginRight: 10,
  },

  newsCardContent: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },

  newsCardImg: {
    width: "100%",
    height: 185,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    marginBottom: 15,
  },
  audioPlayer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 79,
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
  },
  playBarWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playBar: {
    width: 320,
    height: 3,
  },
  trackPlayerWrap:{
    width:'100%',
    height:'5%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: 'rgba(17,78,237, 0.1)',
    borderRadius:20,
  },
  trackPlayerWrapInner:{
    marginRight:10,
    marginLeft:10,
    width:'80%',
    height:'60%',
    flex:1,
    flexDirection:'column',
  },
  
  timeWrap: {
    marginTop:-10,
    marginLeft:15,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTimeWrapInitial:{
    fontSize: 12,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    textAlign:'left',
  },
  textTimeWrap:{
    fontSize: 12,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  newsDetailsWrap: {
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:responsiveHeight(5),
    //marginHorizontal:10
    //marginBottom:10
  },
  textTime: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  textBannerDescription: {
    fontSize: 36,
    color: Colors.iron,
    fontWeight: "300",
    marginBottom: 16,
    fontFamily: "Montserrat-Light",
  },
  textBannerCategory: {
    fontSize: responsiveFontSize(1.5),
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    marginRight: 20,
    width: responsiveWidth(62),
  },
  textBannerTime: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  invisibleButton:{
    position: 'absolute',
    width: 100,   // Set desired dimensions
    height: '100%',   // Set desired dimensions
    bottom: 20,      // Adjust position as needed
    //right: 10,    // Adjust position as needed
    backgroundColor: 'red', // Making the button transparent
    opacity: 10,   // Making the button fully transparent,
   
  },
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    height:responsiveHeight(50),
    width:responsiveWidth(90)
    
  },





















  
})
