import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Sparkles, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { NavedaLogo } from './NavedaLogo';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId === 'home' ? '#/' : `#/${pageId}`;
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', badge: undefined },
    { id: 'restaurant', label: 'Restaurant & 82 Menu', badge: '82 Dishes' },
    { id: 'nightlife', label: 'VIP Lounge & Live Band', badge: 'Live Stage' },
    { id: 'mart', label: 'Naveda Mart', badge: 'Mall' },
    { id: 'sports', label: 'The Arena Sports', badge: undefined },
    { id: 'about', label: 'The Complex', badge: undefined },
    { id: 'contact', label: 'Contact & Location', badge: '24/7' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-amber-500/15 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Official Naveda Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group text-left cursor-pointer focus:outline-none"
          >
            <NavedaLogo variant="full" size="md" />
          </button>

          {/* Navigation Links for Separate Pages (Black & Golden Theme) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium text-neutral-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                      : 'text-neutral-300 hover:text-amber-200 hover:bg-neutral-900 border border-transparent'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[9.5px] font-bold px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-black'
                          : 'bg-neutral-800 text-neutral-400 group-hover:text-amber-300'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button (Black & Golden Theme) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-xl text-neutral-300 hover:text-amber-300 hover:bg-neutral-900 border border-neutral-800 transition-colors"
              title="Call Naveda Direct"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-yellow-500 rounded-xl transition-all shadow-md shadow-amber-950/50 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-800"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-800 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-amber-400">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full text-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl shadow-md"
              >
                Reserve Table / VIP Booth
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-xl"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                Chat on WhatsApp (24/7)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
