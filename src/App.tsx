import { Transition } from "react-transition-group";
import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import React, { useRef, useState } from "react";
import SideNavBar from "./Components/NavBar/SideNavBar";
import "./index.css";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <SideBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
