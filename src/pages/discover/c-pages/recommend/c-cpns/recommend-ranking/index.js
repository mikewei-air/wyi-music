

import React, { memo } from 'react'

import {RecommendRankingWrapper} from './style'
import WYiThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function WYiRecommendRanking() {
    return (
        <RecommendRankingWrapper>
            <WYiThemeHeaderRcm title={"榜单"}/>
        </RecommendRankingWrapper>
    )
})