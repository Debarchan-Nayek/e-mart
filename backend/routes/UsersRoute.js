const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} = require("../controllers/usersController");

const {protect, admin} = require('../middlewares/authMiddleware')
const router = express.Router();

//user registration
router.route("/").post(registerUser)
router.route("/").get(protect, admin, getUsers);

//post email and password auth
router.route("/login").post(authController);

//Get user Profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);  

router.route("/:id").delete(protect, admin, deleteUser);
module.exports = router;
