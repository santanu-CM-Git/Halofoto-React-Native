import React, { useContext, useEffect, useRef, useState, useCallback } from "react"
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { InteractionManager } from 'react-native'
import { GlobalContext } from "../../../context/Provider"
import SingleRedemptionScreen from "../../../screens/Dashboard/RedemptionCentre/SingleRedemption"
import redemptionCentreDetail from "../../../context/actions/dashboard/redemptionCentreDetail"
import { hideNavigation } from "../../../context/actions/common/manageNavigation"
import { Alert } from "react-native"
import StaticText from "../../../global/StaticText"
import reedemVoucher, { clearVoucherState } from "../../../context/actions/dashboard/reedemVoucher"

const SingleRedemption = ({ route, navigation }) => {
    const {
        redemptionCentreDetailState: { error, loading, data },
        reedemVoucherState: { reedemVoucherData, reedemVoucherError, reedemVoucherLoading },
        redemptionCentreDetailDispatch, reedemVoucherDispatch,
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)

    const { voucherId,value } = route.params
    const isFocused = useIsFocused()
    // useFocusEffect(
    //     useCallback(() => {
    //         const task = InteractionManager.runAfterInteractions(() => {
    //             hideNavigation()(navigationDispatch)
    //             redemptionCentreDetail(voucherId)(redemptionCentreDetailDispatch)
    //         })
    //         return () => task.cancel();
    //     }, [])
    // )
    // useEffect(() => {
    //     !isFocused && (
    //     clearVoucherState()(reedemVoucherDispatch)
    //  )}, [isFocused])

    useEffect(() => {
        hideNavigation()(navigationDispatch)
        redemptionCentreDetail(voucherId)(redemptionCentreDetailDispatch)
    }, [])
    useFocusEffect(
        useCallback(() => {
            redemptionCentreDetail(voucherId)(redemptionCentreDetailDispatch)
            console.log('singleRedemtion')
        }, [])
    )

    const onPress = routes => {
        //console.log(routes,'iiiiiiiiiii')
        routes ? navigation.navigate(routes) : navigation.goBack()
    }

    const onSubmit = (param,value) => {
        console.log(value,'bbbbb')
        console.log(param,'llllll')
        reedemVoucher(param, 1,value)(reedemVoucherDispatch)
    }
    useEffect(() => {
        reedemVoucherError?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, reedemVoucherError?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [reedemVoucherError])
    useEffect(() => {
        error?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, error?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [error])



    return (
        <SingleRedemptionScreen
            data={data}
            loading={loading}
            onPress={onPress}
            onSubmit={onSubmit}
            reedemVoucherData={reedemVoucherData}
            reedemVoucherLoading={reedemVoucherLoading}
        />
    )
}
export default SingleRedemption