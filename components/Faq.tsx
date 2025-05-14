"use client";

import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      id: "01",
      question: "What is your current role?",
      answer:
        "I'm currently working as a senior developer specializing in building high-performance web applications with modern technologies like React, Next.js, and TypeScript.",
    },
    {
      id: "02",
      question: "How much does it cost for a high performing website?",
      answer:
        "The cost varies depending on project requirements, complexity, and scope. Typically, high-performing websites range from $5,000 for simple sites to $25,000+ for complex applications with custom features. I'd be happy to provide a detailed quote based on your specific needs.",
    },
    {
      id: "03",
      question: "How long will the work take from start to finish?",
      answer:
        "Project timelines depend on scope and complexity. Simple websites can be completed in 2-4 weeks, while more complex applications may take 2-3 months. I'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      id: "04",
      question: "Are you available to join as full time?",
      answer:
        "I'm currently considering new opportunities. Let's discuss your company, the role, and how my skills might align with your team's needs to determine if there's a good fit for a full-time position.",
    },
  ];

  return (
    <div className="bg-[#f7f8fa] dark:bg-[#0c0a09] text-white  lg:py-28 flex items-center justify-center lg:p-4">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Left side - Heading */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-500" />
              <span className="text-green-500 font-medium tracking-wider">
                FAQS
              </span>
            </div>
            <h1 className="text-2xl md:text-6xl font-medium text-black dark:text-white leading-tight">
              Have
              <br />
              Questions?
            </h1>
          </div>

          {/* Right side - Accordion */}
          <div className="space-y-4 mt-6 lg:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="mb-4 rounded-lg dark:bg-[#111116] bg-white border-none data-[state=open]:pb-4"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <span className="flex items-center gap-3 text-left">
                      <span className="text-gray-400">{faq.id}.</span>
                      <span className="font-normal text-black lg:text-xl dark:text-white">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 text-black text-base text-justify dark:text-white">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
