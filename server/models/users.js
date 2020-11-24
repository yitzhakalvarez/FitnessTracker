const bcrypt = require('bcrypt');
const db = require('../db/database');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_'
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAll() {
    return await db.query(`SELECT * FROM Users`);
}

async function getById(userId) {
    const results = await db.query(`SELECT * FROM Users WHERE id=?`, [userId])
    if (!results.length) {
        return { status: 404, message: "Sorry, there is no such user" };
    }
    return results[0];
}

async function getAllAdmins() {
    return await db.query(`SELECT * FROM users WHERE admin=true`)
}

async function getById(userId) {
    const results = await db.query(`SELECT * FROM users WHERE id=?`, [userId])
    if (!results.length) {
        return { status: 404, message: "Sorry, there is no such user" };
    }
    return results[0];
}

async function login(email, password){
    const sql = `SELECT *
    FROM ${PREFIX}Users U Join ${PREFIX}ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "Sorry, that email address is not registered with us." };
    console.log({password, Password: rows[0].Password});

    const hash = await bcrypt.hash(password, rows[0].Password)
    const res = await bcrypt.compare(password, rows[0].Password)
    console.log ({res, hash})
    if(! res ) throw { status: 403, message: "Sorry, wrong password." };
    return get(rows[0].User_id);
}

const searchByUsername = async q => await mysql.query(`SELECT id, username FROM Users WHERE username LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, getById, getAllAdmins, searchByUsername }