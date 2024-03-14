def individual_serial(Questions) ->dict:
    return {
        "id": str(Questions["_id"]),
        "answer": Questions["answer"],
        "industry": Questions["industry"],
        "question": Questions["question"],
        "type": Questions["type"]
    }

def list_serial(Questions) -> list:
    return [individual_serial(Question) for Question in Questions] 
        