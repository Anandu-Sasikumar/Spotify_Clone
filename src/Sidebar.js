import { Link } from "react-router-dom";
import "./Home.css";

export default function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <div className="logo">
          <Link to="/HomePage">
            <img src="/Images/logo.png"></img>
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/HomePage">
                {" "}
                <span className="fa fa-home"></span>
                <span>Home</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/SearchPage">
                <span className="fa fa-search"></span>
                <span>Search</span>{" "}
              </Link>{" "}
            </li>
            <li>
              <span className="fa fas fa-book"></span>
              <span>Your Library</span>
            </li>
          </ul>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="fa fas fa-plus-square"></span>
                <span>Create Playlist</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="policies">
          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
