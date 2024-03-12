from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field

from config.db import PyObjectId


class QuestionModel(BaseModel):
    """
    Container for a single movie record.
    """

    # The primary key for the MovieModel, stored as a ⁠ str ⁠ on the instance.
    # This will be aliased to ⁠ _id ⁠ when sent to MongoDB,
    # but provided as ⁠ id ⁠ in the API requests and responses.
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    question: str = Field(...)
    answer: str = Field(...)
    industry: str = Field(...)
    type: str = Field(...)
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
    )


class QuestionCollection(BaseModel):
    """
    A container holding a list of QuestionModel instances.

    This exists because providing a top-level array in a JSON response can be a [vulnerability](https://haacked.com/archive/2009/06/25/json-hijacking.aspx/)
    """

    Questions: List[QuestionModel]