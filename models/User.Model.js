const mongoose=require('mongoose')

const User_Model=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    PassWord:{
        type:String,
        minlength:8,
        required:true,
        trim:true,
    },
    Role:{
        type:String,
        enum:['Trainer','Admin','Customer'],
        default:'Customer',
        trim:true,
    },
    Rating:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('User',User_Model)