const express = require('express');
const {
  getProducts,
  getProduct,
  deleteProduct,
} = require("../controllers/productsController");
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

//GET ALL PRODUCTS
router.route("/products").get(getProducts);

//SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

//DELETE PRODUCT
router.route("/products/:id").delete(protect, admin, deleteProduct);


module.exports = router;
