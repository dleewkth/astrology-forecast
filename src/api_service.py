from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow cross-origin requests

@app.route('/api/predict', methods=['POST'])
def get_forecast():
    data = request.get_json()
    birthdate = data.get('birthdate')
    
    # Placeholder logic for generating astrology forecast
    forecast = f"Astrology forecast for {birthdate}: Today is a great day for new beginnings!"
    
    return jsonify({"forecast": forecast})

if __name__ == '__main__':
    app.run(debug=True)
