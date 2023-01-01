#!/bin/sh

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto-ts/ proto/*.proto;

cp -r proto-ts mastercard-service/proto-types;
rm -rf proto-ts
