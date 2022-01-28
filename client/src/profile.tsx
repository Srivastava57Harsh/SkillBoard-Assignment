import Sidebar from "./sidebar";
import "./profile.css";

export default function Profile() {
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
            <label className="uploadButton">
              Let's start uploading your resume
            </label>
            <img src="./edit.png" className="icons2" />
          </div>
        </div>
        <div className="details">
          <div className="nameCountry">
            <div className="nameLabel">
              <label className="nameCircle">John</label>
              <p className="nameText">
                John Doe<p className="countryText">Albania</p>
              </p>
            </div>
            <div className="nameEdit">
              <img src="./edit.png" className="icons2" />
            </div>
          </div>
          <div className="moreInfo">
            <img src="./mail.png" className="icons3" />
            <input className="emailInput" placeholder="Email"></input>
            <img src="./phone.png" className="icons3" />
            <input className="emailInput" placeholder="Phone"></input>
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
              <input className="yearInput" placeholder="7"></input> years /{" "}
              <input className="yearInput" placeholder="0"></input> remote years
              <br />
              <select placeholder="Average" className="englishInput" disabled>
                <option value="">Poor</option>
                <option value="">Average</option>
                <option value="">Professional</option>
              </select>{" "}
              English proficiency
            </div>
            <img src="./edit.png" className="icons2" />
          </div>
        </div>
      </div>
    </div>
  );
}
