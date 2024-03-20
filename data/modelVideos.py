
from typing import List, Optional
from pydantic import BaseModel, Field
from config.db import PyObjectId

class ModelVideosModel(BaseModel):
    """
    Container for a model video.
    """

    # The primary key for the MovieModel, stored as a ⁠ str ⁠ on the instance.
    # This will be aliased to ⁠ _id ⁠ when sent to MongoDB,
    # but provided as ⁠ id ⁠ in the API requests and responses.
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    question: str = Field(...)
    filename: str = Field(...)
    firebase_download_url: str = Field(...)

class ModelVideoCollection(BaseModel):
    """
    A container holding a list of QuestionModel instances.

    This exists because providing a top-level array in a JSON response can be a [vulnerability](https://haacked.com/archive/2009/06/25/json-hijacking.aspx/)
    """

    modelVideos: List[ModelVideosModel]
