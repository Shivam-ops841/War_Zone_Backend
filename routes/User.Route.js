const express=require('express')
const {Get_User_Details,Update_User_Details,Update_Password}=require('../controllers/User.Controller')

const route=express.Router()

//Defining User Endpoints
route.get('/:userId',Get_User_Details)
route.put('/:userId',Update_User_Details)
route.put('/:userId/password',Update_Password)

module.exports=route