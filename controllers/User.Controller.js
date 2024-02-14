const User_Model=require('../models/User.Model')
const bcrypt=require('bcrypt')

const Get_User_Details=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await User_Model.findOne(id);

        //Checking if it exists in the database
        if(!user)
        return res.send('User does not exist in the database')

        return res.json({success: true,user})
    }catch(error){
        res.send(error)
    }
}

const Update_User_Details=async(req,res)=>{
    try{
        const id=req.params.id;
        const updated_data=req.body
        const user=await User_Model.findOne(id);

        //Check if the user exists in the database
        if(!user)
        return res.send('User does not exist in the database')

        const new_user=await User_Model.findByIdAndUpdate(id,updated_data,{new:true})

        if(!new_user)
        return res.send('User Could not be updated Successfully!!!')

        return res.send('User Updated Successfully!!!')

    }catch(error){

    }
}

const Update_Password=async(req,res)=>{
    try{
        const id=req.params.id;
        const {password,updated_password}=req.body;
        const user=await User_Model.findOne(id);

        //Check if the user exists in the database
        if(!user)
        return res.send('User does not exist in the database')

        const compare_password=await bcrypt.compare(user.password,password);
        
        //If password is correct then update the new password otherwise send an error message

        if(!compare_password)
        return res.send('Password is incorrect')

        const encrypted_password=await bcrypt.hash(updated_password,10)

        user.password = encrypted_password
        await user.save()

        return res.send("Password has been changed successfully")

    }catch(error){
        res.send(error.message)
    }
}

module.exports={Get_User_Details,Update_User_Details,Update_Password}
