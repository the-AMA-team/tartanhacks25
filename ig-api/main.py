from instagrapi import Client

class Profile:
    def __init__(self, username, profile_pic, bio, posts):
        self.username = username
        self.profile_pic = profile_pic
        self.bio = bio
        self.posts = posts
    
    def __str__(self):
        return "" + self.username + " " + str(self.profile_pic) + " " + self.bio + " " + str(self.posts)
        
class Post:
    def __init__(self, url, caption):
        self.url = url
        self.caption = caption

    def __str__(self):
        return "" + str(self.url) + " " + self.caption


cl = Client()
cl.delay_range = [1, 3]

try:
    cl.login("saucy.boii.tybalt", "slayGirl")
except:
    print("Failed to login")



user_id = cl.user_id_from_username("saucy.boii.tybalt")
print(user_id)

print("done")

medias = cl.user_medias(user_id, 20)
print(medias)
dict = cl.account_info().model_dump() # not sure if it is actually a dictionary
keys_list = list(dict.keys())

print(keys_list)

print(dict["pk"])

print("Type")
print(type(medias[0]))

posts = []

for i in range(len(medias)):
    posts.append(Post(medias[i].thumbnail_url, medias[i].caption_text))


profile = Profile(dict["username"], dict["profile_pic_url"], dict["biography"], posts)

print("Profile: ")
print(profile)
print("Posts: ")
for i in range(len(profile.posts)):
    print(profile.posts[i])

# for i in range(len(keys_list)):
#     print(keys_list[i])

#print(cl.account_info().model_dump())