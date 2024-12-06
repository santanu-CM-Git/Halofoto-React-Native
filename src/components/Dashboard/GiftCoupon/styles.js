import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
import Colors from '../../../global/Colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
    display: 'flex',
  },

  topHeader: {
    display: 'flex',
    alignItems: Platform.OS === 'ios' ? 'flex-end' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === 'ios' ? responsiveHeight(10) : 70),
    paddingBottom: Platform.OS === 'ios' ? 20 : 20,
    width: '100%',
  },

  titleHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
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
    textTransform: "capitalize",
    fontWeight: "300",
  },

  mainScroll: {
    height: '100%',
  },

  newsCardWrap: {
    marginBottom: Platform.OS === 'ios' ? 110 : 110,
  },

  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
  },

  messageCard: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(17, 78, 237, 0.1)',
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 131,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    // paddingLeft:16,
    paddingTop: 20,
    marginBottom: 20
  },

  listDots: {
    height: 9,
    width: 9,
    borderRadius: 10,
    backgroundColor: Colors.red,
    marginRight: 10,
    marginTop: 5
  },
  messageContentWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  messageContent: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
  },

  messageInfo: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  messageMeta: {
    marginTop: 10,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  metaDots: {
    height: 3,
    width: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginLeft: 4,
    marginRight: 4,
  },

  messageCategory: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 112,
    height: 30,
    borderTopLeftRadius: 20
  },
  textContent: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
  },
  textMessageCategory: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '300',
  },
  loadingView: {
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusView: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: Colors.spring_green,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
  },
  textContentTo: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 4,
  }

});
