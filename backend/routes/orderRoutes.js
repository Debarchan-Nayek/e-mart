const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require("../controllers/orderController.js");
const { protect, admin } = require("../middlewares/authMiddleware");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//create new order
router.route("/").post(protect, addOrderItems);

//Get all orders by admin
router.route("/").get(protect, admin, getOrders);

//update order
router.route('/:id/pay').put(protect, updateOrderToPaid)

router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

//getUserOrder
router.route("/myorders").get(protect, getMyOrders);

//get order by id
router.route('/:id').get(protect, getOrderById);


module.exports = router;