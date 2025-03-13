// Import required libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an Express app
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Middleware to allow frontend to talk to backend
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/applicantDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for the data
const applicantSchema = new mongoose.Schema({
  fullName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  nationality: String,
  nationalId: String,
  phoneNumber: String,
  email: String,
  homeAddress: String,
});

// Create a model
const Applicant = mongoose.model("Applicant", applicantSchema);

// Route to save data
app.post("/save", async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body); // Create a new applicant
    await newApplicant.save(); // Save the applicant to the database
    res.send("Data saved!"); // Send a response to the frontend
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
