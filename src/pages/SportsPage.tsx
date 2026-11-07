import React from 'react';
import { ArrowLeft, Trophy, Tv, Beer, Users, Calendar, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface SportsPageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const SportsPage: React.FC<SportsPageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* Sports Hero Header with Captivating Arena Ambience Background */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 overflow-hidden">
        {/* Very Visible Sports Stadium & Matchday Lounge Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=80"
            alt="The Arena Sports"
            className="w-full h-full object-cover object-center opacity-75 filter brightness-105 contrast-125 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-neutral-900 border border-transparent hover:border-neutral-800"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              <span>Back to Complex Home</span>
            </button>
            <span aria-hidden="true" className="text-neutral-600">/</span>
            <span>The Arena Sports Bar &amp; Recreation</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Premier League, Champions League, AFCON &amp; El Clásico</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              The Arena: Ultra HD Sports Viewing &amp; Recreation
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Experience the stadium roar in Umuahia. The Arena features crystal-clear 85-inch screens, Dolby surround match commentary, icy cold Star and Heineken towers, spicy chicken wings, and pepper soup combos tailored for matchday passion.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenReservation('The Arena Matchday Booth')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/50 cursor-pointer"
              >
                Reserve Matchday Table
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-amber-500/30 hover:border-amber-400 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Arena Features with very visible background */}
      <section className="relative py-16 bg-neutral-950 overflow-hidden">
        {/* Very visible sports atmosphere image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80"
            alt="Stadium Atmosphere"
            className="w-full h-full object-cover object-center opacity-65 filter brightness-100 contrast-125"
          />
          <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[0.5px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-amber-500/20 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Multi-Screen Simultaneous Broadcasts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Never miss a kickoff. With synchronized high-definition screens across the hall, multiple European leagues and tennis / boxing bouts can be viewed simultaneously with zero lag.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-amber-500/20 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Beer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Ice-Cold Draught &amp; Pitcher Towers
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Enjoy 3-liter ice-chilled beer dispensing towers, Guinness Extra Stout, Heineken, Budweiser, and fresh palm wine carafes paired with sizzling spicy asun.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/90 border border-amber-500/20 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Fan Clubs &amp; Group Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Home of Umuahia football fan gatherings. Reserve private seating areas for Arsenal, Chelsea, Man United, Real Madrid, or Barcelona supporters groups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
