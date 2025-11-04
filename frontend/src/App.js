import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function Home() {
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
      const res = await axios.post(
        "https://evision-drive-1.onrender.com/predict",
        form
      );
      setResult(`Estimated range: ${res.data.predicted_km.toFixed(2)} km`);
    } catch (err) {
      setResult("Error connecting to backend or calculating.");
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>⚡ EVisionDrive Range Estimator</h1>
        <form onSubmit={handleSubmit}>
          <label>Vehicle Model:</label>
          <select name="model" value={form.model} onChange={handleChange}>
            <option>NexaEV-100</option>
            <option>CityEV-50</option>
            <option>WorkEV-200</option>
          </select>

          <label>Battery %:</label>
          <input
            type="number"
            name="battery_pct"
            value={form.battery_pct}
            onChange={handleChange}
          />

          <label>Average Speed (km/h):</label>
          <input
            type="number"
            name="avg_speed"
            value={form.avg_speed}
            onChange={handleChange}
          />

          <button type="submit">Get Estimate</button>
        </form>
        <h3>{result}</h3>
      </div>
      <div className="footer">© 2025 EVisionDrive by Vishnu Bansal</div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
