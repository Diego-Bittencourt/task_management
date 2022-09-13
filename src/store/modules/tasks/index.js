import tasksMutations from './mutations.js';
import tasksActions from './actions.js';
import tasksGetters from './getters.js';

export default {
    state() {
        return {
            tasks: [
                {
                    tag: 'payment',
                    content: 'someone didn\'t pay',
                    from: 'Layana',
                    status: 'not yet'
                },
                {
                    tag: 'change class',
                    content: 'change a class',
                    from: 'Lorion',
                    status: 'done'
                }
            ]
        }
    },
    mutations: tasksMutations,
    getters: tasksGetters,
    actions: tasksActions
};