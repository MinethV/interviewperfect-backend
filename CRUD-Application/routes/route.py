from fastapi import APIRouter
from models.questions import Question
from config.db import collection_name
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

#Get request to get all the questions

# @router.get("/questions")
@router.get("/")
async def get_all_questions():
    questions = list_serial(collection_name.find())
    return questions