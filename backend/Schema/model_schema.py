import json


class Model:
    def __init__(self, data):
        self.id = data.id
        self.architecture_id = data.architecture_id
        self.is_published = data.is_published
        self.prediction_api = data.prediction_api
        self.prediction_logs = data.prediction_logs
        self.created_at = data.created_at

    def __repr__(self):
        return json.dumps(self.__dict__)
