from flask import Blueprint, current_app

table = Blueprint("table", __name__)
# includes

@table.route("/")
def index():
    db = current_app.config["db_connection"]
    return "table"
