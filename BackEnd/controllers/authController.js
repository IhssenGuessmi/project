const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv')

exports.register=async(req,res)=>{
    let {name,email,password,adress,age,phoneNumber}=req.body
    try {
        // check user existe
        const foundUser= await User.findOne({email})
        if (foundUser){
            return res.status(400).send({errors:[{msg:'user already exists'}]})
        }
        const user=new User({
            name,email,password,adress,age,phoneNumber
        })
        const salt=10
        user.password=await bcrypt.hash(password,salt)
        await user.save()

    //token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secretkey,{expiresIn:'3d'})
        res.status(201).send({msg:"register with success",user,token})
    } catch (error) {
        res.status(500).send("server error register")
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body
    try {
        //check user exists
        const user=await User.findOne({email})
        if (!user){
            return res.status(400).send({errors:[{msg:'Bad credentials'}]})
        }
        // compare password
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:'Bad credentials'}]})
        }
         //token
         const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secretkey,{expiresIn:'3d'})
        res.status(200).send({msg:'login with success',user,token})
    } catch (error) {
        res.status(500).send("server error login")
    }
}


exports.current=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id)
        res.send(user)
    } catch (error) {
        res.status(500).send("server error current")
    }
}