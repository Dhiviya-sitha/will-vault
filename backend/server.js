const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const willRoutes = require("./routes/willroutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api/wills", willRoutes);

app.get("/", (req, res) => {
  res.send("WILLVAULT Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});