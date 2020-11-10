import fetch from "./fetch";

let ob = {
    CurrentUser: null,
    async Login(email, password){
        const user = await fetch('/user/login', { email, password });
        console.log(user._doc._id);
        return this.CurrentUser = user._doc;
    },
    async Logout() {
        const user = await fetch('/user/logout');
        return this.CurrentUser = null;
    },
    async Register(email, first_name, last_name, pw, cpw){
        const newUser = await fetch('/user/register', { email, first_name, last_name, pw, cpw});
        return this.CurrentUser = newUser._doc;
    }
}

export default ob;

export let allSearches = null;

export async function getUsers(userSearched) {
    const users = await fetch('/user/getUser', { userSearched });
    return allSearches = users;
}

export let otherUser = null;

export async function getSingleUser(userClicked) {
    const user = await fetch('/user/getSingleUser', { userClicked });
    return otherUser = user;
}
