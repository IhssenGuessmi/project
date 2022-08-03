const mongoose=require('mongoose')
const Schema=mongoose.Schema

const usersSchema=new Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,require:true
    },
    adress:{
        type:String,required:true
    },
    age:Number,
    phoneNumber:Number

})
module.exports=mongoose.model('User',usersSchema)