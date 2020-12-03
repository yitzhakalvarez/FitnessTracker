const db = require('../db/database');
const users = require('../models/users')

//the people that are following you
async function getWorkouts(userId) {

    const workouts = await db.query(`SELECT target_muscle_group, day_id FROM Workout WHERE owner_id=?`, [userId]);
    //db.query(`SELECT day_id, target_muscle_group, exercise_description, muscle_group_id, owner_id FROM Workout W Join Exercises Ex ON W.id=Ex.muscle_group_id WHERE W.owner_id=?`, [userId]);
    if (!workouts.length) {
        return { status: 404, message: "Sorry, you have no workouts scheduled for this day" };
    }
    return workouts;
}

//only returns the workouts that have exercises linked to them
async function getWorkoutsForDay(userId, dayId) {
    if (!users.getById(userId)) {
        return { status: 404, message: "Sorry, this user does not exist" };
    }
    const workouts = await db.query(`SELECT target_muscle_group, exercise_description FROM Workout W Join Exercises Ex ON W.id=Ex.muscle_group_id WHERE W.owner_id=? AND W.day_id=?`, [userId, dayId]);
    if (!workouts.length) {
        return { status: 404, message: "Sorry, you have no workouts scheduled for this day" };
    }
    return workouts;
}

//the people you are following
async function getExercisesForWorkouts(workoutId) {
    if (!users.getById(userId)) {
        return { status: 404, message: "Sorry, this user does not exist" };
    }
    const results = await db.query(`SELECT exercise_description FROM Exercises WHERE muscle_group_id=?`, [workoutId]);
    if (!results.length) {
        return { status: 404, message: "Sorry, you have not added any exercises to this workout" };
    }
    return results;
}

module.exports = { getWorkoutsForDay, getExercisesForWorkouts, getWorkouts }