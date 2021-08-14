
import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbum} from "@/services/recommend";


const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})


export const getTopBannerAction = ()=>{
    return dispatch => {
        getTopBanners().then(res=>{dispatch(changeTopBannerAction(res))})
    }
}

export const getHotRecommendsAction = (limit)=>{
    return dispatch => {
        getHotRecommends(limit).then(res=>{dispatch(changeHotRecommendsAction(res))})
    }
}

export const getNewAlbumAction = (limit)=>{
    return dispatch => {
        getNewAlbum(limit).then(res=>{dispatch(changeNewAlbumAction(res))})
    }
}