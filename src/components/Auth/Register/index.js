import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from "react"
import { Alert } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../screens/Auth/Register"
import { GlobalContext } from "../../../context/Provider"
import register, {
  clearAuthState,
} from "../../../context/actions/auth/register"
import country from "../../../context/actions/common/country"
import StaticText from "../../../global/StaticText"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { REGISTER } from '../../../constants/RouteNames'


const Register = () => {
  const {
    authDispatch,
    authState: { error, loading, data },
    countryListState: { countryListerror, countryListloading, countryListData },
    countryListDispatch,
  } = useContext(GlobalContext)
  const { navigate, goBack } = useNavigation()
  const [form, setForm] = useState({})
  const [cities, setCities] = useState([])
  const [isTamronUser, setIsTamronUser] = useState(false)
  const [errors, setErrors] = useState({})


  const inptEmail = useRef()
  const inptPassword = useRef()
  const inptPhone = useRef()
  const inptAddressLine1 = useRef()


  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data) {
          clearAuthState()(authDispatch)
        }
      }
    }, [data])
  )

  useEffect(() => {
    (async () => {
      const fcmToken = await AsyncStorage.getItem("fcm_token")
      setForm(form => {
        return { ...form, fcmToken }
      })
    })()
    return () => { }
  }, [])

  const onPress = (route) => (route ? navigate(route) : goBack())

  useEffect(() => {
    country()(countryListDispatch)(response => {
      return ''
    })
  }, [])

  useEffect(() => {
    console.log(error, 'jjjjj')
    error?.reg_message?.length &&
      Alert.alert(StaticText.alert.error_heading, error?.reg_message, [
        { text: StaticText.button.ok, onPress: () => { navigate(REGISTER) } },
      ])
    // Alert.alert(StaticText.alert.error_heading, error?.reg_message, [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ])
  }, [error])



  const onChange = ({ name, value }) => {
    setForm((form) => {
      return { ...form, [name]: value }
    })

    if (value !== "") {
      if (name == "password" && value.length < 8) {
        setErrors((prev) => {
          return { ...prev, [name]: StaticText.alert.error_password_length }
        })
      } else if (name == "phone_country_code" && !value?.ext_code) {
        setErrors((prev) => {
          return { ...prev, [name]: StaticText.alert.error_phone_ext_length }
        })
      } else if (name == "country" && !value?.id) {
        setErrors((prev) => {
          return { ...prev, [name]: StaticText.alert.error }
        })
      } else {
        setErrors((prev) => {
          return { ...prev, [name]: null }
        })
      }
    } else if (name !== "insta_id" && name !== "city" && name !== "state") {
      setErrors((prev) => {
        return { ...prev, [name]: StaticText.alert.error }
      })
    }
  }

  //  const onSubmit = () => {
  //   console.log(form, 'iiiiiiiiiiiiiiiii')
  //   if (!form.name) {
  //     setErrors((prev) => {
  //       return { ...prev, name: StaticText.alert.error }
  //     })
  //   }
  //   if (!form.email) {
  //     setErrors((prev) => {
  //       return { ...prev, email: StaticText.alert.error }
  //     })
  //   }
  //   if (!form.password) {
  //     setErrors((prev) => {
  //       return { ...prev, password: StaticText.alert.error }
  //     })
  //   }
  //   // if (!form.dob) {
  //   //   setErrors((prev) => {
  //   //     return { ...prev, dob: StaticText.alert.error }
  //   //   })
  //   // }
  //   if (!form.phone_country_code?.ext_code) {
  //     setErrors((prev) => {
  //       return { ...prev, phone_country_code: StaticText.alert.error }
  //     })
  //   }
  //   if (!form.phone) {
  //     setErrors((prev) => {
  //       return { ...prev, phone: StaticText.alert.error }
  //     })
  //   }
  //   if (!form.country?.id) {
  //     setErrors((prev) => {
  //       return { ...prev, country: StaticText.alert.error }
  //     })
  //   }
  //   if (form.country?.id == 103 && !form.state) {
  //     setErrors((prev) => {
  //       return { ...prev, state: StaticText.alert.error }
  //     })
  //   }
  //   if (form.country?.id == 103 && !form.city) {
  //     setErrors((prev) => {
  //       return { ...prev, city: StaticText.alert.error }
  //     })
  //   }
  //   if (!form.address_line1) {
  //     setErrors((prev) => {
  //       return { ...prev, address_line1: StaticText.alert.error }
  //     })
  //   }
  //   // if (!form.gender) {
  //   //   setErrors((prev) => {
  //   //     return { ...prev, gender: StaticText.alert.error }
  //   //   })
  //   // }
  //   if (!form.ques) {
  //     Alert.alert('Peringatan', 'Tolong jawab dari mana anda mengetahui Halofoto app', [
  //       { text: 'OKE', onPress: () => console.log('OK Pressed') },
  //     ]);
  //   } else {
  //     console.log(Object.values(form).length)
  //     if (
  //       Object.values(form).length >= 7 
  //       //&& Object.values(form).every(item => item || item?.trim()?.length > 0)
  //       //Object.values(errors).every((item) => !item)
  //     ) {
  //       register(form)(authDispatch)

  //       // register(form)(authDispatch)(response => {
  //       //     setForm(form => {
  //       //         return {}
  //       //     })
  //       //     Alert.alert(StaticText.screen.register.success_heading, StaticText.screen.register.success_text, [
  //       //         { text: StaticText.button.ok, onPress: () => onPress(LOGIN) },
  //       //     ])
  //       // })
  //     }
  //   }
  //  }

  const onSubmit = () => {
    console.log(form, 'iiiiiiiiiiiiiiiii')
    if (!form.name) {
      setErrors((prev) => {
        return { ...prev, name: StaticText.alert.error }
      })
    }
    if (!form.email) {
      setErrors((prev) => {
        return { ...prev, email: StaticText.alert.error }
      })
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: StaticText.alert.error }
      })
    }
    // if (!form.dob) {
    //   setErrors((prev) => {
    //     return { ...prev, dob: StaticText.alert.error }
    //   })
    // }
    if (!form.phone_country_code?.ext_code) {
      setErrors((prev) => {
        return { ...prev, phone_country_code: StaticText.alert.error }
      })
    }
    if (!form.phone) {
      setErrors((prev) => {
        return { ...prev, phone: StaticText.alert.error }
      })
    }
    if (!form.country?.id) {
      setErrors((prev) => {
        return { ...prev, country: StaticText.alert.error }
      })
    }
    if (form.country?.id == 103 && !form.state) {
      setErrors((prev) => {
        return { ...prev, state: StaticText.alert.error }
      })
    }
    if (form.country?.id == 103 && !form.city) {
      setErrors((prev) => {
        return { ...prev, city: StaticText.alert.error }
      })
    }
    if (!form.address_line1) {
      setErrors((prev) => {
        return { ...prev, address_line1: StaticText.alert.error }
      })
    }
    // if (!form.gender) {
    //   setErrors((prev) => {
    //     return { ...prev, gender: StaticText.alert.error }
    //   })
    // }
   
      if (
        Object.values(form).length >= 7 &&
        //&& Object.values(form).every(item => item || item?.trim()?.length > 0)
        Object.values(errors).every((item) => !item)
      ) {
        register(form)(authDispatch)

        // register(form)(authDispatch)(response => {
        //     setForm(form => {
        //         return {}
        //     })
        //     Alert.alert(StaticText.screen.register.success_heading, StaticText.screen.register.success_text, [
        //         { text: StaticText.button.ok, onPress: () => onPress(LOGIN) },
        //     ])
        // })
      }
    


  }


  return (
    <RegisterScreen
      onChange={onChange}
      onSubmit={onSubmit}
      inptEmail={inptEmail}
      inptPassword={inptPassword}
      inptPhone={inptPhone}
      inptAddressLine1={inptAddressLine1}
      form={form}
      errors={errors}
      error={error}
      onPress={onPress}
      showLoader={loading}
      countryList={countryListData}
      countryListloading={countryListloading}
      isTamronUser={isTamronUser}
      setIsTamronUser={setIsTamronUser}
      setCities={setCities}
      cities={cities}
    />
  )
}
export default Register
