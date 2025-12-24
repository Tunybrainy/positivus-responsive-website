
import { ArrowRight } from "lucide-react";



function CaseStudies() {
  const steps = [
    {
      subtitle: "Learn more",
      desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      subtitle: "Learn more",
      desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      subtitle: "Learn more",
      desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section className="w-full mt-10 py-12 px-6">
      {/* Header */}
      <div data-aos="fade-right" className="flex flex-row max-lg:flex-col max-lg:text-center max-lg:items-center max-lg:justify-center">
        <div className="flex">
          <h2 className="flex text-3xl font-bold text-start max-md:text-center bg-brand-green mb-8">
            Case Studies
          </h2>
        </div>
        <div>
          <p className="ml-10 max-lg:mx-0 mt-1.5 max-xl:mt-0 max-lg:mb-10">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div 
        className="
          md:bg-brand-dark mt-10 rounded-lg 
          flex gap-6 max-w-6xl mx-auto
           md:overflow-visible overflow-x-auto
           scrollbar-hide
        "
      >
        {steps.map((s, i) => (
          <div
            data-aos="fade-right"
            key={i}
            className="
              flex-shrink-0 w-[80%] sm:w-[300px] md:w-auto
              md:flex-1 p-6 rounded-lg bg-brand-dark text-white
              border hover:border-brand-green
              transition-all duration-300 snap-start hover:scale-105
            "
          >
            <p className="text-white text-sm mb-5">{s.desc}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-brand-green hover:underline"
            >
              <h4 className="font-semibold mb-2">{s.subtitle}</h4>
              <ArrowRight className="mb-1.5" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;