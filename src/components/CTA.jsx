import ctaImg from "../assets/CTA1.png";


function CallToAction() {
  return (
    <section data-aos="fade-right" className="relative w-full max-sm:w-[90%] max-sm:mx-auto max-sm:h-[300px]  h-[250px] mb-10 rounded-3xl  flex  flex-row py-12 px-6 bg-brand-light">
      <div  className=" max-w-3xl h-[100px] mx-auto  text-left">
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


export default CallToAction;