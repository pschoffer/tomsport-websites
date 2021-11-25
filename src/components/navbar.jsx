import React from "react";
import texts from "../text.json";

const NavBar = (props) => {
  const renderItem = item => {
    let classes = "nav-item";
    if (item.id === props.activeSite) {
      classes += " active";
    }
    return (
      <li key={item.id} className={classes}>
        <div
          className="nav-link pointer"
          onClick={() => props.onChange(item.id)}
        >
          {item.title} <span className="sr-only">(current)</span>
        </div>
      </li>
    );
  };

  return <>
    {/* <div className="navigation-spacer" /> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation">
      <div
        className="navbar-brand pointer"
        onClick={() => props.onChange("logo")}
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
          {props.sites.map(renderItem)}
        </ul>
      </div>
    </nav>
  </>;
}

export default NavBar;
