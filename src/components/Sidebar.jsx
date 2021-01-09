import React from "react";
import { AiFillHome, AiTwotoneFire } from "react-icons/ai";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdLocalMovies,
  MdWatchLater,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { BiDownArrowAlt } from "react-icons/bi";
import "./../style/Sidebar.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Sidebar({ isActive, setActive }) {
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <>
      <IconContext.Provider value={{ fontSize: "2rem" }}>
        <div
          className={
            !isActive ? "sidebar-container" : "sidebar-container active"
          }
        >
          <div className="side-items">
            <ul className="side-links one">
              <li>
                <Link to="/">
                  <AiFillHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link>
                  <AiTwotoneFire />
                  <span>Trending</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MdSubscriptions />
                  <span>Subscription</span>{" "}
                </Link>
              </li>
            </ul>
            <hr />

            <ul className="side-link two">
              <li>
                <Link to="">
                  <MdVideoLibrary />
                  <span>Library</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaHistory />
                  <span>History</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <RiVideoFill />
                  <span>Your videos</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <MdLocalMovies />
                  <span>Your movies</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <MdWatchLater />
                  <span>Watch later</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <BiDownArrowAlt />
                  <span>Show more</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
      <div
        className={!isActive ? "fade" : "fade fade-active"}
        onClick={handleClick}
      ></div>
    </>
  );
}

export default Sidebar;
