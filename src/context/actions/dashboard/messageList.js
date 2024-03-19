import {
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_FAIL,
    MESSAGE_LIST_LOADING,
  } from "../../../constants/ActionTypes";
  import axiosInstance from "../../../helpers/axiosInterceptor";
  import StaticText from "../../../global/StaticText";
  
  export default ({ page, filter }) =>
    (dispatch) => {
      dispatch({
        type: MESSAGE_LIST_LOADING,
      });
  
      let url = ``;
      if (filter) {
        url = `/mobile/message-list?page=${page}&${filter}`;
      } else {
        url = `/mobile/message-list?page=${page}`;
      }

      axiosInstance
        .get(url)
        .then((res) => {  
          dispatch({
            type: MESSAGE_LIST_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: err.response
              ? err.response.data
              : { error: StaticText.axios.error },
          });
        });
    };
  