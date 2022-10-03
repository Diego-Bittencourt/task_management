export default {
    async addStudent(context, payload) {
        //grab the token
        const token = context.rootGetters.token;

        //grab the payload
        const newStudent = payload;

        //send a post request to the server
        const response = await fetch(`https://rainbow-task-default-rtdb.asia-southeast1.firebasedatabase.app/students.json?auth=${token}`,
                        {
                            method: "POST",
                            body: JSON.stringify(newStudent)
                        }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
    },
    fetchStudents (context) {
        console.log(context)

    }
}