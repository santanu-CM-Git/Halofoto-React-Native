import { useCallback } from "react";
import {
  ImageBackground,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import AppSettings from "../../../../global/AppSettings";
import Colors from "../../../../global/Colors";
import PointCategorydHorizental from "./PointCategorydHorizental";
import ListItem from "./ListItem";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import StaticText from "../../../../global/StaticText";
import Header from "./Header";
import styles from "./listingStyle";
import NoContentPage from "../../../Common/NoContentPage";
import { VOUCHER } from "../../../../constants/RouteNames";
import { SafeAreaView } from "react-native-safe-area-context";

const VoucherList = ({
  voucherListData,
  data,
  loading,
  isLoading,
  onPress,
  onPressVoucher,
  onRefresh,
  refreshing,
  onEndReached,
  onChangeCategory,
  currentCategory,
}) => {
 
  const renderPointCategory = ({ item }) => <PointCategorydHorizental item={item} onChangeCategory={onChangeCategory} currentCategory={currentCategory} />

  const renderRedemptionList = useCallback(
    ({ item }) => <ListItem item={item} onPress={onPress}/>,
    []
  );

  const keyExtractorRedemptionList = useCallback(
    (item) => `list-${item.id.toString()}${Math.random()}`,
    []
  );
  const keyExtractorPointCategory = useCallback(
    (item) => `category-${item.id.toString()}${Math.random()}`,
    []
  );
  
  const listFooter = () => {
    return (
      <>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={Colors.royal_blue}
            style={{ marginBottom: 16 }}
          />
        )}
      </>
    );
  };

  const listHeader = () => {
    return (
      <>
        <Header data={data} onPress={onPress}/>
        {data?.user_points?.length && (
          <View style={styles.categorySlider}>
            <FlatList
              horizontal={true}
              data={data?.user_points}
              maxToRenderPerBatch={43}
              windowSize={43}
              initialNumToRender={4}
              showsHorizontalScrollIndicator={false}
              renderItem={renderPointCategory}
              keyExtractor={keyExtractorPointCategory}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <SafeAreaView>

        <AnimatedHeader
          label={StaticText.screen.voucher.heading}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />

        <View style={styles.mainScroll}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.royal_blue} />
          ) : voucherListData.length ? (
            <>
                <FlatList
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  keyExtractor={keyExtractorRedemptionList}
                  horizontal={false}
                  data={voucherListData}
                  maxToRenderPerBatch={Dimensions.get("screen").height}
                  windowSize={Dimensions.get("screen").height}
                  initialNumToRender={10}
                  renderItem={renderRedemptionList}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                  decelerationRate="fast"
                  onEndReachedThreshold={0.5}
                  onEndReached={onEndReached}
                  ListHeaderComponent={listHeader}
                  ListFooterComponent={listFooter}
                  contentContainerStyle={styles.contentContainer}
                />
          
            </>
          ) : (
            <>
              <NoContentPage />
            </>
          )}
        </View>
        </SafeAreaView>
      </ImageBackground>
      
    </View>
  );
};

export default VoucherList;