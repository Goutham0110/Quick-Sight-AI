import json


class Dataset:
    def __init__(self, data):
        self.id = data.id
        self.type = data.type
        self.data = data.data
        self.creator_id = data.creator_id

    def __repr__(self):
        return json.dumps(self.__dict__)
