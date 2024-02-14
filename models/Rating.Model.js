const mongoose=require('mongoose')

const Rating_Model=new mongoose.Schema({
    trainer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Rating',Rating_Model)