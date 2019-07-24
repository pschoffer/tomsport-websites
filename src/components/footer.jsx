import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Utils from "../Utils";
import texts from "../text.json";

class Footer extends Component {
  email = "schoffert@seznam.cz";
  phone = "+420 777 120 213";
  state = {
    icons: [
      {
        id: "facebook",
        url:
          "https://www.facebook.com/pg/P%C5%AFj%C4%8Dovna-ly%C5%BE%C3%AD-a-snowboard%C5%AF-TOM-SPORT-Bobrovn%C3%ADky-826224560769649"
      },
      { id: "mail", url: "mailto:" + this.email },
      { id: "github", url: "https://github.com/pschoffer/tomsport-websites" }
    ]
  };

  iconsStyle = { height: 25, width: 25 };

  renderIcon = icon => {
    return (
      <span key={icon.id}>
        <SocialIcon url={icon.url} style={this.iconsStyle} />
      </span>
    );
  };

  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col text-small text-muted">
            {Utils.textNlToBr(texts.footer.address)}
          </div>
          <div className="col text-small text-muted">
            <div className="row">
              <div className="col">{texts.footer.opening_hours}</div>
            </div>
            <div className="row">
              <div className="col text-mark">
                {texts.footer.opening_hours_remark}
              </div>
            </div>
          </div>
          <div className="col text-small text-muted">
            <div className="row">
              <div className="col">{this.phone}</div>
            </div>
            <div className="row">
              <div className="col">{this.email}</div>
            </div>
            <div className="row">
              <div className="col">{this.state.icons.map(this.renderIcon)}</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
