import React, { memo } from 'react'

import WYiTopBanner from './c-cpns/top-banner'
import WYiHotRecommend from './c-cpns/hot-recommend'
import WYiNewAlbum from './c-cpns/new-album'
import WYiUserLogin from './c-cpns/user-login'
import WYiHotAnchor from './c-cpns/hot-anchor'
import WYiSettleSinger from './c-cpns/settle-singer'
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
                <RecommendRight>
                    <WYiUserLogin/>
                    <WYiSettleSinger/>
                    <WYiHotAnchor/>
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
})