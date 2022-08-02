const express=require('express')
const { addUser,getAllUsers,deleteUser,updateUser,getOneUser}=require('../controllers/userController')
const router=express.Router()

//add new user
//method post
//req.body
router.post('/addUser',addUser)


//get all users
// methode get
router.get('/allUsers',getAllUsers)


//remove user
//methode delete
//req.params
router.delete('/deleteUser/:id',deleteUser)



//update User
//methode put
//req.body
//req.params
router.put('/updateUser/:id',updateUser)

// get one User
//methode get
//req.params
router.get('/getOneUser/:id',getOneUser)

module.exports=router