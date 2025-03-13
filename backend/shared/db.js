const mongoose = require("mongoose");
//require("dotenv").config({ path: "./.env" });
require("dotenv").config();

const MONGODB_URI =
  "mongodb+srv://julianaromialison3:cocopizza@cluster0.3no3f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  //console.log(process.env.MONGODB_URI);
  //console.log(mongoose);
  try {
    const test = await mongoose.connect(MONGODB_URI, {
      dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //console.log(test)
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
};

module.exports = { connectDB, mongoose };
