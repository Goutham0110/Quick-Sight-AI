from flask import Blueprint, current_app

architecture = Blueprint("architecture", __name__, url_prefix="/architecture")
# includes


@architecture.route("/")
def index():
    db = current_app.config["db_connection"]
    return "architecture"
