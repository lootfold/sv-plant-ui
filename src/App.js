import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Plants from "./components/plants";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Plants />
      </main>
    </React.Fragment>
  );
}

export default App;
