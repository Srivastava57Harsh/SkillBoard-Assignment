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
      </div>
    </div>
  );
}
