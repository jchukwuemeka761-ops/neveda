import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Everything You Need to Know
          </h2>
          <p className="text-sm text-neutral-400">
            Clear information about our hours, location, weekend events, and table reservations in Umuahia.
          </p>
        </div>

        <div className="space-y-3">
          {BUSINESS_INFO.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-neutral-900/50 border border-neutral-800 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-850/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick prompt */}
        <div className="mt-10 text-center text-xs text-neutral-400">
          Have an additional question? Reach out to us directly on{' '}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-semibold"
          >
            WhatsApp
          </a>{' '}
          or call{' '}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-amber-400 hover:underline font-semibold"
          >
            {BUSINESS_INFO.phoneDisplay}
          </a>
          .
        </div>
      </div>
    </section>
  );
};
