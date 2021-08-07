const express = require('express');
const { getProducts, getProduct } = require('../controllers/productsController')
const router = express.Router();

//GET ALL PRODUCTS
router.route("/products").get(getProducts);

//SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

module.exports = router;
