const express = require('express');
const exercises = require('../models/Exercises');
const comments = require('../models/comments');
const reactions = require('../models/reactions');

const router = express.Router();
router
    .get('/', (req, res, next) => {
        exercises.getAll().then(newExercise => {
            res.send(newExercise);
        }).catch(next)
    })
    .post('/UserTable', (req, res, next) => {
        exercises.getAllForUser(req.body.User_id).then(newExercise => {
            res.send(newExercise);
        }).catch(next)
    })
    .post('/byUser', (req, res, next) => {
        exercises.getByUser(req.body.User_id).then(newExercise => {
            res.send(newExercise);
        }).catch(next)
    })
    //get a specific table
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        exercises.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id/comments', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.getForPost(id).then(x=> res.send( x ) )
        .catch(next);
    })
    // get specific exercise types //currently not being used
    .get('/types', (req, res, next) => {
        exercises.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })

    .get('/:id/comments', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.getForExercise(id).then(x=> res.send( x ) )
        .catch(next);
    }) //develop later

    .get('/search', (req, res, next) => {
        exercises.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })

    .post('/', (req, res, next) => {
        exercises.add(
            req.body.Time_Spent,  
            //calories burned should not be calculated yet
            req.body.Calories_Burned,
            req.body.Favorite_Exercise, 
            req.body.Exercise_Type_id,
            req.body.Distance,
            req.body.Exercise_Sets,
            req.body.Reps_Per_Set,
            req.body.Lifting_Weight,
            req.body.BodyWeight,
            req.body.User_id
        ).then(newExercise => {
            res.send( newExercise );
        }).catch(next)
    })
    .post('/updatexercise', (req, res, next) => {
        exercises.update( 
            req.body.id,
            req.body.Time_Spent,  
            //calories burned should be calculated here but don't know how to yet
            req.body.Calories_Burned,
            req.body.Favorite_Exercise, 
            req.body.Exercise_Type_id,
            req.body.Distance,
            req.body.Exercise_Sets,
            req.body.Reps_Per_Set,
            req.body.Lifting_Weight,
            req.body.BodyWeight,
            req.body.User_id
        ).then(newExercise => {
            res.send( newExercise );
        }).catch(next)
    })
    .put('/:id', (req,res) => { //set the reps specifically

        Exercises.Set_User_Reps(req.params.id,
            req.body.Reps_Per_Set
            ).then(newExercise => {
                res.send( newExercise );
            }).catch(next)
        
    })

    .put('/:id', (req,res) => { //set the weight

        Exercises.Set_User_Weight(req.params.id,
            req.body.Lifting_Weight
            ).then(newExercise => {
                res.send( newExercise );
            }).catch(next)
        
    })

    .put('/:id', (req,res) => { //set the distance specifically

        Exercises.Set_User_Distance(req.params.id,
            req.body.Distance
            ).then(newExercise => {
                res.send( newExercise );
            }).catch(next)
        
    })

    .put('/:id', (req,res) => { //set the sets specifically

        Exercises.Set_User_Sets(req.params.id,
            req.body.Exercise_Sets
            ).then(newExercise => {
                res.send( newExercise );
            }).catch(next)
        
    })

    .post('/delete', (req, res, next) => {
        exercises.remove(req.body.id, req.body.User_id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;