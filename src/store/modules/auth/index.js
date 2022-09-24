import authMutations from './mutations.js';
import authActions from './actions.js';
import authGetters from './getters.js';

export default {
    state() {
        return {
            userId: 1,
            userName: "sem nome",
            token: "this is a dummy token"
        }
    },
    mutations: authMutations,
    getters: authGetters,
    actions: authActions
};