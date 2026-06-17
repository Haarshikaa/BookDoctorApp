const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Book Doctor Backend Running");
});

app.get("/doctors", (req, res) => {
  res.json([
    {
      name: "Dr. Ravi",
      specialization: "Cardiologist"
    },
    {
      name: "Dr. Priya",
      specialization: "Dermatologist"
    }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});