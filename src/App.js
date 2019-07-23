import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Pricing from "./components/pricing";
import texts from "./text.json";

class App extends Component {
  state = {
    sites: [
      { id: "home", title: texts.main.home, content: <Home />, isActive: true },
      { id: "pricing", title: texts.main.pricing, content: <Pricing /> }
    ]
  };

  copySite = (site, shouldBeActive) => {
    return {
      id: site.id,
      title: site.title,
      content: site.content,
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
    return active.content;
  };

  render() {
    return (
      <div className="App">
        <NavBar sites={this.state.sites} onChange={this.handleChange} />
        <div className="container">
          {this.renderContent()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
