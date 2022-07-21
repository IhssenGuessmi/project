const mongoose=require('mongoose')
const Schema=mongoose.Schema

const itemsSchema= new Schema({
    itemName:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    description:String
})
module.exports=mongoose.model('item',itemsSchema)