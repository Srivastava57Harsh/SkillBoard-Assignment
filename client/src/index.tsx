import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./homePage";
import Profile from "./profile";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <HomePage />
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
