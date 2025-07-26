const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
dbConnect();
const app = express();

// Middlewears

app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// Start the Server

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
