#!/bin/sh

# NODE SERVICES
mkdir proto-ts
cp proto/*.proto proto-ts
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto-ts/ proto-ts/*.proto;
cp -rT proto-ts mastercard-service/proto;
rm -rf proto-ts;

# PYTHON SERVICES
mkdir proto_py;
python -m grpc_tools.protoc -I . --python_out=proto_py --pyi_out=proto_py --grpc_python_out=proto_py proto/*.proto;
cp -rT proto_py/proto/ tokenisation-service/proto;
cp -rT proto_py/proto/ hsm-service/proto;
rm -rf proto_py;
