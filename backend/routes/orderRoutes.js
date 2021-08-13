const express = require("express");
const router = express.Router();
const { addOrderItems, getOrderById } = require("../controllers/orderController.js");
const { protect } = require("../middlewares/authMiddleware");

//create new order
router.route("/").post(protect, addOrderItems);

//get order by id
router.route('/:id').get(protect, getOrderById);

module.exports = router;