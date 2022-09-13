import msgMutations from './mutations.js';
import msgActions from './actions.js';
import msgGetters from './getters.js';

export default {
    state() {
        return {
            messages: [
                {
                    content: 'Testing message',
                    from: 'Layana'
                },
                {
                    content: 'another testing message',
                    from: 'Lorion'
                }
            ]
        }
    },
    mutations: msgMutations,
    getters: msgGetters,
    actions: msgActions
};