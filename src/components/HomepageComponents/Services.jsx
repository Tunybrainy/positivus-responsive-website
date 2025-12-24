import seoImg from "../../assets/seo.png";
import ppcImg from "../../assets/ppc.png";
import ssmImg from "../../assets/smm.png";
import emailImg from "../../assets/em.png";
import contentImg from "../../assets/cc.png";
import analyticsImg from "../../assets/analytics.png"; 



import { ArrowRight } from "lucide-react";

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
    <section   className="w-full py-12 px-6">
      <div data-aos="fade-right" className="flex flex-row max-lg:flex-col max-lg:text-center max-lg:items-center 
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
      
      <div data-aos="fade-right" className="grid max-md:grid-cols-1 grid-cols-2 max-lg:grid-cols-2   gap-6 ">
        {services.map((s, i) => (

          <div  key={s.title} className={`p-6 rounded-[30px] border border-b-4 hover:scale-105 border-b-black max-w-[600px] shadow-sm flex flex-col justify-between ${bgColors[i % bgColors.length]}`}>
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


export default Services;