import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';

export default {
    state() {
        return {
            userId: 1,
            userName: "Diego"
        }
    },
    mutations: authMutations,
    getters: authGetters,
    actions: authActions
};