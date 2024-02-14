const mongoose=require('mongoosse')

const Service_Model=new mongoose.Schema({
    Service_Name:{
        type:String,
        required:true
    },
    Service_Description:{
        type:String
    },
    Service_Price:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Service',Service_Model)