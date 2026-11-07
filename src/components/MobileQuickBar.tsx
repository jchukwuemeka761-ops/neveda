import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface MobileQuickBarProps {
  onOpenReservation: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-neutral-900 border border-neutral-800 rounded-lg active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Call 24/7</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-emerald-950/90 border border-emerald-800/80 rounded-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenReservation}
          className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg active:scale-95 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Reserve</span>
        </button>
      </div>
    </div>
  );
};
