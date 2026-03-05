const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const resultRoutes = require("./routes/resultRoutes");

const app = express();
require("dotenv").config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/test",testRoutes);
app.use("/api/result",resultRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});