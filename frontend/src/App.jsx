import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import DownNav from "./components/DownNav";
import TopNav from "./components/TopNav";
import PortfolioContent from "./allpages/PortfolioContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./allpages/Home";
import About from "./allpages/About";
import Skills from "./allpages/Skills";
import Projects from "./allpages/Projects";
import Contacts from "./allpages/Contacts";



function App() {

  return (
    <div className="total-app">
      {/* <div className="top-nav">
          <TopNav />
      </div> */}
      <div className="topbar-and-scroll-div">

        <div className="scroll-div">
          {/* <PortfolioContent /> */}
          <Routes>
            <Route path="/" element={<PortfolioContent />} />
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} /> */}
          </Routes>
        </div>
        <div className="side-nav">
          <SideNav />
        </div>
        <div className="down-nav">
          <DownNav />
        </div>
      </div>

    </div>
  );
}

export default App