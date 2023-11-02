import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";
import Email from "./components/Email";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <div id="home" className="topContainer">
        <NavBar/>
        <Home/>
      </div>
      <div id="project" className="middleContainer">
        <Project title="Bus-Ticket-Booking-System" text="MogoDB,Node.js,Express,EJS" img="assets/img/Bus.png" link="https://github.com/Sreejith2/DBMS-Project.git"/>
        <Project title="Amazone-Price-Tracker" text="Python" img="assets/img/amazone.jpg" link="https://github.com/Sreejith2/Amazon_Price_Tracker.git"/>
        <Project title="Spotify-Backend" text="Node.js,Express" img="assets/img/spotify.jpg" link="https://github.com/Sreejith2/Spotify-Backend.git"/>
      </div>
      <div id="contact" className="bottomContainer">
        <Email/>
        <Footer/>
      </div>
    </> 
  );
}

export default App;
