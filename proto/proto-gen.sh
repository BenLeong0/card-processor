#!/bin/sh

yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto-ts/ proto/*.proto;

# Copy to all node services here
cp -rT proto-ts mastercard-service/proto-types;
rm -rf proto-ts;


mkdir proto-py;
python -m grpc_tools.protoc -I . --python_out=proto-py --pyi_out=proto-py --grpc_python_out=proto-py proto/*.proto;

# Copy to all python services here
cp -rT proto-py/proto/ tokenisation-service/proto;
cp -rT proto-py/proto/ hsm-service/proto;
rm -rf proto-py;
