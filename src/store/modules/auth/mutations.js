export default {
    setUser(context, payload) {
        context.userId = payload.userId;
        context.token = payload.token;
    }
}