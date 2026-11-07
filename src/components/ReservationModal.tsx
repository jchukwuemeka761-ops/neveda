import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, Calendar, Clock, Users, Utensils, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Fine Dining & World Bites',
}) => {
  const [name, setName] = useState('');
  const [service, setService] = useState(defaultService);
  const [guests, setGuests] = useState('2 Guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Naveda World Bites And Brews,
I would like to make a reservation/inquiry:
- Name: ${name || 'Guest'}
- Service / Occasion: ${service}
- Party Size: ${guests}
- Date: ${date || 'Today/Upcoming'}
- Preferred Time: ${time || 'Evening'}
${notes ? `- Note: ${notes}` : ''}

Please let me know availability. Thank you!`;

    window.open(`https://wa.me/2349039777679?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 text-neutral-100 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-850 hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Naveda World · 24/7 Desk
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Table, VIP Bottle &amp; Mart Reservations
          </h3>
          <p className="text-xs text-neutral-400">
            Okwuta Road by Ahiaeke junction, Umuahia. Direct WhatsApp confirmation with our local team.
          </p>
        </div>

        {/* Quick Direct Actions */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 text-xs font-semibold text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call Desk 24/7</span>
          </a>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 text-xs font-semibold text-white transition-colors"
          >
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="mt-6 space-y-3.5 text-left">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Obioma / Chief Okeke"
              className="w-full px-3.5 py-2 text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white placeholder-neutral-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Occasion / Request
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
              >
                <option value="Fine Dining & Native Dishes (Nkwobi / Soups)">Native Dishes &amp; Dining</option>
                <option value="VIP Bottle Service (Champagne / Cognac)">VIP Bottle Service</option>
                <option value="Weekend Live Highlife Band Table">Weekend Live Highlife Table</option>
                <option value="Naveda Mart Shopping / Cookware Delivery">Naveda Mart Purchase</option>
                <option value="The Arena Sports Matchday Lounge">The Arena Sports Matchday</option>
                <option value="Birthday Dinner / Milestone Celebration">Birthday Celebration</option>
                <option value="Outdoor Terrace Table">Outdoor Garden Terrace</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Party Size
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests (Table for 2)</option>
                <option value="3-4 Guests">3–4 Guests</option>
                <option value="5-8 Guests">5–8 Guests</option>
                <option value="9+ Guests (Group Event)">9+ Guests (Group Event)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Notes or Special Request (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Near stage, outdoor terrace, quiet booth"
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-950 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white placeholder-neutral-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Confirm via WhatsApp Desk</span>
            </button>
          </div>

          {sent && (
            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp message prepared! Please hit send in your chat.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
