const express = require('express');
const {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productsController");
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

//GET ALL PRODUCTS
router.route("/products").get(getProducts);

//GET TOP PRODUCTS
router.route("/products/top").get(getTopProducts);

//CREATE PRODUCT
router.route("/products").post(protect, admin, createProduct);

//CREATE PRODUCT REVIEWS
router.route("/products/:id/reviews").post(protect, createProductReview);

//SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

//DELETE PRODUCT
router.route("/products/:id").delete(protect, admin, deleteProduct);

//UPDATE PRODUCT
router.route("/products/:id").put(protect, admin, updateProduct);


module.exports = router;
