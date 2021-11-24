import React, { Component } from "react";
import texts from "../text.json";
import logo from '../pictures/tom-logo2.jpg'

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {texts.main.home}
        </h1>
        <div className="center flex-column">
          <p>{texts.home.description}</p>
          <img src={logo} alt="TomSport" />
        </div>
      </div>
    );
  }
}

export default Home;
