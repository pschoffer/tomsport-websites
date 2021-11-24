import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Pricing from "./components/pricing";
import Terms from "./components/terms";
import Discounts from "./components/discounts";
import texts from "./text.json";

const sites = [
  { id: "home", title: texts.main.home, content: <Home /> },
  { id: "pricing", title: texts.main.pricing, content: <Pricing /> },
  { id: "discounts", title: texts.main.discounts, content: <Discounts /> },
  { id: "terms", title: texts.main.terms, content: <Terms /> }
]

const App = () => {
  const [active, setState] = useState('home');

  const handleChange = id => {
    const newId = id === "logo" ? "home" : id;
    setState(newId);
  };

  const renderContent = () => {
    const activeSite = sites.filter(site => site.id === active)[0];
    return activeSite.content;
  };

  return (
    <div className="App">
      <NavBar sites={sites} activeSite={active} onChange={handleChange} />
      <div className="container">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
