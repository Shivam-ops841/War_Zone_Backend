const express=require('express');

const route=express.Router();
const {Register,Login}=require('../controllers/Admin_Manage.Controller')

route.post('/trainers',Register)
route.post('/customers',Register)
module.exports=route