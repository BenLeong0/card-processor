from concurrent import futures
import hashlib

import grpc

from proto_types import (
    cardProcessor_pb2,
    cardProcessor_pb2_grpc,
)


def tokenise_pin_block(pin_block: str) -> str:
    return hashlib.md5(pin_block.encode("utf-8")).hexdigest()


class TokenisationService(cardProcessor_pb2_grpc.TokenisationService):

    def TokenisePinBlock(self, request: cardProcessor_pb2.TokenisationRequest, context):
        return tokenise_pin_block(request.pinBlock)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    cardProcessor_pb2_grpc.add_TokenisationServiceServicer_to_server(
        TokenisationService(),
        server
    )
    server.add_insecure_port('[::]:50051')

    print("starting server...")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
