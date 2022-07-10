import { createRouter, createWebHistory } from 'vue-router';
import ComicsPageVue from './components/Comics-Page.vue'
import CharactersPageVue from './components/Characters-Page.vue'
import SingleComicVue from './components/Single-Comic.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: CharactersPageVue
        },
        {
            path: '/comics',
            component: ComicsPageVue
        },
        {
            path: '/single-comic/:id',
            component: SingleComicVue
        }
    ]
})