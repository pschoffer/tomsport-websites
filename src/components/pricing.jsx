import React, { Component } from "react";
import texts from "../text.json";

class Pricing extends Component {
  state = {};

  constructor(props) {
    super(props);
    const {
      set,
      day_1,
      day_plural,
      day_plural_more,
      downpayment,
      ski,
      ski_child,
      snowboard
    } = texts.pricing;

    const baseHeader = [
      "",
      "1 " + day_1,
      "2 " + day_plural,
      "3 " + day_plural,
      "4 " + day_plural,
      "5 až 11 " + day_plural_more,
      downpayment
    ];

    this.state = {
      set: {
        header: baseHeader,
        items: [
          [
            ski + " - " + set,
            "170 $",
            "270 $",
            "360 $",
            "420 $",
            "450 $",
            "1 000 $"
          ],
          [
            ski_child + " - " + set,
            "150 $",
            "200 $",
            "250 $",
            "300 $",
            "350 $",
            "1 000 $"
          ],
          [
            snowboard + " - " + set,
            "170 $",
            "270 $",
            "360 $",
            "420 $",
            "450 $",
            "1 000 $"
          ]
        ]
      }
    };
  }

  renderHeaderItem = item => {
    return <th scope="col">{item}</th>;
  };

  renderPriceItem = item => {
    const text = item.replace(/\$/g, texts.pricing.currency);
    return <td>{text}</td>;
  };
  renderRow = row => {
    const [title, ...items] = row;
    return (
      <tr>
        <th scope="row">{title}</th>
        {items.map(this.renderPriceItem)}
      </tr>
    );
  };

  renderPricing = type => {
    return (
      <table class="table table-striped">
        <thead>
          <tr>{this.state.set.header.map(this.renderHeaderItem)}</tr>
        </thead>
        <tbody>{this.state.set.items.map(this.renderRow)}</tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <h1 className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {texts.main.pricing}
        </h1>
        <h2>{texts.pricing.set}</h2>
        <p>{texts.pricing.set_description}</p>
        {this.renderPricing("set")}
      </div>
    );
  }
}

export default Pricing;
