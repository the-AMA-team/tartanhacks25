from instagrapi import Client
import json


class Profile:
    def __init__(self, username, profile_pic, bio, posts):
        self.username = username
        self.profile_pic = str(profile_pic)
        self.bio = bio

        posts2 = []
        for i in range(len(posts)):
            posts2.append(posts[i].__dict__)
        self.posts = posts2

    def __str__(self):
        return "" + self.username + " " + str(self.profile_pic) + " " + self.bio


class Post:
    def __init__(self, url, caption):
        self.url = str(url)
        self.caption = caption

    def __str__(self):
        return "" + str(self.url) + " " + self.caption


def getPosts(username, password, cl):
    print("Username: ", username)
    print("Password: ", password)

    try:
        cl.login(username, password)
    except:
        print("Failed to login")

    user_id = cl.user_id_from_username(username)
    print("User ID", user_id)

    medias = cl.user_medias(user_id, 20)
    # print("Medias", medias)
    dict = cl.account_info().model_dump()  # not sure if it is actually a dictionary
    keys_list = list(dict.keys())

    # print(keys_list)

    posts = []

    for i in range(len(medias)) if len(medias) <= 4 else range(4):
        if medias[i].thumbnail_url != None:
            posts.append(Post(medias[i].thumbnail_url, medias[i].caption_text))
        else:
            try:
                posts.append(
                    Post(
                        medias[i].resources[0].thumbnail_url,
                        medias[i].caption_text,
                    )
                )
            except:
                try:
                    posts.append(
                        Post(
                            medias[i].image_versions2["candidates"][0]["url"],
                            medias[i].caption_text,
                        )
                    )
                except:
                    print("something bad occurred")

    profile = Profile(
        dict["username"], dict["profile_pic_url"], dict["biography"], posts
    )

    # print("medias 0", medias[0])

    print("Profile: ")
    print(profile)
    print("Posts: ")
    for i in range(len(profile.posts)):
        print(profile.posts[i])

    # for i in range(len(keys_list)):
    #     print(keys_list[i])

    # print(cl.account_info().model_dump())
    return profile
