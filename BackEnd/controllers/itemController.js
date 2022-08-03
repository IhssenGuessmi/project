const Item = require('../models/Item')

exports.addItem=async(req,res)=>{
    const {itemName,price}=req.body
    try {
        const found=await Item.findOne({itemName})
        if(found){
            return res.status(400).send('Item already exist or Name already used')
        }
        const item=new Item({
            itemName,price
        })
        await item.save()
        res.status(201).send({msg:'item created',user})
    } catch (error) {
        res.status(500).send('server error (post item)')
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