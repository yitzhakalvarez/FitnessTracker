/* B"H
    Need to Fix
*/
const e = require('express');
const getexercisetype = require('./exercisetypes');
const mysql = require('./mysql');
const cm = require('./ContactMethods');
const comments = require('./comments');
//const Types = {RUNNING: 'Running', BENCH_PRESS: 'Bench Press', WALKING: 'Walking', BICYCLE_RIDING: 'Bicycle Riding', SWIMMING: 'Swimming'}; //not going to be used anymore. I think

async function getAll(){
    console.log("Called Get All Exercises")
    const sql = `SELECT * FROM Exercises`;
    const rows = await mysql.query(sql);
    console.log(rows[0].Exercise_Type);
    //return await mysql.query(`SELECT * FROM Exercises`);
    //const sql = `SELECT E.*, FirstName, LastName FROM Exercises E Join Users U ON E.User_id = U.id`
    return rows;
}

async function getByUser(user_id)
{
    console.log("Called Get All Users for Feed")
    console.log(user_id)
    const sql = `
        SELECT 
            F.*, FirstName, LastName, E.*, 
            (SELECT Value FROM ContactMethods Where User_id = U.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = 1) as PrimaryEmail,
            (SELECT COUNT(*) FROM Reactions WHERE Exercise_id = E.id) as Reactions
        FROM Users U Join Friendlist F ON F.Owner_id = ? OR (U.id = F.Friends_id AND F.Owner_id = ?) Join Exercises E ON E.User_id = U.id
        WHERE E.User_id = ? OR E.User_id = Friends_id`
        console.log(sql);

        const posts = await mysql.query(sql, [user_id, user_id, user_id]);

        for (const p of posts) {
            p.Comments = await comments.getForExercise(p.id); 
        }

    return posts;
}

async function getAllForUser(id){
    console.log(id)
    console.log("Called Get All User Exercises")
    const sql = `SELECT * FROM Exercises WHERE User_id = ?;`;
    return await mysql.query(sql,[id]);
}

async function get(id, Owner_id){
    const rows = await mysql.query(`SELECT * FROM Exercises WHERE id=? AND User_id = ?`, [id , Owner_id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no exercises from this user" };
    return rows[0];
}

async function getExerciseUserId(exercise_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [exercise_id])
}

async function add(Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id){
    console.log(Exercise_Type_id);
    const exercisetype = await getexercisetype.getexercise(Exercise_Type_id);
    const sql = `INSERT INTO Exercises (created_at, Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id) VALUES ? ;`;
    const params = [[new Date(), Time_Spent, Calories_Burned, Favorite_Exercise, exercisetype, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, User_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight, Owner_id){
    console.log("Updating Exercises")
    console.log(Exercise_Type_id);
    const exercisetype = await getexercisetype.getexercise(Exercise_Type_id);
    console.log(exercisetype);
    const sql = `UPDATE Exercises SET ? WHERE id = ? AND User_id = ? ;`;
    const params = {Time_Spent, Calories_Burned, Favorite_Exercise, Exercise_Type: exercisetype, Exercise_Type_id, Distance, Exercise_Sets, Reps_Per_Set, Lifting_Weight, BodyWeight};
    const res = await mysql.query(sql, [params, id, Owner_id]);
    return get(id, Owner_id);
}
//const params = { Type, Value, IsPrimary, CanSpam, User_id };
// return await mysql.query(sql, [params, id]);

async function remove(id, Owner_id){
    console.log("Removing Exercises")
    console.log(id, Owner_id)
    const sql = `DELETE FROM Exercises WHERE id = ? AND User_id = ? `;
    return await mysql.query(sql, [id, Owner_id]);
}

async function Set_User_Reps(id, Reps_Per_Set){
    const sql = `UPDATE Exercises SET Reps_Per_Set = ? WHERE id = ?;`;
    const params = {Reps_Per_Set, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Weight(id, Lifting_Weight){
    const sql = `UPDATE Exercises SET Lifting_Weight = ? WHERE id = ?;`;
    const params = {Lifting_Weight, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Distance(id, Distance){
    const sql = `UPDATE Exercises SET Distance = ? WHERE id = ?;`;
    const params = {Distance, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

async function Set_User_Sets(id, Distance){
    const sql = `UPDATE Exercises SET Excercise_Sets = ? WHERE id = ?;`;
    const params = {Exercise_Sets, id} ;
    const rows = await mysql.query(sql, [params]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such exercise id" };
    return rows[0];
}

const search = async q => await mysql.query(`SELECT id, Value FROM Exercises WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getExerciseUserId, Set_User_Reps, Set_User_Distance, Set_User_Sets, Set_User_Weight, getAllForUser, getByUser }