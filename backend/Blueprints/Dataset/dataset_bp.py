from flask import Blueprint, current_app

dataset = Blueprint("dataset", __name__, url_prefix="/dataset")
# includes


@dataset.get("/")
def get_dataset():
    db = current_app.config["db_connection"]
    return "get dataset"


@dataset.post("/")
def post_dataset():
    db = current_app.config["db_connection"]
    return "post dataset"
