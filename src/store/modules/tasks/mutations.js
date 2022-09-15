export default {
    setTaskList(state, payload) {
        console.log(payload)
        state.tasks = payload;
    }
}