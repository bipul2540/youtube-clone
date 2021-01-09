import React from "react";
import "./../style/VideoCard.css";
import image2 from "./../image/image2.jfif";
import { TiTickOutline } from "react-icons/ti";

function VideoCard({ thumbnail, title, channelTitle }) {
  return (
    <>
      <div className="card-container">
        <div className="card-thumbnail">
          <img src={thumbnail} alt="notfound" />
        </div>
        <div className="card-content">
          <div className="user">
            <img src={image2} alt="" />
          </div>
          <div className="video-description">
            <p className="about">{title}</p>
            <div className="channel-data">
              <p className="channel-name">
                {channelTitle} <TiTickOutline className="verified" />
              </p>
              <div className="video-views-and-time">
                <p className="views">45k views</p>
                <p className="time">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
