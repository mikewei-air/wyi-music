import React, { memo } from 'react'

import WYiTopBanner from './c-cpns/top-banner'
import WYiHotRecommend from './c-cpns/hot-recommend'
import WYiNewAlbum from './c-cpns/new-album'
import WYiRecommendRanking from './c-cpns/recommend-ranking'
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style'


export default memo(function WYiRecommend() {

    return (
        <RecommendWrapper>
            <WYiTopBanner/>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <WYiHotRecommend/>
                    <WYiNewAlbum/>
                    <WYiRecommendRanking/>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
})