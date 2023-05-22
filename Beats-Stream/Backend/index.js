const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000;

const logRoute = require('./apis/routes/login');
const movieRoute = require('./apis/routes/movie');

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://netflixproject609:isGQu0qYp1Keti7G@netflix.fgz01bl.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("error", (err) => {
  console.log("connection is failed");
});
mongoose.connection.on("connected", (connected) => {
  console.log("database connection is on");
});

app.use(cors());

app.use(fileUpload({
	useTempFiles:true
}))

// app.use('/',(req,res,next) => {
// 	res.send('Hello World');
// })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/account',logRoute);
app.use('/movie',movieRoute);

app.use("/",(req,res,next)=>{
	res.send("hope this reaches you soon , I am good and alive ;)")
})

app.use("/", (req, res, next) => {
  res.status(404).json({
    error: "error aaya re , bad request",
  });
});

app.listen(PORT, () => {
	console.log(`Listening at ${PORT}`);
})