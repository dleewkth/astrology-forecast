import os
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import pickle
import pandas as pd

# Check if the model file exists, if not, train the model
if not os.path.exists('astrology_model.pkl'):
    print("Model file not found. Training the model...")
    os.system('python model_training.py')

# Load the trained model
with open('astrology_model.pkl', 'rb') as f:
    model = pickle.load(f)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    birthday = data.get('birthday')

    if not birthday:
        return jsonify({'error': 'Birthday is required'}), 400

    # Convert birthday to timestamp
    birthday_timestamp = pd.to_datetime(birthday).value // 10**9
    input_data = pd.DataFrame({'birthday': [birthday_timestamp]})

    # Make prediction
    prediction = model.predict(input_data)
    return jsonify({'future_prediction': prediction[0]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
