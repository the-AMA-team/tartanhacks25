from instagrapi import Client

cl = Client()
cl.login("itsz_mehek", "slayGirl")

user_id = cl.user_id_from_username("itsz_mehek")
print(user_id)
medias = cl.user_medias(user_id, 20)
print(medias)
print(cl.account_info().dict())
