import React from "react";

const services = [
  { title: "SEO", desc: "Improve search rankings and organic traffic." },
  { title: "PPC", desc: "Targeted ads that convert and scale." },
  { title: "Social", desc: "Engaging social campaigns and community growth." },
  { title: "Content", desc: "Content strategy, creation and distribution." },
];

export default function Services() {
  return (
    <section className="w-full py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
