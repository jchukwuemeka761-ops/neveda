import React, { useState } from 'react';
import { UtensilsCrossed, Wine, Music, Sparkles, Tv, Cake, Users, TreePine, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ServicesSectionProps {
  onSelectServiceForReservation: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'culinary' | 'entertainment' | 'gatherings'>('all');

  const filteredServices = BUSINESS_INFO.services.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'culinary') return ['fine-dining', 'crafted-cocktails'].includes(service.id);
    if (activeCategory === 'entertainment') return ['weekend-live-band', 'highlife-musicals', 'memorable-nights', 'recreation-sports'].includes(service.id);
    if (activeCategory === 'gatherings') return ['birthday-dinners', 'family-gatherings', 'outdoor-services'].includes(service.id);
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-neutral-900/40 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-orange-500">
              Complete Hospitality Lineup
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              Our Signature Services &amp; Offerings
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From world-class dining and mastercrafted cocktails to vibrant weekend music and curated outdoor group gatherings in Umuahia.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-lg shrink-0 overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Services (9)
            </button>
            <button
              onClick={() => setActiveCategory('culinary')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'culinary'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Dining &amp; Bar
            </button>
            <button
              onClick={() => setActiveCategory('entertainment')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'entertainment'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Music &amp; Sports
            </button>
            <button
              onClick={() => setActiveCategory('gatherings')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'gatherings'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Events &amp; Outdoor
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl bg-neutral-950 border border-neutral-850 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Media Container with Fallback */}
              <div className="relative h-48 w-full bg-neutral-900 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // graceful fallback to hidden if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Unboxed category tag */}
                <div className="absolute top-3 left-3 text-[11px] font-semibold text-neutral-200 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-neutral-800">
                  {service.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-orange-400 font-medium mb-1">
                    {String(index + 1).padStart(2, '0')}. Service
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForReservation(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>Book or Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/2349039777679?text=${encodeURIComponent(
                      `Hello Naveda, I am inquiring about your ${service.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner for Custom Group / Event Request */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Planning a Birthday Dinner, Reunion, or Outdoor Celebration?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Speak directly with our team to reserve tables, customize food platters, or prepare the outdoor terrace for your guests.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-700 whitespace-nowrap"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              onClick={() => onSelectServiceForReservation('Private Gathering')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Reserve Space
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
