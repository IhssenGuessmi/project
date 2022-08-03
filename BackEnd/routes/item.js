const express=require('express')

const Item = require('../models/Item')
const router=express.Router()

//add new item
//method post
//req.body
router.post('/addItem',async(req,res)=>{
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
})



module.exports=router