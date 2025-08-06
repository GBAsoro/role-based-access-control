const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
dbConnect();
const app = express();
app.use(cors());

// Middlewears

app.use(express.json());

app.get("/", (req, res) => {
        res.send("App Working")
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// Start the Server

const PORT = process.env.PORT || 7002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
