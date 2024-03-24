from fastapi import FastAPI, Body, status, HTTPException
from bson import ObjectId
from fastapi import FastAPI, HTTPException, Body, status
from fastapi.middleware.cors import CORSMiddleware
from filler_words import filler_percentage

import config.env as env
import config.db as db
from data import Questions
from data import modelVideos

app = FastAPI()

# Allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)



settings = env.get_settings()



@app.get("/")
async def home():
    return "Hello, World!"

@app.get(
    "/questions/",
    response_description="List all questions",
    response_model=Questions.QuestionCollection,
    response_model_by_alias=False,
)
async def get_question():
    """
    List all of the questions in the database.

    """
    return Questions.QuestionCollection(
        Questions=await db.questions_collection.find().to_list(21)
    )


@app.get(
    "/questions/softwareengineering",  # Corrected endpoint path
    response_description="List all questions related to Software Engineering",
    response_model=Questions.QuestionCollection,
    response_model_by_alias=False,
)
async def get_software_engineering_questions():
    """
    List all questions related to Software Engineering in the database.
    """
    return Questions.QuestionCollection(
        Questions=await db.questions_collection.find({"industry": "Software Engineering"}).to_list(5)
    )


@app.get(
    "/questions/hr",  # Corrected endpoint path
    response_description="List all questions related to Software Engineering",
    response_model=Questions.QuestionCollection,
    response_model_by_alias=False,
)
async def get_software_engineering_questions():
    """
    List all questions related to Software Engineering in the database.
    """
    return Questions.QuestionCollection(
        Questions=await db.questions_collection.find({"industry": "Software Engineering"}).to_list(5)
    )


@app.get(
    "/modelvideos",
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_question():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find().to_list(21)
    )

@app.get("/fillerWordsPercentage/{userText}")
async def get_filler_words_percentage(userText):
    return filler_percentage(userText)
