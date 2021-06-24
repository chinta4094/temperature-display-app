import React, { useState } from "react";

import "./index.css";
const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperatue = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 0 && newTemperature < 15) {
      setTemperatureColor("cold");
    }
    if (newTemperature >= 15) {
      setTemperatureColor("moderate");
    }
    if (newTemperature >= 25) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);
  };
  const decreaseTemperature = () => {
    if (temperatureValue === -10) return;
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
    if (newTemperature < 25) {
      setTemperatureColor("moderate");
    }
    if (newTemperature < 10) {
      setTemperatureColor("cold");
    }
    if (newTemperature < 0) {
      setTemperatureColor("ice");
    }
    setTemperatureValue(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperatue()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;
