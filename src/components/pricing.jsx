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
      ski_child_set,
      snowboard,
      shoes,
      sticks,
      autobox,
      carriers,
      glasses,
      helm,
      spine_cover,
      with_equipment,
      on_its_own,
      sezona,
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
    const setHeader = [...baseHeader];
    setHeader[setHeader.length - 1] = sezona
    setHeader.push(downpayment);

    this.state = {
      set: {
        header: setHeader,
        items: [
          [
            ski + " - " + set,
            "170 $",
            "270 $",
            "360 $",
            "420 $",
            "450 $",
            "1 200 $",
            "1 000 $"
          ],
          [
            ski_child_set,
            "150 $",
            "200 $",
            "250 $",
            "300 $",
            "350 $",
            "1 000 $",
            "1 000 $"
          ],
          [
            snowboard + " - " + set,
            "170 $",
            "270 $",
            "360 $",
            "420 $",
            "450 $",
            "1 200 $",
            "1 000 $"
          ]
        ]
      },

      equipment: {
        header: baseHeader,
        items: [
          [ski, "100 $", "190 $", "270 $", "340 $", "400 $", "1 000 $"],
          [ski_child, "100 $", "150 $", "200 $", "250 $", "300 $", "1 000 $"],
          [snowboard, "100 $", "190 $", "270 $", "340 $", "400 $", "1 000 $"],
          [shoes, "60 $", "120 $", "180 $", "240 $", "300 $", "300 $"],
          [sticks, "20 $", "40 $", "60 $", "80 $", "100 $", "100 $"]
        ]
      },
      misc: {
        header: ["", with_equipment, on_its_own, downpayment],
        items: [
          [glasses, "60 $", "120 $", "300 $"],
          [helm, "60 $", "120 $", "300 $"],
          [spine_cover, "60 $", "120 $", "300 $"]
        ]
      },

      other: {
        header: baseHeader,
        items: [
          [autobox, "150 $", "200 $", "250 $", "300 $", "350 $", "1 000 $"],
          [carriers, "20 $", "40 $", "60 $", "80 $", "100 $", "100 $"]
        ]
      }
    };
  }

  renderHeaderItem = item => {
    return <th scope="col" key={item}>{item}</th>;
  };

  renderPriceItem = (item, ix) => {
    const text = item.replace(/\$/g, texts.pricing.currency);
    return <td key={ix}>{text}</td>;
  };
  renderRow = row => {
    const [title, ...items] = row;
    return (
      <tr key={title}>
        <th scope="row">{title}</th>
        {items.map(this.renderPriceItem)}
      </tr>
    );
  };

  renderPricing = type => {
    const pricing = this.state[type];
    return (
      <table className="table table-striped">
        <thead>
          <tr>{pricing.header.map(this.renderHeaderItem)}</tr>
        </thead>
        <tbody>{pricing.items.map(this.renderRow)}</tbody>
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

        <h2>{texts.pricing.equipment}</h2>
        <p>{texts.pricing.equipment_description}</p>
        {this.renderPricing("equipment")}

        <h2>{texts.pricing.misc}</h2>
        <p>{texts.pricing.misc_description}</p>
        {this.renderPricing("misc")}

        <h2>{texts.pricing.other}</h2>
        <p>{texts.pricing.other_description}</p>
        {this.renderPricing("other")}
      </div>
    );
  }
}

export default Pricing;
