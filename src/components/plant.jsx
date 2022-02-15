import React from "react";
import moment from "moment";

const Plant = ({ onStart, onStop, data }) => {
  const { id, name, isGettingWatered, lastWatered } = data;

  let btnStopClass, btnStartClass;
  if (isGettingWatered) {
    btnStartClass = "btn btn-secondary";
    btnStopClass = "btn btn-primary ms-2";
  } else {
    btnStartClass = "btn btn-primary";
    btnStopClass = "btn btn-secondary ms-2";
  }

  let text = lastWatered
    ? moment(lastWatered).format("YYYY MMM D hh:mm:ss A")
    : "Never";

  if (isGettingWatered) text = "watering...";

  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <p className="card-text">Last watered: {text}</p>
        <button
          className={btnStartClass}
          onClick={() => onStart(id)}
          disabled={isGettingWatered}
        >
          Start
        </button>
        <button
          className={btnStopClass}
          onClick={() => onStop(id)}
          disabled={!isGettingWatered}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Plant;
