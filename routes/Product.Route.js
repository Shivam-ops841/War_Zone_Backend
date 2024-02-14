const express=require('express')

const route=express.Router()

const {Get_Products,Get_Product_By_Id}=require('../controllers/Product.Controller')

//Defining Product Enpoints
app.get('/',Get_Products)
app.get('/:productId',Get_Product_By_Id)

module.exports=route