import React from "react";
import logo from "./logo.svg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div>
      <p className="heading">ASTRA</p>
      <div className="cardOne">
        <div className="text1Container">
          <label className="text1">
            <img src="/assignment_turned_in.svg" className="image1" />
            <p className="para1">Available for job</p>
          </label>
        </div>

        <label
          className="text2"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src="/home.svg" className="image2" />
          <p className="para2">Home</p>
        </label>
        <div className="text1Container2">
          <label
            className="content"
            onClick={() => {
              window.location.href = "/profile";
            }}
          >
            <img src="/assignment_turned_in.svg" className="image3" />
            <p className="para3">Profile</p>
          </label>
          <label className="content2">
            <img src="/stop.svg" className="image4" />
            <p className="para4">Apply for Jobs</p>
          </label>
          <label className="content3">
            <img src="/stop.svg" className="image5" />
            <p className="para5">Mail Box</p>
          </label>
        </div>
      </div>
    </div>
  );
}
