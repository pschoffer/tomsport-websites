import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import texts from "./text.json";

class App extends Component {
  state = {
    sites: [
      { id: "home", title: texts.main.home, isActive: true },
      { id: "pricing", title: texts.main.pricing }
    ]
  };

  copySite = (site, shouldBeActive) => {
    return {
      id: site.id,
      title: site.title,
      isActive: shouldBeActive
    };
  };

  handleChange = id => {
    const newId = id === "logo" ? "home" : id;
    const newSites = this.state.sites.map(site => {
      const shouldBeActive = site.id === newId;
      return this.copySite(site, shouldBeActive);
    });

    this.setState({ sites: newSites });
  };

  renderContent = () => {
    const active = this.state.sites.filter(site => site.isActive)[0];
    return active.title;
  };

  render() {
    return (
      <div className="App">
        <NavBar sites={this.state.sites} onChange={this.handleChange} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
