export default {
    setTaskList(state, payload) {
        state.tasks = payload;
    },
    setComments(state, payload) {
        //grab the task Id
        const taskId = payload.taskId;

        //grab the comment object
        const commentObject = payload.taskComments;

        state.comments[taskId] = commentObject;
    }
}