const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyTCKimlikNo = require("./verifyTCKimlikNo");

const signUp = async (req, res) => {
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

  try {
    // TC Kimlik Doğrulama
    const isTCValid = await verifyTCKimlikNo(
      TC,
      name,
      surname,
      new Date(dateOfBirth).getFullYear()
    );
    if (!isTCValid) {
      return res.status(400).json({ message: "TC Kimlik No doğrulanamadı." });
    }

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcıyı kaydet
    const newUser = new User({
      TC,
      name,
      surname,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      password, //: hashedPassword,
    });

    await newUser.save();
    console.log("Kullanıcı kaydedildi:", newUser._id);
    return res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
  } catch (err) {
    console.error("Kayıt hatası:", err);
    return res.status(500).json({ message: "Sunucu hatası." });
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, name: user.name },
      "SECRET_KEY",
      {
        expiresIn: "1h",
      }
    );

    // Return token, user name, and user email
    res.json({ token, user: { email: user.email, name: user.name } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signUp, login };
