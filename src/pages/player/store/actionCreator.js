
import { getCurrentSong } from '@/services/player';
import * as actionTypes from './constants'


const changeCurrentSongAction = currentSong => {
    return {
        type: actionTypes.CHANGE_CURRENT_SONG,
        currentSong
    }
}

export function getSongDetailAction(ids){
    return dispatch => {
        getCurrentSong(ids).then(res=>dispatch(changeCurrentSongAction(res.songs[0])))
    }
}