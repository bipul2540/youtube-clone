import React from "react";
import { AiFillHome, AiTwotoneFire } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../style/Sidebar2.css";

function Sidebar2() {
  return (
    <>
      <div className="sidebar2-container">
        <ul className="sidebar-items">
          <li>
            <Link to="#">
              <AiFillHome className="side-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <AiTwotoneFire className="side-icon" />
              <span>Trending</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <MdSubscriptions className="side-icon" />
              <span>subscription</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <MdVideoLibrary className="side-icon" />
              <span>Library</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar2;
