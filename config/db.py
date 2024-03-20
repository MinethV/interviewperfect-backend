from typing import Annotated
from pydantic import BeforeValidator
import motor.motor_asyncio

import config.env as env


settings = env.get_settings()

MONGODB_URL: str = "mongodb+srv://{}:{}@{}/".format(
    settings.DB_USER, settings.DB_PASSWORD, settings.DB_HOST
).replace('"', "")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGODB_URL)
db = client.get_database("InterviewPerfect")
questions_collection = db.get_collection("Questions")
modelvideo_collection = db.get_collection("model_Videos")



# Represents an ObjectId field in the database.
# It will be represented as a ⁠ str ⁠ on the model so that it can be serialized to JSON.
PyObjectId = Annotated[str, BeforeValidator(str)]