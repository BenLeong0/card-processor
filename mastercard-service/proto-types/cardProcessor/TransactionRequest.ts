// Original file: proto/cardProcessor.proto


export interface _cardProcessor_TransactionRequest_TransactionDetails {
  'vendor'?: (string);
  'amount'?: (number | string);
  'timestamp'?: (string);
}

export interface _cardProcessor_TransactionRequest_TransactionDetails__Output {
  'vendor'?: (string);
  'amount'?: (number);
  'timestamp'?: (string);
}

export interface TransactionRequest {
  'pinBlock'?: (string);
  'transactionDetails'?: (_cardProcessor_TransactionRequest_TransactionDetails | null);
}

export interface TransactionRequest__Output {
  'pinBlock'?: (string);
  'transactionDetails'?: (_cardProcessor_TransactionRequest_TransactionDetails__Output);
}
