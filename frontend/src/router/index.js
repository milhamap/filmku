import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Index.vue')
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router