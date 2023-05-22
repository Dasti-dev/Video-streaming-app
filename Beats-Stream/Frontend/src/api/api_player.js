import axios from "axios";

export const fetchData = async (param) => {
	console.log("this is param")
	console.log(param)
    const data = await axios.get(`http://localhost:4000/movie/watch/${param}`);
	console.log("data");
	console.log(data);
	return data;
    
};
