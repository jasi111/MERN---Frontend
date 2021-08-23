import { API } from "../../backend";


// Signup Method
// For MERN Backend API
export const signup = user =>{//signup takes the user
    return fetch (`${API}/signup`,{
        method:"POST",
        headers:{
            Acccept: "application/json",
           "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

//Signup Method
// with firebase
// export const signup = (user) => {
//     const usersRef = firebase.database().ref('Users');

//     return usersRef.push(user);
// }



// Signin Method
// MERN STACK
export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Acccept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}







// Method for user Authenticated 
// Authenticated Method
//Associated method for signin is Authenticate Method - which sets the jwt token in the user's browser
//sets user token into browser
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {//if window object is not equal to undefined, means if window object is accessible to us 
        localStorage.setItem("jwt", JSON.stringify(data)) //if it is accessible access the local storage of react for the property setItem for the item jwt 
        //and set this jwt propert with JSON.strigify.data
        next();//next is a middleware
    }
}
// in above method a jwt token is set in locaal storage if the user is successfully signed 




//Method for Signout Route
//remove the token to signout (to hit signout route)
export const signout = next => {
    if (typeof window !== "undefined") {//if we have access of window object
        localStorage.removeItem("jwt")//then remove jwt token from localstorage
        next();

        return fetch(`${API}/singout`, {//signout from backend as well
            method: "GET"
        })
            .then(response => console.log("signout success"))
            .catch(err => console.log(err));
    }
};


//method for checking user authentication
// 
export const isAuthenticated = () => {
    if (typeof window == "undefined") {//if the window object is undefined, means if window object is not accessible
        return false//if we cannot access jwt from window local storage means user is not authenticated
    }

    if (localStorage.getItem("jwt")) {//if we can access jwt in local storage
        return JSON.parse(localStorage.getItem("jwt"));//then return jwt value and check the token if its same
    }
    else {
        return false;
    }

}
