import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Music, Wine, Utensils, ShoppingBag, Building2, Flame, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { NavedaLogo } from './NavedaLogo';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [activeVisual, setActiveVisual] = useState<'building' | 'lounge' | 'food'>('building');

  const visualData = {
    building: {
      image: '/src/assets/images/naveda_building_exterior_1793370403231.jpg',
      label: 'Naveda World Building Complex · Okwuta Road',
      subtitle: 'Multi-Level Hospitality, Supermarket & VIP Lounge Hub',
    },
    lounge: {
      image: '/assets/aistudio/naveda_2_1a2f3282.jpg',
      label: 'Naveda VIP Live Stage & Nightlife',
      subtitle: 'Authentic Nigerian Highlife Band & Bottle Service',
    },
    food: {
      image: '/images/dishes/pss.jpg',
      label: '24/7 Authentic African Native Feast',
      subtitle: 'Slow-Simmered Pepper Soups, Nkwobi & Gourmet Okro',
    },
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-8 pb-14 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-amber-500/20 w-full max-w-full">
      {/* Very visible background photograph of the actual Naveda World Building Complex */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/naveda_building_exterior_1793370403231.jpg"
          alt="Naveda World Building Background"
          className="w-full h-full object-cover object-top opacity-75 filter brightness-105 contrast-125 scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Soft balanced gradient overlay to ensure text readability while keeping the building very visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      {/* Warm Golden Ambient Glows */}
      <div className="absolute top-0 right-1/4 -z-10 w-[90vw] max-w-[500px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-[80vw] max-w-[400px] h-80 bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* Local Trust Signal & Metadata (Black & Golden Style) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Okwuta Road by Ahiaeke Junction
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Umuahia, Abia</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-amber-300 flex items-center gap-1 font-bold">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                Open 24 Hours Daily
              </span>
            </div>

            {/* Official Naveda Brand Lockup */}
            <div className="pt-1">
              <NavedaLogo variant="compact" size="lg" />
            </div>

            {/* Headline with Golden Gradient Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.15]">
              Fine Dining, Exotic Cellar, Naveda Mart &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Highlife Nights</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Welcome to Eastern Nigeria’s premier all-in-one lifestyle destination in Umuahia. Savor authentic African native delicacies (Nkwobi &amp; fresh soups) 24/7, uncork exotic vintage champagnes &amp; single malts in our VIP lounge, shop cookware &amp; groceries at Naveda Mart, and enjoy electric weekend live highlife bands.
            </p>

            {/* Primary CTAs - Luxury Golden Theme */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#/restaurant"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-500 rounded-xl transition-all shadow-lg shadow-amber-950/50 whitespace-nowrap cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-neutral-950" />
                View 82 Dishes Menu
              </a>

              <a
                href="#/nightlife"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-200 bg-neutral-900/90 hover:bg-neutral-850 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-colors whitespace-nowrap"
              >
                <Wine className="w-4 h-4 text-amber-400" />
                Exotic Wines &amp; Live Band
              </a>

              <a
                href="#/mart"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-200 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-700 hover:border-neutral-500 rounded-xl transition-colors whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                Naveda Mart
              </a>

              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-wider uppercase text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Reserve Table / Bottle
              </button>
            </div>

            {/* Quick Highlights */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Spicy Nkwobi, Ofe Nsala &amp; Grills</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Live Highlife Band Every Weekend</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Marquee Visual with Actual Naveda Venue Switcher */}
          <div className="lg:col-span-6 space-y-3">
            {/* Visual Viewport */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-neutral-900 shadow-2xl group">
              <img
                src={visualData[activeVisual].image}
                alt={visualData[activeVisual].label}
                className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Visible overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent pointer-events-none" />

              {/* Top Venue Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1.5 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-amber-500/40 text-xs font-bold text-amber-300 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Actual Naveda World Complex
                </span>
                <span className="px-3 py-1 rounded bg-amber-500 text-neutral-950 text-xs font-black shadow">
                  Umuahia, Abia
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between z-10">
                <div>
                  <div className="text-sm font-bold text-white">
                    {visualData[activeVisual].label}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {visualData[activeVisual].subtitle}
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 rounded-lg transition-colors whitespace-nowrap"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Interactive Footage Selector Tabs (Building / Live Nightlife / Native Feast) */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-neutral-900/90 rounded-xl border border-amber-500/20">
              <button
                onClick={() => setActiveVisual('building')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeVisual === 'building'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>The Building</span>
              </button>

              <button
                onClick={() => setActiveVisual('lounge')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeVisual === 'lounge'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Wine className="w-3.5 h-3.5" />
                <span>Nightlife &amp; VIP</span>
              </button>

              <button
                onClick={() => setActiveVisual('food')}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeVisual === 'food'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Native Cuisine</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Feature Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-amber-500/15">
            <div className="text-amber-400 font-bold text-lg font-display tabular-nums">24 / 7</div>
            <div className="text-sm font-semibold text-white mt-1">Open Round The Clock</div>
            <div className="text-xs text-neutral-400 mt-1">Full kitchen &amp; bar from Monday through Sunday without break.</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-amber-500/15">
            <div className="text-amber-400 font-bold text-lg font-display">Live Stage</div>
            <div className="text-sm font-semibold text-white mt-1">Igbo Highlife Music</div>
            <div className="text-xs text-neutral-400 mt-1">Authentic live band in traditional Nigerian attire every weekend.</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-amber-500/15">
            <div className="text-amber-400 font-bold text-lg font-display">The Arena</div>
            <div className="text-sm font-semibold text-white mt-1">Recreation &amp; Sports</div>
            <div className="text-xs text-neutral-400 mt-1">Super Eagles &amp; European football on giant HD screens.</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-amber-500/15">
            <div className="text-amber-400 font-bold text-lg font-display">Naveda Mart</div>
            <div className="text-sm font-semibold text-white mt-1">Cookware &amp; Groceries</div>
            <div className="text-xs text-neutral-400 mt-1">Pots, appliances, dinnerware, and supermarket goods on ground floor.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
