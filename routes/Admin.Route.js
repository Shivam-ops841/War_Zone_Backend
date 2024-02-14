const express=require('express')
const { ADD_PRODUCT, ADD_SERVICE, GET_USERS, GET_RATINGS } = require('../controllers/Admin.Controller')

const route=express.Router()

//Creating Admin Endpoints

route.post('/products',ADD_PRODUCT)
route.post('/service',ADD_SERVICE)
route.get('/users',GET_USERS)
route.get('/ratings',GET_RATINGS)

module.exports=route