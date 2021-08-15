import React, { memo,useEffect  } from 'react'
import moment from 'moment'

import {getSongDetailAction} from '../store/actionCreator'
import { getSizeImage,getPlaySong } from '@/utils/format-utils';

import {Slider} from 'antd';
import { PlaybarWrapper,Control,PlayInfo,Operator } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';



export default memo(function WYiAppPlayBar() {


    const dispatch = useDispatch()
    const {currentSong} = useSelector((state)=>({
            currentSong: state.getIn(["player","currentSong"])
    }),shallowEqual)

    useEffect(()=>{
        dispatch(getSongDetailAction(167876))
    },[dispatch])

    useEffect(()=>{
        audioRef.current.src = getPlaySong(currentSong.id)
    },[currentSong])

    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isChange, setIsChange] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const picUrl = (currentSong.al && currentSong.al.picUrl) || ""
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
    const duration = currentSong.dt || 0
    const showDuration = moment(duration).format("mm:ss")
    const showCurrentTime = moment(currentTime).format("mm:ss")

    const playMusic = useCallback(()=>{
        setIsPlaying(!isPlaying)
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
    },[isPlaying])

    function updateTime(e){
        if(!isChange){
            setCurrentTime(e.target.currentTime*1000)
            setProgress(currentTime / duration * 100)
        }
    }

    const sliderChange = useCallback((value)=>{
        setIsChange(true)
        setProgress(value)
        setCurrentTime(value/100 * duration)
    },[duration])

    const sliderAfterChange = useCallback((value)=>{
        audioRef.current.currentTime = value / 100 * duration / 1000
        setIsChange(false)
        if(!isPlaying){
            playMusic()
        }
    },[duration,isPlaying,playMusic])

    return (
        <PlaybarWrapper className="sprite_player">
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="sprite_player prev"></button>
                    <button className="sprite_player play" onClick={e => playMusic()}></button>
                    <button className="sprite_player next"></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="#/" className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30}
                                    tooltipVisible={false}
                                    value={progress}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange}
                                    />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop"></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={e=>updateTime(e)}/>
        </PlaybarWrapper>
    )
})
