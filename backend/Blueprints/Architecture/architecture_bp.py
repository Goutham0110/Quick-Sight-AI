import json
from flask import Blueprint, current_app, request
from ...Schema.Architecture import Architecture


architecture = Blueprint("architecture", __name__, url_prefix="/architecture")
# includes

@architecture.get("")
def get_architecture():
    try:
        db = current_app.config["db_connection"]
        architecture_id = request.args.get("id")

        if not architecture_id:
            return {"message": "architecture id is required"}, 400
        architecture = Architecture(
            {
                "id": architecture_id,
            }
        )
        architecture = architecture.get(db)
        if architecture is None:
            return {"message": "Architecture not found"}, 404
        return repr(architecture)
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500


@architecture.post("")
def post_architecture():
    try:
        db = current_app.config["db_connection"]
        architecture_data = request.get_json()
        architecture = Architecture(architecture_data)
        err = architecture.validate(db, "post")
        if err:
            return err
        id = architecture.post(db)
        return {
            "message": "architecture created successfully",
            "architecture_id": id,
        }, 201
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500


@architecture.put("")
def put_architecture():
    try:
        db = current_app.config["db_connection"]
        updated_architecture_data = request.get_json()
        architecture = Architecture(updated_architecture_data)
        err = architecture.validate(db, "put")
        if err:
            return err
        is_updated = architecture.put(db)
        if not is_updated:
            return {"message": "failed to update"}, 400
        return {"message": "update architecture"}, 201
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500


@architecture.delete("")
def delete_architecture():
    try:
        db = current_app.config["db_connection"]
        id = request.args.get("id")
        architecture = Architecture({"id": id})
        is_deleted = architecture.delete(db)
        if not is_deleted:
            return {"message": "failed to delete architecture"}, 400
        return {"message": "delete architecture"}
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500


@architecture.post("/build")
def build_architecture():
    try:
        db = current_app.config["db_connection"]
        request_data = request.get_json()
        architecture = Architecture({"id": request_data.id})
        is_built = architecture.build(db)
        if not is_built:
            return {"message": "build failed"}, 400
        return {"message": "built model from architecture"}
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500


@architecture.post("/train")
def train_architecture():
    try:
        db = current_app.config["db_connection"]
        request_data = request.get_json()
        
        return {"message": "model trained successfully"}, 200
    except Exception as e:
        print("Error -> ", e)
        return {"message": "Internal Server Error"}, 500
