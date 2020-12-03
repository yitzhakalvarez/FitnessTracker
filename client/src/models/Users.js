/* B"H

*/
import { myFetch } from "./my-fetch";
import session from "./session"

export function getList() {
    return myFetch('users');
}

export function getListAdmin() {
    return myFetch('users/usertableforadmin');
}

export function login(email, password){
   return myFetch('users/login', {email, password })
}

export function register(username, firstname, lastname, dob, password, email){
    return myFetch('users/register', {UserName: username, FirstName: firstname, LastName: lastname, DOB: dob, Password: password, Email: email})
}

export function getUserFriendslist(id){
    return myFetch('friendlist/friendslist', {Owner_id: id})
}

export function deleteuserfromlist(id){
    return myFetch('users/delete', {id: id})
}

export function addfriend(friend_id, id){
    return myFetch('friendlist/add_Friend', {Friends_id: friend_id, Owner_id: id})
}

export function deletefriend(friend_id, id){
    return myFetch('friendlist/delete_Friend', {Friends_id: friend_id, Owner_id: id})
}

/*
export const User_Server_Side = {

}

*/