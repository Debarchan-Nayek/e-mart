const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/usersController");


const {protect, admin} = require('../middlewares/authMiddleware')
const router = express.Router();


//user registration
router.route("/").post(registerUser)
//Get a list of all users by admin
router.route("/").get(protect, admin, getUsers);

//post email and password auth
router.route("/login").post(authController);

//Get user Profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);  

  //Perform different User Profile updates by admin
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
module.exports = router;
