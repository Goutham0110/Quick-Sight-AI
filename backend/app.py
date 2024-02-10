from flask import Flask

app = Flask(__name__)
app.config.from_pyfile("settings.py")
print(app.config)

@app.route('/health-check')
def healthCheck():
    return "Server is alive"