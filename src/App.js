import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr></hr>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Service} />
        </Switch>
        <hr></hr>
        <Footer />
        <a href="https://wa.me/917019693927" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </Router>
  );
}
