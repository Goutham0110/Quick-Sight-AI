from flask import Blueprint, current_app

dataset = Blueprint("dataset", __name__, url_prefix="/dataset")
# includes


@dataset.route("/")
def index():
    db = current_app.config["db_connection"]
    return "dataset"
