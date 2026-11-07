import React from 'react';
import { Hero } from '../components/Hero';
import { NavedaBuildingShowcase } from '../components/NavedaBuildingShowcase';
import { TikTokReelsSection } from '../components/TikTokReelsSection';
import { TrustAndCredibility } from '../components/TrustAndCredibility';
import {
  Utensils,
  Wine,
  ShoppingBag,
  Tv,
  ArrowRight,
  Clock,
  Sparkles,
  Building2,
  MapPin,
  ShieldCheck,
  Calendar,
  Phone,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <div className="relative w-full max-w-full overflow-hidden bg-neutral-950 text-neutral-100">
      {/* 
        Captivating Background Layer with Real Lounge, Mart & Wine Cellar Ambience:
        VERY VISIBLE luxury dining & lounge photography with golden vignettes
      */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Naveda World Luxury Ambience"
          className="w-full h-full object-cover object-center opacity-70 filter brightness-100 contrast-125 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/45 via-neutral-950/65 to-neutral-950/90" />
      </div>

      <div className="relative z-10 w-full space-y-0">
        {/* 1. Hero with Venue Switcher & Official Logo (Black & Golden Luxury) */}
        <Hero onOpenReservation={() => onOpenReservation()} />

        {/* 2. Fast Multi-Department Portal Grid (Black & Golden Cards with Very Visible Background Texture) */}
        <section className="relative py-14 sm:py-20 border-b border-amber-500/15 overflow-hidden">
          {/* Very visible ambient background image from the lounge & wine bar */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1600&q=80"
              alt="Lounge & Cellar Texture"
              className="w-full h-full object-cover object-center opacity-65 filter contrast-125 brightness-105"
            />
            <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[0.5px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Explore The Complex
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-display text-white mt-1.5">
                Dedicated Departments &amp; Wings
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                Every department at Naveda World operates independently with specialized staff, bespoke menus, and dedicated facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Department 1: 24/7 Restaurant & 82 Menu */}
              <div
                onClick={() => onNavigate('restaurant')}
                className="group relative p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background image preview */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-65 transition-opacity">
                  <img
                    src="/images/dishes/pss.jpg"
                    alt="Restaurant"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    82 Native Dishes &amp; Grills
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    24/7 Restaurant &amp; Kitchen
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Slow-simmered Oxtail Pepper Soup, Seafood Okro, Nkwobi Royale, charcoal grills, and traditional swallows cooked fresh 24 hours a day.
                  </p>
                </div>
                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Open Dedicated Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Department 2: VIP Lounge & Nightlife */}
              <div
                onClick={() => onNavigate('nightlife')}
                className="group relative p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background image preview from authentic stage */}
                <div className="absolute inset-0 z-0 opacity-45 group-hover:opacity-75 transition-opacity">
                  <img
                    src="/assets/aistudio/naveda_2_1a2f3282.jpg"
                    alt="Nightlife Stage"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Wine className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    Live Stage &amp; Exotic Cellar
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    VIP Lounge &amp; Live Band
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Live highlife band in authentic Nigerian traditional attire, Dom Pérignon, Hennessy XO, Macallan single malts, and luxury booth reservations.
                  </p>
                </div>
                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Explore Stage &amp; Bottles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Department 3: Naveda Mart */}
              <div
                onClick={() => onNavigate('mart')}
                className="group relative p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background image preview from Cookware Mart */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-65 transition-opacity">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                    alt="Naveda Mart"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    Cookware &amp; Supermarket
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    Naveda Mart Mall
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Granite stone pots, pressure cookers, commercial yam pounders, dinnerware, native spices, and household essentials.
                  </p>
                </div>
                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Shop Cookware Mall</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Department 4: The Arena Sports */}
              <div
                onClick={() => onNavigate('sports')}
                className="group relative p-6 rounded-2xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background image preview */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-65 transition-opacity">
                  <img
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
                    alt="The Arena Sports"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Tv className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    Matchday &amp; Recreation
                  </div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    The Arena Sports Lounge
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Massive HD match screens, Premier League &amp; UCL live commentary, chilled draft beer towers, and spicy chicken wings.
                  </p>
                </div>
                <div className="relative z-10 mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Matchday Schedule</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Actual Naveda Building Complex Landmark */}
        <NavedaBuildingShowcase />

        {/* 4. Trending TikTok Guest Experiences & Social Vibes */}
        <TikTokReelsSection />

        {/* 5. Real Operational Credibility & Trust Pillars */}
        <TrustAndCredibility />

        {/* 6. Grand Visit & Reservation Callout Banner */}
        <section className="py-14 sm:py-20 border-t border-amber-500/20 bg-neutral-950 relative overflow-hidden">
          {/* Very visible ambient background image of Naveda building landmark */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/src/assets/images/naveda_building_exterior_1793370403231.jpg"
              alt="Naveda Complex Building"
              className="w-full h-full object-cover object-center opacity-65 filter brightness-100 contrast-125"
            />
            <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[0.5px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
              Experience Naveda World in Person
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Located right at Okwuta Road by Ahiaeke junction in Umuahia, Abia State. Open 24 hours daily with round-the-clock armed security, guarded parking, and uninterrupted power.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={() => onOpenReservation('General Table & Venue Reservation')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-amber-950/50 cursor-pointer"
              >
                Reserve Table / VIP Booth
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white border border-amber-500/30 hover:border-amber-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (24/7)</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                View Map &amp; 24/7 Schedule
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
