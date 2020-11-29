const express = require('express');
const exercises = require('../models/exercises');
const users = require('../models/users');
const router = express.Router();

router
    .get('/users/:id/workouts', (req, res, next) => {
        const userId = +req.params.id;
        if (!userId) {
            return next();
        }
        users.doesUserExist(userId).then(result => {
            if (result) {
                exercises.getWorkouts(userId)
                    .then(result => res.send(result))
                    .catch(next);
            } else {
                res.send({ status: 404, message: "Sorry, there is no such user" });
            }
        }).catch(next);
    })
    .get('/users/:id/workouts/:dayId', (req, res, next) => {
        const userId = +req.params.id;
        if (!userId) {
            return next();
        }
        const dayId = +req.params.dayId;
        if (!dayId) {
            return next();
        }
        users.doesUserExist(userId).then(result => {
            if (result) {
                exercises.getWorkoutsForDay(userId, dayId)
                    .then(result => res.send(result))
                    .catch(next);
            } else {
                res.send({ status: 404, message: "Sorry, there is no such user" });
            }
        }).catch(next);
    })
    .get('/users/:id/workouts/:dayId/exercises', (req, res, next) => {
        const userId = +req.params.id;
        if (!userId) {
            return next();
        }
        const dayId = +req.params.dayId;
        if (!dayId) {
            return next();
        }
        users.doesUserExist(userId).then(result => {
            if (result) {
                exercises.getExercisesForWorkouts(userId, dayId)
                    .then(result => res.send(result))
                    .catch(next);
            } else {
                res.send({ status: 404, message: "Sorry, there is no such user" });
            }
        }).catch(next);
    })

    module.exports = router;