from pydantic import BaseModel

class Question(BaseModel):
    answer: str
    industry: str
    question: str
    type: int