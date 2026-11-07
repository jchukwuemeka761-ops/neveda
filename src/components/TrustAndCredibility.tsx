import React from 'react';
import { ShieldCheck, Clock, MapPin, CheckCircle2, PhoneCall, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const TrustAndCredibility: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/15 relative overflow-hidden">
      {/* Very visible ambient background image of Naveda building landmark */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/naveda_building_exterior_1793370403231.jpg"
          alt="Naveda Trust"
          className="w-full h-full object-cover object-center opacity-65 filter brightness-100 contrast-125"
        />
        <div className="absolute inset-0 bg-neutral-950/65 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
            Built on Real Hospitality, Ready 24/7 in Umuahia
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 mt-3">
            Every feature of Naveda World Bites And Brews is designed for real guest convenience, safety, and an exceptional time out in Abia State.
          </p>
        </div>

        {/* 4 Practical Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-amber-500/20 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guest Reassurance / Credibility Box */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Guest Assurance &amp; Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Straightforward, Transparent Hospitality
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We believe in genuine service without gimmicks. Whether you come for an intimate meal, an impromptu drink at 2 AM, or a pre-planned birthday party on our terrace, our hospitality team is on ground to serve you promptly and professionally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide uppercase text-neutral-200 bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Reassurance Grid */}
          <div className="mt-8 pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-neutral-300">
            {BUSINESS_INFO.reassuranceItems.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-neutral-400 leading-normal pl-3">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
