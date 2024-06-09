import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import PortfolioContent from "./allpages/PortfolioContent";



function App() {

  return (
    <div className="total-app">
      <div className="topbar-and-scroll-div">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="scroll-div">
          <PortfolioContent />
        </div>
      </div>
      <div className="side-nav">
        <SideNav />
      </div>
    </div>
  );
}

export default App