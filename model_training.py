import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load the dataset
# Replace 'astrology_data.csv' with your dataset file
data = pd.read_csv('astrology_data.csv')

# Preprocess the data
# Assuming 'birthday' is a feature and 'future_prediction' is the target
data['birthday'] = pd.to_datetime(data['birthday']).astype(int) // 10**9  # Convert to timestamp
X = data[['birthday']]
y = data['future_prediction']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Save the model
with open('astrology_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("Model training complete. Saved as 'astrology_model.pkl'.")
