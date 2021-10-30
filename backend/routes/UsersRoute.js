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

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


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

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
module.exports = router;
