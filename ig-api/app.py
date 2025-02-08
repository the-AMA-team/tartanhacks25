from flask import Flask
from flask_cors import CORS
import posts

app = Flask(__name__)
CORS(app)

@app.route("/test")
def stuff():
    return "<p> hi <p>"

@app.route("/u/<username>/p/<password>")
def get_data(username, password):
    return posts.getPosts(username, password)
