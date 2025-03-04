const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { type } = require("@testing-library/user-event/dist/type");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/askme", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected");
  })
  .catch((err) => {
    console.log("❌ Database connection error:", err);
  });

// Define Schema
const questionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define Model
const Question = mongoose.model("Question", questionSchema);

app.post("/ask", async (req, res) => {
    try {
      const { email, question } = req.body;
      if (!email && !question) {
        return res.status(400).send({ message: "❌ Email and Question are required" });
      }
      const newQuestion = new Question({ email, question });
      await newQuestion.save();
      res.status(201).send({ message: "✅ Question added successfully" });
    } catch (err) {
      console.error("❌ Error adding question:", err);
      res.status(500).send({ message: "❌ Question not added" });
    }
  });

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
