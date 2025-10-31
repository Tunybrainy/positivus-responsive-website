import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usecases from './pages/Usecases';
import Pricing from './pages/Pricing';
import Service from './pages/Service';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
         
      <div className="container mx-auto py-8">
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



export default App
