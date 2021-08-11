import WYiDiscover from '@/pages/discover'
import WYiFriend from '@/pages/friend'
import WYiMine from '@/pages/mine'
const routes = [
    {
        path: '/',
        exact: true,
        component: WYiDiscover
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