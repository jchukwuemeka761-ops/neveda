import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Car, Building2, ShoppingBag, Utensils, Wine, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const NavedaBuildingShowcase: React.FC = () => {
  return (
    <section id="building-complex" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              The Physical Venue &amp; Commercial Hub
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              The Iconic Naveda World Building Complex
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              A modern multi-level destination along Okwuta Road by Ahiaeke Junction in Umuahia, uniting a luxury supermarket, 24/7 restaurant, exotic VIP lounge, and sports arena.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions to Building</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Hero Visual Card with Actual Naveda Building */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl relative group">
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
            <img
              src="/src/assets/images/naveda_building_exterior_1793370403231.jpg"
              alt="Actual Naveda World Building Complex in Umuahia at Twilight"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Subtle scrim to preserve photography clarity while keeping text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-neutral-950/15 pointer-events-none" />

            {/* Overlaid Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-xs font-bold text-white flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Naveda World Complex · Umuahia
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold backdrop-blur-md text-xs shadow">
                Open 24/7 Round the Clock
              </span>
            </div>

            {/* Bottom Facility Card */}
            <div className="absolute bottom-4 left-4 right-4 p-5 sm:p-6 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Abia State Prime Hospitality Landmark
                </div>
                <div className="text-lg sm:text-xl font-bold text-white font-display">
                  GG9H+4R8, Okwuta Road by Ahiaeke Junction, Umuahia 440103, Abia
                </div>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Secure compound with ample paved parking, round-the-clock private security, standby power generation, and welcoming hospitality.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-700 transition-colors whitespace-nowrap"
                >
                  Call Reception
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors whitespace-nowrap"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multi-Level Complex Pillars */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-semibold uppercase">Ground Floor</div>
              <h4 className="text-sm font-bold text-white font-display mt-0.5">Naveda Mart Supermarket</h4>
              <p className="text-xs text-neutral-400 mt-1">Cookware, household materials, appliances, and daily groceries.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-semibold uppercase">24/7 Dining</div>
              <h4 className="text-sm font-bold text-white font-display mt-0.5">World Bites &amp; Native Kitchen</h4>
              <p className="text-xs text-neutral-400 mt-1">Fresh Nkwobi, Ofe Nsala, Isi Ewu, hot grills, and party jollof rice.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-semibold uppercase">Upper Level &amp; Roof</div>
              <h4 className="text-sm font-bold text-white font-display mt-0.5">VIP Lounge &amp; Live Stage</h4>
              <p className="text-xs text-neutral-400 mt-1">Exotic fine wines, prestige cognacs, champagnes, and weekend live highlife bands.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-semibold uppercase">Guest Facility</div>
              <h4 className="text-sm font-bold text-white font-display mt-0.5">Paved Parking &amp; Security</h4>
              <p className="text-xs text-neutral-400 mt-1">Spacious car park, 24/7 surveillance, and seamless access right off the expressway.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
