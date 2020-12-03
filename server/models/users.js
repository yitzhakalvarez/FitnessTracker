/* B"H

*/
const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

//const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'Fall2020_';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT * FROM Users`;
    const rows = await mysql.query(sql);
    console.log(rows[0].id);
    return rows;
}

async function getAllUsersForAdmin(){
    console.log("Called Get All For Admin")
    const sql = `SELECT * FROM Users`;
    const rows = await mysql.query(sql);
    console.log(rows[0].id);
    return rows;
}

async function getUserID(UserName, FirstName, LastName, DOB, Password){
    console.log("Getting User ID For Current Session")
    const rows = await mysql.query('Select id, FROM Users Where UserName = ? AND FirstName = ? And LastName = ? DOB = ? AND Password = ? ', [UserName, FirstName, LastName, DOB, Password])
    if(!rows.length) throw {status: 404, message: "Sorry, this is no such user" }
    return rows
}

async function getUserFriends(id)
{
    const rows = await mysql.query(`SELECT * FROM Friendlist WHERE Owner_id=?` , [id]);
    if(!rows.length) throw {status: 404, message: "Sorry, this user has no friends added" } //rows is an array
    return rows
}

async function getOwnerUserFriendId(Owner_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [Owner_id])
}

async function getFriendUserId(Friend_id)
{
    return await mysql.query(`SELECT id, FROM Users WHERE id = ?`, [Friend_id])
}

async function get(id){
    const sql = `SELECT 
        *,
        (SELECT Value FROM ContactMethods Where User_id = Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
    FROM Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function login(email, password){
    console.log(email)
    console.log(password)
    const sql = `SELECT *
    FROM Users U Join ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "Sorry, that email address is not registered with us." };
    console.log(rows[0].Firstname);
    console.log(rows[0].Password);
    console.log(Types.ADMIN);
    console.log(rows[0].User_Type)
    if(rows[0].User_Type == 5)
      {
          return rows;
      }
    //const hash = await bcrypt.hash(password, rows[0].Password)
    const res = await bcrypt.compare(password, rows[0].Password)
    //console.log ({res, hash})
    if(! res ) throw { status: 403, message: "Sorry, wrong password." };
    return rows;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

async function add(UserName, FirstName, LastName, DOB, Password, User_Type){
    const sql = `INSERT INTO Users (created_at, UserName, FirstName, LastName, DOB, Password, User_Type) VALUES ? ;`;
    const params = [[new Date(), UserName, FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [params]);
}

async function update(id, UserName, FirstName, LastName, DOB, Password, User_Type){
    const sql = `UPDATE Users SET ? WHERE id = ?;`;
    const params = {UserName, FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function ifadmin(id){
    console.log('Checking Admin')
    const sql = `Select * FROM Users WHERE id = ?`
    const rows = mysql.query(sql, [id])
    return rows;
}

async function remove(id){
    console.log('Removing User')
    const admin = await ifadmin(id);
    console.log('Outside admin')
    console.log(admin[0].User_Type);
    if(admin[0].User_Type == 5)
      {
         throw { status: 409, message: 'You cannot delete another admin' }
      }
    else{
        const sql2 = `DELETE FROM ContactMethods WHERE User_id = ?`;
        const rows2 = await mysql.query(sql2, [id])
        const sql3 = `DELETE FROM Exercises WHERE User_id = ?`;
        const rows3 = await mysql.query(sql3, [id])
        const sql = `DELETE FROM Users WHERE id = ?`;
        const rows = await mysql.query(sql, [id]);
        return rows;
    }
}

async function register(UserName, FirstName, LastName, DOB, Password, User_Type, email) {
    console.log(email)
    console.log(Password)
    console.log(DOB)
    if(await cm.exists(email)){
        throw { status: 409, message: 'You already signed up with this email. Please go to Log in.' }
    }
    const hash = await bcrypt.hash(Password, SALT_ROUNDS);
    const res = await add(UserName, FirstName, LastName, DOB, hash, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;
}

async function getFriendlist(Owner_id){
    console.log('getting list');
    console.log(Owner_id);
    //const sql = `SELECT *
    //FROM Users U Join ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const sql = `SELECT * FROM Users U JOIN Friendlist FL ON U.ID = FL.Friends_id WHERE FL.Owner_id = ?`;
    const rows = await mysql.query(sql, [Owner_id]);
    if(!rows.length) throw {status: 404, message: "Sorry you have no friends added"};
    return rows;
}
async function Add_A_New_Friend(Owner_id, Friend_id)
{
    console.log(Friend_id);
    if(Owner_id == Friend_id){
        throw { status: 409, message: 'You cannot add yourself' }
    }
    const sql = `INSERT INTO Friendlist(created_at, Friends_URL_Page, Owner_id, Friends_id) VALUES ? ;`;
    const params = [[new Date(), Friends_URL_Page = null, Friend_id, Owner_id]];
    return await mysql.query(sql, [params]);
}

async function RemoveFriend(Owner_id, Friends_id)
{
    console.log('deleting friend')
    console.log(Owner_id)
    console.log(Friends_id)
    const sql = `DELETE FROM Friendlist WHERE id = ? AND Owner_id = ?`;
    const rows = await mysql.query(sql, [Friends_id, Owner_id])
    return rows;
}

const search = async q => await mysql.query(`SELECT id, UserName, FirstName, LastName FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, register, login, search, Types, Add_A_New_Friend, RemoveFriend, getUserFriends, getOwnerUserFriendId, getFriendUserId, getUserID, getFriendlist, ifadmin, getAllUsersForAdmin}