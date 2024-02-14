const Product_Model=require('../models/Product.Model')

const Get_Products=async(req,res)=>{
    try{
        const products =await Product_Model.find()

        if(!products)
        return res.send('Could not find Products')

        res.json({products: products})

    }catch(err){
        return res.send(err.message)
    }
}

const Get_Product_By_Id=async(req,res)=>{
    try{
        const id=req.params.id
        const product=await Product_Model.findOne(id)
        
        if(!product)
        return res.send('This Product does not exist')

        return res.json({success:true,product})
    }catch(err){
        return res.send(err.message)
    }
}

module.exports={Get_Products,Get_Product_By_Id}