const mysql = require('./mysql');

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM names_exercises`);
}

async function getexercise(exercise_id)
{
    console.log(exercise_id);
    const rows = await mysql.query(`SELECT * FROM names_exercises WHERE id = ?`, [exercise_id])
    return rows[0].names_exercises
}

async function GetAllExerciseTypeNames()
{
    console.log("Getting All Exercise Type Names")
    return await mysql.query(`Select * FROM names_exercises`);
}

module.exports = { getexercise, getAll, GetAllExerciseTypeNames }