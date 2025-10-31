import React from "react";

const steps = [
  { title: "Discover", desc: "We learn your business and goals." },
  { title: "Strategize", desc: "Data-driven plan tailored for you." },
  { title: "Execute", desc: "We deliver, measure, and optimize." },
];

export default function WorkProcess() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
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
