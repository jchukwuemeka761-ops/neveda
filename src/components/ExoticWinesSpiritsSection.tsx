import React, { useState } from 'react';
import { Wine, Sparkles, GlassWater, Award, MessageCircle, Phone, Check, ShieldCheck } from 'lucide-react';
import { EXOTIC_WINES_AND_SPIRITS, WineSpiritItem } from '../data/exoticWinesAndSpirits';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ExoticWinesSpiritsSectionProps {
  onReserveBottle: (bottleName: string) => void;
}

export const ExoticWinesSpiritsSection: React.FC<ExoticWinesSpiritsSectionProps> = ({ onReserveBottle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [orderedBottle, setOrderedBottle] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Cellar & Spirits' },
    { id: 'champagne', label: 'Prestige Champagnes' },
    { id: 'cognac', label: 'Fine Cognacs & XO' },
    { id: 'whisky', label: 'Single Malt & Scotch' },
    { id: 'tequila', label: 'Artisanal Tequilas' },
    { id: 'wines', label: 'Fine Wines & Rosé' },
    { id: 'vodka-gin', label: 'Craft Vodka & Gins' },
    { id: 'brews', label: 'Chilled Nigerian Brews' },
  ];

  const filteredBottles = activeCategory === 'all'
    ? EXOTIC_WINES_AND_SPIRITS
    : EXOTIC_WINES_AND_SPIRITS.filter((item) => item.category === activeCategory);

  const handleOrderBottleWhatsApp = (bottle: WineSpiritItem) => {
    const message = `Hello Naveda World Lounge,
I would like to order/reserve a bottle:
- Bottle: ${bottle.name}
- Origin: ${bottle.origin}
- Volume: ${bottle.volume} (${bottle.abv})
- Price: ${bottle.price}
- Table / Event: VIP Lounge / Weekend Table

Please confirm chilled availability. Thank you!`;
    window.open(`https://wa.me/2349039777679?text=${encodeURIComponent(message)}`, '_blank');
    setOrderedBottle(bottle.id);
    setTimeout(() => setOrderedBottle(null), 3000);
  };

  return (
    <section id="exotic-lounge-cellar" className="py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/15 relative overflow-hidden">
      {/* Very visible ambient background image of luxury wine cellar */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Cellar"
          className="w-full h-full object-cover object-center opacity-65 filter brightness-100 contrast-125"
        />
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[0.5px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-amber-500/20">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              The Grand Cellar &amp; VIP Bar
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              Exotic Wines, Champagnes &amp; Rare Spirits
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From vintage Dom Pérignon, Armand de Brignac, and Hennessy XO to Macallan single malts and chilled Nigerian stouts—served with ice, crystal barware, and sparklers in Umuahia.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-medium text-neutral-400 hidden sm:inline">
              100% Authentic Guaranteed
            </span>
            <button
              onClick={() => onReserveBottle('VIP Bottle Service')}
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              Reserve VIP Bottle Service
            </button>
          </div>
        </div>

        {/* Feature Hero Bar Visual Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative">
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src="/src/assets/images/naveda_exotic_wines_spirits_1793370403798.jpg"
              alt="Naveda Lounge Exotic Bar Shelves of Fine Wines and Spirits"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 max-w-xl text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800">
                VIP Bottle Service &amp; Chilled Stouts
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Curated for Celebrations, Date Nights &amp; Highlife Evenings
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Every bottle is stored at proper cellar temperatures and served by experienced lounge mixologists and sommeliers.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold text-white shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bottles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBottles.map((bottle) => (
            <div
              key={bottle.id}
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between p-5 space-y-4 shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                      {bottle.origin}
                    </div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-amber-400 transition-colors mt-0.5">
                      {bottle.name}
                    </h3>
                  </div>
                  {bottle.badge && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded shrink-0">
                      {bottle.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                  <span>Vol: {bottle.volume}</span>
                  <span aria-hidden="true">·</span>
                  <span>ABV: {bottle.abv}</span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {bottle.description}
                </p>

                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-850 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Tasting Notes</span>
                  <p className="text-neutral-300 italic">
                    "{bottle.tastingNotes}"
                  </p>
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-medium">Lounge Price</div>
                  <div className="text-lg font-bold text-white tabular-nums text-amber-400 font-display">
                    {bottle.price}
                  </div>
                </div>

                <button
                  onClick={() => handleOrderBottleWhatsApp(bottle)}
                  className="py-2 px-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  {orderedBottle === bottle.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Reserved</span>
                    </>
                  ) : (
                    <>
                      <Wine className="w-3.5 h-3.5" />
                      <span>Order Bottle</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
