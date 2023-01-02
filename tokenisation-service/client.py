import grpc
from proto import (
    cardProcessor_pb2,
    cardProcessor_pb2_grpc,
)


def tokenise_pin_block(stub: cardProcessor_pb2_grpc.TokenisationServiceStub):
    pin_block = "47298762394542"
    tokenisation_request = cardProcessor_pb2.TokenisationRequest(pinBlock=pin_block)
    tokenised_pin_block = stub.TokenisePinBlock(tokenisation_request)
    print(tokenised_pin_block)


def main():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = cardProcessor_pb2_grpc.TokenisationServiceStub(channel)
        print("-------------- GetFeature --------------")
        tokenise_pin_block(stub)


if __name__ == "__main__":
    main()
