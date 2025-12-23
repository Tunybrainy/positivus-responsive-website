import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Usecases from "./pages/Usecases";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Router>
      <div className="container mx-auto ">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usecases" element={<Usecases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
