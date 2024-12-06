import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import {
    SafeAreaView,
    Image,
    ImageBackground,
    Text,
    View,
    Pressable,
    ActivityIndicator,
    ScrollView,
    useWindowDimensions,
} from "react-native"
import RenderHtml from 'react-native-render-html'
import { useIsFocused, useNavigation } from "@react-navigation/native"
import BackBtn from "../../../screens/Helper/SvgImg/BackBtn"
import Colors from "../../../global/Colors"
import StaticText from "../../../global/StaticText";
// import NavButtons from "./NavButtons"
// import VideoModal from '../../Helper/Modal/VideoModal'
import styles from "./DetailsStyle"

const GiftCouponDetails = ()=>{
    const { navigate, goBack } = useNavigation();
    const { width } = useWindowDimensions();
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const productDescriptionInfo = {
        html: `<div style="color:white;word-wrap:break-word;font-size:16px;">${data?.product?.description?.length ? data?.product?.description : ``}</div>`
    }
    const onBackHandler = () => {
        goBack();
    }
    return (
        <>
            {/* {videoModal && <VideoModal videoProp={videoProp} showVideoModal={showVideoModal} showModal={videoModal} />} */}
            <View style={styles.container}>
                <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
                        <View style={styles.topHeader}>
                            <Pressable
                                style={styles.titleHolder}
                                onPress={() => onBackHandler()}
                            >
                                <View style={styles.backWrap}>
                                    <BackBtn />
                                </View>
                                <Text style={styles.pageHeading}>
                                    Details
                                </Text>
                            </Pressable>
                            <View style={styles.fileIco}>
                                <Pressable style={styles.buttonWrap}></Pressable>
                            </View>
                        </View>
                        <ScrollView style={styles.mainScroll}>
                            <View style={styles.mainBodyWrap}>
                                {loading ? (
                                    <ActivityIndicator size="large" color={Colors.royal_blue} />
                                ) : (
                                    <>
                                        {data?.product?.product_images && data?.product?.product_images?.length > 0 &&
                                            <View style={styles.productsWrap}>
                                                <Image
                                                    style={styles.image}
                                                    resizeMode={"cover"}
                                                    source={{ uri: data?.product?.product_images[0]?.path }}
                                                />
                                            </View>}


                                        <Text style={styles.textProductName}>
                                            {data?.product?.name}
                                        </Text>

                                        {data?.product?.product_categories && data?.product?.product_categories?.length > 0 && data?.product?.product_categories?.map(product_category => <Text style={styles.textProductCategoryName} key={`single-catg-${product_category.id}`}>
                                            {product_category.name}
                                        </Text>)}


                                        {/* <View style={styles.lensInfo}>
                                            {navMenus.length && navMenus.map((menu, index) => <NavButtons key={menu.name} menu={menu} item={data} onPressTab={onPressTab} onPress={onPress} />)}
                                        </View> */}

                                        <View style={styles.tabWrap}>
                                            <Pressable style={styles.tabBtnActive}>
                                                <LinearGradient
                                                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 1 }}
                                                    style={styles.btnActive}
                                                >
                                                    <Text style={styles.textCategoryWrap}>
                                                        {StaticText.screen.product_details.content.details}
                                                    </Text>
                                                </LinearGradient>
                                            </Pressable>
                                        </View>

                                        <View style={styles.certificateWrap}>
                                            <View style={styles.textDataSmall}>
                                                <RenderHtml
                                                    contentWidth={width}
                                                    source={productDescriptionInfo}
                                                    enableExperimentalMarginCollapsing={true}
                                                />
                                            </View>
                                            <Text style={styles.textInfoTech}>
                                                {StaticText.screen.product_details.content.heading}
                                            </Text>
                                            <Text style={styles.textSpecification}>
                                                {StaticText.screen.product_details.content.specification}
                                            </Text>

                                            {data?.product?.model_no && data?.product?.model_no?.length > 0 && <View style={styles.specificationWrapInner}>
                                                <Text style={styles.textInnerContent}>
                                                    {StaticText.screen.product_details.content.model}
                                                </Text>
                                                <Text style={styles.textInnerHeading}>
                                                    {data?.product?.model_no}
                                                </Text>
                                            </View>}

                                            {data?.product?.focal_length && data?.product?.focal_length?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.focal_length}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.focal_length}
                                                    </Text>
                                                </View>}

                                            {data?.product?.max_aperture && data?.product?.max_aperture?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.max_aperture}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.max_aperture}
                                                    </Text>
                                                </View>}

                                            {data?.product?.angle_of_view && data?.product?.angle_of_view?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.angle_of_view}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.angle_of_view}
                                                    </Text>
                                                </View>}

                                            {data?.product?.optical_construction && data?.product?.optical_construction?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.optical_construction}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.optical_construction}
                                                    </Text>
                                                </View>}

                                            {data?.product?.min_object_distance && data?.product?.min_object_distance?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.min_object_distance}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.min_object_distance}
                                                    </Text>
                                                </View>}

                                            {data?.product?.max_magnification_ratio && data?.product?.max_magnification_ratio?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.max_magnification_ratio}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.max_magnification_ratio}
                                                    </Text>
                                                </View>}

                                            {data?.product?.filter_size && data?.product?.filter_size?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.filter_size}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.filter_size}
                                                    </Text>
                                                </View>}

                                            {data?.product?.max_diameter && data?.product?.max_diameter?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.max_diameter}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.max_diameter}
                                                    </Text>
                                                </View>}

                                            {data?.product?.weight && data?.product?.weight?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.weight}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.weight}
                                                    </Text>
                                                </View>}

                                            {data?.product?.aperture_blades && data?.product?.aperture_blades?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.aperture_blades}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.aperture_blades}
                                                    </Text>
                                                </View>}

                                            {data?.product?.min_aperture && data?.product?.min_aperture?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.min_aperture}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.min_aperture}
                                                    </Text>
                                                </View>}

                                            {data?.product?.img_stabilization_performance && data?.product?.img_stabilization_performance?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.img_stabilization_performance}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.img_stabilization_performance}
                                                    </Text>
                                                </View>}

                                            {data?.product?.standard_accessories && data?.product?.standard_accessories?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.standard_accessories}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.standard_accessories}
                                                    </Text>
                                                </View>}

                                            {data?.product?.compatible_mounts && data?.product?.compatible_mounts?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.compatible_mounts}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.compatible_mounts}
                                                    </Text>
                                                </View>}

                                            {data?.product?.additional_info && data?.product?.additional_info?.length > 0 &&
                                                <View style={styles.specificationWrapInner}>
                                                    <Text style={styles.textInnerContent}>
                                                        {StaticText.screen.product_details.content.additional_info}
                                                    </Text>
                                                    <Text style={styles.textInnerHeading}>
                                                        {data?.product?.additional_info}
                                                    </Text>
                                                </View>}

                                        </View>

                                    </>)}
                            </View>
                        </ScrollView>
                        </LinearGradient>
            </View> 
        </>
    )
}

export default GiftCouponDetails
