import React from 'react';
import { ArrowLeft, Building2, MapPin, ShieldCheck, Zap, HeartHandshake, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { NavedaBuildingShowcase } from '../components/NavedaBuildingShowcase';
import { TikTokReelsSection } from '../components/TikTokReelsSection';
import { TrustAndCredibility } from '../components/TrustAndCredibility';

interface AboutPageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* About Hero Header with Captivating Building Complex Background */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 overflow-hidden">
        {/* Very Visible Building Complex Exterior Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/src/assets/images/naveda_building_exterior_1793370403231.jpg"
            alt="Naveda World Complex Landmark"
            className="w-full h-full object-cover object-top opacity-75 filter brightness-105 contrast-125 scale-100"
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
            <span>About Naveda World Complex</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Abia State&apos;s Multi-Hospitality Landmark</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              The Naveda World Story: Redefining Hospitality in Umuahia
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Situated right at Okwuta Road by Ahiaeke junction in Umuahia, Naveda World Bites &amp; Brews was conceived as a complete lifestyle destination. We unified gourmet Eastern Nigerian dining, an electrifying weekend live highlife band stage, an ultra-premium VIP bottle cellar, a cookware supermarket mall, and a sports arena under one architecturally stunning roof.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Actual Naveda World Building Architecture */}
      <NavedaBuildingShowcase />

      {/* Trust & Credibility */}
      <TrustAndCredibility />

      {/* Customer TikTok Footages & Social Proof */}
      <TikTokReelsSection />
    </div>
  );
};
