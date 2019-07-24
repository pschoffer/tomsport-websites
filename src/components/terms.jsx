import React, { Component } from "react";
import texts from "../text.json";

class Terms extends Component {
  state = {};

  renderItem(item) {
    return <li key={item}>{item}</li>;
  }

  render() {
    return (
      <div>
        <h1 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {texts.main.terms}
        </h1>
        <ul className="text-left">{texts.terms.base.map(this.renderItem)}</ul>
        <h2>{texts.terms.return_title}</h2>
        <ul className="text-left">{texts.terms.return.map(this.renderItem)}</ul>
      </div>
    );
  }
}

export default Terms;
