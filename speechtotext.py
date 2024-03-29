# filler_percentage_api.py
from fastapi import APIRouter
from pydantic import BaseModel
import nltk
nltk.download('punkt')



router = APIRouter()

filler_words_list = [
    "um",
    "uh",
    "like",
    "you know",
    "actually",
    "basically",
    "literally",
    "sort of",
    "kind of",
    "sorta",
    "kinda",
    "well",
    "so",
    "just",
    "really",
    "anyway",
    "anyways",
    "totally",
    "definitely",
    "absolutely",
    "right",
    "okay",
    "alright",
    "oh",
    "ah",
    "hmm",
    "wow",
    "oh my god",
    "oh my gosh",
    "oh man",
    "oh boy",
    "oops",
    "uh-oh",
    "oh no",
    "yeah",
    "yep",
    "nope",
    "maybe",
    "perhaps",
    "possibly",
    "well",
    "I mean",
    "you see",
    "the thing is",
    "to be honest",
    "to tell you the truth",
    "I guess",
    "I think",
    "I feel",
    "I believe",
    "I suppose",
    "I reckon",
    "you know what I mean",
    "do you know what I mean",
    "know what I mean",
    "you see what I'm saying",
    "see what I'm saying",
    "you get what I'm saying",
    "get what I'm saying",
    "if you will",
    "as it were",
    "if that makes sense",
    "as though",
    "in a sense",
    "more or less",
    "for lack of a better term",
    "at the end of the day",
    "when it comes down to it",
    "in terms of",
    "at this point in time",
    "at the present moment",
    "at the end of the day",
    "for the most part",
    "as far as I'm concerned",
    "in my opinion",
    "from my perspective",
    "I think that's about it",
    "I think that's pretty much it",
    "I think that's everything",
    "I believe that covers everything",
    "I think that covers everything",
    "I think that's all I have to say",
    "I think that's about all",
    "I think that's it",
    "I think that's pretty much all",
    "I guess that's about it",
    "I guess that's it",
    "I guess that covers it",
    "I guess that's all",
    "I guess that's everything",
    "I guess that's pretty much it",
    "I guess that's pretty much all",
    "I believe that's about it",
    "I believe that's it",
    "I believe that covers it",
    "I believe that's all",
    "I believe that's everything",
    "I believe that's pretty much it",
    "I believe that's pretty much all",
    "I reckon that's about it",
    "I reckon that's it",
    "I reckon that covers it",
    "I reckon that's all",
    "I reckon that's everything",
    "I reckon that's pretty much it",
    "I reckon that's pretty much all",
    "umm"
]

class TextRequest(BaseModel):
    text: str

@router.post("/filler_percentage/")
async def calculate_filler_percentage(request: TextRequest):
    text = request.text
    tokens = nltk.word_tokenize(text)
    text = text.lower()

    filler_words_count = 0
    for word in tokens:
        if word in filler_words_list:
            filler_words_count += 1

    percentageFiller = (filler_words_count/len(tokens)) * 100
    return {"filler_percentage": percentageFiller}





