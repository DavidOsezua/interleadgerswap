import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Navbar2 } from "./Components";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import AboutUs from "./Pages/AboutUs";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termofuse" element={<Resources />} />
          <Route path="/faqs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
