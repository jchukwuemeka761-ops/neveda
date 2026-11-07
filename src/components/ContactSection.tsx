import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Calendar, Users, Sparkles, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('2 Guests');
  const [occasion, setOccasion] = useState('Dinner & Drinks');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Naveda World Bites & Brews,
I would like to reserve a table/inquire:
- Name: ${name || 'Guest'}
- Occasion: ${occasion}
- Party Size: ${partySize}
- Preferred Date: ${preferredDate || 'Upcoming'}
- Preferred Time: ${preferredTime || 'Evening'}
${specialRequest ? `- Special Notes: ${specialRequest}` : ''}

Looking forward to your confirmation. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2349039777679?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-900/60 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Channels & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              Direct Contact &amp; Reservations
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
              Ready for a Memorable Night? Contact Us Directly.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              We welcome walk-in visitors and advance table reservations around the clock. Whether you need a table for tonight’s live band, are organizing a birthday dinner, or need outdoor seating for your group, we are just a call or message away.
            </p>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp direct card */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">WhatsApp Booking &amp; Chat</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900">
                  Instant Chat
                </span>
              </a>

              {/* Phone call card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-orange-950/60 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Direct Telephone Line</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400 bg-orange-950/40 px-2.5 py-1 rounded border border-orange-900">
                  Call 24/7
                </span>
              </a>

              {/* Physical location */}
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-neutral-400 font-medium">Physical Location</div>
                  <div className="text-sm font-medium text-white leading-snug">
                    {BUSINESS_INFO.address}
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-amber-400 hover:underline pt-1"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Table / Event Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    Reserve a Table or Inquire
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Fill in your details below and send directly to our WhatsApp reservations desk.
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-amber-400 bg-orange-950/50 border border-orange-900 px-2 py-0.5 rounded">
                  24/7 Desk
                </span>
              </div>

              <form onSubmit={handleSubmitWhatsApp} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Chinedu Eze"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white placeholder-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Couple / Intimate)</option>
                      <option value="3-4 Guests">3–4 Guests (Small Group)</option>
                      <option value="5-8 Guests">5–8 Guests (Family / Friends)</option>
                      <option value="9+ Guests (Large Party)">9+ Guests (Large Party / Event)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Occasion / Service
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
                    >
                      <option value="Fine Dining & World Bites">Fine Dining &amp; World Bites</option>
                      <option value="Crafted Cocktails & Brews">Crafted Cocktails &amp; Brews</option>
                      <option value="Weekend Live Band Night">Weekend Live Band Night</option>
                      <option value="Highlife Musicals Evening">Highlife Musicals Evening</option>
                      <option value="Birthday Dinner">Birthday Dinner</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Outdoor Terrace Seating">Outdoor Terrace Seating</option>
                      <option value="Recreation & Sports Match">Recreation &amp; Sports Match</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Special Requests or Preferred Seating (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Table near the live band stage, outdoor terrace seating, or birthday cake arrangement..."
                    className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 focus:border-amber-400 focus:outline-none rounded-lg text-white placeholder-neutral-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold hover:bg-orange-500 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Reservation Request via WhatsApp</span>
                  </button>
                  <div className="text-[11px] text-neutral-500 text-center mt-2">
                    Clicking opens WhatsApp with your reservation details ready to send to our team.
                  </div>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp launched with your reservation details! Our front desk will confirm shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
