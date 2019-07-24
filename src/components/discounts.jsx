import React, { Component } from "react";
import texts from "../text.json";

class Discounts extends Component {
  renderDiscount = discount => {
    return (
      <li class="list-group-item" key={discount.id}>
        <h5>{discount.header}</h5>
        <p>{discount.description}</p>
      </li>
    );
  };

  render() {
    return (
      <div>
        <h1 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {texts.main.discounts}
        </h1>
        <ul class="list-group list-group-flush">
          {texts.discounts.map(this.renderDiscount)}
        </ul>
      </div>
    );
  }
}

export default Discounts;
