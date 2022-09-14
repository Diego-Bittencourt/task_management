import tasksMutations from './mutations.js';
import tasksActions from './actions.js';
import tasksGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            tasks: [
                {
                    tag: 'payment',
                    content: 'someone didn\'t pay',
                    from: 'Layana',
                    status: 'not yet',
                    date: '15/02/2002'
                },
                {
                    tag: 'change class',
                    content: 'change a class',
                    from: 'Lorion',
                    status: 'done',
                    date: '01/01/2022'
                }
            ]
        }
    },
    mutations: tasksMutations,
    getters: tasksGetters,
    actions: tasksActions
};