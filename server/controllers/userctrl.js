import userModel from "../models/userModel.js"

const loginUserController=(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
           if(user.password === password)   res.status(200).json("success");
           else res.status(201).json("Incorrect Password");
        }
        else res.json("No User found")       
    })
    .catch(error=>res.json(error))
}

const registerUserController=async(req,res)=>{
    const existingUser=await userModel.findOne({email:req.body.email})
    if(existingUser){
        return res.status(203).send({message:'user already exist', success:false})
    }
    const data=req.body;
    
    
    userModel.create({
        fullName:data.fullName,
        email:data.email,
        password:data.password

    })
    .then(user=> {
        if(user)    res.status(200).send({message:'data stored',success:true})
    })
    .catch(error=>res.status(400).json(error))
}

const fetchData=(req,res)=>{
    
}

const getuserByIdController=async(req,res)=>{
    try{
        const user = await userModel.findOne({_id:req.body.userId})
        res.status(200).send({
            success:true,
            message:' Single user info fetch',
            data:user            
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,error,
            message: 'Error in Sigle info'
        })
    }
}



export{
    loginUserController,
    registerUserController,
    getuserByIdController
}