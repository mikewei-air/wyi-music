
import { getCurrentSong , getLyric} from '@/services/player';
import * as actionTypes from './constants'
import {getRandomNumber} from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric';


const changeCurrentSongAction = currentSong => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG,
        currentSong
    }
}

const changePlayListAction = playList => {
    return {
        type: actionTypes.CHANGE_PLAY_LIST,
        playList
    }
}

const changeCurrentSongIndexAction = index => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
        index
    }
}

const changeLyricListAction = (lyricList) => {
    return {
        type: actionTypes.CHANGE_LYRIC_LIST,
        lyricList
    }
}

export const changeSequenceAction = sequence => {
    return {
        type: actionTypes.CHANGE_SEQUENCE,
        sequence
    }
}

export const changeCurrentLyricIndexAction = currentLyricIndex => {
    return {
        type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
        currentLyricIndex
    }
}

export function getSongDetailAction(ids){
    return (dispatch,getState) => {
        //判断ids是否在列表中
        const playList = getState().getIn(["player","playList"])
        const songIndex = playList.findIndex(song => song.id === ids)
        let song = null
        if(songIndex !== -1){
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))

            //请求歌词数据
            dispatch(getLyricAction(song.id))
        }else{
            getCurrentSong(ids).then(res=>{
                song = res.songs && res.songs[0]
                if(!song) return

                const newPlayList = [...playList,song]

                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongAction(song))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                
                //请求歌词数据
                dispatch(getLyricAction(song.id))
            })
        }

    }
}

export function changeCurrentSong(tag){
    return (dispatch,getState) => {
        const sequence = getState().getIn(["player","sequence"])
        const playList = getState().getIn(["player","playList"])
        let currentSongIndex = getState().getIn(["player","currentSongIndex"])
        switch(sequence){
            case 1:
                let prevSongIndex = currentSongIndex
                while(playList.length !== 1 && (currentSongIndex === prevSongIndex)){
                    currentSongIndex = getRandomNumber(playList.length)
                }
                break
            default:
                currentSongIndex += tag
                if(currentSongIndex >= playList.length){ currentSongIndex = 0}
                if(currentSongIndex < 0){ currentSongIndex = playList.length-1}

        }
        const currentSong = playList[currentSongIndex]
        dispatch(changeCurrentSongAction(currentSong))
        dispatch(changeCurrentSongIndexAction(currentSongIndex))
        dispatch(getLyricAction(currentSong.id))
    }
}

export function getLyricAction(id){
    return dispatch => {
        getLyric(id).then(res=>{
            const lyric = res.lrc.lyric
            const lyricList = parseLyric(lyric)
            dispatch(changeLyricListAction(lyricList))
        })
    }
}