const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
          `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONOGO_DB_PASSWORD}@cluster0.dqyl6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          console.log("Database connected");
    }catch (error) {
        console.log(`Error connecting DB: ${error.message}`);
    }
}

module.exports = connectDB
