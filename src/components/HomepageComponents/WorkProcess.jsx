import  { useState } from "react";

function FaqItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <details
      onToggle={(e) => setOpen(e.currentTarget.open)}
      className="rounded-lg border border-gray-200"
      open={defaultOpen}
    >
      {/* Header */}
      <summary
        className={
          "flex cursor-pointer items-center justify-between gap-4 rounded-t-lg px-4 py-3 font-medium transition-colors duration-200 " +
          (open
            ? "bg-brand-green text-brand-black" // when open
            : "bg-gray-200 text-gray-900  hover:bg-gray-400 ") // when closed
        }
      >
        <span className="flex items-center text-wrap md:gap-6">
          <span className="mr-5 text-xl font-bold">{faq.number}</span>
          {faq.title}
        </span>

        <svg
          className={
            "size-5 shrink-0 transition-transform duration-300 " +
            (open ? "-rotate-180" : "rotate-0")
          }
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      {/* Content */}
      <div
        className={
          "p-4 rounded-b-lg transition-colors duration-200 " +
          (open
            ? "bg-brand-green text-brand-black"
            : "bg-gray-50 text-gray-900")
        }
      >
        <p className="text-gray-700 text-justify ">{faq.desc}</p>
      </div>
    </details>
  );
}

function FAQ() {
 const faqs = [
  {
    number: "01",
    title: "Consultation",
    desc: "We begin by understanding your vision in detail — discussing your goals, challenges, and target audience. This stage helps us align our expertise with your expectations and set a solid foundation for success.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    desc: "We dive deep into market trends, competitor insights, and audience behavior. Based on this research, we develop a clear strategy that balances creativity with data-driven decision-making to give your brand an edge.",
  },
  {
    number: "03",
    title: "Implementation",
    desc: "Our team brings the plan to life through precise execution. Whether it’s building your digital presence, creating campaigns, or developing assets, we ensure every step reflects your brand’s personality and goals.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    desc: "Once the plan is in motion, we closely monitor results using real-time analytics. We identify what’s working, refine what’s not, and make continuous adjustments to maximize impact and efficiency.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    desc: "Transparency is key — that’s why we provide clear, structured reports and maintain open communication at every stage. You’ll always know what’s happening, what’s improving, and what’s next.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    desc: "Our process doesn’t end at delivery. We review long-term performance, gather feedback, and refine strategies to ensure your brand keeps evolving and achieving sustainable growth.",
  },
];

  return (
    <div 
    data-aos="fade-right"
     className="space-y-2">
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} />
      ))}
    </div>
  );
}

 function WorkProcess() {
  return (
    <section className="w-full mt-5 py-12 px-6">
      {/* Header */}
      <div data-aos="fade-right"
       className="flex mb-5 flex-row max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center">
        <div>
          <h2 className="mb-8 bg-brand-green text-3xl font-bold text-start max-md:text-center">
            Our Working Process
          </h2>
        </div>
        <div>
          <p className="ml-10 mt-1.5 max-lg:mx-0 max-lg:mb-10 max-xl:mt-0">
            Step-by-step guide to achieving your business goals through
            strategic excellence.
          </p>
        </div>
      </div>

      {/* FAQ Steps */}
      <FAQ />
    </section>
  );
}


export default WorkProcess;
