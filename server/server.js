require("dotenv").config();

const express = require("express");
const cors = require("cors");

// ✅ load DB on startup
require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend running ✅"));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));