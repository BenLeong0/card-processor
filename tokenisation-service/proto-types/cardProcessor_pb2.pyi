from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TokenisationRequest(_message.Message):
    __slots__ = ["pinBlock"]
    PINBLOCK_FIELD_NUMBER: _ClassVar[int]
    pinBlock: str
    def __init__(self, pinBlock: _Optional[str] = ...) -> None: ...

class TokenisationResponse(_message.Message):
    __slots__ = ["tokenisedPinBlock"]
    TOKENISEDPINBLOCK_FIELD_NUMBER: _ClassVar[int]
    tokenisedPinBlock: str
    def __init__(self, tokenisedPinBlock: _Optional[str] = ...) -> None: ...

class TransactionRequest(_message.Message):
    __slots__ = ["pinBlock", "transactionDetails"]
    class TransactionDetails(_message.Message):
        __slots__ = ["amount", "timestamp", "vendor"]
        AMOUNT_FIELD_NUMBER: _ClassVar[int]
        TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
        VENDOR_FIELD_NUMBER: _ClassVar[int]
        amount: float
        timestamp: str
        vendor: str
        def __init__(self, vendor: _Optional[str] = ..., amount: _Optional[float] = ..., timestamp: _Optional[str] = ...) -> None: ...
    PINBLOCK_FIELD_NUMBER: _ClassVar[int]
    TRANSACTIONDETAILS_FIELD_NUMBER: _ClassVar[int]
    pinBlock: str
    transactionDetails: TransactionRequest.TransactionDetails
    def __init__(self, pinBlock: _Optional[str] = ..., transactionDetails: _Optional[_Union[TransactionRequest.TransactionDetails, _Mapping]] = ...) -> None: ...

class TransactionResponse(_message.Message):
    __slots__ = ["message"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    message: str
    def __init__(self, message: _Optional[str] = ...) -> None: ...
