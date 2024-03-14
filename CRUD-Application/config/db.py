from pymongo import MongoClient

client = MongoClient ("mongodb+srv://sasirujayawardhana:3SwHrqHeZa9P@cluster0.lkfpc3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.InterviewPerfect
collection_name = db["Questions"]