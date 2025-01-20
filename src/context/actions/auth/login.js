import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_LOADING, CLEAR_AUTH_STATE, LOGOUT_SUCCESS } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}

export default ({
    fcmToken,
    email,
    password,
}) => dispatch => {

    dispatch({
        type: LOGIN_LOADING
    })

    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('notification_token', fcmToken)
    axiosInstance.post('/mobile/user-login', formData).then(res => { 
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("token")
        AsyncStorage.removeItem("otp")
        AsyncStorage.setItem("token", res.data.token)
        AsyncStorage.setItem("show_welcome", '0')
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        AsyncStorage.setItem("otp", JSON.stringify(res?.data?.otp ? res?.data?.otp : null))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}