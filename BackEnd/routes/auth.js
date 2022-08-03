const express=require('express')
const { register, login , current } = require('../controllers/authController')
const isAuth = require('../middlewares/isAuth')
const { registerRules , validator , loginRules } = require('../middlewares/validator')
const router= express.Router()


//register
//methode post
//req.body
router.post('/signup',registerRules,validator,register)

//register
//methode post
//req.body
router.post('/signin',loginRules ,validator ,login )

//get current user
//methode get
router.get('/current',isAuth,current)


module.exports= router