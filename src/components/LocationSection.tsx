import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass, Clock, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-neutral-900/40 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details & Navigation CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              Location &amp; Finding Us
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display text-balance">
              Conveniently Located by Ahiaeke Junction in Umuahia
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Naveda World Bites And Brews is situated directly along Okwuta Road right by the prominent Ahiaeke junction in Umuahia, Abia State. Our venue is easy to locate whether you are arriving from within Umuahia or visiting from neighboring towns.
            </p>

            {/* Address Box */}
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs text-neutral-400 font-medium">Full Physical Address</div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-xs text-amber-400 pt-0.5">
                    Plus Code: <span className="font-mono text-neutral-200">{BUSINESS_INFO.plusCode}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-850 flex flex-wrap gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>

            {/* Landmark Guides */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Landmark</span>
                </div>
                <div className="text-neutral-400 mt-1">
                  At Ahiaeke junction along Okwuta road, Umuahia.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Status</span>
                </div>
                <div className="text-neutral-400 mt-1">
                  Open 24 hours round the clock daily.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Map Presentation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative">
              {/* Map header preview */}
              <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-xs font-semibold text-white">
                    Naveda World Bites And Brews · Umuahia
                  </span>
                </div>
                <span className="text-xs text-neutral-400">Coords: 5.5178° N, 7.5295° E</span>
              </div>

              {/* Responsive Google Maps Embed iframe with live interactive satellite/street render */}
              <div className="relative w-full h-[380px] sm:h-[420px] bg-neutral-950">
                <iframe
                  title="Naveda World Bites And Brews Location Map"
                  src="https://maps.google.com/maps?q=5.5178125,7.5295625&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  allowFullScreen
                />

                {/* Floating Map Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 shadow-xl space-y-2">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>Naveda World Bites And Brews</span>
                    <span className="text-[10px] text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">
                      Open Now
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300">
                    Okwuta road by Ahiaeke junction, Umuahia 440103, Abia
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold hover:bg-orange-500 rounded-md transition-colors w-full justify-center"
                    >
                      <Navigation className="w-3 h-3" />
                      Get Live Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
