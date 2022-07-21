const mongoose=require('mongoose')
const Schema=mongoose.Schema

const usersSchema=new Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    adress:{
        type:String,required:true
    },
    age:Number,
    phoneNumber:Number

})
module.exports=mongoose.model('User',usersSchema)