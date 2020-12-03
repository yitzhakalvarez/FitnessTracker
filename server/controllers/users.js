const express = require('express');
const users   = require('../models/users');
const router  = express.Router();

router
    .get('/users', (req, res, next) => {
        users.getAll()
            .then((data => res.send(data.map(user => ({ ...user, password: undefined })))))
            .catch(next);
    })
    .get('/users/admins', (req, res, next) => {
        users.getAllAdmins()
            .then(result => res.send(result))
            .catch(next);
    })
    .get('/users/search', (req, res, next) => {
        users.searchByUsername(req.query.q)
            .then(result => res.send(result))
            .catch(next);
    })
    .get('/users/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) {
            return next();
        }
        users.getById(id).then(result => res.send(result))
            .catch(next);
    })
    .post('/users/add', (req, res, next) => {
        users.add(
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.DOB,
            req.body.isAdmin, 
        ).then(newUser => {
            res.send(newUser);
        }).catch(next);
    })
    .post('/users/register', (req, res, next) => {
        users.register(
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.DOB,
        ).then(newUser => {
            res.send({ ...newUser, password: undefined });
        }).catch(next);
    })
    .post('/users/login', (req, res, next) => {
        users.login(
            req.body.email,
            req.body.password
        ).then(newUser => {
            res.send({ ...newUser, password: undefined });
        }).catch(next);
    })
    .put('/users/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) {
            return next();
        }
        users.update(
            id,
            req.body.username,
            req.body.password,
            req.body.DOB,
            req.body.isAdmin,
        ).then(newUser => {
            res.send(newUser);
        }).catch(next);
    })
    .delete('/users/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) {
            return next();
        }
        users.removeCompletely(id).then(result => {
            res.send(result);
        }).catch(next);
    })

module.exports = router;