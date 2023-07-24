require("dotenv").config();
const express = require("express");
const connectTodb = require("./config/db.js");
const { home } = require("./controllers/userController.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

connectTodb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

module.exports = app;
