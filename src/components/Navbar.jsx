import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-10 m-1  max-w-full items-center p-4 bg-white text-white">
      {/* Logo */}
     <Link to="/" className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo Text"
          className="max-h-15 w-[200px] max-sm:w-[150px]"
        />
      </Link>


      {/* Desktop nav */}
      <nav className="hidden lg:flex ml-auto  flex-row">
        <Link className="mx-5 font-bold text-brand-dark" to="/" >Home</Link>
        <Link className="mx-5 font-bold text-brand-dark" to="/about-us" >About us</Link>
        <Link className="mx-5 font-bold text-brand-dark" to="usecases" >Work with Us</Link>
        <Link className="mx-5 font-bold text-brand-dark" to="/service" >Services</Link>
        <Link className="mx-5 font-bold text-brand-dark" to="/blog" >Blog</Link>
        <Link className="mx-5 font-bold text-brand-dark" to="/pricing" >Pricing</Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden ml-auto mr-2.5 max-sm:mr-1 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-8 h-8 max-sm:w-5 max-sm:h-5" /> : <Menu className="w-8 h-8 max-sm:w-5 max-sm:h-5" />}
      </button>

      {/* Request Button */}
      <button
      className="max-md:ml-4 mr-5 font-bold text-brand-dark transition-all duration-300 ease-in-out 
                      hover:bg-brand-green hover:text-brand-dark hover:scale-105 
      bg-white border p-2 rounded-[10px] hidden lg:block ">
        Request a Quote
      </button>

     {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 mt-1 w-full bg-white text-black flex flex-col items-center space-y-4 p-4 shadow-md lg:hidden z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/usecases" onClick={() => setIsOpen(false)}>
            Usecases
          </Link>
          <Link to="/service" onClick={() => setIsOpen(false)}>
            Service
          </Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>

          <button
          
            className="h-10 mb-5 
            text-brand-dark transition-all duration-300 ease-in-out 
                      hover:bg-brand-green hover:text-brand-dark hover:scale-105 
            bg-white border p-2 rounded-[10px]"
          >
            Request a Quote
          </button>
        </div>

      )}
    </div>  
  );
}

export default Navbar;





 
