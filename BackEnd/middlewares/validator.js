const { body, validationResult } = require('express-validator');


const registerRules=[
    body('name','Name is required').not().isEmpty(),
    body('email','Email not valid').isEmail().normalizeEmail(),
    body('password','Password ùust have at least 6 characters').isLength({min:6})
]

const loginRules=[
    body('email','Email not valid').isEmail().normalizeEmail(),
    body('password','Password is empty').not().isEmpty()
]

const validator=(req,res,next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()  })
    }
    next()
}

module.exports={registerRules, validator , loginRules}