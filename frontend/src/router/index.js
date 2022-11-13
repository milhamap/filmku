import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import('../views/Detail.vue')
    },
    {
        path: '/genre',
        name: 'Genre',
        component: () => import('../views/genre/Home.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard/Index.vue')
    },
    {
        path: '/dashboard/detail/:id',
        name: 'Dashboard.Detail',
        component: () => import('../views/dashboard/Detail.vue')
    },
    {
        path: '/genres',
        name: 'genre.index',
        component: () => import('../views/genre/Index.vue')
    },
    {
        path: '/genres/create',
        name: 'genre.create',
        component: () => import('../views/genre/Create.vue')
    }, 
    {
        path: '/genres/:id/edit',
        name: 'genre.edit',
        component: () => import('../views/genre/Edit.vue')
    }, 
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router