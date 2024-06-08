import React, { useState, useEffect } from "react";
import "./App.css";
import Mycontainer from "./allpages/MyContainer/Mycontainer";

function App() {

  return (
    <div className="total-app">
      <div className="my-container">
        <Mycontainer />
      </div>
      <div className="topnav-and-content">
        <div className="topnav">

        </div>
        <div className="content">

        </div>
      </div>
    </div>
  );
}

export default App