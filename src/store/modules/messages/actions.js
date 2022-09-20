export default {
    async addMessage(context, payload) {
        //creating the object
        const newMessage = payload;
    
        //create the post
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${payload.receiver}.json`,
            {
                method: "POST",
                body: JSON.stringify(newMessage)
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
    },
    async getMessages(context, payload) {

        //get username
        let userName = payload;

        //create the fetch
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${userName}.json`);

        //accessing the fetched data's response
        const responseData = await response.json();

        //error handling
        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fecth");
            throw error;
        }

        //creating the tasks array
        const messages = [];

        //looping through the fetched data and adding each task to the tasks array
        for (const key in responseData) {
            const msg = {
                id: key,
                messageContent: responseData[key].content,
                messageAuthor: responseData[key].author,
                messageDate: responseData[key].date,
                messageReceiver: responseData[key].receiver,
                messageTitle: responseData[key].title
            };

            messages.push(msg);
        } //end of for loop

        context.commit('setMessagesList', messages);
    }    
}