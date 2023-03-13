import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue';
import SearchByIngredient from '../src/views/SearchByIngredient.vue';
import SearchByName from '../src/views/SearchByName.vue';
import SearchByLetter from '../src/views/SearchByLetter.vue';
import DefaultLayout from '../src/components/DefaultLayout.vue';
import GuestLayout from '../src/components/GuestLayout.vue';
import MealDetails from '../src/views/MealDetails.vue';

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: 'home',
                component: Home
            },
            {
                path: "/by-name/:name?",
                name: 'byName',
                component: SearchByName,
            },
            {
                path: "/by-letter/:letter?",
                name: 'byLetter',
                component: SearchByLetter,
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: 'byIngredient',
                component: SearchByIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            }
        ]
    },
    {
        path:'/guest',
        component: GuestLayout,
        children: [
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;