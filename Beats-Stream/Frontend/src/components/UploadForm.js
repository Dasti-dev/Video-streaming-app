// import React,{ useState } from 'react';
// import axios from 'axios';


// const UploadForm = () => {
// 	const [name, setName] = useState('')
// 	const [genre, setGenre] = useState('')
// 	const [disc, setDisc] = useState('');
// 	const [dur, setDur] = useState('');
// 	const [photo, setPhoto] = useState('');
// 	const [videos, setVideos] = useState('');
// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		let formdata = new FormData();
// 		console.log("jara hai");
		
// 		formdata.append("duration", dur);
// 		console.log("abhi hai 1")
		
//       	formdata.append("disp", disc);
// 		console.log("abhi hai 2");

// 		formdata.append("name",name);
// 		console.log("abhi hai 3");

// 		formdata.append("genre",genre);
// 		console.log("abhi hai 4");

// 		formdata.append("photo", photo);
// 		console.log("abhi hai 5");

// 		formdata.append("videos", videos);
// 		console.log("abhi hai 6");

// 		console.log(formdata);

// 		axios.post(`http://localhost:4000/movie`,formdata).then(success => {
// 			alert('Submitted successfully')
// 		}).catch(error => {
// 			console.log(error);
// 			alert('Error Happend')
// 		})
// 	};
// 	return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="genre">Genre</label>
//           <input
//             type="text"
//             name="genre"
//             id="name"
//             className="form-control"
//             onChange={(e) => setGenre(e.target.value)}
//           />
//           <label htmlFor="disc">Discription</label>
//           <input
//             type="text"
//             name="disc"
//             id="name"
//             className="form-control"
//             onChange={(e) => setDisc(e.target.value)}
//           />
//           <label htmlFor="name">Duration</label>
//           <input
//             type="text"
//             name="dur"
//             id="name"
//             className="form-control"
//             onChange={(e) => setDur(e.target.value)}
//           />
//         </div>
// 		<hr />
//         <div className="form-group">
//           <label htmlFor="videos">Upload Videos</label>
//           <input
//             type="file"
//             name="videos"
//             id="videos"
//             multiple
//             className="form-control"
//             accept=".mp4,.mkv"
//             onChange={(e) => {
//               setVideos(e.target.files);
//             }}
//           />
//           <label htmlFor="videos">Upload Poster</label>
//           <input
//             type="file"
//             name="photo"
//             id="videos"
//             multiple
//             className="form-control"
//             accept=".png,.jpeg,.jpg"
//             onChange={(e) => {
//               setPhoto(e.target.files);
//             }}
//           />
//         </div>
// 		<hr />

//         <button type="submit" className="btn btn-primary mt-2">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }

// export default UploadForm;

import React, { useState } from "react";
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [poster, setPoster] = useState(null);
  const [video, setVideo] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handlePosterChange = (event) => {
    setPoster(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log({ name, genre, description, duration, poster, video });

    const formData = new FormData();
    formData.append("name", name); // text field
    formData.append("description", description); // text area
    formData.append("genre", genre); // text field
    formData.append("duration", duration); // text area
    formData.append("poster", poster); // image file
    formData.append("video", video); // video file

    try {
    const response = axios.post('http://localhost:4000/movie', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
        }
      });
    
    console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Name:
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label>
          Genre:
          <input
            id="name"
            className="form-control"
            type="text"
            value={genre}
            onChange={handleGenreChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            id="name"
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <label>
          Duration:
          <input
            id="name"
            className="form-control"
            type="text"
            value={duration}
            onChange={handleDurationChange}
          />
        </label>
        <br />
        <label>
          Poster:
          <input
            id="name"
            className="form-control"
            type="file"
            accept="image/png"
            onChange={handlePosterChange}
          />
        </label>
        <br />
        <label>
          Video:
          <input
            id="name"
            className="form-control"
            type="file"
            accept="video/mp4"
            onChange={handleVideoChange}
          />
        </label>
      </div>

      <br />
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
