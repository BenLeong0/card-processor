import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.listen(port, () => {
  console.log(`💥 Server running on port ${port} 💥`);
});
