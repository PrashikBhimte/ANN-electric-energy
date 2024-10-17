BreadcrumbsANN: Prediction of Electrical Energy Output of a Combined Cycle Power Plant

Overview

This project uses an Artificial Neural Network (ANN) to predict the electrical energy output of a Combined Cycle Power Plant. The ANN is trained on a dataset of historical power plant data and can be used to make predictions on new, unseen data.

Training

The ANN is trained using TensorFlow and Scikit-learn libraries. The training process involves loading the dataset, preprocessing the data, splitting it into training and testing sets, building the ANN model, compiling it, training it, and evaluating its performance.

Using the Trained Model

To use the trained model, simply load it using TensorFlow and pass in new data to make predictions.

Model Performance

The trained model achieves an accuracy of 90.36071914209926% on the test set.

Dependencies

- TensorFlow
- NumPy
- Pandas
- Scikit-learn

Dataset

The dataset used to train the model is included in the repository.

Files

- model.keras: The trained ANN model
- Folds5x2_pp.xlsx: The dataset used to train the model
- train_model.py: The Python script used to train the model
- main.py: The Python script used to make predictions using the trained model
