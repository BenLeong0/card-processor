import hashlib


def tokenise_pin_block(pin_block: str) -> str:
    return hashlib.md5(pin_block.encode("utf-8")).hexdigest()
