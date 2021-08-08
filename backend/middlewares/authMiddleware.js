const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-Handler')

const protect = asyncHandler (async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    try{
        token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.user = await User.findById(decode.id).select('-password')
        next()
    }catch(error){
        console.log(error);
        res.status(401);
        throw new Error('Not Authorised, Token failed');
    }
    if(!token){
        res.status(401)
        throw new Error('Not Authorised, No token')
    }
})

module.exports = {protect};