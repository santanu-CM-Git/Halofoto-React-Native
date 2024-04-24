import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import haloStoryList from '../../../context/actions/dashboard/haloStoryList'
import { GlobalContext } from '../../../context/Provider'
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import HaloStoryScreen from '../../../screens/Dashboard/HaloStory/StoryList'

const HaloStory = () => {
    const { haloStoryListState: { data, error, loading }, haloStoryListDispatch, navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    // const [yAxisValue, setYAxisValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [refreshing, setRefreshing] = useState(false)
    const [pagination, setPagination] = useState(false)
    const [storyListData, setStoryListData] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const onPress = (route, params) => route && params ? navigate(route, params) : goBack()
    const isFocused = useIsFocused()

    useEffect(() => {
        isFocused && showNavigation()(navigationDispatch)
    }, [isFocused])

    useEffect(() => {
        haloStoryList(currentPage)(haloStoryListDispatch)
        if (currentPage > 1 && !pagination) {
            setPagination(true)
        } else if (currentPage == 1) {
            setPagination(false)
        }
        return (() => { })
    }, [currentPage])

    useEffect(() => {

        // console.log(data.story, 'Halofoto story list')
        if (!loading && data?.story) {
            if (currentPage == 1) {
                setStoryListData(data?.story?.data)
            } else {
                setStoryListData(storyListData => [...storyListData, ...data?.story?.data])
            }
            setTotalPages(data.story.last_page)
        }
        if (refreshing && !loading) {
            setRefreshing(false)
        }
        return (() => { })
    }, [loading])

    const onEndReached = () => {
        if (currentPage < totalPages && !loading) {
            setCurrentPage(currentPage => currentPage + 1)
        }
    }

    const onRefresh = () => {
        if (currentPage > 1) {
            setRefreshing(true)
            setCurrentPage(1)
        }
    }

    const toDaysMinutesSeconds = totalSeconds => {
        const seconds = Math.floor(totalSeconds % 60);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const days = Math.floor(totalSeconds / (3600 * 24));

        const secondsStr = makeHumanReadable(seconds, 'sec');
        const minutesStr = makeHumanReadable(minutes, 'min');
        const hoursStr = makeHumanReadable(hours, 'hr');
        const daysStr = makeHumanReadable(days, 'd');

        return `${daysStr}${hoursStr}${minutesStr}${secondsStr}`.replace(/,\s*$/, '');
    }

    const makeHumanReadable = (num, singular) => {
        return num > 0
            ? num + (num === 1 ? ` ${singular} ` : ` ${singular}s `)
            : '';
    }

    return (
        <HaloStoryScreen
            storyListData={storyListData}
            data={data}
            loading={pagination || refreshing ? false : loading}
            isLoading={loading}
            onPress={onPress}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
            toDaysMinutesSeconds={toDaysMinutesSeconds}
        />
    )
}

export default HaloStory