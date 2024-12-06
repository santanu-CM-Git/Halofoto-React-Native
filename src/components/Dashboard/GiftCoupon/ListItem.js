import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import moment from "moment/moment";
import { GIFT_PRODUCT_LIST } from "../../../constants/RouteNames";

const ListItem = ({ item, onPress, readStatus }) => {
  return (
    <Pressable
      onPress={() => {
        onPress(GIFT_PRODUCT_LIST, {
          voucherId: item?.voucher_id,
        })
      }}
      unstable_pressDelay={100}
    >
      <View style={styles.mainBodyWrap}>
        <View style={styles.messageCard}>
          <View style={styles.messageContentWrap}>
            {/* {item?.read_status <= 0 ? (!readStatus.includes(item?.id) ? <View style={styles.listDots}></View> : <></>) : <></>} */}
            <View style={styles.messageContent}>
              <Text style={styles.textContent} numberOfLines={2}>{item?.voucher_name}</Text>
              <View style={styles.messageMeta}>
                <Text style={styles.textContent}>
                {moment(item?.vocher_start_date).format("Do MMM YY")}
                </Text>
                <Text style={styles.textContentTo}>to</Text>
                {/* <View style={styles.metaDots}></View> */}
                <Text style={styles.textContent}>
                  {moment(item?.voucher_end_date).format("Do MMM YY")}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.messageInfo}>
            <LinearGradient
              colors={["#4874F7", "#83A7FE"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.messageCategory}
            >
              <Text style={styles.textMessageCategory}>
                {item?.redeem_voucher_status}
                {/* Untuk Kamu */}
              </Text>
            </LinearGradient>
          </View>
          {item.voucher_code_status == 1 ?
            <View style={styles.statusView}>
              <Text style={styles.statusText}>Terapan</Text>
            </View>
            : null}
        </View>

      </View>
    </Pressable>
  );
};
export default ListItem;
