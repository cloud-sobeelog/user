const { db } = require("./db");

// 댓글 보기
const getComment = async(cHistoryID) => {
    let sql = `SELECT * FROM comment WHERE cHistoryID = ${cHistoryID}`;
    let [rows, fields] = await db.query(sql);

    //console.log(rows);

    return rows;
};

// 대댓글 입력과 댓글 입력은 replyID로 구분한다.
const postComment = async(cHistoryID, userID, content, replyID) => {
    let sql = `INSERT INTO comment
    (cHistoryID, userID, content, date , replyID)
    VALUES (${cHistoryID}, ${userID}, ${content}, NOW(), ${replyID})`;

    let [rows, fields] = await db.query(sql);

    console.log(rows);
};

// 댓글 수정, 일단 select로 해놨는데, 찾아보고 바꾸자
const editComment = async(commentID, c_historyID, content) => {
    let sql = `UPDATE comment 
    SET content = ${content} 
    WHERE commentID = ${commentID} AND c_historyId = ${c_historyID};
    COMMIT;`;

    const [result, data] = await db.query(sql);
};

// 댓글 삭제 (정말로 데이터베이스에서 지우는 것이 아님, isDelete 값을 바꾼다.)
const deleteComment = async(commentID, cHistoryID) => {
    let sql = `UPDATE comment 
    SET content = "삭제된 댓글입니다.", isDeleted = true
    WHERE commentID = ${commentID} AND cHistoryId = ${cHistoryID}`;

    let [rows, fields] = await db.query(sql);

    console.log(rows);
};

module.exports = {
    getComment,
    postComment,
    editComment,
    deleteComment
}