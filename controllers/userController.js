const User = require("../models/user");

const signUp = async (req, res) => {
  try {
    const {
      TC,
      name,
      surname,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      password,
    } = req.body;

    const newUser = new User({
      TC,
      name,
      surname,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      password,
    });

    await newUser.save();
    console.log("Record inserted successfully:", newUser._id);
    return res.redirect("/signup.html");
  } catch (err) {
    console.error("Error inserting record:", err.message);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { signUp };
