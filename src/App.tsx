import Navbar from "./shared/navbar";
import "./css/global.css";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/about";
import Products from "./pages/products/product";
import Services from "./pages/services_/service";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
