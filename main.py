from fastapi import FastAPI, Body, status, HTTPException
from bson import ObjectId
from fastapi import FastAPI, HTTPException, Body, status
from fastapi.middleware.cors import CORSMiddleware
from Facial_Confident_Level.face import run_facial_confidence_detection

import config.env as env
import config.db as db
from data import Questions
from data import modelVideos

import subprocess

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

 




@app.post("/run_model")
async def run_model():
    try:
        # Execute the IPython Notebook
        process = subprocess.run(['jupyter', 'nbconvert', '--to', 'script', '--execute', 'Untitled3-4.ipynb'], capture_output=True, text=True)
        if process.returncode == 0:
            return {"success": True, "message": "Notebook executed successfully", "output": process.stdout}
        else:
            raise HTTPException(status_code=500, detail=f"Execution failed: {process.stderr}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Execution failed: {str(e)}")




@app.get(
    "/modelvideos/softwareengineering/technical",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_ui_ux_engineering_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Software Engineering'},
                    {"question_type": "Technical"}
                ]
            }
        ).to_list(10)
    )


@app.get("/predict")
async def predict():
    run_facial_confidence_detection()
    return {"message": "Facial confidence detection completed."}











