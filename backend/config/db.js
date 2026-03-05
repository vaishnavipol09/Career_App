const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://vaishnavi:vaish0009@cluster0.eqtzgyp.mongodb.net/careerApp?appName=Cluster0");

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;