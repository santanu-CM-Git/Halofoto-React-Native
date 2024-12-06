import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { WARENTY_REGISTRATION_FILE_UPLOAD } from '../../../constants/RouteNames'
import { GlobalContext } from '../../../context/Provider'
import productSerialNo from '../../../context/actions/dashboard/productSerialNo'
import productModelNo from '../../../context/actions/dashboard/productModelNo'
import productWarrantyRegisterStepFirst, { clearProductWarrantyRegisterStepFirst } from '../../../context/actions/dashboard/productWarrantyRegisterStepFirst'
import RegisterWarrantyScreen from '../../../screens/Dashboard/ProductRegistration/RegisterWarranty'
import StaticText from '../../../global/StaticText'
import { hideNavigation } from '../../../context/actions/common/manageNavigation'

const RegisterWarranty = ({ route, navigation }) => {
    const { productSerialNoDispatch, productSerialNoState: { error, loading, data }, productWarrantyRegisterStepFirstDispatch, productWarrantyRegisterStepFirstState: { stepFirstData, stepFirstError, stepFirstLoading }, navigationDispatch, navigationState: { display }, productModelNoState: { modelData, modelError, modelLoading }, productModelNoDispatch } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const isFocused = useIsFocused()
    const { serialNo } = route.params

    useEffect(() => {
        isFocused && (
            hideNavigation()(navigationDispatch),
            productModelNo()(productModelNoDispatch),
            (typeof serialNo !== 'undefined' && serialNo != '') && productSerialNo(serialNo)(productSerialNoDispatch)
        )
        !isFocused && (
            clearProductWarrantyRegisterStepFirst()(productWarrantyRegisterStepFirstDispatch),
            setForm({}),
            setErrors({})
        )
    }, [isFocused])
    useEffect(() => {
        if (serialNo?.length > 0) {
            onChange({ name: 'serial_no', value: serialNo })
        }
        
        if (data?.model_no?.length > 0) {
            onChange({ name: 'model_no', value: (!error?.message && data?.model_no) ? data?.model_no : `` })
        }
    }, [loading])

    useEffect(() => {
        let data = ``
        if(stepFirstError?.serial_no && typeof stepFirstError?.serial_no[0] != 'undefined'){
            data += stepFirstError?.serial_no[0]
        }
        if(stepFirstError?.model_no && typeof stepFirstError?.model_no[0] != 'undefined'){
            data += stepFirstError?.model_no[0]
        }
        if(stepFirstError?.date_of_purchase && typeof stepFirstError?.date_of_purchase[0] != 'undefined'){
            data += stepFirstError?.date_of_purchase[0]
        }
        if(stepFirstError?.seller_name && typeof stepFirstError?.seller_name[0] != 'undefined'){
            data += stepFirstError?.seller_name[0]
        }
        if(stepFirstError?.error){
            data += stepFirstError?.error
        }

        data?.length > 0 && Alert.alert(StaticText.alert.error_heading, data,[
            { text: StaticText.button.ok, onPress: () => { } },
        ])
    }, [stepFirstError])

    const onPress = route => route ? navigation.navigate(route) : navigation.goBack()

    const onChange = ({ name, value }) => {
        setForm(form => {
            return { ...form, [name]: value }
        })

        if (value !== '') {
            setErrors(prev => {
                return { ...prev, [name]: null }
            })
        }
        else {
            setErrors(prev => {
                return { ...prev, [name]: StaticText.alert.error }
            })
        }
    }

    const onSubmit = () => {
        if (!form.model_no) {
            setErrors(prev => {
                return { ...prev, model_no: StaticText.alert.error }
            })
        }
        if (!form.serial_no) {
            setErrors(prev => {
                return { ...prev, serial_no: StaticText.alert.error }
            })
        }
        if (!form.date_of_purchase) {
            setErrors(prev => {
                return { ...prev, date_of_purchase: StaticText.alert.error }
            })
        }
        if (!form.seller_name) {
            setErrors(prev => {
                return { ...prev, seller_name: StaticText.alert.error }
            })
        }

        if (Object.values(form).length == 4
            && Object.values(form).every(item => item || item?.trim()?.length > 0)
            && Object.values(errors).every(item => !item)
        ) {
            productWarrantyRegisterStepFirst(form)(productWarrantyRegisterStepFirstDispatch)(response => {
                setForm(form => {
                    return {}
                })
                navigate(WARENTY_REGISTRATION_FILE_UPLOAD, {
                    warrantyId: response?.warranty?.id
                })

            })
        }
    }

    return (
        <RegisterWarrantyScreen
            data={data}
            loading={loading ? loading : stepFirstLoading}
            serialNo={serialNo}
            onPress={onPress}
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            error={error}
            modelData={modelData}
            modelLoading={modelLoading}
        />
    )
}
export default RegisterWarranty