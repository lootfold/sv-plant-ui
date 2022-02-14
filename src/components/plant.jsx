import React, { Component } from "react";
import moment from "moment";

class Plant extends Component {
  render() {
    const { onAlert, onStart, onStop, data } = this.props;
    const { id, name, isGettingWatered, lastWatered } = data;
    if (lastWatered === null && isGettingWatered === false) {
      onAlert(id);
    } else {
      const now = moment();
      const diff = now.diff(lastWatered, "minutes");
      if (diff > 6) onAlert(id);
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
          <button className="btn btn-primary" onClick={() => onStart(id)}>
            Start
          </button>
          <button className="btn btn-danger ms-2" onClick={() => onStop(id)}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default Plant;
