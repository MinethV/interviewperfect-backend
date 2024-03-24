from fastapi import FastAPI, Body, status, HTTPException
from bson import ObjectId
from fastapi import FastAPI, HTTPException, Body, status
from fastapi.middleware.cors import CORSMiddleware

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
        Questions=await db.questions_collection.find().to_list(90)
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
        modelVideos=await db.modelvideo_collection.find().to_list(20)
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
        modelVideos=await db.modelvideo_collection.find({'industry':'Software Engineering'}).to_list(20)
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
        modelVideos=await db.modelvideo_collection.find({'industry':'Civil Engineering'}).to_list(20)
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
        modelVideos=await db.modelvideo_collection.find({'industry':'HR'}).to_list(20)
    )   

@app.get(
    "/modelvideos/uiuxengineering",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_ui_ux_engineering():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({'industry':'UI & UX Engineering'}).to_list(20)
    )   


# UI/UX Engineering
@app.get(
    "/modelvideos/uiuxengineering/common",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_ui_ux_engineering_common():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'UI & UX Engineering'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(3)
    )   

@app.get(
    "/modelvideos/uiuxengineering/situational",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_ui_ux_engineering_situational():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'UI & UX Engineering'},
                    {"question_type": "Situational"}
                ]
            }
        ).to_list(3)
    )   
    
@app.get(
    "/modelvideos/uiuxengineering/technical",  
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
                    {'industry':'UI & UX Engineering'},
                    {"question_type": "Technical"}
                ]
            }
        ).to_list(4)
    )   


# Civil Engineering
@app.get(
    "/modelvideos/civilengineering/common",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_common():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Civil Engineering'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(3)
    )   

@app.get(
    "/modelvideos/civilengineering/situational",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_situational():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Civil Engineering'},
                    {"question_type": "Situational"}
                ]
            }
        ).to_list(3)
    )   
    
@app.get(
    "/modelvideos/civilengineering/technical",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Civil Engineering'},
                    {"question_type": "Technical"}
                ]
            }
        ).to_list(4)
    )   



@app.get(
    "/modelvideos/civilengineering/common",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_common():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Civil Engineering'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(3)
    )   

@app.get(
    "/modelvideos/civilengineering/situational",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_civil_engineering_situational():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Civil Engineering'},
                    {"question_type": "Situational"}
                ]
            }
        ).to_list(3)
    )   
    

#Human Resource
@app.get(
    "/modelvideos/humanresource/common",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_common():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'HR'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(3)
    )   

@app.get(
    "/modelvideos/humanresource/situational",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_situational():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'HR'},
                    {"question_type": "Situational"}
                ]
            }
        ).to_list(3)
    )   
    
@app.get(
    "/modelvideos/humanresource/technical",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'HR'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(4)
    )   

#Software Engineering
@app.get(
    "/modelvideos/softwareengineering/common",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Software Engineering'},
                    {"question_type": "Common"}
                ]
            }
        ).to_list(4)
    )  


@app.get(
    "/modelvideos/softwareengineering/situational",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'Software Engineering'},
                    {"question_type": "Situational"}
                ]
            }
        ).to_list(4)
    )  


@app.get(
    "/modelvideos/softwareengineering/technical",  
    response_description="List all model videos",
    response_model= modelVideos.ModelVideoCollection,
    response_model_by_alias=False,
)
async def get_human_resource_technical():
    """
    List all of the questions in the database.

    """
    return modelVideos.ModelVideoCollection(
        modelVideos=await db.modelvideo_collection.find({ 
                "$and": [ 
                    {'industry':'HR'},
                    {"question_type": "Technical"}
                ]
            }
        ).to_list(4)
    )  













