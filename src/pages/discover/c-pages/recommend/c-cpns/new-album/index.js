import React, { memo,useEffect, useRef  } from 'react'
import { shallowEqual, useDispatch, useSelector} from 'react-redux'


import { NewAlbumWrapper } from './style'
import WYiThemeHeaderRcm from '@/components/theme-header-rcm'
import {getNewAlbumAction} from '../../store/actionCreators'
import {NEW_ALBUM_LIMIT,NEW_ALBUM_PER_PAGE} from '@/common/constant'
import WYiAlbumCover from '@/components/album-cover'

import { Carousel } from 'antd';



export default memo(function WYiNewAlbum() {

    const dispatch = useDispatch()
    const {newAlbums} = useSelector((state)=>({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }),shallowEqual)


    useEffect(()=>{
        dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
    },[dispatch])

    const pageRef = useRef()

    return (
        <NewAlbumWrapper>
            <WYiThemeHeaderRcm title={"新碟上架"}/>
            <div className="content">
                <button className="arrow arrow-left sprite_02" onClick={e=>pageRef.current.prev()}></button>
                <div className="album">
                    <Carousel dots={false} ref={pageRef}>
                        {
                            [0,1].map(item=>{
                                return (
                                    <div key={item} className="page">
                                        {
                                            newAlbums.slice(item*NEW_ALBUM_PER_PAGE, (item+1)*NEW_ALBUM_PER_PAGE).map(iten=>{
                                                return (
                                                    <WYiAlbumCover key={iten.id}
                                                                   info={iten}
                                                                   size={100}
                                                                   width={118}
                                                                   bgp={"-570px"}/>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className="arrow arrow-right sprite_02" onClick={e=>pageRef.current.next()}></button>
            </div>
        </NewAlbumWrapper>
    )
})
