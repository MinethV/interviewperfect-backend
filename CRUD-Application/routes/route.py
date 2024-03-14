from fastapi import APIRouter
from models.questions import Question
from config.db import collection_name
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

#Get request to get all the questions

#Read the data from the database
@router.get("/")
async def get_all_questions():
    questions = list_serial(collection_name.find())
    return questions

#Create a new question
@router.post("/")
async def create_question(question: Question):
    collection_name.insert_one(dict(question))

#Update a question
@router.put("/{id}")
async def put_question(id:str, question: Question):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(question)})

#Delete a question
@router.delete("/{id}")
async def delete_question(id:str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})