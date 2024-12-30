import { useCallback, useEffect, useState } from "react"
import {
    SafeAreaView,
    ImageBackground,
    View,
    ActivityIndicator,
    Dimensions,
    FlatList,
    Text,
    Image,
    Alert
} from "react-native"
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppSettings from "../../../global/AppSettings"
import Colors from "../../../global/Colors"
import BackBtn from "../../../screens/Helper/SvgImg/BackBtn"
import AnimatedHeader from "../../../screens/Helper/AnimatedHeader";
import StaticText from "../../../global/StaticText";
import ProductListItem from "./ProductListItem"
import NoContentPage from "../../../screens/Common/NoContentPage";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient"
import env from '../../../config/env'
import axios from "axios";

const GiftProductList = () => {
    const route = useRoute();
    const { voucherId, voucherCode, voucherImg } = route.params;
    const { navigate, goBack } = useNavigation();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [footerLoading, setFooterLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const keyExtractorProductList = useCallback(item => `list-${item.id.toString()}${Math.random()}`, [])

    useEffect(() => {
        fetchProductDetails();
        return () => {
            setProductList([]);
        };
    }, []);


    const fetchProductDetails = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(`${env.BACKEND_URL}/mobile/user-voucher-details`, { voucher_id: voucherId },
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data?.status == 200) {
                const data = response?.data?.data?.product_list ? response.data.data.product_list : [];
                setProductList(data);
                setLoading(false);
            }
        } catch (e) {
            console.log(`user update error ${e}`);
            Alert.alert('Ups..', "Ada yang salah", [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    const onDetailsHandler = (route, params) => {
        navigate(route, params);
    }

    const renderProduct = useCallback(
        ({ item }) => (
            <ProductListItem
                item={item}
                onPress={onDetailsHandler}
            />
        ),
        []
    )

    const listFooter = () => {
        return (
            <>
                {footerLoading && (<ActivityIndicator size='large' color={Colors.royal_blue} style={{ marginBottom: 16 }} />)}
            </>
        )
    }
    const onRefresh = async () => {
        setRefreshing(true);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post(`${env.BACKEND_URL}/mobile/user-voucher-details`, { voucher_id: voucherId },
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data?.status == 200) {
                const data = response?.data?.data?.product_list ? response.data.data.product_list : [];
                setProductList(data);
                setRefreshing(false);
            }
        } catch (e) {
            console.log(`user update error ${e}`);
            Alert.alert('Ups..', "Ada yang salah", [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    const listHeader = () => (
        <View style={styles.headerContainer}>
            <View>
                {voucherImg ?
                    <Image
                        source={{ uri: voucherImg }}
                        loadingIndicatorSource={AppSettings.loader_image}
                        style={styles.voucherImg}
                    /> : null}
            </View>
            <View>
                <Text style={styles.voucherCodeText}>Code : <Text style={styles.vCodeText}>{voucherCode}</Text></Text>
            </View>
        </View>
    );


    const onEndReached = () => { }

    const onBackHandler = () => {
        goBack();
    }
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
                <AnimatedHeader
                    label={StaticText.screen.gift_voucher.content.voucher_product_List}
                    mainWrapperStyle={styles.topHeader}
                    innerWraperStyle={styles.titleHolder}
                    buttonWrapStyle={styles.backWrap}
                    labelStyle={styles.pageHeading}
                    onPress={onBackHandler}
                />

                <View style={styles.mainScroll}>
                    {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> :
                        productList.length > 0 ? (
                            <>
                                <View style={[styles.newsCardWrap]}>
                                    <FlatList
                                        onRefresh={onRefresh}
                                        refreshing={refreshing}
                                        keyExtractor={keyExtractorProductList}
                                        horizontal={false}
                                        data={productList}
                                        maxToRenderPerBatch={Dimensions.get("screen").height}
                                        windowSize={Dimensions.get("screen").height}
                                        initialNumToRender={10}
                                        renderItem={renderProduct}
                                        showsVerticalScrollIndicator={false}
                                        keyboardShouldPersistTaps="handled"
                                        decelerationRate="fast"
                                        onEndReachedThreshold={0.5}
                                        onEndReached={onEndReached}
                                        ListHeaderComponent={listHeader}
                                        ListFooterComponent={listFooter}
                                    //onScroll={e => setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))}
                                    />
                                </View>
                            </>
                        ) :
                            <>
                                <NoContentPage />
                            </>
                    }
                </View>
            </LinearGradient>
        </View>
    )
}

export default GiftProductList
