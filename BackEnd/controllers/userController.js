const User=require('../models/User')

exports.addUser=async(req,res)=>{
    const {name,email,adress,age,phoneNumber}=req.body
    try {
        const found=await User.findOne({email})
        if(found){
            return res.status(400).send('User already exist or email already used')
        }
        const user=new User({
            name,email,adress,age,phoneNumber
        })
        await user.save()
        res.status(201).send({msg:'user created',user})
    } catch (error) {
        res.status(500).send('server error (post user)')
    }
}


exports.getAllUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({msg:'all users',users})
    } catch (error) {
        res.status(500).send('server error (get all users)')
    }
}

exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send('User deleted successfully.')
    } catch (error) {
        res.status(500).send('server error (remove user)')
    }
}


exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send({msg:'User updated successfully.'})
    } catch (error) {
        res.status(500).send('server error (update user)')
    }
}


exports.getOneUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await User.findById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send('server error (get one user)')
    }
}