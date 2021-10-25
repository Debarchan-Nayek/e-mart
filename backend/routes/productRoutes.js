const express = require('express');
const {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/productsController");
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

//GET ALL PRODUCTS
router.route("/products").get(getProducts);

//CREATE PRODUCT
router.route("/products").post(protect, admin, createProduct);

//SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

//DELETE PRODUCT
router.route("/products/:id").delete(protect, admin, deleteProduct);

//UPDATE PRODUCT
router.route("/products/:id").put(protect, admin, updateProduct);


module.exports = router;
