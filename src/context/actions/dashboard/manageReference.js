import { MY_PROFILE_UPDATE_SUCCESS, MY_PROFILE_UPDATE_LOADING, MY_PROFILE_UPDATE_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"
import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"

export default ({
    name,
    email,
    phone,
    phone_country_code,
    gender,
    dob,
    address_line1,
    country,
    state,
    city,
    insta_id,
    tamron_user,
    profile_image,
}) => dispatch => onSuccess => {
    dispatch({
        type: MY_PROFILE_UPDATE_LOADING
    })

    let formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('phone_code', phone_country_code?.ext_code)
    formData.append('gender', gender)
    //console.log(dob,'kjkjkjkhjhjhggthgggtghgggg')
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

    //console.log(formData)

    if (profile_image?.uri) {
        formData.append('profile_image', { uri: profile_image?.uri, name: profile_image?.name, type: profile_image?.mimeType })
    }

    axiosInstance.post('/mobile/update-profile', formData).then(res => {
        AsyncStorage.removeItem("user")
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        dispatch({
            type: MY_PROFILE_UPDATE_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
        //console.log(res.data)
    }).catch(err => {
    
        dispatch({
            type: MY_PROFILE_UPDATE_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
        //console.log('error',err.response.data)
    })
}