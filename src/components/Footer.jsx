import footer_Logo from "../assets/footer_logo.png";    
import footer_icon1 from "../assets/footer_icon1.png";  
import footer_icon2 from "../assets/footer_icon2.png";  
import footer_icon3 from "../assets/footer_icon3.png";  

function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 mt-20  ">
      {/* Outer wrapper */}
      <div  className=" bg-brand-dark h-fit rounded-t-3xl text-white mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left: Brand + Contact */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={footer_Logo} alt="footer-logo" className="text-xl font-semibold"></img>
            </div>

            <span className="inline-block mb-4 px-3 py-1 text-sm bg-brand-green text-black rounded-full">
              Contact us:
            </span>

            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="flex-1">
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Use Cases</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
            <div className="mt-10 bg-white/5 xl:w-[600px] w-[250x]
             rounded-xl p-4 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-white/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-green"
              />
              <button className="bg-brand-green text-black px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                Subscribe to news
              </button>
            </div>

          </div>

          

           {/* social icons*/}
          <div className="flex-1 align-center">
             <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-gray-300">
                <a href=""> <li className="hover:text-white cursor-pointer"><img src={footer_icon2} alt="facebook" /></li></a>  
                <a href=""> <li className="hover:text-white cursor-pointer"><img src={footer_icon3} alt="linkedin" /></li></a>
                 <a href=""> <li className="hover:text-white cursor-pointer"><img src={footer_icon1} alt="twitter" /></li></a>
              
            </ul>
          </div>


          

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between text-sm text-gray-400">
          <p>© Niyi.dev 2025 Positivus. All Rights Reserved.</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
