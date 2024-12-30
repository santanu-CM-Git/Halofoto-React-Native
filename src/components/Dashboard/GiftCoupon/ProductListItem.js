import { View, Image, Text, Pressable } from 'react-native'
import StaticText from '../../../global/StaticText'
import AppSettings from '../../../global/AppSettings'
import styles from "./ProductItemStyle"
import { PRODUCT_CATALOG_DETAILS } from '../../../constants/RouteNames'

const ProductListItem = ({ item, onPress }) => {
    return (
        <Pressable onPress={() => onPress(PRODUCT_CATALOG_DETAILS, {
            productId: item?.id
        })} unstable_pressDelay={100}>
            <View style={[styles.hotDealsSlide, styles.hotDealsList]}>
                <View style={[styles.productCard, styles.productCardSingle]}>
                    <View style={styles.productListVerical}>
                        {item?.product_images && item?.product_images?.length > 0 && <View style={[styles.productWrap, styles.productWrapSingle]}>
                            <Image
                                source={{
                                    uri: item?.product_images[0]?.path,
                                }}
                                loadingIndicatorSource={AppSettings.loader_image}
                                style={[styles.productImg, styles.productImgSmall]}
                            />
                        </View>}
                        <View style={[styles.productDetails, styles.productDetails]}>
                            <View style={styles.productDetailsInner}>
                                {/* <Text style={styles.textCompatiableMount}>Rp {item?.original_price}</Text> */}
                                <View style={[styles.lensType, { marginLeft: 0, }]}>
                                    <Text style={styles.productModel}>
                                        {item.fixed_value !== null && item.fixed_value !== 0
                                            ? "Rp " + item.fixed_value
                                            : item?.percentage + "%"}
                                    </Text>
                                </View>
                            </View>
                            {item?.name && (
                                <Text style={styles.productTitle}>{item?.name}</Text>
                            )}
                            <View style={styles.productDetailsInnerSmall}>
                                {item?.model_no && (
                                    <Text style={styles.textProductModel}>
                                        {StaticText.screen.product_catelog.content.model}: {item?.model_no}
                                    </Text>
                                )}
                                {/* {item?.product_reviews && item?.product_reviews?.length > 0 &&
                                    <View style={styles.productReating}>
                                        <Image
                                            source={AppSettings.Star}
                                            style={styles.starRating}
                                        />
                                        <Text style={styles.reviews}>
                                            {item?.product_reviews}
                                        </Text>
                                    </View>} */}
                            </View>
                        </View>
                    </View>
                    {item.model_apply == true ?
                        <View style={styles.statusView}>
                            <Text style={styles.statusText}>Pembelian</Text>
                        </View>
                        : null}
                </View>
            </View>
        </Pressable>
    )
}
export default ProductListItem