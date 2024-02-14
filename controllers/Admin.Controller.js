const Product_Model=require('../models/Product.Model')
const User_Model=require('../models/User.Model')
const Service_Model=require('../models/Service.Model')
const Rating_Model=require('../models/Rating.Model')

const ADD_PRODUCT=async(req,res)=>{
    try{
        const product_data=req.body

        const new_product=new Product_Model(product_data)
        
        if(!new_product)
        return res.send('Product Not Created Successfuly')

        await new_product.save()

        return res.send('Product Created Succesfully!!!')
    }catch(err)
    {
        return res.send(err.message)
    }
}

const ADD_SERVICE=async(req,res)=>{
    try{
        const new_service=req.body

        const added_service=new Service_Model(new_service)
        await added_service.save()

        return res.send('Service Added Succesfully')
    }catch(err){
        return res.send(err.message)
    }
}

const GET_USERS=async(req,res)=>{
    try{
        let userData =await User_Model.find({})

        if(userData)
        return res.send(userData);
        res.send(userData)
    }catch(err){
        return res.send(err.message)
    }
}

const GET_RATINGS=async(req,res)=>{
    try{
        let ratings=await Rating_Model.find()

        return res.json({
            success:true,
            ratings
        })
    }
    catch(err){
        return res.send(err.message)
    }    
}


module.exports={ADD_PRODUCT,ADD_SERVICE,GET_USERS,GET_RATINGS}