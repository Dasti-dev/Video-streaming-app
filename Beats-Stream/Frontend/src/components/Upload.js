import React from 'react';
import UploadForm from './UploadForm';
import UploadList from './UploadList';

const Upload = () => {
	return (<>
	hello
    <div className="row">
      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
			<div className="card-body"><UploadForm/></div>
		</div>
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
			<div className="card-body"><UploadList/>two</div>
		</div>
      </div>
    </div>
  </>)
}

export default Upload;