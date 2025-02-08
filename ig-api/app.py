from flask import Flask, jsonify
from flask_cors import CORS
import posts
import json
from instagrapi import Client


app = Flask(__name__)
CORS(app)

cl = Client()
# cl.delay_range = [1, 3]

@app.route("/test")
def stuff():
    return "<p> hi <p>"

@app.route("/u/<username>/p/<password>")
def get_data(username, password):

    profile =  posts.getPosts(username, password, cl)

    print(profile)

    return jsonify({"Profile": json.dumps(profile.__dict__)})
