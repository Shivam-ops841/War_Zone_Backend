const User_Model=require('../models/User.Model');

const GET_CUSTOMER_BY_ID=async(req,res)=>{
    try{
        let user = await User_Model.findById(req.params.id);
        if(!user) return res.status(404).send("The user with the given ID was not found.");

        if(user.Role!='Customer') return res.status(404).send("This is not a customer account.")

        res.json({success:true,user})
    }catch(err){
        return res.send(err.message)
    }
}

const UPDATE_CUSTOMER_DETAILS=async(req,res)=>{
    try{
        const id=req.params.id
        const updated_data=req.body

        const updated_user=await User_Model.findByIdAndUpdate(id,updated_data)

        if(!updated_user)
        res.send('Could not Update Customer Details')
    }catch(err){
        res.send(err.message)
    }
}

module.exports = {GET_CUSTOMER_BY_ID,UPDATE_CUSTOMER_DETAILS}