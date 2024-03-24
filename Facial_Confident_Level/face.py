import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Load the pre-trained CNN model
model = load_model('Facial_Confident_Level/facial_confidence_model.h5')  # Load your trained model

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
    # Convert frame to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    # Process each detected face
    for (x, y, w, h) in faces:
        face_img = frame[y:y+h, x:x+w]
        confidence = predict_confidence(face_img)

        # Display confidence level on the frame
        text = f'Confidence: {confidence:.2f}'
        cv2.putText(frame, text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        # Draw rectangle around the face
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    return frame

def run_facial_confidence_detection():
    # Start webcam
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_with_confidence = detect_facial_confidence(frame)

        # Display the frame with confidence levels
        cv2.imshow('Facial Confidence Detection', frame_with_confidence)

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the webcam and close OpenCV windows
    cap.release()

if __name__ == "__main__":
    run_facial_confidence_detection()
