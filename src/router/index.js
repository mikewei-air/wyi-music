import { Redirect } from 'react-router-dom'

import WYiDiscover from '@/pages/discover'
import WYiAlbum from '@/pages/discover/c-pages/album'
import WYiArtist from '@/pages/discover/c-pages/artist'
import WYiDjradio from '@/pages/discover/c-pages/djradio'
import WYiRanking from '@/pages/discover/c-pages/ranking'
import WYiRecommend from '@/pages/discover/c-pages/recommend'
import WYiSongs from '@/pages/discover/c-pages/songs'
import WYiPlayer from '@/pages/player'


import WYiFriend from '@/pages/friend'
import WYiMine from '@/pages/mine'

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