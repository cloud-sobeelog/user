const {db} = require("./db");
const crypto = require('crypto');

const postJoin = async(email, newpassword, nickname, salt) => {
  let sql = `INSERT INTO users (email, password, nickname, salt) VALUES (${email}, ${newpassword}, ${nickname}, ${salt})`;

  let [rows] = await db.query(sql);
  return rows;
};

const checkUser = async(email) => {
    const sql = `SELECT * FROM users u WHERE u.email = ${email}`;
    let [rows,fields] = await db.query(sql);
    console.log(rows);
    return rows
}


// 유저 검색
const getOneUser = async(email) => {
  let sql = `SELECT * FROM users WHERE email = ${email}`;

  let [rows, fields] = await db.query(sql);

  console.log(rows);

  return rows;
};

module.exports = {
    postJoin,
    checkUser,
    getOneUser
}