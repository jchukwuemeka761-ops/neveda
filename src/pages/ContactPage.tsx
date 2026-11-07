import React from 'react';
import { ArrowLeft, MapPin, Phone, MessageCircle, Clock, Send, Calendar, Users, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { LocationSection } from '../components/LocationSection';
import { HoursSection } from '../components/HoursSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onBack: () => void;
  onOpenReservation: (serviceName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack, onOpenReservation }) => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 w-full max-w-full overflow-hidden">
      {/* Contact Hero Header with Captivating Ambience Background */}
      <section className="relative py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 overflow-hidden">
        {/* Very Visible Landmark Atmosphere Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
            alt="Naveda World Location"
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
            <span>Location, Hours &amp; Reservations</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              Visit Naveda World in Umuahia: Open 24/7
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              We are situated right at Okwuta Road by Ahiaeke junction in Umuahia, Abia State. Open 24 hours a day, 7 days a week, with round-the-clock armed security, guarded parking, and uninterrupted generator power.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-amber-950/50 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-neutral-950" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white border border-amber-500/30 hover:border-amber-400 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Google Map */}
      <LocationSection />

      {/* 24/7 Hours Breakdown */}
      <HoursSection />

      {/* Contact & Booking Form */}
      <ContactSection />

      {/* Helpful FAQ */}
      <FaqSection />
    </div>
  );
};
