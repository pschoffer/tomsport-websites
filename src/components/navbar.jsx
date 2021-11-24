import React, { Component } from "react";
import texts from "../text.json";

class NavBar extends Component {
  renderItem = item => {
    let classes = "nav-item";
    if (item.isActive) {
      classes += " active";
    }
    return (
      <li key={item.id} className={classes}>
        <div
          className="nav-link pointer"
          onClick={() => this.props.onChange(item.id)}
        >
          {item.title} <span className="sr-only">(current)</span>
        </div>
      </li>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div
          className="navbar-brand pointer"
          onClick={() => this.props.onChange("logo")}
        >
          {texts.navbar.firm}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.props.sites.map(this.renderItem)}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
