const mongoose=require('mongoose')

const Product_Model=new mongoose.Schema({
    Product_Name:{
        type:String,
        required:true
    },
    Product_Description:{
        type:String,
        default:""
    },
    Product_Price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Product",Product_Model)