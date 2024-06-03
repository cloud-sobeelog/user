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

const getUserInfoByUserID = async(userID) => {
  let sql = `SELECT userID,nickname FROM users WHERE userID = ${userID}`;

  let [rows, fields] = await db.query(sql);

  return rows;
};


const getNicknamedUserList = async(nickname) => {
  let keyword = '%' + nickname + '%';
  
  let sql = `
      SELECT u.userID AS userId, u.nickname AS nickname
      FROM users u
      WHERE u.nickname LIKE ? `;

  let [rows] = await db.query(sql, [keyword]);
  return rows;
}

module.exports = {
    postJoin,
    checkUser,
    getOneUser,
    getUserInfoByUserID,
    getNicknamedUserList
}