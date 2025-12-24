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
    // Initialize AOS after the full page load to avoid AOS applying
    // initial transform/opacity before images/fonts are measured which
    // can cause a temporary layout shift (extra space) while animations
    // are being prepared.
    const initAOS = () => {
      // prevent page from scrolling or shifting while AOS calculates
      // element positions (temporary class added to body)
      if (typeof document !== "undefined" && document.body) {
        document.body.classList.add("aos-loading");
      }

      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
      });
      // ensure AOS measurements are up to date
      AOS.refresh();
      // remove the temporary lock shortly after AOS has refreshed
      // use requestAnimationFrame to let browser apply styles
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (typeof document !== "undefined" && document.body) {
            document.body.classList.remove("aos-loading");
          }
        }, 60);
      });
    };

    if (document.readyState === "complete") {
      // page already loaded
      initAOS();
    } else {
      // wait for load (images/fonts) to avoid reflow/shift from AOS styles
      window.addEventListener("load", initAOS, { once: true });
      return () => window.removeEventListener("load", initAOS);
    }
  }, []);

  return (
    <Router>
      <div className="container mt-5 mx-auto ">
        <Navbar  />

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
