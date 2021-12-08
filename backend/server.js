const path  = require('path');
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const {errorHandler} = require("./middlewares/errorMiddleware");

const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/UsersRoute');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');



const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to the server</h1>");
// });

app.use(cors());

//dotenv configuration
dotenv.config();

//mongoDB connection
connectDB()

app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal',(req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
})

 __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
// }); 

app.use(errorHandler);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}else{
    app.get("/", (req, res) => {
      res.send("<h1>Welcome to the server</h1>");
    });
}

app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
})