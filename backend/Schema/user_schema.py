import json


class User:
    def __init__(self, data):
        self.id = data.id
        self.username = data.username
        self.email = data.email
        self.password = data.password
        self.category = data.category
        self.is_suspended = data.is_suspended
        self.created_at = data.created_at
        self.deleted_at = data.deleted_at

    def __repr__(self):
        return json.dumps(self.__dict__)
