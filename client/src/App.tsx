import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <p className="heading">ASTRA</p>
      <div className="gridContainer">
        <div className="cardOne">
          <div className="text1Container">
            <label className="text1">
              <img src="/assignment_turned_in.svg" className="image1" />
              <p className="para1">Available for job</p>
            </label>
          </div>
        </div>
        <div className="cardTwo"></div>
        <div className="cardThree"></div>
      </div>
    </div>
  );
}

export default App;
