import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import TaskList from './pages/tasks/TaskList.vue';
import NotFound from './pages/NotFound.vue';

// import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/tasklist',
            component: TaskList
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});


export default router;