

import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'

import WYiThemeHeaderRcm from '@/components/theme-header-rcm'
import WYiSongsCover from '@/components/song-cover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotRecommendsAction } from '../../store/actionCreators'

import { HOT_RECOMMEND_LIMIT } from '@/common/constant'

export default memo(function WYiHotRecommend() {

    const dispatch = useDispatch()
    const {hotRecommends} = useSelector(state=>({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }),shallowEqual)

    useEffect(()=>{
        dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <WYiThemeHeaderRcm title={"热门推荐"} keywords={["华语","流行","摇滚","民谣","电子"]}/>
            <div  className="recommend-list">
                {
                    hotRecommends.map(item => {
                        return (<WYiSongsCover key={item.id} info={item}/>)
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
