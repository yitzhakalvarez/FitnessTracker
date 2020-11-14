const bcrypt = require('bcrypt');
const db = require('./database');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;

async function getAll() {
    return await db.query(`SELECT * FROM Users`);
}

module.exports = { getAll }