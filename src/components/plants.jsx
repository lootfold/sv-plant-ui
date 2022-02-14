import React, { Component } from "react";
import Plant from "./plant";
import plantService from "../services/plantService";

class Plants extends Component {
  state = {
    plants: [],
  };

  async componentDidMount() {
    await this.getPlants();
  }

  async getPlants() {
    const plants = await plantService.getPlants();
    this.setState({ plants });
  }

  handleStart = async (id) => {
    await plantService.startWatering(id);
    await this.getPlants();
  };

  handleStop = async (id) => {
    await plantService.stopWatering(id);
    await this.getPlants();
  };

  handleAlert = (id) => {
    // console.log("asert for ", id);
  };

  render() {
    return (
      <div className="row justify-content-center">
        {this.state.plants.map((p) => (
          <div className="col-4 mt-2" key={p.id}>
            <Plant
              data={p}
              onStart={this.handleStart}
              onStop={this.handleStop}
              onAlert={this.handleAlert}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Plants;
