// Original file: proto-ts/cardProcessor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TokenisationRequest as _cardProcessor_TokenisationRequest, TokenisationRequest__Output as _cardProcessor_TokenisationRequest__Output } from '../cardProcessor/TokenisationRequest';
import type { TokenisationResponse as _cardProcessor_TokenisationResponse, TokenisationResponse__Output as _cardProcessor_TokenisationResponse__Output } from '../cardProcessor/TokenisationResponse';

export interface TokenisationServiceClient extends grpc.Client {
  TokenisePinBlock(argument: _cardProcessor_TokenisationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  TokenisePinBlock(argument: _cardProcessor_TokenisationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  TokenisePinBlock(argument: _cardProcessor_TokenisationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  TokenisePinBlock(argument: _cardProcessor_TokenisationRequest, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  tokenisePinBlock(argument: _cardProcessor_TokenisationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  tokenisePinBlock(argument: _cardProcessor_TokenisationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  tokenisePinBlock(argument: _cardProcessor_TokenisationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  tokenisePinBlock(argument: _cardProcessor_TokenisationRequest, callback: grpc.requestCallback<_cardProcessor_TokenisationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TokenisationServiceHandlers extends grpc.UntypedServiceImplementation {
  TokenisePinBlock: grpc.handleUnaryCall<_cardProcessor_TokenisationRequest__Output, _cardProcessor_TokenisationResponse>;
  
}

export interface TokenisationServiceDefinition extends grpc.ServiceDefinition {
  TokenisePinBlock: MethodDefinition<_cardProcessor_TokenisationRequest, _cardProcessor_TokenisationResponse, _cardProcessor_TokenisationRequest__Output, _cardProcessor_TokenisationResponse__Output>
}
