// import { fetchData } from '../api/api';
// import {useState,useEffect} from 'react';

// const List = ({title, param}) => {
// 	const[list, setList] = useState([]);
// 	useEffect(()=>{
// 		fetchData(param).then(res => setList(res.data.results))
// 	},[]);
// 	return (
// 		<div className="list">
// 			<div className="row">
// 				<h2 className="text-white title">{title}</h2>
// 				<div className="col">
// 				<div className="row__posters">
// 					{List.map((item) => (
// 					<img
// 						className="row__poster row__posterLarge"
// 						src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
// 						alt={item.title}
// 					/>
// 					))}
// 				</div>
// 				</div>
// 			</div>
// 		</div>
//   );
// }

// export default List;

import { useEffect, useState } from "react";
import { fetchData } from "../api/api_main";
import { Link } from "react-router-dom";
// import { useHistory } from 'react';

const List = ({ title }) => {
  const [list, setList] = useState([]);
  const [id, setId] = useState([]);
  useEffect(() => {
    fetchData().then((res) => {
      setList(res.data.movieData);
    });
    console.log("blu blu");
  }, []);
  console.log(list);

  // const navigate = useNavigate();
  // const history = useHistory();
  // const toPlayer = (params) => {
  //   const data = { params };
  //   history.push('/Player', data);
  // };

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {list.map((item) => (
              <Link to="/Player" state={String(item._id)}>
                {/* // <a onClick={toPlayer(item)}>  */}
                <img
                  className="row__poster row__posterLarge"
                  // src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  src={item.poster}
                  // alt={item.title}
                  alt={item.name}
                />

                {/* </a>    */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
