const express=require('express')
const {GET_TRAINER_BY_ID,UPDATE_TRAINER_BY_ID}=require('../controllers/Trainer.Controller')

const route=express.Router()

//Defining Trainer Endpoints
route.get('/:trainerId',GET_TRAINER_BY_ID)
route.put('/:trainerId',UPDATE_TRAINER_BY_ID)

module.exports=route