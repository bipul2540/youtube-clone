import React, { useEffect, useState } from "react";
import "./../style/Home.css";
import Errors from "./Errors";
import VideoCard from "./VideoCard";

function Home({ isActive }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=AIzaSyApXGQDZYKAHElpeChLx0J4vv7q_IIB3rU&part=snippet,id&order=date&maxResults=20"
      );

      const data = await response.json();
      await setItems(data.items);
    } catch {
      console.log("error");
    }
  };
  return (
    <div className={!isActive ? "home" : "home home-active"}>
      <div className="home-container">
        {items ? (
          items.map((item) => {
            return (
              <VideoCard
                key={item.id.videoId}
                thumbnail={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
              />
            );
          })
        ) : (
          <Errors />
        )}
      </div>
    </div>
  );
}

export default Home;
