from flask import Blueprint, current_app

common = Blueprint("common", __name__)
# includes


@common.route("/architectures")
def architectures():
    db = current_app.config["db_connection"]
    return "architectures"


@common.route("/datasets")
def datasets():
    db = current_app.config["db_connection"]
    return "datasets"
