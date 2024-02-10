from flask import Flask
from pymongo import MongoClient
from Blueprints.Architecture.architecture_bp import architecture

app = Flask(__name__)
app.config.from_pyfile("settings.py")


# Creating database connection
try:
    clientConnection = MongoClient(app.config["MONGO_CONNECTION_STRING"])
    app.config["db_connection"] = clientConnection[app.config["MONGO_DBNAME"]]
    db = app.config["db_connection"]
    db.command("ping")
    print("\n\nSuccessfully connected to MongoDB!")
except Exception as e:
    print("\n\nUnable to connect to MongoDB!\n", e)


# Registering blueprints
app.register_blueprint(architecture)


@app.route("/health-check")
def health_check():
    return "Server is alive"
