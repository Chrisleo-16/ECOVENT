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
  {
    question:"What is EcoVentures all about",
    answer:"EcoVanguard Ventures, will spearhead transformative solutions that address the immediate challenges and lay the groundwork for long-term economic resilience, in innovative ways"
  },
  {
    question:"How does it answer the mordern challenge",
    answer:"Urbanization is an unstoppable phenomenon in which huge masses of people flock into cities in search of better opportunities. Consequently, this migration often leads to overcrowded cities, strained resources, and environmental degradation. EcoVanguard Ventures aims to revolutionize urban development by integrating green technologies and sustainable planning from the ground up EcoVanguard also advocates the use of smart city technologies that optimize resource management, from water conservation systems to efficient waste management.",
   },
  {
    question:"What good does it do with Agriculture",
    answer:"Agriculture is the backbone of any economy. In retrospective, some traditional practices often lead to soil degradation, water scarcity, and biodiversity loss. The idea is committed to reversing these trends by promoting sustainable agriculture techniques that increase productivity without compromising the environment. {""} By partnering with local farmers, it will ensure that knowledge transfer and capacity building are at the core of its strategy, empowering communities to become self-sufficient and resilient. ",
  },
  {
    question:"Whats the innovative driving force behind Ecoventures",
    answer:"The idea is about constantly exploring new technologies and methodologies that can enhance sustainability and resilience. From developing drought-resistant crops to designing self-sustaining urban habitats, it is truly at the forefront of the green revolution.",
  },
  {
    question:"What Vision does EcoVent have for the future",
    answer:"EcoVanguard Ventures is more than just an ideal concept; it’s a movement towards a sustainable and resilient future. By addressing the challenges of urbanization and agriculture with innovative and sustainable solutions, paving the way for economies that are robust, adaptable and capable of withstanding the test of time will be much more realistic than just an idea behind it. ",
  },
  {
    question:"So how does this work anyway",
    answer:"The EcoVangard team would support the adoption of precision farming, which leverages data analytics and IoT devices to optimize crop yields and minimize waste. It will encourage the use of organic farming methods that enrich the soil and protect ecosystems.EcoVanguard also advocates the use of smart city technologies that optimize resource management, from water conservation systems to efficient waste management.",
  },
  {
    question:"What's the tagline or rather the movement behind EcoVanguard Ventures",
    answer:"“Pioneering Sustainability, Cultivating Resilience.” It’s a vision that absolutely promises a brighter future for our planet and ensures future generations will inherit a world where economic prosperity goes hand in hand with environmental stewardship.",
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
