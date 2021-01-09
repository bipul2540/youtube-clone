import React from "react";
import { Link } from "react-router-dom";
import "./../style/Navbar2.css";

function Navbar2({ isActive }) {
  return (
    <>
      <div
        className={
          !isActive ? "navbar2-container" : "navbar2-container navbar2-active"
        }
      >
        <ul className="nav2-items">
          <li>
            <Link to="#">All</Link>
          </li>
          <li>
            <Link to="#">Live</Link>
          </li>
          <li>
            <Link to="#">Jethalal Champaklal Gada</Link>
          </li>
          <li>
            <Link to="#">PUBG MOBILE</Link>
          </li>
          <li>
            <Link to="#">Javascript</Link>
          </li>
          <li>
            <Link to="#">Python</Link>
          </li>
          <li>
            <Link to="#">Bhojpuri</Link>
          </li>
          <li>
            <Link to="#">Comedy</Link>
          </li>
          <li>
            <Link to="#">Horror</Link>
          </li>
          <li>
            <Link to="#">movies</Link>
          </li>
          <li>
            <Link to="#">south india</Link>
          </li>
          <li>
            <Link to="#">website </Link>
          </li>
          <li>
            <Link to="#">Travel</Link>
          </li>
          <li>
            <Link to="#">Tourism</Link>
          </li>
          <li>
            <Link to="#">Data structure</Link>
          </li>
          <li>
            <Link to="#">Trailer</Link>
          </li>
          <li>
            <Link to="#">Fairies</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar2;
