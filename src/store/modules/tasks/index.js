import tasksMutations from './mutations.js';
import tasksActions from './actions.js';
import tasksGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            tasks: [],
            comments: {}
        }
    },
    mutations: tasksMutations,
    getters: tasksGetters,
    actions: tasksActions
};