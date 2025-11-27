export default function FAQSection() {
  const faqs = [
    {
      q: "Am I eligible to study abroad?",
      a: "Anyone can study abroad. There are multiple opportunities from high school through doctorates, and from short-term professional development programmes to full-blown degrees.",
    },
    { q: "Why should I study abroad?" },
    { q: "Where should I study?" },
    { q: "What are the entry requirements for study abroad programs?" },
    { q: "What documents do I need to apply to study abroad?" },
    { q: "Can you help me find a scholarship?" },
    { q: "Can I work while studying?" },
    { q: "When should I apply to study abroad?" },
    { q: "Who are Arrows and OT?" },
  ];

  const countries = [
    "All Countries", "United Kingdom", "United State", "China", "Canada", "Japan"
  ];

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white">

      {/* FAQs badge */}
      <div className="text-center mb-3">
        <span className="px-4 py-1 bg-orange-200/60 text-orange-700 rounded-full text-sm font-semibold">
          FAQs
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-3">
        Frequently Asked Questions
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Learn more about our FAQ's list and if there is anything you want to ask,
        get in touch with our Customer support
      </p>

      {/* Country buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">

        {/* Left arrow */}
        <button className="p-2 border rounded-full hover:bg-gray-100">
          <i className="fas fa-chevron-left text-sm"></i>
        </button>

        {countries.map((c, i) => (
          <button
            key={i}
            className={
              c === "All Countries"
                ? "px-4 py-2 rounded-full bg-green-600 text-white"
                : "px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            }
          >
            {c}
          </button>
        ))}

        {/* Right arrow */}
        <button className="p-2 border rounded-full hover:bg-gray-100">
          <i className="fas fa-chevron-right text-sm"></i>
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-2">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <details className="group">
              <summary className="cursor-pointer p-4 flex justify-between items-center font-medium text-gray-800">
                {item.q}
                <i className="fas fa-chevron-down group-open:rotate-180 transition"></i>
              </summary>

              {item.a && (
                <p className="px-4 pb-4 text-gray-600">{item.a}</p>
              )}
            </details>
          </div>
        ))}
      </div>

     
    </section>
  );
}
