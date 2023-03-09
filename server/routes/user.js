const express = require('express');
const {signUp,signIn,verifyUser,likeMovie} = require('../controller/user');
const auth = require('../middleware/auth')

const Router = express.Router();
Router.post('/signUp',signUp);
Router.post('/signIn',signIn);
Router.post('/userVerify',verifyUser);
Router.post('/likeMovie',auth,likeMovie);

module.exports = Router;