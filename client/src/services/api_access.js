//Local Production
//const api_root = "http://localhost:81";
//Server Deployment
const api_root = "http://192.168.1.4:81";

var user = null;

/*
    ////////////////////////////////////// User Methods //////////////////////////////////////////////
*/
export function getUser() {
    var Username = null, password = null;
    if (user != null && user.username != undefined && user.password != undefined) {
        Username = user.username;
        password = user.password;
    }
    return myFetch(api_root + "/app/getUser", {
        Username, password
    }).then(fetchedUser => user = fetchedUser);
}
export function loginUser(Username, password) {
    return myFetch(api_root + "/app/getUser", {
        Username, password
    }).then(fetchedUser => user = fetchedUser);
}
export function signupUser(email, username, password, gender, heightFT, heightIN, weight, age, activityLevel, weightGoals, BMR) {
    return myFetch(api_root + "/app/signupUser", {
        email, username, password, gender, heightFT, heightIN, weight,
        age, activityLevel, weightGoals, BMR
    }).then(fetchedUser => user = fetchedUser);
}
export function updateUser(email, username, password, firstName, lastName, 
                            gender, heightFT, heightIN, weight, age, activityLevel, weightGoals, BMR) {
    var user_username, user_password;
    if (user != null && user.username != undefined && user.password != undefined) {
        user_username = user.username;
        user_password = user.password;
    }
    return myFetch(api_root + "/app/updateUser", {
        user_username, user_password, email, username, password, firstName, lastName,
        gender, heightFT, heightIN, weight, age, activityLevel, weightGoals, BMR
    }).then(fetchedUser => user = fetchedUser);
}
export function logoutUser() {
    user = null;
}