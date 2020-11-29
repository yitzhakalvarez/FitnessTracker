const db = require('../db/database');
const cm = require('./ContactMethods');
const comments = require('./comments');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'FitnessTracker_';
const MediaTypes = { GIF: 'image/gif', JPG: 'image/jpeg', PNG: 'image/png' };
const Privacy_Levels = { HIDDEN: 0, ONLY_ME: 1, ONLY_FRIENDS: 2, PUBLIC: 4 };

async function getAll() {
    console.log("Called Get All");
    const sql = `SELECT P.*, FirstName, LastName FROM Posts P Join Users U ON P.Owner_id = U.id`;
    return await db.query(sql);
}

async function get(id) {
    const sql = `SELECT * FROM Posts WHERE id=?`;
    const rows = await db.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such post" };
    return rows[0];
}

async function getTypes(){
    return await db.query(`SELECT id, Name FROM Types WHERE Type_id = 3`);
}

async function add(URL, Text, Media_Type, Privacy_Setting, Owner_id){
    const sql = `INSERT INTO Posts (created_at, URL, Text, Media_Type, Privacy_Setting, Owner_id) VALUES ? ;`;
    const params = [[new Date(), URL, Text, Media_Type, Privacy_Setting, Owner_id]];
    const res = await db.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, URL, Text, Media_Type, Privacy_Setting, Owner_id){
    const sql = `UPDATE Posts SET ? WHERE id = ?;`;
    const params = { URL, Text, Media_Type, Privacy_Setting, Owner_id };
    const res = await db.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM Posts WHERE id = ?`;
    return await db.query(sql, [id]);
}

const search = async q => await db.query(`SELECT id, URL, Text, Media_Type FROM Posts WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, search, MediaTypes, Privacy_Levels }