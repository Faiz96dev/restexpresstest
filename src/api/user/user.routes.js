const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.get('/info', userController.getUserInfo);

module.exports = router;
