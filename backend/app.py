from flask import Flask
from pymongo import MongoClient
from Blueprints.Common.common_bp import common
from Blueprints.Dataset.dataset_bp import dataset
from Blueprints.Architecture.architecture_bp import architecture
from Blueprints.Model.model_bp import model

app = Flask(__name__)
app.config.from_pyfile("settings.py")


# Creating database connection
try:
    clientConnection = MongoClient(app.config["MONGO_CONNECTION_STRING"])
    app.config["db_connection"] = clientConnection[app.config["MONGO_DBNAME"]]
    db = app.config["db_connection"]
    db.command("ping")
    print("\nSuccessfully connected to MongoDB!")
except Exception as e:
    error = """
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Unable to connect to MongoDB!
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\n"""
    print(error, e)


# Registering blueprints
app.register_blueprint(common)
app.register_blueprint(dataset)
app.register_blueprint(architecture)
app.register_blueprint(model)


@app.route("/health-check")
def health_check():
    return "Server is alive"
