from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import cv2
import numpy as np
from tensorflow.keras.models import load_model
import base64
from PIL import Image
from io import BytesIO

router = APIRouter()

# Load the pre-trained CNN model
model = load_model('facial_confidence_model-2.h5')

# Load the face detection cascade
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Function to preprocess an image for the model
def preprocess_image(img):
    img = cv2.resize(img, (224, 224))
    img = img / 255.0  # Normalize pixel values
    return img

# Function to predict confidence level
def predict_confidence(face_img):
    face_img = preprocess_image(face_img)
    confidence = model.predict(np.expand_dims(face_img, axis=0))[0][0]
    return confidence

def detect_facial_confidence(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    for (x, y, w, h) in faces:
        face_img = frame[y:y+h, x:x+w]
        confidence = predict_confidence(face_img)
        text = f'Confidence: {confidence:.2f}'
        cv2.putText(frame, text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    # Return the annotated frame and the coordinates of detected faces
    return frame, faces

def base64_to_image(base64_string):
    try:
        # Remove data URL prefix if present
        if base64_string.startswith('data:image'):
            base64_string = base64_string.split('base64,')[1]
        
        # Decode base64 string to bytes
        image_bytes = base64.b64decode(base64_string)
        
        print("Decoded image bytes:", image_bytes)  # Add logging statement
        
        # Convert bytes to PIL Image
        image = Image.open(BytesIO(image_bytes))
        
        # Convert PIL Image to numpy array
        image_np = np.array(image)
        
        return image_np
    except Exception as e:
        print(f"Error converting base64 to image: {e}")
        return None
    
class ImageData(BaseModel):
    image: str
    
@router.post("/detect_facial_confidence/")
async def run_facial_confidence_detection(image_data: ImageData):
    print("Received image data:", image_data)
    
    image = base64_to_image(image_data.image)

    if image is not None:
        frame_with_confidence, detected_faces = detect_facial_confidence(image)
        
        # Detect confidence levels for each face
        confidence_levels = []
        for (x, y, w, h) in detected_faces:
            face_img = image[y:y+h, x:x+w]
            confidence = predict_confidence(face_img)
            confidence_levels.append(float(confidence))  # Convert to regular float
        
        # Encode annotated image as base64
        _, encoded_image = cv2.imencode('.jpg', frame_with_confidence)  # Encode frame as JPEG
        base64_image = base64.b64encode(encoded_image).decode('utf-8')  # Encode as base64
        
        return {"image": base64_image, "confidence_levels": confidence_levels}
        
    else:
        raise HTTPException(status_code=400, detail="Error: Image not found or could not be converted.")

