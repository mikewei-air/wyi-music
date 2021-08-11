import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'

import WYiAppHeader from '@/components/app-header'
import WYiAppFooter from '@/components/app-footer'


export default memo(function App() {
    return (
        <HashRouter>
            <WYiAppHeader/>
            {renderRoutes(routes)}
            <WYiAppFooter/>
        </HashRouter>
    )
})

