import React from "react";

const Plant = ({ onStart, onStop, data }) => {
  const { id, name, lastWatered } = data;
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <p className="card-text">
          Last watered: {lastWatered ? lastWatered.toString() : "Never"}
        </p>
        <button className="btn btn-primary" onClick={() => onStart(id)}>
          Start
        </button>
        <button className="btn btn-danger ms-2" onClick={() => onStop(id)}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Plant;
