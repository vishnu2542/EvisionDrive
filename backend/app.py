from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    model = data.get("model", "EV")
    battery = float(data.get("battery_pct", 0))
    speed = float(data.get("avg_speed", 0))

    # Simple formula instead of ML (for demo)
    base_range = 300 if "200" in model else 200 if "100" in model else 150
    range_km = base_range * (battery / 100) * (80 / (speed + 20))
    return jsonify({"predicted_km": range_km})

@app.route("/")
def home():
    return "EVisionDrive Backend Running!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
