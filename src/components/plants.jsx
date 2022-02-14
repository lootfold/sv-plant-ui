import React, { Component } from "react";
import Plant from "./plant";

class Plants extends Component {
  state = {
    plants: [],
  };

  async componentDidMount() {
    const url = "https://localhost:5001/api/plants";
    const response = await fetch(url);
    const plants = await response.json();
    this.setState({ plants });
  }

  handleStart = (id) => {
    console.log("start", id);
  };

  handleStop = (id) => {
    console.log("stop", id);
  };

  render() {
    return (
      <React.Fragment>
        <h2>Plants</h2>

        <div className="row justify-content-center">
          {this.state.plants.map((p) => (
            <div className="col-4 mt-2" key={p.id}>
              <Plant
                data={p}
                onStart={this.handleStart}
                onStop={this.handleStop}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Plants;
