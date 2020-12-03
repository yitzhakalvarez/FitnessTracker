const db = require('../db/database');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'FitnessTracker_';

async function getForPost(postId) {
    const results = await db.query(`SELECT content FROM Comments WHERE post_id=?`, [postId]);
    if (!results.length) {
        return { status: 404, message: "This post has 0 comments" };
    }
    return results;
}

module.exports = { getForPost }