const express = require("express");
const router = express.Router();
const { addOrderItems, getOrderById, updateOrderToPaid } = require("../controllers/orderController.js");
const { protect } = require("../middlewares/authMiddleware");

//create new order
router.route("/").post(protect, addOrderItems);

//get order by id
router.route('/:id').get(protect, getOrderById);

//update order
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router;