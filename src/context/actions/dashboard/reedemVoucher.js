import {
  REDEMPTION_VOUCHER_SUCCESS,
  REDEMPTION_VOUCHER_LOADING,
  REDEMPTION_VOUCHER_FAIL,
  CLEAR_REDEMPTION_VOUCHER,
} from "../../../constants/ActionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";
import StaticText from "../../../global/StaticText";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearVoucherState = () => dispatch => {
  dispatch({
    type: CLEAR_REDEMPTION_VOUCHER,
  })
}

export default (voucherId, quantity, value) => (dispatch) => {
  dispatch({
    type: REDEMPTION_VOUCHER_LOADING,
  });

  let formData = new FormData();
  formData.append("voucher_info_id", voucherId);
  formData.append("quantity", quantity);
  formData.append("size",value)

  axiosInstance
    .post("/mobile/redeem-points", formData)
    .then((res) => {
      AsyncStorage.removeItem("user");
      AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: REDEMPTION_VOUCHER_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: REDEMPTION_VOUCHER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: StaticText.axios.error },
      });
    });
};
