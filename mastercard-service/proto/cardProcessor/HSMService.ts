// Original file: proto-ts/cardProcessor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'

export interface HSMServiceClient extends grpc.Client {
}

export interface HSMServiceHandlers extends grpc.UntypedServiceImplementation {
}

export interface HSMServiceDefinition extends grpc.ServiceDefinition {
}
