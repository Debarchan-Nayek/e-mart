const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controllers/orderController.js");
const { protect } = require("../middlewares/authMiddleware");

//create new order
router.route("/").post(protect, addOrderItems);

//update order
router.route('/:id/pay').put(protect, updateOrderToPaid)

//getUserOrder
router.route("/myorders").get(protect, getMyOrders);

//get order by id
router.route('/:id').get(protect, getOrderById);


module.exports = router;