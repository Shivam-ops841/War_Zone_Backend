const Diet_Chart_Model=require('../models/Diet.Model')

const GET_DIET_CHARTS=async(req,res)=>{
    try{
        const diet_charts=await Diet_Chart_Model.find()

        res.json({
            success:true,
            diet_charts
        })
    }catch(err){
        res.send(err.message)
    }
}

const GET_DIET_CHART_BY_ID=async(req,res)=>{
    try{
        let dietId = req.params.id;

        const diet_chart=await Diet_Chart_Model.findById(dietId)

        return res.json({success:true,diet_chart})
    }catch(err){
        return res.send(err.message)
    }
}



module.exports = {GET_DIET_CHARTS,GET_DIET_CHART_BY_ID}