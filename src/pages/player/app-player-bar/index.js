import React, { memo,useEffect  } from 'react'
import moment from 'moment'

import {getSongDetailAction,changeSequenceAction,changeCurrentSong} from '../store/actionCreator'
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
    const {currentSong,sequence} = useSelector((state)=>({
            currentSong: state.getIn(["player","currentSong"]),
            sequence: state.getIn(["player","sequence"])
    }),shallowEqual)

    useEffect(()=>{
        dispatch(getSongDetailAction(167876))
    },[dispatch])

    useEffect(()=>{
        audioRef.current.src = getPlaySong(currentSong.id)
        //当前播放歌曲发生变化时，自动播放。
        //启动页面时，浏览器会阻止音频播放
        audioRef.current.play().then(res => {setIsPlaying(true)})
                               .catch(err => {setIsPlaying(false)})
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
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        setIsPlaying(!isPlaying)
    },[isPlaying])

    function updateTime(e){
        if(!isChange){
            setCurrentTime(e.target.currentTime*1000)
            setProgress(currentTime / duration * 100)
        }
    }

    //改变播放模式，0--顺序，1--随机，2--单曲循环
    const changeSequence = () => {
        let currentSequence = sequence + 1
        if(currentSequence > 2) {currentSequence = 0}
        dispatch(changeSequenceAction(currentSequence))
    }
    //切换歌曲
    const changeMusic = (tag) => {
        dispatch(changeCurrentSong(tag))
    }

    //处理当前音乐播放完后的逻辑
    function handleMusicEnded() {
        if(sequence === 2){
            //单曲循环
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }else{
            //顺序播放 or 随机播放
            dispatch(changeCurrentSong(1))
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
                    <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
                    <button className="sprite_player play" onClick={e => playMusic()}></button>
                    <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
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
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={e=>updateTime(e)} onEnded={e=>handleMusicEnded()}/>
        </PlaybarWrapper>
    )
})
