import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {HeaderWrapper, HeaderLeft, HeaderRight} from './style'
import {headerLinks} from '@/common/local-data'
import {SearchOutlined} from '@ant-design/icons'
import { Input } from 'antd'

export default memo(function WYiAppHeader() {

    const showSelectItem = (item,index)=>{
        if(index < 3){
            return (<NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>)
        }else{
            return <a href={item.link}>{item.title}</a>
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index)=>(
                                <div key={index} className="select-item">
                                    {showSelectItem(item,index)}
                                </div>
                            ))
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>} className="search" />
                    <div className="center">创作者中心</div>
                    <a href="#/">登录</a>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})