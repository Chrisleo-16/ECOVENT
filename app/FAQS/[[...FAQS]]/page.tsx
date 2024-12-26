"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: " What is this ECOVENT in full",
    answer: `Great question ${""} Its simply EcoVanguard Ventures `,
  },
];
export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-50">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white rounded-lg shadow-lg p-6 focus:outline-none focus:ring-2  transition-all duration-300 shadow-yellow-200 xl:shadow-green-200 "
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-slate-600">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-green-90 transition-transform duration-300 ${
                      activeIndex === index ? "transform" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-gray-600 ">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
