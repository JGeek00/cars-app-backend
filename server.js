const express = require('express');
const server = express();
const session = require('express-session');
const dotenv = require('dotenv').config();

const cors = require('cors');

//Settings
server.set('port', process.env.PORT || 3000);

//Middlewares
server.use(cors());
server.use(express.json());
server.use(session({
    secret: process.env.AUTH_KEY,
    resave: false,
    saveUninitialized: false
}));
console.log(process.env.MONGODB_URI);
console.log(process.env.PORT);
console.log(process.env.AUTH_KEY);


//Routes
server.use('/api/cars', require('./routes/cars'));
server.use('/api/brands', require('./routes/brands'));
server.use('/api/users', require('./routes/users'));
server.use('/api/login', require('./routes/login'));
server.use('/api/register', require('./routes/register'));
server.use('/api/profile', require('./routes/profile'));


module.exports = server;