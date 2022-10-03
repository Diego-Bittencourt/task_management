import studentsActions from "./actions.js";
import studentsMutations from "./mutations.js";
import studentsGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return { studentsList: [] };
  },
  getters: studentsGetters,
  mutations: studentsMutations,
  actions: studentsActions
};
