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
            <p className="number">2</p>
            <p>
              Pass Live
              <br />
              Coding Challenges
            </p>
          </label>
          <label className="label">
            <p className="number">3</p>
            <p>
              Finalise <br />
              your resume
            </p>
          </label>
          <label className="label">
            <p className="number">4</p>
            <p>
              Receive <br />
              job offers
            </p>
          </label>
        </div>
      </div>
      <div className="cardThree">
        <label className="canvas">
          <img src="/vector.png" className="canvasImage" />
          <div className="keyPoints">
            <p>Why join</p>
            <label className="points">
              <p className="number">1</p>
              <p className="textPoint">
                Work full-time at top Silicon Valley or other U.S. companies.
              </p>
            </label>
            <label className="points">
              <p className="number">2</p>
              <p className="textPoint">
                Earn a better salary compared to local companies in your city.
              </p>
            </label>
            <label className="points">
              <p className="number">3</p>
              <p className="textPoint">
                Grow as a developer by working with the smartest engineers from
                all over the world.
              </p>
            </label>
            <label className="points">
              <p className="number">4</p>
              <p className="textPoint">
                Get paid monthly directly to your bank account. Forget about
                issues with PayPal or Payoneer.
              </p>
            </label>
          </div>
        </label>
      </div>
    </div>
  );
}
