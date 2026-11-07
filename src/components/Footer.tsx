import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { NavedaLogo } from './NavedaLogo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId === 'home' ? '#/' : `#/${pageId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-amber-500/20 text-neutral-400 py-12 sm:py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left cursor-pointer focus:outline-none"
            >
              <NavedaLogo variant="full" size="md" />
            </button>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Fine dining, 82 authentic Pan-African &amp; native dishes, crafted cocktails, weekend live band, highlife musicals, culinary cookware mart, and sports lounge in Umuahia, Abia State.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Open 24 Hours · Every Day of the Week</span>
            </div>
          </div>

          {/* Dedicated Pages Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Explore Departments
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Complex Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('restaurant')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Restaurant &amp; 82 Menu</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-500/40">82 Dishes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('nightlife')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>VIP Lounge &amp; Live Band</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-950 text-amber-400 border border-amber-500/40">Highlife</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('mart')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Naveda Mart &amp; Cookware Mall
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('sports')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  The Arena Sports Lounge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  About the Complex
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Location &amp; 24/7 Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Visit &amp; Contact Us
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phoneDisplay} (Instant Reply)
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-amber-500/30 hover:border-amber-400 transition-colors text-xs font-medium"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Umuahia 440103, Abia State, Nigeria</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400 font-medium">Open 24/7 Everyday</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
