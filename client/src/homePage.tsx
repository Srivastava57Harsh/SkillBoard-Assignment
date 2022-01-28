import "./homePage.css";
import Sidebar from "./sidebar";

export default function HomePage() {
  return (
    <div className="gridContainer">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="cardTwo">
        <p className="Welcome">Welcome John!</p>
      </div>
    </div>
  );
}
