const express = require('express');
const joinPOST = require('../../controllers/user/joinPOST');
const loginPOST = require('../../controllers/user/loginPOST');
const logoutGET = require('../../controllers/user/logoutGET');
const userinfoGET = require('../../controllers/user/userinfoGET');
const router = express.Router();

router.post('/join',joinPOST);
router.post('/login', loginPOST);
router.get('/logout', logoutGET);
router.get('/userInfo/:userID',userinfoGET);
module.exports = router;