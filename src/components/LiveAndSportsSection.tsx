import React from 'react';
import { Music, Tv, Calendar, Flame, Sparkles, Trophy, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface LiveAndSportsSectionProps {
  onOpenReservation: () => void;
}

export const LiveAndSportsSection: React.FC<LiveAndSportsSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="live-music" className="py-16 sm:py-24 bg-neutral-900/60 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Music &amp; Entertainment Hub
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
            Weekend Live Bands, Highlife Musicals &amp; Sports Leisure
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Evenings at Naveda are legendary. We bring live musicianship to the stage every weekend and keep match days lively with dedicated sports viewing.
          </p>
        </div>

        {/* 2-Column Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Weekend Live Band & Highlife */}
          <div className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full bg-neutral-900">
              <img
                src="/src/assets/images/naveda_live_band_nigerian_1792727546331.jpg"
                alt="Black Nigerian Live Highlife Band in Traditional Isiagu Attire Performing at Naveda in Umuahia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold text-white text-xs font-semibold rounded-md shadow">
                Every Friday, Saturday &amp; Sunday
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <Music className="w-4 h-4" />
                  <span>Live Highlife Stage Performance</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Live Band &amp; Igbo Highlife Musicals
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Experience seasoned Black Nigerian artists dressed in traditional Isiagu attires and red caps delivering authentic brass horns, sweet guitar riffs, and heavy African percussion. Paired with spicy Nkwobi and cold brews, it is Umuahia’s premier cultural nightlife.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-neutral-400">
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">Highlife Classics</span>
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">Isiagu Live Band</span>
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">African Percussion</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-orange-300"
                >
                  <span>Book Weekend Table</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs text-neutral-400 hover:text-white"
                >
                  Call +234 903 977 7679
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Recreation, Sports & Outdoor Patio */}
          <div className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full bg-neutral-900">
              <img
                src="/src/assets/images/naveda_outdoor_nigerian_terrace_1792727546548.jpg"
                alt="Nigerian Outdoor Garden Terrace and Matchday Sports Lounge at Naveda Umuahia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-900/90 text-neutral-200 border border-neutral-700 text-xs font-semibold rounded-md shadow">
                Recreation &amp; Alfresco Lounge
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <Tv className="w-4 h-4" />
                  <span>Matchday &amp; Outdoor Leisure</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Sports Lounge &amp; Outdoor Garden Terrace
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Cheer on the Super Eagles, Premier League, and UCL matches on massive outdoor screens under tropical palm trees and warm string lights. Enjoy sizzling Asun, spicy grilled fish, and cold Nigerian brews with good company.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-neutral-400">
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">Super Eagles &amp; European Football</span>
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">Garden Festoon Terrace</span>
                  <span className="bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">Spicy Asun &amp; Cold Brews</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-orange-300"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-neutral-500">24/7 Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
