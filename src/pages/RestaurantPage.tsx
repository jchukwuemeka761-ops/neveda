import React from 'react';
import { NavedaMenu82Section } from '../components/NavedaMenu82Section';
import { Utensils, Clock, Flame, ShieldCheck, Phone, MessageCircle, ArrowLeft, Sparkles, ChefHat } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface RestaurantPageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="relative bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* Page Hero Header with Captivating Dining Ambience & Warm Golden Tones */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 overflow-hidden">
        {/* Very Visible Dining Hall Background Image with Balanced Dark Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80"
            alt="Naveda Dining Hall"
            className="w-full h-full object-cover object-center opacity-75 filter brightness-105 contrast-125 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/50 to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full" />
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
            <span>24/7 Restaurant &amp; Native Bites</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <ChefHat className="w-3.5 h-3.5 text-amber-400" />
              <span>Executive Dining Selection</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              82 Hand-Crafted Dishes, Native Soups &amp; Exotic Brews
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Every dish at Naveda World Bites &amp; Brews is cooked fresh to order by indigenous master chefs. Indulge in slow-simmered Oxtail Pepper Soup, authentic Nsala, fresh river catfish, smoky party jollof, and signature platters made with stone-ground herbs and zero artificial shortcuts.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Kitchen Open 24 Hours / 7 Days
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <Flame className="w-3.5 h-3.5 text-yellow-400" />
                Charcoal Smoked Grills &amp; Asun
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Bold Images On Every Dish
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Complete 82-Item Menu with Bold Images & Golden Theme */}
      <NavedaMenu82Section
        standalone
        onOrderDish={(dishName) => onOpenReservation(`Order: ${dishName}`)}
      />

      {/* Group Plating & Large Orders Banner with Visible Background */}
      <section className="relative py-12 bg-neutral-950 border-t border-amber-500/20 overflow-hidden">
        {/* Very visible background of African celebration feast */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
            alt="Feast Celebration"
            className="w-full h-full object-cover object-center opacity-60 filter brightness-100 contrast-125"
          />
          <div className="absolute inset-0 bg-neutral-950/65 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
          <div className="p-8 rounded-2xl bg-neutral-900/95 backdrop-blur-md border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Family Gatherings &amp; Corporate Dinners
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Planning a Large Celebration or Birthday Feast?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Naveda World prepares communal soup pots, grilled catfish platters, small chops banquets, and customized dining setups with dedicated table servers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-semibold text-white hover:bg-neutral-850 transition-colors"
              >
                Call {BUSINESS_INFO.phoneDisplay}
              </a>
              <button
                onClick={() => onOpenReservation('Communal Feast / Large Table Reservation')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-amber-950/40 cursor-pointer"
              >
                Reserve Feast Table
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
