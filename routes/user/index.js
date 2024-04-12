const express = require('express');
const joinPOST = require('../../controllers/user/joinPOST');
const loginPOST = require('../../controllers/user/loginPOST');
const logoutGET = require('../../controllers/user/logoutGET');
const router = express.Router();

router.post('/join',joinPOST);
router.post('/login', loginPOST);
router.get('/logout', logoutGET);
module.exports = router;