const db = require('../db/database');

//the people that are following you
async function getFollowing(userId) {
    const results = await db.query(`SELECT follower_id FROM Followers WHERE user_id=?`, [userId])
    if (!results.length) {
        return { status: 404, message: "Sorry, you have no followers" };
    }
    return results;
}


//the people you are following
async function getFollowers(userId) {
    const results = await db.query(`SELECT follower_id FROM Following WHERE user_id=?`, [userId])
    if (!results.length) {
        return { status: 404, message: "Sorry, you have no followers" };
    }
    return results;
}

module.exports = { getFollowing, getFollowers }