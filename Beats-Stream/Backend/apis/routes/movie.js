const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require("cloudinary").v2;
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null,'assets/')
  },
  filename: function(req,file,cb) {
    cb(null, file.fieldname + "-" + Date.now())
  }
})

const upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: "dtjqiisdr",
  api_key: "183419962115524",
  api_secret: "phfoucqbTDMybKoYVSoqyHaRIic",
});

router = express.Router();

const Movie = require('../model/movie');

router.get('/',(req,res,next) => {
	Movie.find()
	.exec()
	.then(result=>{
		res.status(200).json({
			movieData : result,
		})
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({
			error:err
		})
	})

})

router.post("/", upload.fields([{name: 'poster', maxCount: 1},{ name: 'video', maxCount: 1}]) , (req, res, next) => {
	const file = req.files.poster;
	cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
		console.log(result);

const videoPath = req.files['video'][0].path;
const videoLink = `${process.env.SERVER_URL}/videos/${req.files["video"][0].filename}`;

	const movie = new Movie({
		_id : new mongoose.Types.ObjectId,
		name : req.body.name,
		genre : req.body.genre,
		poster : result.url,
		link : videoLink,
		disp : req.body.discription,
		duration: req.body.duration
	})
  movie.save()
    .then((result) => {
      res.status(200).json({
		new_movie : result
	  });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
	})
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.find({genre:id})
  .exec()
    .then((result) => {
      res.status(200).json({
        movieData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/watch/:id", (req, res, next) => {
  const id = req.params.id;
  Movie.find({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        movieData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});



module.exports = router;