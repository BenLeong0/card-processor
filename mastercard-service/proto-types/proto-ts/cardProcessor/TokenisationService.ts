// Original file: proto/cardProcessor.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { TransactionRequest as _cardProcessor_TransactionRequest, TransactionRequest__Output as _cardProcessor_TransactionRequest__Output } from '../cardProcessor/TransactionRequest';
import type { TransactionResponse as _cardProcessor_TransactionResponse, TransactionResponse__Output as _cardProcessor_TransactionResponse__Output } from '../cardProcessor/TransactionResponse';

export interface TokenisationServiceClient extends grpc.Client {
  ProcessTransaction(argument: _cardProcessor_TransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  ProcessTransaction(argument: _cardProcessor_TransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  ProcessTransaction(argument: _cardProcessor_TransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  ProcessTransaction(argument: _cardProcessor_TransactionRequest, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  processTransaction(argument: _cardProcessor_TransactionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  processTransaction(argument: _cardProcessor_TransactionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  processTransaction(argument: _cardProcessor_TransactionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  processTransaction(argument: _cardProcessor_TransactionRequest, callback: grpc.requestCallback<_cardProcessor_TransactionResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TokenisationServiceHandlers extends grpc.UntypedServiceImplementation {
  ProcessTransaction: grpc.handleUnaryCall<_cardProcessor_TransactionRequest__Output, _cardProcessor_TransactionResponse>;
  
}

export interface TokenisationServiceDefinition extends grpc.ServiceDefinition {
  ProcessTransaction: MethodDefinition<_cardProcessor_TransactionRequest, _cardProcessor_TransactionResponse, _cardProcessor_TransactionRequest__Output, _cardProcessor_TransactionResponse__Output>
}
