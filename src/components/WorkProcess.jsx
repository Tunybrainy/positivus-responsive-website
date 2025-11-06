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
            : "bg-gray-200 text-gray-900 hover:bg-gray-50") // when closed
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
        <p className="text-gray-700">{faq.desc}</p>
      </div>
    </details>
  );
}

function FAQ() {
  const faqs = [
    {
      number: "02",
      title: "Research and Strategy Development",
      desc: "We analyze your goals, study your audience, and craft the right strategy.",
    },
    {
      number: "03",
      title: "Implementation",
      desc: "We execute the plan with precision and creativity.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      desc: "We track progress, collect data, and optimize performance.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      desc: "We provide clear updates and reports to keep you informed.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      desc: "We refine strategies to ensure long-term success and growth.",
    },
  ];

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <FaqItem key={i} faq={faq} />
      ))}
    </div>
  );
}

 function WorkProcess() {
  return (
    <section className="w-full mt-10 py-12 px-6">
      {/* Header */}
      <div className="flex flex-row max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center">
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
