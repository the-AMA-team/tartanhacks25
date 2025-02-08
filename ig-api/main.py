from instagrapi import Client

class Profile:
    def __init__(self, username, profile_pic, bio, posts):
        self.username = username
        self.profile_pic = profile_pic
        self.bio = bio
        self.posts = posts
    
    def __str__(self):
        return "" + self.username + " " + str(self.profile_pic) + " " + self.bio
        
class Post:
    def __init__(self, url, caption):
        self.url = url
        self.caption = caption

    def __str__(self):
        return "" + str(self.url) + " " + self.caption

def getPosts(username, password):

    cl = Client()
    cl.delay_range = [1, 3]

    try:
        cl.login(username, password)
    except:
        print("Failed to login")

    user_id = cl.user_id_from_username(username)
    print("User ID", user_id)

    medias = cl.user_medias(user_id, 20)
    # print("Medias", medias)
    dict = cl.account_info().model_dump() # not sure if it is actually a dictionary
    keys_list = list(dict.keys())

    # print(keys_list)

    posts = []

    for i in range(len(medias)) if len(medias) <= 20 else 20:
        if medias[i].thumbnail_url != None:
            posts.append(Post(medias[i].thumbnail_url, medias[i].caption_text))
        else:
            #lmao
            posts.append(Post(medias[i].image_versions2["candidates"][0]["url"], medias[i].caption_text))



    profile = Profile(dict["username"], dict["profile_pic_url"], dict["biography"], posts)

    print("medias 0", medias[0])

    print("Profile: ")
    print(profile)
    print("Posts: ")
    for i in range(len(profile.posts)):
        print(profile.posts[i])

    # for i in range(len(keys_list)):
    #     print(keys_list[i])

    #print(cl.account_info().model_dump())
    return profile

