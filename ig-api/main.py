from instagrapi import Client

cl = Client()
cl.delay_range = [1, 3]
cl.login("saucy.boii.tybalt", "slayGirl")

user_id = cl.user_id_from_username("saucy.boii.tybalt")
print(user_id)
medias = cl.user_medias(user_id, 20)
print(medias)
dict = cl.account_info().model_dump() # not sure if it is actually a dictionary
keys_list = list(dict.keys())
for i in range(len(keys_list)):
    print(keys_list[i])
#print(cl.account_info().model_dump())
