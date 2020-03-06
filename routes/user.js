const route = require('express').Router();
const Auth = require('../middleware/auth');
const Controller = require('../controllers/user');

route.get('/dashboard', Auth, Controller.home);

// User signup route
route.post('/signup', Controller.validateCreateUserInput(), Controller.createUser);

// User login route
route.post('/login', Controller.validateLoginUserInput(), Controller.loginUser);


module.exports = route;