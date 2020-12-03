/* B"H

*/
import { myFetch } from "./my-fetch";
import session from "./session"

export function getExercises(user_id) {
    return myFetch('Exercises/UserTable', {User_id: user_id})
}

export function addexercise(time_Spent, calories_Burned, favorite_Exercise, exercise_Type_id, distance, exercise_Sets, reps_Per_Set, lifting_Weight, bodyweight, user_id){
    return myFetch('Exercises', {Time_Spent: time_Spent, Calories_Burned: calories_Burned, Favorite_Exercise: favorite_Exercise, Exercise_Type_id: exercise_Type_id, Distance: distance, Exercise_Sets: exercise_Sets, Reps_Per_Set: reps_Per_Set, Lifting_Weight: lifting_Weight, BodyWeight: bodyweight, User_id: user_id })
}

export function getFitnessPosts(user_id)
{
    console.log('In get fitnessposts function')
    console.log(user_id)
    return myFetch(`Exercises/byUser`, {User_id: user_id});
}

export function react(post_id){
    //console.log(session.user)
    return myFetch('reactions', { Exercise_id: post_id, Owner_id: 1 })
}

export function comment(post_id, user_id, text){
    return myFetch('comments', { Exercise_id: post_id, Owner_id: user_id, Text: text })
}

export function getexercisetypes() {
    return myFetch('exercisetypes');
}

export function updatexercise(id, time_Spent, calories_Burned, favorite_Exercise, exercise_Type_id, distance, exercise_Sets, reps_Per_Set, lifting_Weight, bodyweight, user_id){
    return myFetch('Exercises/updatexercise', {id: id, Time_Spent: time_Spent, Calories_Burned: calories_Burned, Favorite_Exercise: favorite_Exercise, Exercise_Type_id: exercise_Type_id, Distance: distance, Exercise_Sets: exercise_Sets, Reps_Per_Set: reps_Per_Set, Lifting_Weight: lifting_Weight, BodyWeight: bodyweight, User_id: user_id});
}

export function deleteexercise(id, user_id){
    return myFetch('Exercises/delete', {id: id, User_id: user_id});
}