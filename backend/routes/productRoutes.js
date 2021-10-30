const express = require('express');
const {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
} = require("../controllers/productsController");
const router = express.Router();

const { protect, admin } = require('../middlewares/authMiddleware');

// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

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

router.route("/products/:id/reviews").post(protect, createProductReview)
module.exports = router;
