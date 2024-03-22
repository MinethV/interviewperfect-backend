from fastapi import FastAPI, Body, status, HTTPException
from bson import ObjectId
from fastapi import FastAPI, HTTPException, Body, status
from fastapi.middleware.cors import CORSMiddleware

import config.env as env
import config.db as db
from data import Questions

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
    "/questions/civilengineering",  # Corrected endpoint path
    response_description="List all questions related to Civil Engineering",
    response_model=Questions.QuestionCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_questions():
    """
    List all questions related to Civil Engineering in the database.
    """
    return Questions.QuestionCollection(
        Questions=await db.questions_collection.find({"industry": "Civil Engineering"}).to_list(5)
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


 @app.get(
    "/modelvideos/softwareengineering",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_software_engineering_videos():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({'industry':'Software Engineering'}).to_list(2)
    )   
 

 @app.get(
    "/modelvideos/civilengineering",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_videos():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({'industry':'Civil Engineering'}).to_list(2)
    )   


 @app.get(
    "/modelvideos/humanresources",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resources_videos():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({'industry':'HR'}).to_list(2)
    )   