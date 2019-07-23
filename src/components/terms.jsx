import React, { Component } from "react";
import texts from "../text.json";

class Terms extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {texts.main.terms}
        </h1>
      </div>
    );
  }
}

export default Terms;
