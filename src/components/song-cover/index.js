

import React, { memo } from 'react'

import {SongsCoverWrapper} from './style'

import {getCount,getSizeImage} from '@/utils/format-utils'

export default memo(function WYiSongsCover(props) {
    const { info } = props;

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
                <div className="cover sprite_covor">
                <div className="info sprite_covor">
                    <span>
                    <i className="sprite_icon erji"></i>
                    {getCount(info.playCount)}
                    </span>
                    <i className="sprite_icon play"></i>
                </div>
                </div>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                {info.copywriter || ( info.creator && info.creator.nickname)}
            </div>
        </SongsCoverWrapper>
    )
})
