"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "1. Information We Collect",
    answer: `We collect information you provide directly to us, such as when you
          create an account, subscribe to our newsletter, or contact us for
          support. `,
  },
  {
    question: "2. How we use your information",
    answer: `We use the information we collect to provide, maintain, and improve
          our services, to communicte with you, and comply with legal
          obligations. `,
  },
  {
    question: "3. Information Sharing and Disclosure",
    answer: `We do not share your personal information with third parties except as
          described in this policy `,
  },
  {
    question: "4. Data Security",
    answer: `We take reasonable measures to help protect your personnal information
          from loss, theft, misuse, unauthorised access, disclosure, alteration,
          and destruction. `,
  },
  {
    question: "5. Your Rights",
    answer: `You have the right to access, update, or delete your personal
          information. You can do this by logging into your account or
          contacting us directly `,
  },
  {
    question: "6. Changes to this Policy",
    answer: `We may update this privacy policy from time to time. We will notify
          you of any changes by posting the new privacy policy on this page. `,
  },
  {
    question: " 7. Contact Us",
    answer: `If you have questions about this privacy policy, please contact us at
          0108720342 or support@ecovent.co.ke `,
  },
];
export default function PrivacyPolicy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="space-y-6">
      <div className="py-4 px-4 justify-items-center text-center">
        <h1 className="text-6xl font-bold mb-6 z-20 uppercase ">
          {" "}
          Legal Information
        </h1>
        <Tabs defaultValue="privacy" className="mb-6">
          <TabsList>
            <TabsTrigger value="privacy" asChild>
              <Link href="/privacy"> Privacy Policy</Link>
            </TabsTrigger>
            <TabsTrigger value="terms" asChild>
              <Link href="/terms">Terms of Service</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <section className="justify-items-center text-center py-2 px-4">
        <h2 className="text-2xl font-semibold mb-4"> Privacy Policy</h2>
        <p>Last updated: [ 25/12/2024]</p>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
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
    </div>
  );
}
