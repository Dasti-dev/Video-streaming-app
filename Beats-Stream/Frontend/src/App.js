import React from "react";
import "./App.scss";
import Header from "./components/Header.js";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Upload from "./components/Upload";
import Detail from "./components/Details";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect , useState } from 'react';
// import { getAuth } from 'firebase/auth';

function App() {

// useEffect(()=>{
//   const auth = getAuth();
//   auth.onAuthStateChanged((user)=>{
//     console.log('user');
//   })
// },[])

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <HomeBanner />
              </React.Fragment>
            }
          />
          <Route
            path="/login"
            element={
              <React.Fragment>
                <Header />
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/register"
            element={
              <React.Fragment>
                <Header />
                <Login />
              </React.Fragment>
            }
          />
          <Route
            path="/dashboard"
            element={
              <React.Fragment>
                <Header />
                <Banner />
                {/* <List title="Netflix Originals" param="originals" /> */}
                <List title="Netflix Originals" param="movie" />
                <List title="Trending Now" param="trending" />
                <List title="Now Playing" param="now_playing" />
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <List title="Upcoming" param="upcoming" />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/player"
            element={
              <React.Fragment>
                <Header />
                <Player />
                <Detail />
                <Footer />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/upload"
            element={
              <React.Fragment>
                <Header />
                <Upload />
                <Footer />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
