import "./homePage.css";
import Sidebar from "./sidebar";

export default function HomePage() {
  return (
    <div className="gridContainer">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="cardTwo">
        <p className="welcomeUsername">Welcome John!</p>
        <br />
        <p className="tagLine">How to get jobs with top U.S. companies </p>
        <div className="cards">
          <label className="label">
            <p className="number">1</p>
            <p>
              Take 1<br />
              Tests
            </p>
          </label>
          <label className="label">
            <p className="number">1</p>
            <p>
              Pass Live
              <br />
              Coding Challenges
            </p>
          </label>
          <label className="label">
            <p className="number">1</p>
            <p>
              Finalise <br />
              your resume
            </p>
          </label>
          <label className="label">
            <p className="number">1</p>
            <p>
              Receive <br />
              job offers
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
