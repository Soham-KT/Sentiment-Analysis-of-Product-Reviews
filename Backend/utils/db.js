const mongoose = require("mongoose");

const URI = "mongodb+srv://akanksha1055:akay1883@cluster0.exoqa.mongodb.net/";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;