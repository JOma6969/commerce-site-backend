import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config(); // Load environment variables from .env file

app.get("/", (req, res) => {
  res.send("Hello, World!"); // Basic route to test the server
});

app.listen(5000, () => {
  connectDB(); // Connect to the database
  console.log("Server is running on port 5000");
});