const express=require('express')
const { GET_CUSTOMER_BY_ID, UPDATE_CUSTOMER_DETAILS } = require('../controllers/Customer.Controller')

const route=express.Router()

//Creating Customer Endpoints
route.get('/customers/:customerId',GET_CUSTOMER_BY_ID)
route.put('/customers/:customerId',UPDATE_CUSTOMER_DETAILS)

module.exports=route