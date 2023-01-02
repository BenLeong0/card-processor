#!/bin/sh

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto-ts/ proto/*.proto;
cp -r proto-ts mastercard-service/proto-types;
rm -rf proto-ts;

mkdir proto-py;
python -m grpc_tools.protoc -I . --python_out=proto-py --pyi_out=proto-py --grpc_python_out=proto-py proto/*.proto;
cp -r proto-py/proto tokenisation-service/proto-types;
rm -rf proto-py;
