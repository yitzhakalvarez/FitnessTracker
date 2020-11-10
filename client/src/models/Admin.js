import fetch from "./fetch";

export let addedUser = null;

export async function RegisterUser(email, first_name, last_name, pw, isAd){
    const newUser = await fetch('/user/registerUser', { email, first_name, last_name, pw, isAd });
    return addedUser = newUser;
}

export let bannedUser = null;

export async function BanUser(userEmail){
    const banUser = await fetch('/user/banUser', { userEmail });
    return bannedUser = banUser;
}