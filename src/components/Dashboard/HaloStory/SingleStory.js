import React, { useContext, useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/core"
import Toast from "react-native-root-toast";
import { useTrackPlayerEvents, useProgress, Event, State } from 'react-native-track-player';
import { GlobalContext } from "../../../context/Provider"
import storyDetails from "../../../context/actions/dashboard/storyDetails"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import StoryDetailsScreen from "../../../screens/Dashboard/HaloStory/StoryDetails"
import audioPlayerService from "../../../helpers/AudioPlayerService"
import StaticText from "../../../global/StaticText"


const SingleStory = ({ route, navigation }) => {

  const isFocused = useIsFocused()
  const [storyId, setStoryId] = useState(null)
  const [showPlayer, setShowPlayer] = useState(false)
  const regex = /(<([^>]+)>)/ig
  const [playerState, setPlayerState] = useState(null)
  const [videoModal, showVideoModal] = useState(false)
  const [videoProp, setVideoProp] = useState({ url: '', poster: '' })
  const { position, duration } = useProgress(100);

  const events = [
    Event.PlaybackState,
    Event.PlaybackError,
  ];

  const {
    haloStoryDetailsState: { error, loading, data },
    haloStoryDetailsDispatch,
    navigationDispatch, navigationState: { display }
  } = useContext(GlobalContext)

  const onPress = routes => navigation.goBack()

  useEffect(() => {
    if (isFocused) {
      let { storyId } = route.params
      showNavigation()(navigationDispatch)
      setStoryId(storyId)
    }
  }, [isFocused])


  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn('Error!');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });

  useEffect(() => {
    storyId && storyDetails(storyId)(haloStoryDetailsDispatch)(response => {
      if (response?.story?.audio_podcast?.length) {
        setupPlayer(response?.story)
      }
    })
  }, [storyId])

  const setupPlayer = async (storyData) => {
    await audioPlayerService.reset()
    await audioPlayerService.addSongs([
      {
        id: storyData?.id,
        title: storyData?.name,
        duration: storyData?.audio_duration,
        url: storyData?.audio_podcast,
        artist: storyData?.name,
      }
    ])
    setShowPlayer(true)
  }

  useEffect(() => {
    (async () => {
      if (playerState === State.Stopped)
        await audioPlayerService.skip(0)
    })()
  }, [playerState])

  const handlePlay = async () => {
    try {
      await audioPlayerService.play()
      
    } catch (error) { }
  }

  const formatDuration = time => {
    let hour = (parseInt(time / 3600)).toString().padStart(2, '0');
    let mins = (parseInt(time / 60)).toString().padStart(2, '0');
    let secs = (Math.trunc(time) % 60).toString().padStart(2, '0');
    return `${hour}:${mins}:${secs}`;
  }

  const handleVideoModal = (url, image) => {
    !!url ? (
      console.log('need to increment watch', data),
      console.log(storyId, 'storyid'),
      setVideoProp({ url, poster: image }),
      showVideoModal(true)
      
      
    ) : Toast.show(StaticText.alert.no_video_found)
  }

  const handlePause = async () => await audioPlayerService.pause()

  return (
    <StoryDetailsScreen
      data={data}
      loading={loading}
      onPress={onPress}
      regex={regex}
      handlePlay={handlePlay}
      handlePause={handlePause}
      playDuration={duration}
      playPosition={position}
      playerState={playerState}
      showPlayer={showPlayer}
      formatDuration={formatDuration}
      eventState={State}
      videoProp={videoProp}
      showVideoModal={showVideoModal}
      videoModal={videoModal}
      handleVideoModal={handleVideoModal}
    />
  )
}
export default SingleStory