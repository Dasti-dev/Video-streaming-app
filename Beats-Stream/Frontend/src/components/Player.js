import React from "react";
import ReactPlayer from "react-player";
import { fetchData } from "../api/api_player";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Player = () => {
  const location = useLocation();
  const mov = location.state;
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(String(mov)).then((res) => {
      setList(res.data.movieData);
    });
    console.log("mov print");
    console.log(mov);
  });
  console.log(list);

  return (
    <>
      {list.map((item) => (
        <ReactPlayer
          width="100%"
          height="90vh"
          autoPlay
          controls
          url={item.link}
        />
      ))}
    </>
  );
}
export default Player;
