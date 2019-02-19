import React, { Component } from "react";
import "./App.css";
// import NavBar from "./components/navbar/Nabvar";
import Images from "./components/images/Images";
import Hero from "./components/hero/Hero";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <NavBar /> */}
        <Hero />
        <Images />
      </div>
    );
  }
}

export default App;
