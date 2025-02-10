from instagrapi import Client
import posts
# import json

cl = Client()
cl.delay_range = [1, 3]

username = "temp_user"
password = "temp_password"

profile = posts.getPosts(username, password, cl)

print(profile)