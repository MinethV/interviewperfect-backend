import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_home():
    response = client.get("/")
    assert response.status_code == 200
    assert response.text == "Hello, World!"

def test_get_questions():
    response = client.get("/questions/")
    assert response.status_code == 200
    # Add more assertions to validate the response data

def test_get_model_videos():
    response = client.get("/modelvideos")
    assert response.status_code == 200
    # Add more assertions to validate the response data

# Add more test cases for other endpoints

if __name__ == "__main__":
    pytest.main()