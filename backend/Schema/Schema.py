class Architecture:
    def __init__(self, data):
        self.id = data.id
        self.name = data.name
        self.dataset_id = data.dataset_id
        self.architecture_data = data.architecture_data
        self.is_build_complete = data.is_build_complete
        self.creator_id = data.creator_id
        self.created_at = data.created_at
        self.updated_at = data.updated_at


class Model:
    def __init__(self, data):
        self.id = data.id
        self.architecture_id = data.architecture_id
        self.is_published = data.is_published
        self.prediction_api = data.prediction_api
        self.prediction_logs = data.prediction_logs
        self.created_at = data.created_at


class Dataset:
    def __init__(self, data):
        self.id = data.id
        self.type = data.type
        self.data = data.data
        self.creator_id = data.creator_id


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
