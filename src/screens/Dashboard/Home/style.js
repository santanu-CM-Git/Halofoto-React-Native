import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import Colors from '../../../global/Colors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const {height,width} = Dimensions.get('screen')

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: Colors.white,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingLeft: 0,
  //   paddingRight: 0,
  // },
  
  overlayWrap: {
    backgroundColor: Colors.black,
    height: height*0.91,
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrapBanner: {
    height: height*0.25,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginBottom: 30,
  },

  textWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  bannerMainWrap: {
    display: 'flex',
    width: '100%',
    borderStyle: 'solid',
  },

  bannerNavWrap: {
    position: 'absolute',
    bottom: -25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  bannerText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '300',
    fontFamily: 'Montserrat-Regular',
    position: 'relative',
    zIndex: 1,
    width: width*0.5,
    marginBottom: 15,
    paddingLeft: 15,
  },

  bannerSubText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '300',
    fontFamily: 'Montserrat-Regular',
    position: 'relative',
    zIndex: 1,
    width: width*0.4,
    marginBottom: 15,
    paddingLeft: 20,
  },

  bannerBg: {
    flex: 1,
    position: 'absolute',
    right: 0,
    // bottom: 20,
    height: '100%',
    width: '50%',
  },


  bannerNav: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  buttonWrap: {
    width:'80%',
    height: 50,
    borderRadius: 60,
    alignSelf:'center',
    marginBottom:20,
    marginTop:10
  },

  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '700',
  },

  tabWrap: {
    height:height*0.5,
    width: width * 0.96,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tabs: {
    backgroundColor: Colors.deep_cove,
    flex:0.22,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    // height: 88,
    // width: 95,
    width:width*0.23,
    padding: 5,
    borderRadius: 20,
    marginRight: 5,
    marginLeft:5,
    marginTop: 5,
    borderColor: Colors.torea_bay,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: Colors.catalina_blue,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },

  tabButtonText: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.white,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  catalogBanner: {
    display: 'flex',
    flexDirection: 'column',
  },
  /*-----for dropdown-----*/
  dropdown: {
    height: responsiveHeight(4),
    width:'100%',
    borderColor: 'gray',
    //borderWidth: 0.7,
    borderRadius: 8,
    paddingHorizontal: 8,
    //marginTop: 5
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#2F2F2F',
    //color: Colors.white,
  },
  selectedTextStyle: {
    fontSize: 16,
    //color: Colors.white,
    color: '#2F2F2F'
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
    color: '#2F2F2F'
  },
  iconStyle: {
    width: 30,
    height: 30,
    color: Colors.white
  },
  inputWrapp: {
   justifyContent:'center',
    width: "100%",
   borderColor:Colors.blue,
   borderWidth:1,
   borderRadius:10
  },
  labelText: {
    fontSize: 14,
    color: '#2F2F2F',
    textTransform: "capitalize",
    fontWeight: "300",
    marginLeft: responsiveWidth(2)
  },
  labelErrorText: {
    fontSize: 14,
    color: '#900',
    textTransform: "capitalize",
    fontWeight: "300",
    marginLeft: responsiveWidth(2)
  },
});
