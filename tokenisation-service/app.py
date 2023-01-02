import hashlib
import os
from concurrent import futures

import grpc

from proto import (
    cardProcessor_pb2,
    cardProcessor_pb2_grpc,
)


def tokenise_pin_block(pin_block: str) -> str:
    return hashlib.md5(pin_block.encode("utf-8")).hexdigest()


class TokenisationService(cardProcessor_pb2_grpc.TokenisationService):

    def TokenisePinBlock(self, request: cardProcessor_pb2.TokenisationRequest, context):
        print("tokenising pin block")
        tokenised_pin_block = tokenise_pin_block(request.pinBlock)
        return cardProcessor_pb2.TokenisationResponse(tokenisedPinBlock=tokenised_pin_block)


def serve():
    port = os.getenv("PORT", "50051")

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    cardProcessor_pb2_grpc.add_TokenisationServiceServicer_to_server(
        TokenisationService(),
        server
    )
    server.add_insecure_port(f'[::]:{port}')

    print("starting server...")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
