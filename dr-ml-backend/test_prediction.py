from app.predictor import predict_image


result = predict_image(
    "test_images/test.jpg"
)


print("\nPrediction Result:")
print(result)