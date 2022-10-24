export default {
  async changeStatus(context, payload) {
    //action to change a task status

    //grab the token
    const token = context.rootGetters.token;

    const taskId = payload.id;
    const taskStatus = { status: payload.status };

    const response = await fetch(
      `https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${taskId}/.json?auth=${token}`,
      {
        method: "PATCH",
        body: JSON.stringify(taskStatus),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send request");
      throw error;
    }
  },
  async addTask(context, payload) {
    //grab the token
    const token = context.rootGetters.token;

    //creating the object
    const newTask = payload;

    //create the post
    const response = await fetch(
      `https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json?auth=${token}`,
      {
        method: "POST",
        body: JSON.stringify(newTask),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send request");
      throw error;
    }
  },
  async getTasks(context) {
    //grab the token
    const token = context.rootGetters.token;

    //create the fetch
    const response = await fetch(
      `https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json?auth=${token}`
    );

    //accessing the fetched data's response
    const responseData = await response.json();

    //error handling
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fecth");
      throw error;
    }

    //creating the tasks array
    const tasks = [];

    //looping through the fetched data and adding each task to the tasks array
    for (const key in responseData) {
      const task = {
        id: key,
        taskContent: responseData[key].content,
        taskAuthor: responseData[key].author,
        taskDate: responseData[key].date,
        taskStatus: responseData[key].status,
        taskTopic: responseData[key].topic,
      };

      tasks.push(task);
    } //end of for loop

    context.commit("setTaskList", tasks);
  },
  async createNewComment(context, payload) {
    //grab the token
    const token = context.rootGetters.token;

    //grab the task Id
    const taskId = payload.taskId;

    console.log(payload, token, taskId);
    //create the fetch
    const response = await fetch(
      `https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${taskId}/comments.json?auth=${token}`,
      {
      method: "POST",
      body: JSON.stringify(payload)
      }
    );

    //accessing the fetched data's response
    const responseData = await response.json();

    //error handling
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fecth");
      throw error
    }
  },
  async getComments(context, payload) {

    //grab the token
    const token = context.rootGetters.token;

    //grab the task Id
    const taskId = payload.taskId;

    //fetch data from the task
    const response = await fetch(
      `https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${taskId}/comments.json?auth=${token}`
    );

    //accessing the fetched data's response
    const responseData = await response.json();

    //error handling
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fecth");
      throw error
  }

  console.log("fetched data", responseData)

  // //create the payload object
  // const taskComments = {
  //   taskId: taskId,

  // }

  //   //set the data in the store
  //   context.commit("setComments", taskComments)
}
};
