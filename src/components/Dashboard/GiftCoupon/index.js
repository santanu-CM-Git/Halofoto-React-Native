import React, { useCallback, useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native"
import {
    SafeAreaView,
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Alert,
    Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../global/Colors";
import styles from "./styles";
import ListItem from "./ListItem";
import NoContentPage from "../../../screens/Common/NoContentPage";
import AnimatedHeader from "../../../screens/Helper/AnimatedHeader";
import StaticText from "../../../global/StaticText";
import env from '../../../config/env'
import axios from "axios";

const GiftCoupon = () => {

    const { navigate, goBack } = useNavigation();
    const [yAxisValue, setYAxisValue] = useState(0)
    const [voucherListData, setVoucherListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState(1);
    const [readStatus, setReadStatus] = useState([])

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        // console.log(env.BACKEND_URL);
        // const token = await AsyncStorage.getItem('token')
        // console.log(token);
        
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('token');

            const response = await axios.get(`${env.BACKEND_URL}/mobile/user-voucher-list`, {
                headers: {
                    Accept: 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (response.data?.status == 200) {
                const data = response?.data?.data?.voucher_list ? response.data.data.voucher_list : [];
                setVoucherListData(data);
                setLoading(false);
            }
        } catch (e) {
            console.log(`user update error ${e}`);
            Alert.alert('Ups..', "Ada yang salah", [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    const onBackHandler = () => {
        goBack();
    }

    const keyExtractorProductList = item => `list-${item.voucher_id.toString()}${Math.random()}`

    const onDetailsHandler = (route, params) => {
        navigate(route, params);
    }

    const renderProduct = ({ item }) => (
        <ListItem
            item={item}
            onPress={onDetailsHandler}
            readStatus={readStatus}
        />
    )

    const listFooter = () => {
        return (
            <>
                {isLoading && (<ActivityIndicator size='large' color={Colors.royal_blue} style={{ marginBottom: 16 }} />)}
            </>
        )
    }

    const onEndReached = () => {}

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.get(`${env.BACKEND_URL}/mobile/user-voucher-list`, {
                headers: {
                    Accept: 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (response.data?.status == 200) {
                const data = response?.data?.data?.voucher_list ? response.data.data.voucher_list : [];
                setVoucherListData(data);
                setRefreshing(false);
            }
        } catch (e) {
            console.log(`user update error ${e}`);
            Alert.alert('Ups..', "Ada yang salah", [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
                <AnimatedHeader
                 label={StaticText.screen.gift_voucher.heading}
                    mainWrapperStyle={styles.topHeader}
                    innerWraperStyle={styles.titleHolder}
                    buttonWrapStyle={styles.backWrap}
                    labelStyle={styles.pageHeading}
                    onPress={() => onBackHandler()}
                />
                <View style={styles.mainScroll}>
                    {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> :
                        voucherListData.length > 0 ? (
                            <>
                                <View style={[styles.newsCardWrap]}>
                                    <FlatList
                                        onRefresh={onRefresh}
                                        refreshing={refreshing}
                                        keyExtractor={keyExtractorProductList}
                                        horizontal={false}
                                        data={voucherListData}
                                        maxToRenderPerBatch={Dimensions.get("screen").height}
                                        windowSize={Dimensions.get("screen").height}
                                        initialNumToRender={10}
                                        renderItem={renderProduct}
                                        showsVerticalScrollIndicator={false}
                                        keyboardShouldPersistTaps="handled"
                                        decelerationRate="fast"
                                        onEndReachedThreshold={0.5}
                                        onEndReached={onEndReached}
                                        // ListHeaderComponent={listHeader}
                                        ListFooterComponent={listFooter}
                                        onScroll={e => setYAxisValue(e.nativeEvent.contentOffset.y.toFixed(0))}
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
    );
};

export default GiftCoupon
