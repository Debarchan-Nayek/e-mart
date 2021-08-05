const express = require('express');
const products = require('./data/products');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const {errorHandler} = require("./middlewares/errorMiddleware");

const productRoutes = require('./routes/productRoutes')

const app = express();

//dotenv configuration
dotenv.config();

//mongoDB connection
connectDB()

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the server</h1>')
});

app.use("/api", productRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
})