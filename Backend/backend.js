require('dotenv').config(); 
const express = require("express");
const app = express();
const connectDb = require("./utils/db");

app.get("/", (req, res) => {
  res.status(200).send("Welcome to ProductShala");
});

app.get("/register", (req, res) => {
  res.status(200).json({ msg: "registration successful" });
});
const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});