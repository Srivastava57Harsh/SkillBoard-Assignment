import Sidebar from "./sidebar";
import "./profile.css";
import { useState } from "react";

export default function Profile() {
  const [recordStatus, setRecordStatus] = useState("edit");
  const [recordStatus2, setRecordStatus2] = useState("edit");
  const [recordStatus3, setRecordStatus3] = useState("edit");
  const [recordStatus4, setRecordStatus4] = useState("edit");
  const [name, setName] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    years: "",
    remoteYears: "",
    english: "Poor",
    work: "Part Time",
  });

  window.localStorage.setItem("data", JSON.stringify(data));

  return (
    <div className="gridContainer">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="form">
        <div className="uploadResume">
          <label className="uploadLabel">
            <img src="./resume.png" className="icons" />
            <p className="text">
              Upload your <br /> resume
            </p>
          </label>
          <div className="uploadButtoncontainer">
            <label className="uploadButton" title="Upload">
              <input
                type="file"
                name="uploadfile"
                id="img"
                className="uploadButtoninput"
                disabled={recordStatus === "edit"}
              />
              Let's start uploading your resume
            </label>
            <img
              src={recordStatus === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus === "tick") {
                  setRecordStatus("edit");
                } else {
                  setRecordStatus("tick");
                }
              }}
              className="icons2"
            />
          </div>
        </div>
        <div className="details">
          <div className="nameCountry">
            <div className="nameLabel">
              <label className="nameCircle">{name}</label>
              <div>
                <input
                  id="nameInputId"
                  className="nameText"
                  onChange={async (event) => {
                    const nameText = event.target.value.substring(0, 4);
                    if (recordStatus2 === "tick") {
                      setName(nameText);
                    }
                  }}
                  placeholder="John Doe"
                  readOnly={recordStatus2 === "edit"}
                ></input>
                <input
                  className="countryText"
                  placeholder="Albania"
                  readOnly={recordStatus2 === "edit"}
                ></input>
              </div>
            </div>
            <div className="nameEdit">
              <img
                src={recordStatus2 === "tick" ? "/tick.svg" : "/edit.png"}
                onClick={async () => {
                  if (recordStatus2 === "tick") {
                    // const form: HTMLFormElement = document.getElementById(
                    //   "nameInputId"
                    // ) as HTMLFormElement;
                    // const username = (form.elements[0] as HTMLInputElement)
                    //   .value;
                    //
                    setRecordStatus2("edit");
                  } else {
                    setRecordStatus2("tick");
                  }
                }}
                className="icons2"
              />
            </div>
          </div>
          <div className="moreInfo">
            <img src="./mail.png" className="icons3" />
            <input
              className="emailInput"
              placeholder="Email"
              readOnly={recordStatus2 === "edit"}
            ></input>
            <img src="./phone.png" className="icons3" />
            <input
              className="emailInput"
              placeholder="Phone"
              readOnly={recordStatus2 === "edit"}
            ></input>
            <img src="./linkedin.png" className="icons4" />
            <img src="./github.png" className="icons5" />
          </div>
        </div>
        <div className="experience">
          <label className="experienceLabel">
            <img src="./experience.png" className="icons6" />
            <p className="text">Overall experience</p>
          </label>
          <div className="experienceEditcontainer">
            <div className="years">
              <input
                className="yearInput"
                placeholder="7"
                readOnly={recordStatus3 === "edit"}
              ></input>{" "}
              years /{" "}
              <input
                className="yearInput"
                placeholder="0"
                readOnly={recordStatus3 === "edit"}
              ></input>{" "}
              remote years
              <br />
              <select
                className="englishInput"
                disabled={recordStatus3 === "edit"}
              >
                <option value="">Professional</option>
                <option value="">Poor</option>
                <option value="">Average</option>
              </select>{" "}
              English proficiency
            </div>
            <img
              src={recordStatus3 === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus3 === "tick") {
                  setRecordStatus3("edit");
                } else {
                  setRecordStatus3("tick");
                }
              }}
              className="icons2"
            />
          </div>
        </div>
        <div className="availability">
          <label className="experienceLabel">
            <img src="./availability.png" className="icons6" />
            <p className="text3">Availabilty</p>
          </label>
          <div className="availabilitycontainer">
            <div className="years">
              <select
                className="availabiltyInput"
                disabled={recordStatus4 === "edit"}
              >
                <option value="">Part Time</option>
                <option value="">Full Time</option>
              </select>
            </div>
            <img
              src={recordStatus4 === "tick" ? "/tick.svg" : "/edit.png"}
              onClick={async () => {
                if (recordStatus4 === "tick") {
                  setRecordStatus4("edit");
                } else {
                  setRecordStatus4("tick");
                }
              }}
              className="icons2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
