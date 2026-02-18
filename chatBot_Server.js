import express from "express";
import dotenv from "dotenv";
import { askReyPort } from "./chatBot.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    const answer = await askReyPort(question);
    console.log("HEY IM WORKING!!")
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "Responses Went Wrong" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));