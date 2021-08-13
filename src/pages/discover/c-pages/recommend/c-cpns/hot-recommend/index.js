

import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'

import WYiThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function WYiHotRecommend() {
    return (
        <HotRecommendWrapper>
            <WYiThemeHeaderRcm title={"热门推荐"} keywords={["华语","流行","摇滚","民谣","电子"]}/>
        </HotRecommendWrapper>
    )
})
