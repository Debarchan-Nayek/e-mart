const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async(req,res) => {
   const {name, email, password} = req.body;
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already Exists!')
    }else{
        const user = await User.create({name, email, password})
        if(user){
            res.status(201).json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
            });
        }else{
            res.status(404)
            throw new Error('User Registration Error')
        }
    }
})

const authController = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error("Invalid Email or Password");
    } 
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
    }else{
        res.status(404);
        throw new Error('User not found');
    }
});


const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updateUser = await user.save()
        res.json({
          _id: updateUser._id,
          name: updateUser.name,
          email: updateUser.email,
          isAdmin: updateUser.isAdmin,
          token: generateToken(updateUser._id),
        });
    }else{
        res.status(404)
        throw new Error('User not Found!')
    }
})

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users)
});

const deleteUser = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id)

    if(user){
        await user.remove()
        res.json({message:'User removed'})
    }else{
        throw new Error('User Not Found!!')
    }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if(user){
    res.json(user);
  }else{
    res.status(404)
    throw new Error('User not found');
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || req.body.isAdmin; 
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not Found!");
  }
});
 

module.exports = {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};