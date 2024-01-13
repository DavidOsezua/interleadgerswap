import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Navbar2 } from "./Components";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ScrollToTop/> */}
        <Navbar2 />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
