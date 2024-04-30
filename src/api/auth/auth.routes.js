const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/signin', authController.signIn);
router.post('/signin/new_token', authController.refreshToken);
router.post('/signup', authController.signUp);
router.get('/logout', authController.logout);

module.exports = router;
