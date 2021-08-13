const express = require('express');
const products = require('./data/products');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const {errorHandler} = require("./middlewares/errorMiddleware");

const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/UsersRoute');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

//dotenv configuration
dotenv.config();

//mongoDB connection
connectDB()

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the server</h1>')
});

app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.get('/api/config/paypal',(req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
})

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
})