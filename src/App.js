import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from './store'

import WYiAppHeader from '@/components/app-header'
import WYiAppFooter from '@/components/app-footer'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <WYiAppHeader/>
                {renderRoutes(routes)}
                <WYiAppFooter/>
            </HashRouter>
        </Provider>
    )
})

