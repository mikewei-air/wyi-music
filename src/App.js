import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from './store'

import WYiAppHeader from '@/components/app-header'
import WYiAppFooter from '@/components/app-footer'
import WYiAppPlayBar from '@/pages/player/app-player-bar'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <WYiAppHeader/>
                <Suspense fallback={<div>page loading.....</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <WYiAppFooter/>
                <WYiAppPlayBar/>
            </HashRouter>
        </Provider>
    )
})

