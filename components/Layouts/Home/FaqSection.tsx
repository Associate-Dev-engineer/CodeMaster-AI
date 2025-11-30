"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "What makes this platform different from other coding practice sites?",
    answer:
      "Our platform uses advanced AI to provide step-by-step explanations, breaking down complex problems into digestible concepts. Unlike traditional platforms that just show solutions, we teach you the 'why' behind each approach, helping you build genuine problem-solving skills. Plus, we offer native language support for better understanding.",
  },
  {
    question: "How does the AI-powered explanation work?",
    answer:
      "Our AI analyzes each problem and provides contextual hints, explains concepts, and breaks down solutions into logical steps. It adapts to your learning pace and provides guidance without giving away the complete answer, encouraging you to think critically and develop your own problem-solving approach.",
  },
  {
    question: "Can I use this platform for interview preparation?",
    answer:
      "Absolutely! Our problem catalog includes questions from top tech companies like Google, Amazon, Microsoft, and more. We organize problems by company, difficulty level, and topic to help you prepare systematically. The Pro and Premium plans also include mock interview features and company-specific preparation guides.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "We support all major programming languages including Python, JavaScript, Java, C++, C#, Go, Ruby, Swift, Kotlin, and more. Our interactive code editor provides syntax highlighting, auto-completion, and real-time execution for all supported languages.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a completely free tier with access to 50 problems and basic AI explanations. For our Pro plan, we offer a 14-day free trial with no credit card required. You can explore all premium features risk-free before committing to a subscription.",
  },
  {
    question: "How does progress tracking work?",
    answer:
      "Our platform tracks your solved problems, success rate, time spent on each problem, and identifies patterns in your strengths and weaknesses. You'll get detailed analytics showing which topics you excel at and which need more practice, helping you focus your learning efficiently.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. We also offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, we'll provide a full refund.",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Yes! We offer a 50% discount for students with a valid educational email address. Simply sign up with your .edu email or contact our support team with proof of enrollment to get your student discount applied.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our platform. Can't find what
            you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <h3 className="text-base md:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-card border-2 border-border rounded-xl text-card-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
