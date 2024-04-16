import { Platform, StyleSheet, Dimensions } from "react-native"
import Constants from "expo-constants"
import Colors from "../../../../global/Colors"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const { height, weight } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,

  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    display: "flex",
    alignItems: 'center',
  },

  topHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === 'ios' ? responsiveHeight(10) : 60),
    paddingBottom: Platform.OS === 'ios' ? 20 : 20,
    width: '100%',

  },

  topHeaderAnimatedActive: {
    backgroundColor: 'rgba(2, 8, 24, 0.8)',
    height: Platform.OS === 'ios' ? 100 : 100,
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
    paddingBottom: 20
  },

  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  titleIconWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleWrap: {
    fontSize: 36,
    color: Colors.iron,
    fontWeight: "300",
    marginBottom: 16,
  },

  categoryTitleWrap: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "400",
  },

  timeWrap: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "400",
  },

  newsDetailInnersWrap: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Medium",
    marginBottom: 14,
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
    color: "#fff",
    textTransform: "capitalize",
    fontWeight: "300",
  },

  mainScroll: {
    height: "100%",
    paddingBottom: Platform.OS === 'ios' ? 0 : 0
  },

  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    //marginBottom: height*0.4
  },

  categoryListBanner: {
    display: "flex",
    flexDirection: "row",
    height: 424,
    marginLeft: -20,
    marginRight: -20,
    marginBottom: 30,
  },
  newsCategorybannerbg: {
    width: "100%",
    height: "100%",
  },

  newsCategoryBannerOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
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
    paddingRight: responsiveWidth(9)
  },
  categoryTagWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newsListWrap: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginRight: 0,
    marginBottom: Platform.OS == 'ios' ? responsiveHeight(20) : responsiveHeight(15),
  },
  newsCard: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: 'space-between',
    width: Platform.OS == 'ios' ? responsiveWidth(45.5) : responsiveWidth(43),
    marginRight: 10,
    height: 350,

  },

  newsCardContent: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    width: '100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 142,
  },
  categoryWrap: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  },
  categoryTagCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#020818",
    paddingLeft: 8,
    paddingRight: 8,
    height: 20,
    alignSelf: "flex-start",
    marginRight: 3,
    marginBottom: 5,
  },

  categoryWrappOuter: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'red',
    flexWrap: 'wrap',
  },

  newsCardImg: {
    width: "100%",
    height: 175,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    // marginBottom: 15,

  },
  textCardDescription: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
    // height: 112,
  },

  bannerNav: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  bannerNavWrap: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: -30,
  },
  cardWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  iconWrap: {
    position: 'absolute',
  },
  videoWrap: {
    position: 'relative',
    marginBottom: '5%',
    //height: '6%',
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonWrap: {
    position: 'absolute',
    opacity: 0.6,
    zIndex: 1,
  }
});
