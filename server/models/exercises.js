const db = require('../db/database');

const Privacy_Levels = { HIDDEN: 0, ONLY_ME: 1, ONLY_FRIENDS: 2, PUBLIC: 4 };

async function getAll(){
    console.log("called get all");

    return await mysql.query('SELECT * FROM FitnesTracker_Workouts');
}

async function get(){
    const sql = `SELECT * FROM FitnesTracker_Workouts WHERE id=?`;
    const rows = await mysql.query(sql, [id]);

    if(!rows.length) 
    throw {status: 404, message: "WORKOUT DOES NOT EXIST"};

    return rows[0];
}

async function getTypes(){
    return await mysql.query('SELECT id, Name FROM FitnesTracker_Types WHERE Type_id = 3');
}

async function add(Exercise_Type, Privacy_Setting, Owner_id){
    const sql = `INSERT INTO FitnessTracker_Workouts (created_at, Workout_Type, Privacy_Setting, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Exercise_Type, Privacy_Setting, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Exercise_Type, Privacy_Setting, Owner_id){
    const sql = 'UPDATE `Workouts` SET ? WHERE `id` = ?;';
    const params = { created_at: new Date(), Exercise_Type, Privacy_Setting, Owner_id};
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM FitnessTracker_Workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

module.exports = {getAll, get, getTypes, add, update, remove, Privacy_Levels}