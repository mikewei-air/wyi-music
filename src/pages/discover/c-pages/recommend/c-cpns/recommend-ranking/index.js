

import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {RecommendRankingWrapper} from './style'
import WYiThemeHeaderRcm from '@/components/theme-header-rcm'
import {getTopListAction} from '../../store/actionCreators'

import WYiTopRanking from '@/components/top-ranking'

export default memo(function WYiRecommendRanking() {

    const dispatch = useDispatch()
    const {upRanking,newRanking,originRanking} = useSelector((state)=>({
        upRanking: state.getIn(["recommend","upRanking"]),
        newRanking: state.getIn(["recommend","newRanking"]),
        originRanking: state.getIn(["recommend","originRanking"]),
    }),shallowEqual)

    useEffect(()=>{
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    },[dispatch])

    return (
        <RecommendRankingWrapper>
            <WYiThemeHeaderRcm title={"榜单"}/>
            <div className="tops">
                <WYiTopRanking info={upRanking}/>
                <WYiTopRanking info={newRanking}/>
                <WYiTopRanking info={originRanking}/>
            </div>
        </RecommendRankingWrapper>
    )
})