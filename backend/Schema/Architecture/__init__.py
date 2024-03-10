import json
import datetime
from bson.objectid import ObjectId


class Architecture:
    def __init__(self, data):
        id = data.get("id")
        name = data.get("name")
        dataset_id = data.get("dataset_id")
        architecture_data = data.get("architecture_data")
        is_build_complete = data.get("is_build_complete")
        creator_id = data.get("creator_id")
        created_at = data.get("created_at")
        updated_at = data.get("updated_at")

        self.id = id or repr(data.get("_id"))
        self.name = name or None
        self.dataset_id = dataset_id or None
        self.architecture_data = architecture_data or {}
        self.is_build_complete = is_build_complete or False
        self.creator_id = creator_id or None
        self.created_at = created_at or "{:%Y-%m-%d %H:%M:%S}".format(
            datetime.datetime.now(tz=datetime.timezone.utc)
        )
        self.updated_at = updated_at or "{:%Y-%m-%d %H:%M:%S}".format(
            datetime.datetime.now(tz=datetime.timezone.utc)
        )

    def validate(self, db_conn, method):
        if method == "post":
            if not self.name:
                return {"message": "received invalid architecture"}, 400
            architecture_exists = db_conn["architectures"].find_one(
                {"name": self.name, "creator_id": self.creator_id},
            )
            if architecture_exists:
                return {"message": "architecture already exists"}, 409
            return False
        if method == "put":
            if not self.id:
                return {"message": "received invalid architecture"}, 400
            architecture_exists = db_conn["architectures"].find_one(
                {"_id": ObjectId(self.id)},
            )
            if not architecture_exists:
                return {"message": "architecture doesn't exists"}, 404
            return False

    def get(self, db_conn):
        architecture_data = db_conn["architectures"].find_one(
            {"_id": ObjectId(self.id)}
        )
        if not architecture_data:
            return None
        self = Architecture(architecture_data)
        self.id = self.id[10:-2]
        return self

    def post(self, db_conn):
        architecture_data = self.__dict__
        architecture_data.pop("id", None)
        inserted_id = db_conn["architectures"].insert_one(architecture_data).inserted_id
        return repr(inserted_id)[10:-2]

    def put(self, db_conn):
        self.updated_at = "{:%Y-%m-%d %H:%M:%S}".format(
            datetime.datetime.now(tz=datetime.timezone.utc)
        )
        architecture_data = self.__dict__
        id = architecture_data.pop("id", None)
        is_updated = (
            db_conn["architectures"]
            .update_one({"_id": ObjectId(id)}, {"$set": architecture_data})
            .modified_count
        )
        return is_updated

    def delete(self, db_conn):
        deleted_count = (
            db_conn["architectures"]
            .delete_one({"_id": ObjectId(self.id)})
            .deleted_count
        )
        return deleted_count

    def build(self, db_conn):
        self = self.get(db_conn)
        # build process
        self.is_build_complete = True
        is_built = self.put(db_conn)
        return is_built

    def __repr__(self):
        return json.dumps(self.__dict__)
