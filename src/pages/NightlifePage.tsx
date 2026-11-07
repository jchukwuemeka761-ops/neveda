import React from 'react';
import { ArrowLeft, Music, Flame, Wine, Sparkles, Clock, Calendar, Users, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ExoticWinesSpiritsSection } from '../components/ExoticWinesSpiritsSection';

interface NightlifePageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const NightlifePage: React.FC<NightlifePageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* 
        VIP Nightlife Hero with Prominent Authentic Live Stage Photo Background:
        Using `/assets/aistudio/naveda_2_1a2f3282.jpg` (titled "Navida 2")
      */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden border-b border-amber-500/20">
        {/* Real Live Stage Background with authentic Black Nigerian Highlife musicians - VERY VISIBLE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/naveda_2_1a2f3282.jpg"
            alt="Naveda World Live Highlife Stage with Black Nigerian Musicians"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-115 scale-100"
          />
          {/* Gentle gradient scrim to keep the stage performers and instruments crystal clear while ensuring typography is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20 box-border">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-md bg-neutral-900/80 backdrop-blur-sm border border-neutral-700"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>Back to Complex Home</span>
            </button>
            <span aria-hidden="true" className="text-neutral-400">/</span>
            <span className="bg-neutral-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-neutral-200 border border-neutral-700">VIP Lounge &amp; Live Band</span>
          </div>

          <div className="max-w-3xl space-y-5 bg-neutral-950/85 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-amber-500/40 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Music className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekend Live Band &amp; Highlife Musicals</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-tight">
              Electrifying Eastern Nigerian <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Live Stage &amp; VIP Lounge</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
              Step into the heartbeat of Umuahia nightlife. Every weekend, our resident highlife orchestra takes the stage in traditional African attires with red chieftaincy caps, live guitar solos, talking drums, and soulful Igbo highlife melodies that keep you dancing until dawn.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenReservation('VIP Lounge Booth & Bottle Service')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/50 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-neutral-950" />
                <span>Reserve VIP Lounge Table</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Lounge Host</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Band Schedule & Musical Atmosphere */}
      <section className="relative py-16 bg-neutral-900/80 border-b border-amber-500/15 overflow-hidden">
        {/* Very visible background ambient lounge image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80"
            alt="Lounge Lighting"
            className="w-full h-full object-cover object-center opacity-70 filter brightness-105 contrast-125"
          />
          <div className="absolute inset-0 bg-neutral-950/55 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Highlife Schedule Card */}
            <div className="p-8 rounded-2xl bg-neutral-900/95 border border-amber-500/20 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Weekend Live Band Schedule
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Join our resident highlife orchestra live every Friday, Saturday, and Sunday evening starting at 7:00 PM.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong>Friday Night Warm-Up:</strong> Afrobeat &amp; Contemporary Highlife (8 PM - Dawn)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong>Saturday Mega Stage:</strong> Traditional Igbo Ogene &amp; Guitar Solos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <strong>Sunday Soul &amp; Palm Wine:</strong> Relaxed Highlife Oldies &amp; Nkwobi
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenReservation('Live Band Weekend Stage Table')}
                className="w-full py-2.5 rounded-xl bg-neutral-950 border border-amber-500/30 hover:border-amber-400 text-xs font-bold text-amber-300 transition-colors cursor-pointer"
              >
                Book Live Band Table
              </button>
            </div>

            {/* VIP Booth Experience */}
            <div className="p-8 rounded-2xl bg-neutral-900/95 border border-amber-500/20 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Wine className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  VIP Bottle &amp; Cigar Service
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Elevate your night in our plush VIP lounge booths with dedicated bottle hosts, ice buckets, sparklers, and premium cocktail shakers.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Pre-chilled Dom Pérignon, Armand de Brignac &amp; Cristal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Ultra-rare Cognacs (Hennessy Paradis, Remy Martin XO)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Plush leather sectional booths with private acoustics
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenReservation('VIP Bottle Service Booth')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-amber-950/40 cursor-pointer"
              >
                Inquire VIP Bottle Service
              </button>
            </div>

            {/* Security & Ambience */}
            <div className="p-8 rounded-2xl bg-neutral-900/95 border border-amber-500/20 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Executive Security &amp; 24/7 Power
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Party without disturbance. Naveda World provides professional security personnel, enclosed perimeter fencing, and uninterrupted generator power.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Guarded parking lot for 50+ executive vehicles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Continuous soundproof air-conditioned luxury interior
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Strict dress code &amp; VIP hospitality protocol
                  </li>
                </ul>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:bg-neutral-850 text-xs font-semibold text-neutral-200 transition-colors text-center"
              >
                Call Host: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Full Exotic Cellar & Bottle Menu Section */}
      <ExoticWinesSpiritsSection
        onReserveBottle={(bottle) => onOpenReservation(`VIP Bottle: ${bottle}`)}
      />
    </div>
  );
};
