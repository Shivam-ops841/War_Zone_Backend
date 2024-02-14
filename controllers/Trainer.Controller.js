const Trainer_Model=require('../models/User.Model')

const GET_TRAINER_BY_ID=async(req,res)=>{
    try{
        let userId = req.params.id;

        const trainer=await Trainer_Model.findById(userId);

        if(trainer.Role!='Trainer')
        return res.status('This is not a trainer account')

        return res.json({
            success:true,
            trainer
        })
    }catch(err)
    {
        return res.send(err.message)
    }
}

const UPDATE_TRAINER_BY_ID=async(req,res)=>{
    try{
        const id=req.params.id
        const data=req.body

        const updated_data=await Trainer_Model.findByIdAndUpdate(id,data)

        if(!updated_data)
        return res.json({message:"Data not updated successfully "})

        res.json(updated_data)

    }catch(err)
    {
        return res.send(err.message)
    }
}

module.exports={GET_TRAINER_BY_ID,UPDATE_TRAINER_BY_ID}