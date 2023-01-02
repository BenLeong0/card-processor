import express from "express";
import dotenv from "dotenv";

import { TransactionRequest } from "./proto-types/cardProcessor/TransactionRequest";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.post("/process_transaction", (req, res) => {
  const transactionRequest = req.body as TransactionRequest;
  console.log(transactionRequest);

  let amount = transactionRequest.transactionDetails?.amount;
  if (typeof amount !== "number") {
    res.send({ error: true, msg: "incorrect format" });
    return;
  }
  res.send({ error: false, amountWithTax: amount * 1.2 });
});

app.listen(port, () => {
  console.log(`💥 Server running on port ${port} 💥`);
});
