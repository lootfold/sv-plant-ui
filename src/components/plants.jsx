import React, { Component } from "react";
import Plant from "./plant";

class Plants extends Component {
  baseUrl = "https://localhost:5001/api/plants";
  state = {
    plants: [],
  };

  async componentDidMount() {
    await this.getPlants();
  }

  async getPlants() {
    const plants = await fetch(this.baseUrl).then((r) => r.json());
    this.setState({ plants });
  }

  handleStart = async (id) => {
    const url = `${this.baseUrl}/${id}/start`;
    const response = await fetch(url, { method: "POST" });
    console.log(response);
    await this.getPlants();
  };

  handleStop = async (id) => {
    const url = `${this.baseUrl}/${id}/stop`;
    const response = await fetch(url, { method: "POST" });
    console.log(response);
    await this.getPlants();
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
