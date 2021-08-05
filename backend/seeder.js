const mongoose = require('mongoose');
const dotenv = require('dotenv');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./models/userModel');
const Order = require('./models/orderModel');
const Product = require('./models/productModel');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async() => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map((product) => {
            return{...product, user: adminUser}
        })
        await Product.insertMany(sampleData)
        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.log(`Error in data seeding ${error}`)
        process.exit(1)
    }
};

const dataDestroy = async() => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed!');
        process.exit()
    }catch(error){
        console.log(`${error}`);
        process.exit(1);
    }
}

if(process.argv[2] === "-d"){
    dataDestroy();
}else{
    importData();
}
