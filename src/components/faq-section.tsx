"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I apply for jobs on your platform?",
    answer:
      "Simply create a free account, complete your profile with your skills and experience, and start browsing jobs. When you find a role that interests you, click 'Apply' and your profile will be submitted directly to the employer. You can track all your applications from your dashboard.",
  },
  {
    question: "Is there a fee to use JobHunt?",
    answer:
      "JobHunt is completely free for job seekers. We believe finding your dream job shouldn't come with a price tag. Our revenue comes from employers who post jobs and access our talent pool, so you can focus on what matters — landing the right role.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team through the chat widget in the bottom-right corner of any page, or email us at support@jobshunt.com. We typically respond within 2 hours during business hours. For urgent issues, our premium members get priority support with 30-minute response times.",
  },
  {
    question: "Can I search for remote jobs specifically?",
    answer:
      "Absolutely! Use our location filter and select 'Remote' to see only remote opportunities. You can also filter by hybrid and on-site roles. We have over 5,000 active remote positions from companies worldwide at any given time.",
  },
  {
    question: "How does the AI matching work?",
    answer:
      "Our AI analyzes your skills, experience, and career preferences to match you with the most relevant opportunities. The more complete your profile, the better your matches. Our algorithm considers over 50 factors including company culture fit, growth potential, and compensation alignment.",
  },
  {
    question: "Can I save jobs to apply later?",
    answer:
      "Yes! Use the bookmark icon on any job listing to save it for later. You can access all your saved jobs from your dashboard under 'Saved Jobs'. We'll also send you reminders if a saved job is about to close.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight tracking-tight">
              Frequently Asked{" "}
              <span className="text-[#ff4400]">Questions</span>
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-relaxed">
              Everything you need to know about using JobHunt to find your next
              career opportunity.
            </p>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-black hover:text-[#ff4400] transition-colors py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
