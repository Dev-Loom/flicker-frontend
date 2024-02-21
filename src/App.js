import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import Faq from "./Components/FAQ/Faq";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Footer />
        <a href="https://wa.me/917019693927" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
    </Router>
  );
}
