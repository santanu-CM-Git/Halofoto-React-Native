import {
    Text,
    Animated,
    Pressable,
    View
} from "react-native"

import MyProduct from "../../Helper/SvgImg/MyProduct"
import Coupon from "../../Helper/SvgImg/Coupon"
import Gift from "../../Helper/SvgImg/Gift"
import ProductCatalog from "../../Helper/SvgImg/ProductCatalog"
import Reviews from "../../Helper/SvgImg/Reviews"
import Myloyalty from "../../Helper/SvgImg/Myloyalty"
import News from "../../Helper/SvgImg/News"
import Message from "../../Helper/SvgImg/Message"
import GiftCoupon from "../../Helper/SvgImg/GiftCoupon"
import HaloStory from "../../Helper/SvgImg/HaloStory"
import styles from "./style"
import { responsiveFontSize } from "react-native-responsive-dimensions"

const DashboardButtons = ({
    menu, onPress, isNewNotification
}) => {

    const animated = new Animated.Value(1)
    let CurrentComponent = ''

    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 50,
            useNativeDriver: true,
        }).start()
    }
    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
        }).start(() => menu.navigation.length ? onPress(menu.navigation) : '')
    }

    switch (menu.name) {
        case 'my_product':
            CurrentComponent = MyProduct
            break
        case 'coupon':
            CurrentComponent = Coupon
            break
        case 'redemption_center':
            CurrentComponent = Gift
            break
        case 'product_catalog':
            CurrentComponent = ProductCatalog
            break
        case 'halo_foto_story':
            CurrentComponent = HaloStory
            break
        case 'review_center':
            CurrentComponent = Reviews
            break
        case 'my_points':
            CurrentComponent = Myloyalty
            break
        case 'news':
            CurrentComponent = News
            break
        case 'message':
            CurrentComponent = Message
            break
        case 'gift_coupon':
            CurrentComponent = GiftCoupon
            break
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100}>
            <Animated.View style={[styles.tabs, { opacity: animated }]}>
                <CurrentComponent />
                {menu.label == 'Pesan' ?
                    <View style={{ position: 'absolute', top: 10, right: 25 }}>{isNewNotification != '0' ? <Text style={{ color: 'red', fontSize: responsiveFontSize(1) }}>{'\u2B24'}</Text> : null}</View>
                    :
                    null}
                <Text style={styles.tabButtonText}>
                    {menu.label}
                </Text>
            </Animated.View>

        </Pressable>
    )
}
export default DashboardButtons