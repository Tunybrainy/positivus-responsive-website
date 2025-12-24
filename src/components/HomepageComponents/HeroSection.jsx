import bannerIllustration from "../../assets/banner_Illustration.png";

import amazon from "../../assets/amazon-logo.png";
import dribble from "../../assets/dribble-logo.png";
import hubspot from "../../assets/hubspot-logo.png";
import netflix from "../../assets/netflix-logo.png"; 
import notion from "../../assets/notion-logo.png";
import zoom from "../../assets/zoom-logo.png";



export function Banner() {
  return (
    <section className="flex flex-row max-lg:flex-col items-center justify-between p-8">
      <div data-aos="fade-up" className="flex-1 flex flex-col items-start text-left">
        <h1 className="text-[70px] max-sm:text-5xl font-bold my-5">
          Navigating the <br className="max-sm:hidden" /> digital landscape <br className="max-sm:hidden" /> for success
        </h1>
        <p className="text-[20px] mb-5 text-justify">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>

        <div className="flex gap-4 items-center">
          <button className="h-10 mb-5 text-white transition-all duration-300 ease-in-out hover:bg-brand-green hover:text-brand-dark hover:scale-105 bg-brand-dark border p-2 rounded-[10px]">
            Book a Consultation
          </button>
        </div>
      </div>

      <div data-aos="fade-up" className="flex-1 flex justify-end max-lg:justify-center mt-4">
        <img src={bannerIllustration} alt="banner" className="max-w-[520px] w-full h-auto max-sm:w-[260px]" />
      </div>
    </section>
  );
}



export function Logo() {
  const partners = [amazon, dribble, hubspot, netflix, notion, zoom];

  return (
    <div data-aos="fade-up" className="w-full py-8  flex  flex-col justify-center items-center">
     
      <div className="flex items-center max-lg:gap-15 max-md:flex-wrap max-sm:gap-8 justify-center gap-25 opacity-80">
        {partners.map((p, i) => (
          <img key={i} src={p} alt={`partner-${i}`} className="w-24 h-auto" />
        ))}
      </div>
    </div>
  );
}