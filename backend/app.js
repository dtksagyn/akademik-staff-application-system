const express = require("express");
const routes = require("./routes");

const { connectDB, mongoose } = require("./shared/db");

const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//console.log('Ok')

app.use("/api", routes);

module.exports = app;
