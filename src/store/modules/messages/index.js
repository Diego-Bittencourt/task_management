import msgMutations from './mutations.js';
import msgActions from './actions.js';
import msgGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            messages: [
                {
                    content: 'Testing message',
                    from: 'Layana',
                    date: '16/09/2022'
                },
                {
                    content: 'another testing message',
                    from: 'Lorion',
                    date: '24/10/2022'
                }
            ]
        }
    },
    mutations: msgMutations,
    getters: msgGetters,
    actions: msgActions
};