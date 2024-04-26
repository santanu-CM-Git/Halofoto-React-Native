import { View, Image, Text, Pressable } from 'react-native'
import { HALO_STORY_DETAILS } from "../../../../constants/RouteNames"
import moment from 'moment'
import styles from "./style"
import AudioIcon from '../../../Helper/SvgImg/Audio'
import VideoIcon from "../../../Helper/SvgImg/Video"
import AppSettings from '../../../../global/AppSettings'

const ListItem = ({ item, onPress, toDaysMinutesSeconds }) => {
    return (
        <Pressable style={styles.newsCard} onPress={() => onPress(HALO_STORY_DETAILS, {
            storyId: item?.id
        })} unstable_pressDelay={200}>
            <View style={styles.newsCardContent}>
                <Text style={styles.textCardNews}>{item?.name}</Text>
                {item?.status_action_date ?
                    <Text style={styles.textCardSmall}>
                        {moment(item?.status_action_date).format("DD MMM YYYY")}
                    </Text>
                    :
                    <Text style={styles.textCardSmall}>
                        {moment(item?.created_at).format("DD MMM YYYY")}
                    </Text>
                }
                <View style={styles.iconWrap}>
                    {item?.audio_duration && !!item?.audio_duration && (
                        <>
                            <AudioIcon />
                            <Text style={styles.textCardSmall}>{toDaysMinutesSeconds(item?.audio_duration)}</Text>
                        </>
                    )}
                    {item?.video_link && !!item?.video_link && (
                        <>
                            <VideoIcon />
                            {/* <Text style={styles.textCardSmall}>{toDaysMinutesSeconds(item?.video_duration)}</Text> */}
                        </>
                    )}
                </View>
            </View>
            {item?.story_image &&
                <Image
                    source={{
                        uri: `${item?.story_image}`,
                    }}
                    loadingIndicatorSource={AppSettings.loader_image}
                    style={styles.newsCardImg}
                    resizeMode="cover"
                    resizeMethod="resize"
                />
            }
        </Pressable>
    )
}
export default ListItem