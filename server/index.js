const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

// Load API key from environment variable
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY || "free-mode"
});

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("NYAYA Backend Running Successfully with FREE AI");
});

// Chatbot API
app.post("/ask", async (req, res) => {
  const question = req.body.question;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a legal assistant who explains Indian laws in simple words." },
        { role: "user", content: question }
      ]
    });

    res.json({ answer: response.choices[0].message.content });

  } catch (error) {
    console.error("Groq AI Error:", error);
    res.status(500).json({ error: "AI failed to respond" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000 (FREE AI MODE)");
});
