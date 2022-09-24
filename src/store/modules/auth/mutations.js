export default {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    },
    setUserName(state, payload) {
        console.log(payload)
        state.userName = payload.userName;
    }
}