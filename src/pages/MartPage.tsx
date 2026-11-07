import React from 'react';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, Sparkles, MessageCircle, Phone, PackageCheck } from 'lucide-react';
import { NavedaMartSection } from '../components/NavedaMartSection';
import { BUSINESS_INFO } from '../data/businessInfo';

interface MartPageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const MartPage: React.FC<MartPageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* Mart Page Hero Header with Captivating Cookware Mall Ambient Background */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 overflow-hidden">
        {/* Very Visible Store Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80"
            alt="Naveda Mart Cookware Store"
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
            <span>Naveda Mart &amp; Cookware Mall</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Premium Cookware, Appliances &amp; Household Store</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              Naveda Mart: Culinary Cookware &amp; Gourmet Mall
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Equip your home kitchen with restaurant-grade tools. From non-stick granite cooking pots and commercial blenders to authentic local spices, pure palm oil, and household supplies, Naveda Mart is Umuahia&apos;s one-stop culinary shopping destination.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                Guaranteed Genuine Cookware
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <Truck className="w-3.5 h-3.5 text-yellow-400" />
                In-Store Shopping &amp; Same-Day Umuahia Delivery
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-amber-500/20 text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                Manufacturer Warranties
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Naveda Mart Interactive Catalog */}
      <NavedaMartSection />

      {/* Mart Shopping Support Banner - Black & Golden */}
      <section className="py-12 bg-neutral-900/80 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="p-8 rounded-2xl bg-neutral-900/95 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Wholesale, Bridal Registry &amp; Corporate Gifts
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Looking for Full Cookware Sets or Bulk Purchases?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Chat directly with our store manager on WhatsApp for bulk discounts, custom hamper packaging, and corporate gifting.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Mart on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-semibold text-white hover:bg-neutral-850 transition-colors"
              >
                Call Mart Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
