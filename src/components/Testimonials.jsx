import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonies = [
  {
    author: "Fredrick Johnson",
    authorsPosition: "Marketing Manager at XYZ",
    Testimonies:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    author: "Brain Lewandoski",
    authorsPosition: "Marketing Director at DEF",
    Testimonies:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    author: "Jane Smith",
    authorsPosition: "CEO at ABC Inc",
    Testimonies:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
  {
    author: "fvon Miller",
    authorsPosition: "Content Strategist at GHI",
    Testimonies:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
    { author: "Rust White",
    authorsPosition: "HR at Flowbite",
    Testimonies:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

function Testimonial() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full mt-2 py-12 px-6">
      {/* Header */}
      <div
        data-aos="fade-up-left"
        className="flex flex-row max-lg:flex-col max-lg:items-center 
        max-lg:justify-center max-lg:text-center"
      >
        <div>
          <h2 className="mb-8 bg-brand-green text-3xl font-bold text-start max-md:text-center">
            Testimonials
          </h2>
        </div>
        <div>
          <p className="ml-10 mt-1.5 max-lg:mx-0 max-lg:mb-10 max-xl:mt-0">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
      </div>

      {/* Carousel Wrapper (HIDES overflow) */}
      <div className="mt-5 bg-brand-dark rounded-4xl w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Carousel (SCROLLS) */}
        <div
          ref={carouselRef}
          className=" ml-10 flex gap-6 w-full max-w-full px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {Testimonies.map((T, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-start w-[220px] sm:w-[260px] md:w-[300px] flex flex-col"
            >
              {/* Card */}
              <div
                className="relative w-full p-6 rounded-lg border border-green-600
                bg-brand-dark text-white transition-all duration-300 hover:scale-105 flex flex-col justify-between"
              >
                <p className="text-white text-sm">{T.Testimonies}</p>
                <div className="absolute bottom-0 mt-[-5px] -translate-x-1/2 translate-y-3 w-0 h-0
                border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-500" />
              </div>

              {/* Author */}
              <div className="mt-4 flex flex-col gap-2 text-brand-green">
                <h4 className="font-semibold">{T.author}</h4>
                <span className="text-xs text-white">
                  {T.authorsPosition}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex gap-6 sm:gap-10">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
