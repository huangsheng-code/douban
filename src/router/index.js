import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('@/pages/Home/home')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import('@/pages/Mine/mine')
        },
        {
            path: '/audio',
            name: 'audio',
            component: () => import('@/pages/Audio/audio')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/login')
        },
        {
            path: '/broadcast',
            name: 'broadcast',
            component: () => import('@/pages/Broadcast/broadcast'),
            children: [
                {
                    path: 'film',
                    name: 'film',
                    component: () => import('@/pages/Broadcast/sub/film')
                },
                {
                    path: 'read',
                    name: 'read',
                    component: () => import('@/pages/Broadcast/sub/read')
                },
                {
                    path: 'tv',
                    name: 'tv',
                    component: () => import('@/pages/Broadcast/sub/tv')
                },
                {
                    path: 'city',
                    name: 'city',
                    component: () => import('@/pages/Broadcast/sub/city')
                },
                {
                    path: 'music',
                    name: 'music',
                    component: () => import('@/pages/Broadcast/sub/music')
                },
            ]
        },
        {
            path: '/group',
            name: 'group',
            component: () => import('@/pages/Group/group')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/Home/home')
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from);
    if (to.path == '/login') {
        next();
    } else {
        let isLogin = true;
        if (isLogin) {
            console.log('已登录用户');
            next()
        } else {
            console.log('未登录');
            next({ path: '/login' })
        }
    }
})
export default router;