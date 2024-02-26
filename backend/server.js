const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Environment variables
const DB_URI = process.env.DB_URI;
const PORT = 5000;

// Initialize express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
const createRoute = require("./routes/create");
const quizRoute = require("./routes/quiz");
const authRoutes = require("./routes/auth");
const csvRoutes = require("./routes/csv");
const adminRoutes = require("./routes/adminRoutes");
const allquiz = require("./routes/allquiz");
app.use("/create", createRoute);
app.use("/allquiz", allquiz);
app.use("/quiz", quizRoute);
app.use("/auth", authRoutes);
app.use("/csv", csvRoutes);
app.use("/api", adminRoutes);

// Start the server
mongoose.connect(DB_URI).then(() => {
  app.listen(PORT, () => {
    console.log("Server running on PORT " + PORT);
  });
});
