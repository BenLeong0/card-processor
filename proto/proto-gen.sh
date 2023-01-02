#!/bin/sh

# NODE SERVICES
mkdir proto-types
cp proto/*.proto proto-types
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto-types/ proto-types/*.proto;
cp -rT proto-types mastercard-service/proto-types;
rm -rf proto-types;

# PYTHON SERVICES
mkdir proto_types;
python -m grpc_tools.protoc -I . --python_out=proto_types --pyi_out=proto_types --grpc_python_out=proto_types proto/*.proto;
cp -rT proto_types/proto/ tokenisation-service/proto;
cp -rT proto_types/proto/ hsm-service/proto;
rm -rf proto_types;
