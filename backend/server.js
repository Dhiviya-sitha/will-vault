const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const willRoutes = require("./routes/willroutes");
const securityRoutes = require("./routes/securityRoutes");
const auditRoutes = require("./routes/auditRoutes");
const versionRoutes = require("./routes/versionRoutes");
const deathRoutes = require("./routes/deathRoutes");
const discoveryRoutes = require("./routes/discoveryRoutes");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

// API routes
app.use("/api/wills", willRoutes);
app.use("/api/security", securityRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/versions", versionRoutes);
app.use("/api/death", deathRoutes);
app.use("/api/discovery", discoveryRoutes);

app.get("/", (req, res) => {
  res.send("WILLVAULT Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});