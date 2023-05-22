import axios from "axios";

// const URL = "https://api.themoviedb.org/3";
// const API_KEY = "685baa76d61792bf6d2609df25f70c10";

// const endpoints = {
//   originals: "/discover/tv",
//   trending: "/trending/all/week",
//   now_playing: "/movie/now_playing",
//   popular: "/movie/popular",
//   top_rated: "/movie/top_rated",
//   upcoming: "/movie/upcoming",
// };

// export const fetchData = (param) => {
//   return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
// };

// const URL = "http://localhost:4000";

// const endpoints = {
//   movie: "/movie"
// }

export const fetchData = () => {
  // return axios.get(`${URL}${endpoints[param]}`);
  return axios.get('http://localhost:4000/movie')
}