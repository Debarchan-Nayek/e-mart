const express = require('express');
const Products = require("../models/productModel");
const asyncHandler = require('express-async-handler');
const router = express.Router();

//GET ALL PRODUCTS
router.get("/products",asyncHandler(async (req, res) => {
    const products = await Products.find({})
  res.json(products);
})
);

//SINGLE PRODUCT
router.get("/products/:id",asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if(product){
      res.json(product);
  }else{
      res.status(404).json({ message: "Product not Found!"});
  }
})
);

module.exports = router;
