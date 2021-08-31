import { Redirect } from 'react-router-dom'
import React from 'react'

//路由懒加载
const WYiDiscover = React.lazy(()=>import('@/pages/discover'))
const WYiAlbum = React.lazy(()=>import('@/pages/discover/c-pages/album'))
const WYiArtist = React.lazy(()=>import('@/pages/discover/c-pages/artist'))
const WYiDjradio = React.lazy(()=>import('@/pages/discover/c-pages/djradio'))
const WYiRanking = React.lazy(()=>import('@/pages/discover/c-pages/ranking'))
const WYiRecommend = React.lazy(()=>import('@/pages/discover/c-pages/recommend'))
const WYiSongs = React.lazy(()=>import('@/pages/discover/c-pages/songs'))
const WYiPlayer = React.lazy(()=>import('@/pages/player'))

const WYiFriend = React.lazy(()=>import('@/pages/friend'))
const WYiMine = React.lazy(()=>import('@/pages/mine'))


// import WYiDiscover from '@/pages/discover'
// import WYiAlbum from '@/pages/discover/c-pages/album'
// import WYiArtist from '@/pages/discover/c-pages/artist'
// import WYiDjradio from '@/pages/discover/c-pages/djradio'
// import WYiRanking from '@/pages/discover/c-pages/ranking'
// import WYiRecommend from '@/pages/discover/c-pages/recommend'
// import WYiSongs from '@/pages/discover/c-pages/songs'
// import WYiPlayer from '@/pages/player'


// import WYiFriend from '@/pages/friend'
// import WYiMine from '@/pages/mine'

const routes = [
    {
        path: '/',
        exact: true,
        render: ()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: WYiDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: ()=>(
                    <Redirect to="/discover/recommend"/>
                )
            },
            {
                path: '/discover/album',
                component: WYiAlbum
            },
            {
                path: '/discover/artist',
                component: WYiArtist
            },
            {
                path: '/discover/djradio',
                component: WYiDjradio
            },
            {
                path: '/discover/ranking',
                component: WYiRanking
            },
            {
                path: '/discover/recommend',
                component: WYiRecommend
            },
            {
                path: '/discover/songs',
                component: WYiSongs
            },
            {
                path: '/discover/player',
                component: WYiPlayer
            },
        ]
    },
    {
        path: '/mine',
        component: WYiMine
    },
    {
        path: '/friend',
        component: WYiFriend
    }
]

export default routes