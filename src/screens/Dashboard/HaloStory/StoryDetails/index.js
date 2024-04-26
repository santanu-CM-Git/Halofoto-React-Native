import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { LinearGradient } from "expo-linear-gradient"

import RenderHtml from 'react-native-render-html'
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';
import { Slider } from '@miblanchard/react-native-slider';
import AppSettings from "../../../../global/AppSettings"
import AnimatedHeader from "../../../Helper/AnimatedHeader"
import StaticText from "../../../../global/StaticText"
import AudioIcon from "../../../Helper/SvgImg/Audio"
import VideoIcon from "../../../Helper/SvgImg/VideoLarge"
import Colors from "../../../../global/Colors"
import styles from "./style"
import PlayIcon from "../../../Helper/SvgImg/PlayIcon";
import PauseIcon from "../../../Helper/SvgImg/Pause";
import VideoModal from "../../../Helper/Modal/VideoModal";

const StoryDetails = ({

  data,
  loading,
  onPress,
  regex,
  handlePlay,
  handlePause,
  playDuration,
  playPosition,
  playerState,
  showPlayer,
  formatDuration,
  eventState,
  videoProp,
  showVideoModal,
  videoModal,
  handleVideoModal
}) => {

  const { width } = useWindowDimensions()
  const renderers = {
    iframe: IframeRenderer
  };

  const customHTMLElementModels = {
    iframe: iframeModel
  };

  const storyDetails = {
    html: `<div style="color:white;word-wrap:break-word;font-size:16px;font-weight:400">${data?.story?.description?.length ? data?.story?.description : ``}</div>`
  }

  const tagsStyles = {
    body: {
      paddingHorizontal: 10,
    },
    p: {
      marginHorizontal: 10
    }
  };

  return (
    <>
      {videoModal && (
        <VideoModal
          videoProp={videoProp}
          showVideoModal={showVideoModal}
          showModal={videoModal}
        />
      )}
      <View style={styles.container}>
        {/* <ImageBackground
          resizeMode="cover"
          style={styles.overlayWrap}
          source={AppSettings.background_inner_image_dark}
        > */}
        <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
          <SafeAreaView>
            <AnimatedHeader
              label={StaticText.screen.story_details.heading}
              mainWrapperStyle={styles.topHeader}
              innerWraperStyle={styles.titleHolder}
              buttonWrapStyle={styles.backWrap}
              labelStyle={styles.pageHeading}
              onPress={onPress}
            />

            <ScrollView style={styles.mainScroll} overScrollMode="never">
              <View style={styles.mainBodyWrap}>
                {loading ? <ActivityIndicator size="large" color={Colors.royal_blue} /> : data?.story?.id && <>
                  <View style={styles.categoryListBanner}>
                    {data?.story?.story_image?.length && <Image
                      source={{ uri: data?.story?.story_image }}
                      style={styles.newsCategorybannerbg}
                      resizeMode="cover"
                      resizeMethod="resize"
                    />}

                    <LinearGradient
                      colors={["rgba(3, 10, 26, 0.5) 0%", "#0C1628"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.newsCategoryBannerOverlay}
                    >
                      {data?.story?.short_description?.length &&
                        <Text style={styles.textBannerDescription}>
                          {data?.story?.short_description?.replace(regex, "").substring(0, 65) + "..."}
                        </Text>}

                      <View style={styles.newsMeta}>
                        <View style={styles.categoryTag}>
                          {data?.story?.name?.length && (
                            <>
                              <LinearGradient
                                colors={[Colors.spring_green, Colors.royal_blue_3]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.profileTitleOuter}
                              >
                                <Text style={styles.profileTitle}>
                                  {data?.story?.name?.match(/\b(\w)/g).join("")}
                                </Text>
                              </LinearGradient>
                              <Text style={styles.textBannerCategory}>
                                {data?.story?.name}
                              </Text>
                            </>
                          )}

                          {(!!data?.story?.audio_podcast || !!data?.story?.video_link) &&
                            <View style={styles.iconWrap}>
                              {!!data?.story?.audio_podcast &&
                                <Pressable onPress={() => (playerState !== eventState.Playing) && handlePlay()}>
                                  <AudioIcon />
                                </Pressable>
                               }
                              {!!data?.story?.video_link &&
                                <Pressable onPress={() => handleVideoModal(data?.story?.video_link, data?.story?.story_image)}>
                                  <VideoIcon />
                                </Pressable>
                              }
                            </View>}
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                  {showPlayer &&
                    <View style={styles.trackPlayerWrap}>
                      <View style={styles.trackPlayerWrapInner}>
                        <Slider
                          value={(playerState === eventState.Playing || playerState === eventState.Paused) ? playPosition : 0}
                          // onValueChange={value => handlePlay(value)}
                          step={'0.01'}
                          maximumValue={playDuration}
                          animateTransitions={true}
                          animationType={'timing'}
                        />
                        <View style={styles.timeWrap}>
                          <Text style={styles.textTimeWrapInitial}>{(playerState === eventState.Playing || playerState === eventState.Paused) ? formatDuration(playPosition) : formatDuration(0)}</Text>
                          <Text style={styles.textTimeWrap}>{formatDuration(playDuration)}</Text>
                        </View>
                      </View>
                      {(playerState === eventState.Playing) ?
                        <Pressable onPress={() => handlePause()}>
                          <PauseIcon height={30} width={30} />
                        </Pressable>
                        :
                        <Pressable onPress={() => handlePlay()}>
                          <PlayIcon height={30} width={30} />
                        </Pressable>
                      }
                    </View>
                  }
                  {/* <View style={styles.newsDetailsWrap}>
                    <RenderHtml
                      renderers={renderers}
                      WebView={WebView}
                      contentWidth={width}
                      source={storyDetails}
                      enableExperimentalMarginCollapsing={true}
                      customHTMLElementModels={customHTMLElementModels}
                      renderersProps={{
                        iframe: {
                          scalesPageToFit: true,
                        }
                      }}
                      tagsStyles={tagsStyles}
                    />
                   
                  </View> */}
                </>
                }
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
        {/* </ImageBackground> */}
      </View>
    </>
  )
}

export default StoryDetails