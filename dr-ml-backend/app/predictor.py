import torch
from PIL import Image

from app.model import model, DEVICE, CLASS_NAMES
from app.preprocessing import transform


def predict_image(image_path):

    # ---------------------------------------------
    # Open image
    # ---------------------------------------------

    image = Image.open(
        image_path
    ).convert("RGB")


    # ---------------------------------------------
    # Preprocess
    # ---------------------------------------------

    image_tensor = transform(image)

    image_tensor = image_tensor.unsqueeze(0)

    image_tensor = image_tensor.to(DEVICE)


    # ---------------------------------------------
    # Prediction
    # ---------------------------------------------

    with torch.no_grad():

        outputs = model(image_tensor)

        probabilities = torch.softmax(
            outputs,
            dim=1
        )

        confidence, predicted_class = torch.max(
            probabilities,
            dim=1
        )


    # ---------------------------------------------
    # Predicted class
    # ---------------------------------------------

    class_id = predicted_class.item()

    confidence_value = confidence.item()


    # ---------------------------------------------
    # ALL CLASS PROBABILITIES
    # ---------------------------------------------

    probability_values = probabilities[0].cpu().tolist()


    probabilities_dict = {}

    for index, class_name in enumerate(CLASS_NAMES):

        probabilities_dict[class_name] = round(
            probability_values[index],
            4
        )


    # ---------------------------------------------
    # Return result
    # ---------------------------------------------

    return {

        "class_id": class_id,

        "prediction": CLASS_NAMES[class_id],

        "confidence": round(
            confidence_value,
            4
        ),

        "probabilities": probabilities_dict
    }