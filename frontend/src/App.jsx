import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav";

function App() {

  return (
    <div className="total-app">
      <div className="topbar-and-scroll-div">
        <div className="top-nav">

        </div>
        <div className="scroll-div">
        
        </div>
      </div>
      <div className="side-nav">
        <SideNav />
      </div>
    </div>
  );
}

export default App