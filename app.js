const express=require('express')
require('dotenv').config()
const connect=require('./db/connect')

const app=express()

//Importing of ROutes
connect()
const Auth_Route=require('./routes/Auth.Route')
const User_Route = require('./routes/User.Route')
const Product_Route=require('./routes/Product.Route')
const Admin_Route=require('./routes/Admin.Route');
const Admin_Management_Route=require('./routes/Admin_Manage.Route')
const Trainer_Route=require('./routes/Trainer.Route')
const Customer_Route=require('./routes/Customer.Route')
const WorkoutPlan_Route=require('./routes/WorkoutPlan.Route')
const DietChart_Route=require('./routes/DietChart.Route')

//Creating middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Establishing Different Endpoints
app.use('/api/v1/auth',Auth_Route)
app.use('/api/v1/users',User_Route)
app.use('/api/v1/products',Product_Route)
app.use('/api/v1/admin',Admin_Route)
app.use('/api/v1/admin-management',Admin_Management_Route)
app.use('/api/v1/trainers',Trainer_Route)
app.use('/api/v1/customers',Customer_Route)
app.use('/api/v1/workout-plans',WorkoutPlan_Route)
app.use('/api/v1/diet-charts',DietChart_Route)


app.listen(8080,()=>{
    console.log('Connected');
})