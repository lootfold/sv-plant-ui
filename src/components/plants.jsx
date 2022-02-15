import React, { Component } from "react";
import Plant from "./plant";
import plantService from "../services/plantService";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Plants extends Component {
  state = {
    plants: [],
  };

  async componentDidMount() {
    await this.getPlants();
    this.checkForAlerts();
  }

  async getPlants() {
    const plants = await plantService.getPlants();
    this.setState({ plants });
  }

  checkForAlerts() {
    this.state.plants.forEach((p) => {
      if (p.lastWatered === null && p.isGettingWatered === false) {
        this.showAlert(p.name);
      } else {
        const now = moment();
        const diff = now.diff(p.lastWatered, "minutes");
        if (diff > 6) {
          this.showAlert(p.name);
        }
      }
    });
  }

  showAlert(plantName) {
    toast.warning(
      `${plantName} has not been watered for more than six hours.`,
      {
        autoClose: false,
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  }

  handleStart = async (id) => {
    const success = await plantService.startWatering(id);
    if (success) {
      const { name } = this.state.plants.filter((p) => p.id === id)[0];
      toast.success(`Started watering plant ${name}.`, {
        autoClose: 10000,
        pauseOnFocusLoss: false,
      });
      this.stopTimeout = setTimeout(
        (id) => {
          this.handleStop(id);
        },
        10000,
        id
      );
    }
    await this.getPlants();
  };

  handleStop = async (id) => {
    const success = await plantService.stopWatering(id);
    if (success) {
      const { name } = this.state.plants.filter((p) => p.id === id)[0];
      toast.success(`Stopped watering plant ${name}.`, {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
    await this.getPlants();
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row justify-content-center">
          {this.state.plants.map((p) => (
            <div className="col-sm-12 col-md-4 mt-2" key={p.id}>
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
