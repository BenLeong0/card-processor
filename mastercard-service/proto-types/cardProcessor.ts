import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CryptoValidatorServiceClient as _cardProcessor_CryptoValidatorServiceClient, CryptoValidatorServiceDefinition as _cardProcessor_CryptoValidatorServiceDefinition } from './cardProcessor/CryptoValidatorService';
import type { HSMServiceClient as _cardProcessor_HSMServiceClient, HSMServiceDefinition as _cardProcessor_HSMServiceDefinition } from './cardProcessor/HSMService';
import type { MasterCardServiceClient as _cardProcessor_MasterCardServiceClient, MasterCardServiceDefinition as _cardProcessor_MasterCardServiceDefinition } from './cardProcessor/MasterCardService';
import type { TokenisationServiceClient as _cardProcessor_TokenisationServiceClient, TokenisationServiceDefinition as _cardProcessor_TokenisationServiceDefinition } from './cardProcessor/TokenisationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  cardProcessor: {
    CryptoValidatorService: SubtypeConstructor<typeof grpc.Client, _cardProcessor_CryptoValidatorServiceClient> & { service: _cardProcessor_CryptoValidatorServiceDefinition }
    HSMService: SubtypeConstructor<typeof grpc.Client, _cardProcessor_HSMServiceClient> & { service: _cardProcessor_HSMServiceDefinition }
    MasterCardService: SubtypeConstructor<typeof grpc.Client, _cardProcessor_MasterCardServiceClient> & { service: _cardProcessor_MasterCardServiceDefinition }
    TokenisationService: SubtypeConstructor<typeof grpc.Client, _cardProcessor_TokenisationServiceClient> & { service: _cardProcessor_TokenisationServiceDefinition }
    TransactionRequest: MessageTypeDefinition
    TransactionResponse: MessageTypeDefinition
  }
}

