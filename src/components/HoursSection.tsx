import React from 'react';
import { Clock, CalendarCheck, Phone, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const HoursSection: React.FC = () => {
  return (
    <section id="hours" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
            Operating Schedule
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            Open 24 Hours · Every Single Day
          </h2>
          <p className="text-sm text-neutral-400">
            Our kitchen, bar, and guest lounge operate non-stop 24/7 in Umuahia. Arrive whenever you are ready.
          </p>
        </div>

        {/* Schedule Table Card */}
        <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden shadow-xl">
          <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Day of the Week</span>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Kitchen &amp; Bar Hours</span>
          </div>

          <div className="divide-y divide-neutral-850">
            {BUSINESS_INFO.weeklySchedule.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3.5 flex items-center justify-between text-sm hover:bg-neutral-900/30 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-white">{item.day}</span>
                </div>
                <div className="font-semibold text-emerald-400 tabular-nums text-xs sm:text-sm">
                  {item.hours}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-neutral-900/80 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Full dining and cocktail menu available at all hours.</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-amber-400 hover:text-white font-medium"
            >
              Call for Walk-in or Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
