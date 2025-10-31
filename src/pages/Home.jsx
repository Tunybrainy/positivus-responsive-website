
import bannerIllustration from "../assets/banner_Illustration.png";
import amazon from "../assets/amazon-logo.png";
import dribble from "../assets/dribble-logo.png";
import hubspot from "../assets/hubspot-logo.png";
import netflix from "../assets/netflix-logo.png"; 
import notion from "../assets/notion-logo.png";
import zoom from "../assets/zoom-logo.png";
import seoImg from "../assets/seo.png";
import ppcImg from "../assets/ppc.png";
import ssmImg from "../assets/smm.png";
import ctaImg from "../assets/CTA1.png";
import emailImg from "../assets/em.png";
import contentImg from "../assets/cc.png";
import analyticsImg from "../assets/analytics.png"; 


import { ArrowRight } from "lucide-react";




function Banner() {
  return (
    <section className="flex flex-row max-lg:flex-col items-center justify-between p-8">
      <div className="flex-1 flex flex-col items-start text-left">
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

      <div className="flex-1 flex justify-end max-lg:justify-center mt-4">
        <img src={bannerIllustration} alt="banner" className="max-w-[520px] w-full h-auto max-sm:w-[260px]" />
      </div>
    </section>
  );
}

function Logo() {
  const partners = [amazon, dribble, hubspot, netflix, notion, zoom];

  return (
    <div className="w-full py-8  flex  flex-col justify-center items-center">
     
      <div className="flex items-center max-lg:gap-15 max-md:flex-wrap max-sm:gap-8 justify-center gap-25 opacity-80">
        {partners.map((p, i) => (
          <img key={i} src={p} alt={`partner-${i}`} className="w-24 h-auto" />
        ))}
      </div>
    </div>
  );
}

function Services() {
 const services = [
  {
    title: "Search Engine Optimization",
    img: seoImg,
    link: "/services/seo",
    text_color: "text-brand-dark",
    title_bg_color: "bg-brand-green"
  },
  {
    title: "Pay-Per-Click Advertising",
    img: ppcImg,
    link: "/services/ppc",
    text_color: "text-brand-dark",
    title_bg_color: "bg-brand-light"
  },
  {
    title: "Social media Marketing",
    img: ssmImg,
    link: "/services/social",
    text_color: "text-brand-white",
    title_bg_color: "bg-brand-light"
  },
  {
    title: "Email Marketing",
    img: emailImg,
    link: "/services/content",
    text_color: "text-brand-dark",
    title_bg_color: "bg-brand-green"
  },
  {
    title: "Content Marketing",
    img: contentImg,
    link: "/services/email",
    text_color: "text-brand-dark",
    title_bg_color: "bg-brand-light"
  },
  {
    title: "Analytics and Tracking",
    img: analyticsImg,
    link: "/services/analytics",
    text_color: "text-brand-dark",
    title_bg_color: "bg-brand-green"
  },
];

const bgColors = [
  "bg-brand-light",
  "bg-brand-green",
  "bg-brand-dark text-white", // note: text-white for contrast
];


  return (
    <section className="w-full py-12 px-6">
      <div className="flex flex-row max-lg:flex-col max-lg:text-center max-lg:items-center 
      max-lg:justify-center ">
        <div className="flex ">
           <h2 className=" flex text-3xl font-bold text-start max-md:text-center bg-brand-green mb-8">Services</h2>
       
        </div>
        <div>
            <p className=" ml-10 max-lg:mx-0 mt-1.5 max-xl:mt-0 max-lg:mb-10">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. 
              These services include:
           </p>

        </div>
       
      </div>
      
      <div className="grid max-md:grid-cols-1 grid-cols-2 max-lg:grid-cols-2  gap-6 ">
        {services.map((s, i) => (

          <div key={s.title} className={`p-6 rounded-[30px] border border-b-4 border-b-black max-w-[600px] shadow-sm flex flex-col justify-between ${bgColors[i % bgColors.length]}`}>
            <div className={` flex w-fit max-lg:w-fit  ${s.title_bg_color}`}>
             
              <h3 className="flex font-semibold max-lg:text-3xl max-md:text-2xl text-wrap text-3xl  mb-2 text-brand-dark
              ">{s.title}</h3>
        
               
            </div>
            <div className=" 
            flex justify-end items-centre mt-4">
              {s.img && (
                <img src={s.img} alt={`${s.title} image`} className=" w-50 h-35 object-contain mb-4" />
              )}
            </div>

            <div className="pt-4">
              <a href={s.link} className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                <ArrowRight size={16} />
                <span key={s.text_color}>Learn more</span>
                
              </a>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}



function CallToAction() {
  return (
    <section className="relative w-full max-sm:w-[90%] max-sm:mx-auto max-sm:h-[300px]  h-[250px] mb-10 rounded-3xl  flex  flex-row py-12 px-6 bg-brand-light">
      <div className=" max-w-3xl h-[100px] mx-auto  text-left">
        <h3 className="text-2xl font-bold mb-4">Let’s make things happen </h3>
        <p className="text-gray-600 mb-6">Contact us today to learn more about how our digital marketing 
          services can help your business grow and succeed online.</p>
        <div className="flex justify-left gap-4">
          <button className="px-6 py-3 bg-brand-dark text-white rounded-lg shadow hover:scale-105">Book a Consultation</button>
         
        </div>
        
      </div>
      <div className=" max-md:hidden justify-left z-10 -translate-y-[60px] h-[270px] flex ">
          <img src={ctaImg} alt="" />
        </div>
    </section>
  );
}
function CaseStudies() {
  const steps = [
    { title: "Discover", desc: "We learn your business and goals." },
    { title: "Strategize", desc: "Data-driven plan tailored for you." },
    { title: "Execute", desc: "We deliver, measure, and optimize." },
  ];

  return (
    <section className="w-full mt-10 py-12 px-6">
       <div className="flex flex-row max-lg:flex-col max-lg:text-center max-lg:items-center 
      max-lg:justify-center ">
        <div className="flex ">
           <h2 className=" flex text-3xl font-bold text-start max-md:text-center bg-brand-green mb-8">Case Studies</h2>
       
        </div>
        <div>
            <p className=" ml-10 max-lg:mx-0 mt-1.5 max-xl:mt-0 max-lg:mb-10">
              Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
           </p>

        </div>
       
      </div>
      

      <div className="flex max-md:flex-col items-start justify-center gap-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="flex-1 p-6 border rounded-lg text-center">
            <div className="w-12 h-12 rounded-full bg-brand-dark text-white mx-auto flex items-center justify-center mb-4">{i + 1}</div>
            <h4 className="font-semibold mb-2">{s.title}</h4>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Logo />
      <Services />
       <CallToAction />
      <CaseStudies />
     
    </main>
  );
}

export default Home;