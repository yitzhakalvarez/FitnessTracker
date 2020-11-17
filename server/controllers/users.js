const express = require('express');
const users = require('../models/users');
const router = express.Router();

router
    .get('/users', (req, res, next) => {
        users.getAll().then((data => res.send(data.map(user => ({ ...user, Password: undefined })))))
            .catch(next);
    })
    .get('/users/admins', (req, res, next) => {
        users.getAllAdmins().then(result => res.send(result))
            .catch(next);
    })
    .get('/users/search', (req, res, next) => {
        users.searchByUsername(req.query.q).then(result => res.send(result))
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
    .get('/users/:id/followers', (req, res, next) => {
        const id = +req.params.id;
        if (!id) {
            return next();
        }
        users.getFollowersForUser(id).then(result => res.send(result))
            .catch(next);
    })
    .post('/users/', (req, res, next) => {
        users.add(
            req.body.FirstName,
            req.body.LastName,
            req.body.DOB,
            req.body.Password,
            users.Types.USER,
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .post('/register', (req, res, next) => {
        users.register(
            req.body.FirstName,
            req.body.LastName,
            req.body.DOB,
            req.body.Password,
            users.Types.USER,
            req.body.Email
        ).then(newUser => {
            res.send({ ...newUser, Password: undefined });
        }).catch(next)
    })
    .post('/login', (req, res, next) => {
        users.login(
            req.body.email,
            req.body.password
        ).then(newUser => {
            res.send({ ...newUser, Password: undefined });
        }).catch(next)
    })
    .put('/users/:id', (req, res, next) => {
        users.update(req.params.id,
            req.body.FirstName,
            req.body.LastName,
            req.body.DOB,
            req.body.Password,
            users.Types.USER,
        ).then(newUser => {
            res.send(newUser);
        }).catch(next)
    })
    .delete('/users/:id', (req, res, next) => {
        users.remove(req.params.id).then(msg => {
            res.send(msg);
        }).catch(next)
    })

module.exports = router;