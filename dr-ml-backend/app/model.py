import torch
import torch.nn as nn
from torchvision.models import efficientnet_b0


# Number of classes used during training
NUM_CLASSES = 5


# Device
DEVICE = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)


# IMPORTANT:
# Replace these with the EXACT class names
# from your dataset.
CLASS_NAMES = [
    "No DR",
    "Mild NPDR",
    "Moderate NPDR",
    "Severe NPDR",
    "Proliferative DR"
]


def load_model():

    # Create same architecture used during training
    model = efficientnet_b0(
        weights=None
    )

    # Replace classifier with 5-class classifier
    model.classifier[1] = nn.Linear(
        model.classifier[1].in_features,
        NUM_CLASSES
    )

    # Load trained weights
    model.load_state_dict(
        torch.load(
            "models/dr_model.pth",
            map_location=DEVICE
        )
    )

    # Move model to device
    model = model.to(DEVICE)

    # Evaluation mode
    model.eval()

    return model


# Load model once when backend starts
model = load_model()