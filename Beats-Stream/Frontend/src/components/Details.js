import React from "react";
import { fetchData } from "../api/api_player";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
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
		{
			list.map((item) => (
				<>
				<h1>{ item.name }</h1>

				<hr />

				<p>Genre : {item.genre} </p>
				<p>{item.disp}</p>
				</>
				)
			)
		}
			
		</>
	)
};

export default Detail;