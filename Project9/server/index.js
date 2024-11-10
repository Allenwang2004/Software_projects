const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const orderRoute = require("./routes").order;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

// 連結MongoDB
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then(() => {
    console.log("連結到mongodb...");
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", authRoute);
app.use("/api/orders");

app.listen(8080, () => {
  console.log("後端伺服器聆聽在port 8080...");
});
