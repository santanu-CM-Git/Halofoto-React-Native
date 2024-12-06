import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL, CLEAR_AUTH_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}
export default ({
    name,
    email,
    password,
    phone,
    phone_country_code,
    gender,
    dob,
    address_line1,
    country,
    state,
    city,
    insta_id,
    app_reference,
    other,
    tamron_user,
    fcmToken,
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING
    })
    let formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    //formData.append('phone', `${phone}`)
    formData.append('phone', phone)
    formData.append('phone_code', phone_country_code?.ext_code)
    formData.append('gender', gender)
    if (!dob) {
        formData.append('dob', '')
    } else {
        formData.append('dob', dob)
    }

    formData.append('address_line1', address_line1)
    formData.append('country_id', country?.id)
    formData.append('state', typeof state?.name !== 'undefined' ? state?.name : '')
    formData.append('city', typeof city?.name !== 'undefined' ? city?.name : '')
    formData.append('insta_id', typeof insta_id !== 'undefined' ? insta_id : '')
    formData.append('tamron_user', typeof tamron_user !== 'undefined' ? tamron_user : false)
    formData.append('notification_token', fcmToken)
    formData.append('app_reference', app_reference)
    formData.append('other', other)

    //console.log(dob, 'xxxxxxxxxxxxmmmmmmmxmxmxmxmxm')

    axiosInstance.post('/mobile/user-register', formData).then(res => {
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("token")
        AsyncStorage.removeItem("is_referred")
        AsyncStorage.setItem("show_welcome", '0')
        AsyncStorage.setItem("is_referred", 'pending')
        AsyncStorage.setItem("token", res.data.token)
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        AsyncStorage.setItem("otp", JSON.stringify(res.data.otp))
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
        //onSuccess(res.data)

    }).catch(err => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}