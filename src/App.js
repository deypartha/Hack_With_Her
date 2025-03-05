import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Navbar from "./Component/Navbar";
import Home from "./Component/Home"; 
import Story from "./Component/Story";
import About from "./Component/About";
import AskQuestion from "./Component/Ask";  
import LiveLocation from "./Component/LiveLocation";
// import LiveLocationSender from "./Component/LiveLocationSender";
// import LiveLocationTracker from "./Component/LiveLocationTracker";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      easing: "ease-in-out",
      mirror: true, 
    });

    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/map" element={<LiveLocation/>}></Route>
      </Routes>
      <AskQuestion />
    </Router>
  );
};

export default App;

