const bcrypt = require('bcrypt');
const db = require('../db/database');
const cm = require('./ContactMethods');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'FitnessTracker_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;

const getAll = async () => await db.query(`SELECT * FROM Users`);

const getAllAdmins = async () => await db.query(`SELECT * FROM Users WHERE admin=true`);

const getById = async (userId) => {
    const results = await db.query(`SELECT * FROM Users WHERE id=?`, [userId]);
    if (!results.length) {
        return { status: 404, message: "Sorry, there is no such user" };
    }
    return results[0];
};

const add = async (username, password, DOB, isAdmin) => {
    const hash = await bcrypt.hash(password, Number(SALT_ROUNDS));
    const now = new Date();
    const sql = `INSERT INTO Users (created_at, updated_at, admin, birth_date, username, password) VALUES ?;`;
    const params = [[now, now, isAdmin, new Date(DOB), username, hash]];
    return await db.query(sql, [params]);
}

const update = async (id, username, password, DOB, isAdmin) => {
    const sql = `UPDATE Users SET ? WHERE id = ?;`;
    const params = { username, password, DOB: new Date(DOB), isAdmin };
    return await db.query(sql, [params, id]);
};

const remove = async (id) => await db.query(`DELETE FROM Users WHERE id=?`, [id]);

const removeCompletely = async (id) => {
    await cms.remove(id);
    await remove(id);
    //await cms.remove(id);
};

const searchByUsername = async (query) => await db.query(`SELECT id, username FROM Users WHERE username LIKE ?; `, [`%${query}%`]);

const isUsernameUsed = async (username) => {
    const statement = `SELECT * FROM Users WHERE username=?`;
    const rows = await db.query(statement, [username]);
    return rows.length ? true : false;
};

const doesUserExist = async (id) => {
    const statement = `SELECT * FROM Users WHERE id=?`;
    const rows = await db.query(statement, [id]);
    return rows.length ? true : false;
};

//users should never be able to register as an admin
const register = async (username, password, email, DOB) => {
    if (await cms.isEmailedUsed(email)) {
        return { status: 409, message: 'You already signed up with this email. Please go to Log in.' };
    }
    if (await isUsernameUsed(username)) {
        return { status: 409, message: 'Sorry, this username is taken' };
    }

    const userAddRes = await add(username, password, DOB, 0);
    await cms.add(userAddRes.insertId, email);

    return await getById(userAddRes.insertId);
};

const login = async (email, password) => {
    const statement = `SELECT * FROM Users U Join ContactMethods CM ON U.id=CM.user_id WHERE CM.email=?`;
    const rows = await db.query(statement, [email]);

    if (!rows.length) {
        return { status: 404, message: "Sorry, that email address is not registered" }; 
    }

    //compare the hashes
    const pwCompare = await bcrypt.compare(password, rows[0].password);

    if (!pwCompare) {
        return { status: 403, message: "Sorry, Invalid password" };
    }

    return getById(rows[0].user_id);
};

module.exports = { getAll, getById, doesUserExist, getAllAdmins, searchByUsername, add, remove, login, register, removeCompletely };