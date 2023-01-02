import dotenv from "dotenv";
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoloader from '@grpc/proto-loader';

import { ProtoGrpcType } from './proto/cardProcessor';

dotenv.config();

const PORT = process.env.PORT;
const PROTO_FILE = './proto/cardProcessor.proto';

const packageDef = protoloader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;


const pinBlock = "2938569235"
const client = new grpcObj.cardProcessor.TokenisationService(
  `localhost:50051`,
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(
  deadline,
  (err) => {
    console.log("CONNECTED")
    if (err) return console.error(err);
    client.TokenisePinBlock(
      { pinBlock },
      (err, result) => {
        if (err || result?.tokenisedPinBlock == null) return console.error(err);
        console.log("Received result:", result);
      }
    )
  }
)
