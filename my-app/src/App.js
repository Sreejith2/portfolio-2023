import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";
import Email from "./components/Email";
import Footer from "./components/Footer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import options from "./components/particlesConfig";
import "./App.css";
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);
  return (
    <>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: 'absolute', zIndex: 1 }}
            options={options}
        />
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
