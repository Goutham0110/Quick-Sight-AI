from os import environ

MONGO_CONNECTION_STRING = (
    environ.get("MONGO_CONNECTION_STRING") or "mongodb://localhost:27017"
)
MONGO_DBNAME = environ.get("MONGO_DBNAME") or "quickSightAI"
