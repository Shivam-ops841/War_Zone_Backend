const express=require('express')
const {GET_WORKOUT_PLANS,GET_WORKOUT_PLAN_BY_ID}=require('../controllers/WorkoutPlan.Controller')

const route=express.Router()

//Defining Workout-plan endpoints
route.get('/',GET_WORKOUT_PLANS)
route.get('/:planId',GET_WORKOUT_PLAN_BY_ID)

module.exports=route