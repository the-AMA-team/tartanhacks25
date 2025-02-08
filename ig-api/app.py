from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/u/<username>/p/<password>")
def get_data(username, password):
    return {"username": username, "password": password}
