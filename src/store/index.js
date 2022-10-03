import { createStore } from "vuex";
import authModule from './modules/auth/index.js';
import msgModule from './modules/messages/index.js';
import tasksModule from './modules/tasks/index.js';
import studentsModule from './modules/students/index.js';


const store = createStore({
    modules: {
        auth: authModule,
        messages: msgModule,
        tasks: tasksModule,
        students: studentsModule
    }

});

export default store;