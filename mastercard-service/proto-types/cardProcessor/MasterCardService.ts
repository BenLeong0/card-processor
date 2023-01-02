// Original file: proto-types/cardProcessor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'

export interface MasterCardServiceClient extends grpc.Client {
}

export interface MasterCardServiceHandlers extends grpc.UntypedServiceImplementation {
}

export interface MasterCardServiceDefinition extends grpc.ServiceDefinition {
}
