const Workout_Model=require('../models/Workout.Model')

const GET_WORKOUT_PLANS=async(req,res)=>{
    try{
        const workouts=await Workout_Model.find()

        return res.json({
            success:true,
            workouts
        })
    }catch(err){
        return res.send(err.message)
    }
}

const GET_WORKOUT_PLAN_BY_ID=async(req,res)=>{
    try{
        const {id}=req.param;

        const workout_plan=await Workout_Model.findById(id);

        return res.json({
            success:true,
            workout_plan
        })
    }catch(err){
        return res.send(err.message)
    }
}

module.exports={GET_WORKOUT_PLANS,GET_WORKOUT_PLAN_BY_ID}