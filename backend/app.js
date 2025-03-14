const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config(); //for loading envirement variables
const path = require("path");

const app = express(); //create a server

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(express.static(path.join(__dirname, "src")));

//DATABASE CONNECTION
connectDB();

//ROUTES
app.use("/", userRoutes);

//HOME ROUTE
app.get("/", (req, res) => {
  res.set({ "Allow-Access-Allow-Origin": "*" });
  return res.redirect("index.html");
});

//START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
