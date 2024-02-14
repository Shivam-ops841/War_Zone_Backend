const express=require('express');
const {Register,Login}=require('../controllers/Auth.Controller')

const route=express.Router();

//Defining Registration Endpoints
route.post('/register',Register);
route.post('/login',Login);

module.exports=route