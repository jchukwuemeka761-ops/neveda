import React from 'react';
import { Sparkles, Clock, Music2, Wine, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl">
              <img
                src="/src/assets/images/naveda_african_native_cuisine_1792727581159.jpg"
                alt="Naveda Authentic African Native Cuisine Feast and Chilled Brews"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quiet Information Callout */}
            <div className="mt-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 space-y-1">
              <div className="font-semibold text-white flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Eastern Nigerian Hospitality Landmark in Umuahia</span>
              </div>
              <p className="text-neutral-400">
                Okwuta road by Ahiaeke junction, Umuahia 440103, Abia. Authentic African native cooking served 24 hours daily.
              </p>
            </div>
          </div>

          {/* Copy Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-orange-500">
              About Naveda World Bites And Brews
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display text-balance">
              Where Authentic African Native Cuisine Meets the Soul of Highlife Music
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Naveda World Bites And Brews is Umuahia’s premier destination for authentic African native cuisine, crafted cocktails, and high-energy live entertainment. Nestled conveniently along Okwuta road by Ahiaeke junction, our venue is steeped in Eastern Nigerian culinary mastery and hospitality that operates continuously 24 hours a day.
            </p>

            <p className="text-base text-neutral-300 leading-relaxed">
              Indulge in rich Eastern delicacies including spicy Nkwobi served in traditional wooden mortars, steaming native soups (Ofe Nsala, rich Egusi) with pounded yam, sizzling peppered goat meat (Asun), spicy grilled fresh catfish, and smoky Nigerian jollof rice. Pair your feast with chilled brews or signature cocktails as our live band fills the lounge with the irresistible sounds of highlife.
            </p>

            {/* Why Local Customers Choose Naveda */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Always Open (24 Hours)</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-normal">
                  No sudden closures or rushed orders. Our dining and beverage teams serve you round the clock, 7 days a week.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Music2 className="w-4 h-4 text-orange-500" />
                  <span>Weekend Highlife Nights</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-normal">
                  Authentic live bands, brass and percussion grooves, and highlife rhythms that celebrate our rich cultural sound.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Wine className="w-4 h-4 text-orange-500" />
                  <span>Mixology &amp; Cold Brews</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-normal">
                  Artisanal cocktails made with fresh ingredients and top-shelf liquor, complemented by ice-cold brews.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>Dedicated Event Hospitality</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1.5 leading-normal">
                  Spacious indoor sections and breezy outdoor garden seating prepared specifically for birthdays and family occasions.
                </p>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Chat with Front-of-House on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
