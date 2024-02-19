import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <a href="https://wa.me/917019693927" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}
