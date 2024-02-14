const User_Model=require('../models/User.Model')
const bcrypt=require('bcrypt')

const Register=async(req,res)=>{
    try{
        const {name,email,password,role,rating}=req.body;
        //Check if necessary fields are entered
        if(!name||!email||!password)
        return res.json({msg:"Please enter all the required fields"})
        //check if user already exists in the database
        const new_user=await User_Model.findById(email)
        if(new_user)
        return res.send('User already exists in the database')

        const create_user=new User_Model({
            name,
            email,
            password: await bcrypt.hash(password,10),
            role,
            rating
        })

        create_user.save()
        
    }catch(error){
        return res.send(error)
    }
}

const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password ) 
        return res.send('Send complete details')
        const user=await User_Model.findOne({email});
        if (!user)  
          return res.send({ auth: false, message: 'Email not found.' }); 
      
        var passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid)  
          return res.send('Invalid Password.');

        return res.send('User Logged In Successfully')        
    }
    catch(error) {
        return res.send(error)
    }
}


module.exports={Register,Login}