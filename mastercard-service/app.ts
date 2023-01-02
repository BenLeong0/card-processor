import dotenv from "dotenv";
import express from "express";
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoloader from '@grpc/proto-loader';

import { ProtoGrpcType } from './proto/cardProcessor';
import { TransactionRequest } from "./proto/cardProcessor/TransactionRequest";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const PROTO_FILE = './proto/cardProcessor.proto';

const packageDef = protoloader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.post("/process_transaction", (req, res) => {
  const transactionRequest = req.body as TransactionRequest;
  console.log(transactionRequest);

  const pinBlock = transactionRequest.pinBlock;

  if (pinBlock == null) return res.send({ success: false, error_msg: "invalid" });

  const client = new grpcObj.cardProcessor.TokenisationService(
    `0.0.0.0:50051`,
    grpc.credentials.createInsecure()
  );
  const deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + 5);
  client.waitForReady(
    deadline,
    (err) => {
      if (err) return console.error(err);
      client.TokenisePinBlock(
        { pinBlock },
        (err, result) => {
          if (err || result?.tokenisedPinBlock == null) return console.error(err);
          console.log("Received result:", result);
          res.send({ ...result, success: true });
        }
      )
    }
  )

});

app.listen(PORT, () => {
  console.log(`💥 Server running on port ${PORT} 💥`);
});
