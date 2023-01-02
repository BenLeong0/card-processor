// Original file: proto-ts/cardProcessor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'

export interface CryptoValidatorServiceClient extends grpc.Client {
}

export interface CryptoValidatorServiceHandlers extends grpc.UntypedServiceImplementation {
}

export interface CryptoValidatorServiceDefinition extends grpc.ServiceDefinition {
}
