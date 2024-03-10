from flask import Blueprint, current_app

model = Blueprint("model", __name__, url_prefix="/model")
# includes


@model.get("/<model_name>")
def get_model(model_name):
    db = current_app.config["db_connection"]
    return "get model training results"


@model.get("/train/<model_name>")
def train_model(model_name):
    db = current_app.config["db_connection"]
    return "train model"


@model.get("/predict/<model_name>")
def predict(model_version, model_id):
    db = current_app.config["db_connection"]
    return "predict results"
