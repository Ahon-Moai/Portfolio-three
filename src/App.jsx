import React from "react";
import "../src/index.css";
import Navbar from "./components/Navbar";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/work";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
