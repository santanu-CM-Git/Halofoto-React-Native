import { createStackNavigator } from "@react-navigation/stack"
import * as RouteNames from "../constants/RouteNames"
import AppSettings from '../global/AppSettings'
import Home from '../components/Dashboard/Home'
import ProductCatalog from '../components/Dashboard/ProductCatalog'
import PackageQrCode from '../components/Dashboard/ProductRegistration/PackageQrCode'
import RegisterWarranty from '../components/Dashboard/ProductRegistration/RegisterWarranty'
import UploadInvoice from '../components/Dashboard/ProductRegistration/UploadInvoice'
import NewsList from '../components/Dashboard/News'
import NewsListByCategory from '../components/Dashboard/News/ListByCategory'
import SingleNews from '../components/Dashboard/News/SingleNews'
import HaloStory from '../components/Dashboard/HaloStory'
import SingleStory from '../components/Dashboard/HaloStory/SingleStory'
import RedemptionCentreList from '../components/Dashboard/RedemptionCentre'
import SingleRedemption from '../components/Dashboard/RedemptionCentre/SingleRedemption'


import Voucher from '../components/Dashboard/Voucher'

import ThankYou from "../components/Dashboard/ProductRegistration/ThankYou"
import MyProduct from "../components/Dashboard/MyProduct"
import SingleProduct from "../components/Dashboard/MyProduct/SingleProduct"
import SingleReview from "../components/Dashboard/ReviewCenter/SingleReview"
import MyProfile from "../components/Dashboard/MyProfile"
import PoinSaya from "../components/Dashboard/MyProfile/PoinSaya"
import ManageProfile from "../components/Dashboard/MyProfile/ManageProfile"
import ManagePassword from "../components/Dashboard/MyProfile/ManagePassword"
import ReviewList from "../components/Dashboard/ReviewCenter/ReviewList"
import SingleCatalogProduct from '../components/Dashboard/ProductCatalog/SingleProduct'
import VoucherDetails from "../components/Dashboard/Voucher/voucherDetails"
import UsedVoucherList from "../components/Dashboard/Voucher/usedVoucherList"
import MessageList from "../components/Dashboard/Message/MessageList"
import MessageDetails from "../components/Dashboard/Message/MessageDetails"
import ERepair from "../components/Dashboard/MyProduct/ERepair"
import SoftwareLicense from "../components/Common/Settings/SoftwareLicense"
// import TermsAndConditions from "../components/Dashboard/WarrantyTermsAndConditions"

import GiftCoupon from "../components/Dashboard/GiftCoupon"
import GiftCouponDetails from "../components/Dashboard/GiftCoupon/GiftCouponDetails"
import GiftProductList from "../components/Dashboard/GiftCoupon/GiftProductList"

const DashboardStackNavigator = () => {
    const DashboardStack = createStackNavigator()
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Group
                screenOptions={{
                    headerShown: AppSettings.navigation_stack_header_visibility,
                }}
            >
                <DashboardStack.Screen name={RouteNames.DASHBOARD} component={Home} />
                <DashboardStack.Screen name={RouteNames.WARENTY_REGISTRATION_PACKAGE_QR_CODE} component={PackageQrCode} />
                <DashboardStack.Screen name={RouteNames.WARENTY_REGISTRATION_PRODUCT_WARRANTY} component={RegisterWarranty} />
                <DashboardStack.Screen name={RouteNames.WARENTY_REGISTRATION_FILE_UPLOAD} component={UploadInvoice} />
                <DashboardStack.Screen name={RouteNames.WARENTY_REGISTRATION_THANK_YOU} component={ThankYou} />
                <DashboardStack.Screen name={RouteNames.PRODUCT_CATALOG} component={ProductCatalog} />
                <DashboardStack.Screen name={RouteNames.PRODUCT_CATALOG_DETAILS} component={SingleCatalogProduct} />
                <DashboardStack.Screen name={RouteNames.NEWS_LIST} component={NewsList} />
                <DashboardStack.Screen name={RouteNames.NEWS_DETAILS} component={SingleNews} />
                <DashboardStack.Screen name={RouteNames.CATEGORY_NEWS} component={NewsListByCategory} />
                <DashboardStack.Screen name={RouteNames.HALO_STORY_LIST} component={HaloStory} />
                <DashboardStack.Screen name={RouteNames.HALO_STORY_DETAILS} component={SingleStory} />
                <DashboardStack.Screen name={RouteNames.MY_PRODUCT_LIST} component={MyProduct} />
                <DashboardStack.Screen name={RouteNames.MY_PRODUCT_DETAILS} component={SingleProduct} />
                <DashboardStack.Screen name={RouteNames.REVIEW_LIST} component={ReviewList} />
                <DashboardStack.Screen name={RouteNames.REVIEW_CENTER_SINGLE} component={SingleReview} />
                <DashboardStack.Screen name={RouteNames.MY_PROFILE} component={MyProfile} />
                <DashboardStack.Screen name={RouteNames.POIN_SAYA} component={PoinSaya} />
                <DashboardStack.Screen name={RouteNames.MY_PROFILE_MANAGE} component={ManageProfile} />
                <DashboardStack.Screen name={RouteNames.MY_PROFILE_MANAGE_PASSWORD} component={ManagePassword} />
                <DashboardStack.Screen name={RouteNames.REDEMPTION_CENTRE} component={RedemptionCentreList} />
                <DashboardStack.Screen name={RouteNames.REDEMPTION_CENTRE_DETAIL} component={SingleRedemption} />
                <DashboardStack.Screen name={RouteNames.VOUCHER} component={Voucher} />
                <DashboardStack.Screen name={RouteNames.VOUCHER_DETAILS} component={VoucherDetails} />
                <DashboardStack.Screen name={RouteNames.HISTORY} component={UsedVoucherList} />
                <DashboardStack.Screen name={RouteNames.MESSAGE_LIST} component={MessageList} />
                <DashboardStack.Screen name={RouteNames.MESSAGE_DETAILS} component={MessageDetails} />
                <DashboardStack.Screen name={RouteNames.E_REPAIR} component={ERepair} />
                <DashboardStack.Screen name={RouteNames.SOFTWARE_LICENSE} component={SoftwareLicense} />
                <DashboardStack.Screen name={RouteNames.GIFT_COUPON} component={GiftCoupon} />
                <DashboardStack.Screen name={RouteNames.GIFT_COUPON_DETAILS} component={GiftCouponDetails} />
                <DashboardStack.Screen name={RouteNames.GIFT_PRODUCT_LIST} component={GiftProductList} />
                {/* <DashboardStack.Screen name={RouteNames.TERMS_AND_CONDITIONS} component={TermsAndConditions} /> */}
            </DashboardStack.Group>

        </DashboardStack.Navigator>
    )
}
export default DashboardStackNavigator