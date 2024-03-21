import {
  View,
  Image,
  Text,
  Animated,
  Pressable,
  Dimensions,
} from "react-native";
import moment from "moment";
import StaticText from "../../../global/StaticText";
import { MY_PRODUCT_DETAILS } from "../../../constants/RouteNames";
import InformationBlue from "../../Helper/SvgImg/InformationBlue";
import NavButtons from "./NavButtons";
import styles from "./style";

const ProductList = ({ item, onPress, onPressTab, navMenus }) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 50,
      useNativeDriver: true,
    }).start(() => {
      onPress(MY_PRODUCT_DETAILS, item?.warranty_details?.id, false);
    });
  };

  return (
    <>
      {item && item?.warranty_details?.id && (
        <Animated.View style={styles.newsCardWrap}>
          <View style={styles.imageWrap}>
            {item?.product_image?
            <Image
              source={{ uri: item?.product_image?.path }}
              style={styles.image}
            />:<Text style={styles.registerStatus}>No Image</Text>
            }
          </View>
          <View style={[styles.registerStatusView, { backgroundColor: item?.warranty_details?.approval_status == 'Pending' ? '#FC9700' : (item?.warranty_details?.approval_status == 'Rejected' ? 'red' : 'green') }]}>
            <Text style={styles.registerStatus}>{item?.warranty_details?.approval_status}</Text>
          </View>
          <View style={styles.contentWrap}>
            <Pressable onPressIn={fadeIn} onPressOut={fadeOut}>
              <Animated.View style={styles.headerInfoWrap}>
                <Text style={styles.textContentHeader}>
                  {item?.product?.name}
                </Text>
                <InformationBlue />
              </Animated.View>
            </Pressable>
            <Text style={styles.textContentSerial}>
              {StaticText.screen.my_product_list.content.sn} :{" "}
              {item?.product_serials?.serial}
            </Text>
            <View style={styles.dateContentWrap}>
              <View style={styles.blueDot}></View>
              <Text style={styles.textDateContent}>
                {StaticText.screen.my_product_list.content.expiry_date} :
              </Text>
              <Text style={styles.textDate}>
                {moment(item?.warranty_details?.date_of_purchase).format(
                  "DD MMM 'YY"
                )}
              </Text>

            </View>
            <View style={styles.dateContentWrap}>
              <Text style={styles.textDateContent}>
                Status Pendaftaran :
              </Text>
              <Text style={styles.textDate}>
                {item?.warranty_details?.register_status}
              </Text>
            </View>

            <View style={styles.categoryWrap}>
              <View style={styles.categorySmallWrap}>
                {navMenus.length &&
                  navMenus.map((menu, index) => (
                    <NavButtons
                      key={menu.name}
                      menu={menu}
                      item={item}
                      onPress={onPress}
                      onPressTab={onPressTab}
                      status={item?.warranty_details?.register_status}
                    />
                  ))}
              </View>
            </View>
          </View>
        </Animated.View>
      )}
    </>
  );
};
export default ProductList;
