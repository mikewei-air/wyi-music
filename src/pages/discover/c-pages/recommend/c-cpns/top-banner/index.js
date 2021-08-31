import React, { memo,useCallback,useEffect,useRef } from 'react'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'

import {getTopBannerAction} from '../../store/actionCreators'

import { Carousel } from 'antd';
import { BannerWrapper,BannerLeft,BannerRight, BannerControl } from './style'
import { useState } from 'react';

export default memo(function WYiTopBanner() {

    const bannerRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    const {topBanners} = useSelector(state=>({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend", "topBanners"])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTopBannerAction())
    },[dispatch])

    const bannerChange = useCallback((from, to)=>{
        setTimeout(()=>{
            setCurrentIndex(to)
        },0)
    },[])

    const bgImageUrl = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <BannerWrapper bgImage={bgImageUrl}>
            <div className="wrap-v2 banner">
                <BannerLeft>
                <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                    {
                        topBanners.map(item => {
                            return(
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })
                    }
                </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e=>bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
