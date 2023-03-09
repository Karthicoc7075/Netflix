const express = require('express');
const auth = require('../middleware/auth')
const Router = express.Router();
const {getMovie,postMovie} = require('../controller/movie');

Router.get('/',auth,getMovie);
Router.post('/postMovie',postMovie);

module.exports = Router