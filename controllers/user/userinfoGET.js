const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");
const util = require("../../lib/util");
const { userDB } = require("../../model");

module.exports = async (req, res) => {
    try {
        const {userID} = req.params;
        const userData = await userDB.getUserInfoByUserID(userID);
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_PROFILE_SUCCESS, userData));
    }
    catch(err) {
        console.log(err);
    }
}