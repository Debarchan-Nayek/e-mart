const Products = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({});
  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not Found!" });
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    await product.remove()
    res.json({message: 'Product Removed'})
  } else {
    res.status(404).json({ message: "Product not Found!" });
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/image/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description'
  })
  const createdProduct = await product.save()
    res.status(201).json(createdProduct);
});


const updateProduct = asyncHandler(async (req, res) => {
  const {name, price, description, image, brand, category,countInStock} = req.body

  const product = await Product.findById(req.params.id)

  if(product){
    product.name=name
    product.price = price;
    product.description = description;
    product.brand = brand;
    product.image = image;
    product.countInStock = countInStock;
    product.category = category;


    const updatedProduct = await product.save();
    res.json(updatedProduct);
  }else{
    res.status(404)
    throw new Error('Product not found')
  }
  
});

module.exports = {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,
  createProduct,
  updateProduct,
};