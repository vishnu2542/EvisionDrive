import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({
    model: "NexaEV-100",
    battery_pct: 80,
    avg_speed: 40,
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ⚠️ Change this URL after backend deployment
      const res = await axios.post(
        "https://evisiondrive.onrender.com/predict",
        form
      );
      setResult(`Estimated range: ${res.data.predicted_km.toFixed(2)} km`);
    } catch (err) {
      setResult("Error connecting to backend or calculating.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>⚡ EVisionDrive Range Estimator</h1>
      <form onSubmit={handleSubmit}>
        <label>Vehicle Model:</label>
        <select name="model" value={form.model} onChange={handleChange}>
          <option>NexaEV-100</option>
          <option>CityEV-50</option>
          <option>WorkEV-200</option>
        </select>
        <br /><br />
        <label>Battery %:</label>
        <input
          type="number"
          name="battery_pct"
          value={form.battery_pct}
          onChange={handleChange}
        />
        <br /><br />
        <label>Average Speed (km/h):</label>
        <input
          type="number"
          name="avg_speed"
          value={form.avg_speed}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Get Estimate</button>
      </form>
      <h3 style={{ marginTop: "20px" }}>{result}</h3>
    </div>
  );
}


