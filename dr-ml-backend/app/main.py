from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import os
import uuid

from app.predictor import predict_image


app = FastAPI(
    title="RetinaAI API",
    description="Explainable AI Diabetic Retinopathy Screening API",
    version="1.0"
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://netra-ai-secure-retinal-screening-p.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# Health Check
# =========================================================

@app.get("/health")
def health():

    return {
        "status": "ok",
        "message": "RetinaAI backend is running"
    }


# =========================================================
# Prediction
# =========================================================

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Check file type
    allowed_types = [
        "image/jpeg",
        "image/png",
        "image/jpg"
    ]

    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG and PNG images are allowed."
        )

    # Create temporary uploads directory
    os.makedirs("uploads", exist_ok=True)

    # Generate unique filename
    file_extension = os.path.splitext(file.filename)[1]

    filename = f"{uuid.uuid4()}{file_extension}"

    file_path = os.path.join(
        "uploads",
        filename
    )

    try:

        # Save uploaded image
        contents = await file.read()

        with open(file_path, "wb") as f:
            f.write(contents)

        # Run your existing model prediction
        result = predict_image(file_path)

        return {
            "success": True,
            "filename": file.filename,
            "prediction": result
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )

    finally:

        # Delete temporary uploaded image
        if os.path.exists(file_path):
            os.remove(file_path)