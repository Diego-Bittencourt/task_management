import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import TaskList from './pages/tasks/TaskList.vue';
import MessagePage from './pages/messages/MessagePage.vue';
import NotFound from './pages/NotFound.vue';
import RegisterUser from './pages/RegisterUser.vue';
import StudentsInfo from './pages/students/StudentsInfo.vue';
import StudentsList from './components/students/StudentsList.vue';
import AddStudent from './components/students/AddStudent.vue';


// import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage
        },
        {
            path: '/students',
            component: StudentsInfo,
            children: [
                { path: 'list', component: StudentsList },
                { path: 'addstudent', component: AddStudent }
            ]
        },
        {
            path: '/tasklist',
            component: TaskList
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
        {
            path: '/register',
            component: RegisterUser
        },
        {
            path: '/messages',
            component: MessagePage
        }
    ]
});


export default router;