export default {
    async logIn(context, payload) {

        //setting the login API url
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9yvVF6oOB0ORUImpiSwoRxzrZ5pV6Udc";

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.userEmail,
                password: payload.userPassword,
                returnSecureToken: true
            }),
        }); //sending the request to login

        //grab the response from database
        const responseData = await response.json();

        //checking for errors
        if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate');
        throw error;
        }

        //setting the user info in memory
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });

    console.log(responseData);
    }
    
}