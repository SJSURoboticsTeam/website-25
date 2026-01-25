"use client";

import { useState } from "react";

interface FAQProps {
  faqs: { q: string; a: string }[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-xl">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
          <button
            className="faq-question"
            type="button"
            onClick={() => handleToggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{faq.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
