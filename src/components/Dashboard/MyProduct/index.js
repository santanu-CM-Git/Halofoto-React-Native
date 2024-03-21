import React, { useContext, useEffect, useState, useRef } from "react"
import { useIsFocused } from "@react-navigation/native"
import { Dimensions } from "react-native"
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import Toast from 'react-native-root-toast'

import { GlobalContext } from "../../../context/Provider"
import MyProductListScreen from "../../../screens/Dashboard/MyProduct"
import myProductList from "../../../context/actions/dashboard/myProductList"
import { hideNavigation, showNavigation } from "../../../context/actions/common/manageNavigation"
import moment from "moment";
import StaticText from "../../../global/StaticText"
import { WARENTY_REGISTRATION_PACKAGE_QR_CODE } from "../../../constants/RouteNames"

const MyProduct = ({ route, navigation }) => {
    const { slideIndex } = route?.params
    const isFocused = useIsFocused()
    const { height, width } = Dimensions.get('window')
    const [currentSlideIndex, setCurrentSlideIndex] = useState((typeof slideIndex != 'undefined' && slideIndex.length) ? slideIndex : 0)
    const [videoModal, showVideoModal] = useState(false)
    const [eRepairModal, showERepairModal] = useState(false)
    const [videoProp, setVideoProp] = useState({ url: '', poster: '' })
    const sliderRef = useRef()

    const navMenus = [
        {
            name: 'certificate',
            label: StaticText.screen.my_product_list.content.certificate,
            component: 'CertificateIcon'
        },
        {
            name: 'bill',
            label: StaticText.screen.my_product_list.content.bill,
            component: 'Download'
        },
        {
            name: 'video',
            label: StaticText.screen.my_product_list.content.video,
            component: 'Video'
        },
        {
            name: 'e_repair',
            label: StaticText.screen.my_product_list.content.e_repair,
            component: 'Repair'
        },
        {
            name: 'upload_invoice',
            label: StaticText.screen.my_product_list.content.upload_invoice,
            component: 'invoice'
        },
    ]

    const {
        myProductListState: { error, loading, data },
        myProductListDispatch,
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)

    const onPress = (route, warrantyId,  displayCertificate) => navigation.navigate(route, {
        warrantyId,
        displayCertificate,
        currentSlideIndex
    })

   const onPressRegister = () => navigation.navigate(WARENTY_REGISTRATION_PACKAGE_QR_CODE)

    const onPressSlide = arg => {
        let slideIndex = parseInt(currentSlideIndex)
        if (arg == 'prev' && slideIndex > 0) {
            slideIndex = slideIndex - 1
        } else if (arg == 'next' && (slideIndex + 1) < data.length) {
            slideIndex = slideIndex + 1
        }

        sliderRef.current.scrollToIndex({
            index: slideIndex,
            animated: true,
        })
    }

    const onPressTab = (tab, url, image) => {
        if (tab == 'video') {
            url?.length > 0 ? (
                setVideoProp({ url, poster: image }),
                showVideoModal(true)
            ) : Toast.show(StaticText.alert.no_video_found)
        }
        if (tab == 'invoice') {
            url?.length > 0 ? handleFileDownload(url) : Toast.show(StaticText.alert.no_invoice_found)
        }
    }

    const handleFileDownload = async (url) => {
        let date = moment().format('YYYYMMDDhhmmss')
        let fileExt = url.split('.').pop()
        let fileUri = FileSystem.documentDirectory + `${date}.${fileExt}`

        try {
            Toast.show(StaticText.alert.download_start)
            const res = await FileSystem.downloadAsync(url, fileUri)
            saveFile(res.uri)
        } catch (err) {

        }
    }

    const saveFile = async (fileUri) => {
        const res = await MediaLibrary.requestPermissionsAsync()
        if (res.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(fileUri);
                const album = await MediaLibrary.getAlbumAsync('Download');
                if (album == null) {
                    await MediaLibrary.createAlbumAsync('Download', asset, false);
                } else {
                    await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
                }
                Toast.show(StaticText.alert.download_complete)
            } catch (err) {

            }
        } else {
            alert(StaticText.alert.download_permission)
        }
    }

    useEffect(() => {
        isFocused && (
            showNavigation()(navigationDispatch),
            myProductList()(myProductListDispatch)
        )
    }, [isFocused])

   
    return (
        <MyProductListScreen
            data={data}
            loading={loading}
            onPress={onPress}
            onPressSlide={onPressSlide}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            screenHeight={height}
            screenWidth={width}
            sliderRef={sliderRef}
            onPressTab={onPressTab}
            videoModal={videoModal}
            eRepairModal={eRepairModal}
            videoProp={videoProp}
            showVideoModal={showVideoModal}
            showERepairModal={showERepairModal}
            navMenus={navMenus}
            onPressRegister={onPressRegister}
        />
    )
}

export default MyProduct