let express = require('express');
let route = express.Router();

let user = require('./user/route');
route.use('/user', user);

module.exports= route;