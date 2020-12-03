const { get } = require('./ContactMethods');
const mysql = require('./mysql');

//getall function, getid, add, update, delete

async function getAll(){
    console.log("Called Get All")
    //return await mysql.query(`SELECT * FROM Comments`);
    const sql = `SELECT P.*, FirstName, LastName FROM Comments P Join Users U ON P.Owner_id = U.id`
    return await mysql.query(sql);
}

async function getcomment(id){
    const sql = `SELECT 
        *
    FROM Comments WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows[0];
}
async function getForExercise(post_id){
    const sql = `SELECT P.*, FirstName, LastName FROM Comments P Join Users U ON P.Owner_id = U.id WHERE P.Exercise_id = ?`
    return await mysql.query(sql, [post_id]);
}

async function getcommentidforexercise(exercise_id)
{
    return await mysql.query(`SELECT id, FROM Exercises WHERE id = ?`, [exercise_id])
}

async function getcommentidforowner(owner_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [owner_id])
}

async function add(Text, Exercise_id, Owner_id){
    const sql = `INSERT INTO Comments (created_at, Text, Exercise_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Exercise_id, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Text, Exercise_id, Owner_id){
    const sql = `UPDATE ContactMethods SET ? WHERE id = ?;`;
    const params = {Text, Exercise_id, Owner_id };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM Comments WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Exercise_id FROM Comments WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, getcomment, getcommentidforexercise,getcommentidforowner, add, update, remove, search, getForExercise}