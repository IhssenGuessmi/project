const express=require('express')
const User = require('../models/User')
const router=express.Router()

//add new user
//method post
//req.body
router.post('/adduser',async(req,res)=>{
    const {name,email,adress,age,phoneNumber}=req.body
    try {
        const user=new User({
            name,email,adress,age,phoneNumber
        })
        await user.save()
        res.status(201).send({msg:'user created',user})
    } catch (error) {
        res.status(500).send('server error')
    }
})

module.exports=router