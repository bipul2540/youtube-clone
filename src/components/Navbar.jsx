import React from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaMicrophone } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import "./../style/Navbar.css";

function Navbar({ isActive, setActive, searchText, setSearchText }) {
  const handleClick = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  const searchBoxHandler = () => {
    console.log("click");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="left-panel">
            <FaBars className="burger" onClick={handleClick} />
            <div className="logo">
              <AiFillYoutube className="youtube-icon" />
              <span>YouTube</span>
            </div>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleChange}
            />
            <button>
              <AiOutlineSearch />
            </button>
            <FaMicrophone className="microphone" />
            <BiSearchAlt2
              className="mobile-search"
              onClick={searchBoxHandler}
            />
          </div>
          <div className="right-panel">
            <BsFillCameraVideoFill />
            <MdApps />
            <IoMdNotifications />
            <FaUserCircle className="user" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
