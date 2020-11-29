const db = require('../db/database');
const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'FitnessTracker_';
const Types = { EMAIL: 'Email', CELL_PHONE:'Cell Phone' };

const isEmailedUsed = async (email) => {
    const statement = `SELECT * FROM ContactMethods WHERE email=?`;
    const rows = await db.query(statement, [email]);
    return rows.length ? true : false;
};

const add = async (userId, email) => {
    const now = new Date();
    const sql = `INSERT INTO ContactMethods (email, created_at, updated_at, user_id) VALUES ?;`;
    const params = [[email, now, now, userId]];
    return await db.query(sql, [params]);
}

const remove = async (userId) => await db.query(`DELETE FROM ContactMethods WHERE user_id=?`, [userId]);

module.exports = {isEmailedUsed, add, remove};
