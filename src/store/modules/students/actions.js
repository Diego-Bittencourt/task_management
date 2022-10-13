export default {
    async addStudent(context, payload) {
        //grab the token
        const token = context.rootGetters.token;

        //grab the payload
        const newStudent = payload;

        //send a post request to the server
        const response = await fetch(`https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/students.json?auth=${token}`,
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
    async fetchStudentsList (context) {
        //grab the token
        const token = context.rootGetters.token;


        const studentsList = [];

        const response = await fetch(`https://management-rainbow-default-rtdb.asia-southeast1.firebasedatabase.app/students.json?auth=${token}`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
              throw error;
        }
        
        for (const key in responseData) {
            const student = {
                id: key,
                studentName: responseData[key].studentName,
                studentEmail: responseData[key].studentEmail,
                studentPhone: responseData[key].studentPhone,
                studentClass: responseData[key].studentClass

            }
            studentsList.push(student);
        } // end of the for loop
        context.commit('setStudentsList', studentsList);
    }
}