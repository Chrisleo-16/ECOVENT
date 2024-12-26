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
    question: "1. Acceptance of Terms",
    answer: `By accessing or using our service, you agree to be bound by these
          Terms of Service and applicable laws and regulations. `,
  },
  {
    question: "2. Use of Service",
    answer: `You agree to use our service only for lawful purposes and in
          accordance with these Terms of Service. `,
  },
  {
    question: "3. User Accounts",
    answer: `You are responsible for maintaining the confidentiality of your
          accountand password. You agree to accept responsibility for all
          activities that occur under your account. `,
  },
  {
    question: "4. Intellectual Property",
    answer: `The service and its original content, features and functionality are
          owned by EcoVanguard Ventures and are prottected by international
          copyright, trademark, patent, trade secret and other intellectual
          property proprietary rights laws. `,
  },
  {
    question: "5. Termination",
    answer: `We may terminate or suspend your account and bar access to the service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms.`,
  },
  {
    question: "6. Limitaion of Liability",
    answer: `In no event shall EcoVanguard Ventures , nor its directors,
          employeees, partners, agents, suppliers or affiliates, be liable for
          any indirect, incidential, special, consequential or punitive damages
          , including without limitation, loss of profits, data, use, goodwill,
          or other intangible losses, resulting from your access to or use of or
          inability to access or use the service. `,
  },
  {
    question: " 7. Changes to Terms",
    answer: `We reserve the right to modify or replace these Terms at any time. If
          a revision is material, we will provide at least 30 days' notice prior
          to any new terms taking effect. `,
  },
  {
    question: " 8. Contact Us",
    answer: `If you have any questions about these Terms, please contact us at
          0108720342 or support@ecovent.co.ke. `,
  },
];
export default function TermsOfService() {
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
        <h2 className="text-2xl font-semibold mb-4">Terms Of Service</h2>
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
