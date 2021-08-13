

import React, { memo } from 'react'

import { NewAlbumWrapper } from './style'
import WYiThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function WYiNewAlbum() {
    return (
        <NewAlbumWrapper>
            <WYiThemeHeaderRcm title={"新碟上架"}/>
        </NewAlbumWrapper>
    )
})
