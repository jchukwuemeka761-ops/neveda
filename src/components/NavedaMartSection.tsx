import React, { useState } from 'react';
import { ShoppingBag, CookingPot, UtensilsCrossed, Package, Sparkles, Check, MessageCircle, Search, ExternalLink, ShieldCheck } from 'lucide-react';
import { NAVEDA_MART_ITEMS, MartItem } from '../data/navedaMartItems';
import { BUSINESS_INFO } from '../data/businessInfo';

export const NavedaMartSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [orderedItem, setOrderedItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Mall Departments' },
    { id: 'cookware', label: 'Cookware & Pots' },
    { id: 'appliances', label: 'Kitchen Appliances' },
    { id: 'dining', label: 'Dinnerware & Cutlery' },
    { id: 'household', label: 'Household Essentials' },
    { id: 'groceries', label: 'Groceries & Pantry' },
  ];

  const filteredItems = NAVEDA_MART_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.brand && item.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleOrderMartItemWhatsApp = (item: MartItem) => {
    const text = `Hello Naveda Mart (Naveda World Umuahia),
I would like to purchase/inquire about an item from the mall:
- Item: ${item.name}
- Brand: ${item.brand || 'Naveda Mart'}
- Specs: ${item.specs}
- Price: ${item.price}
- Fulfillment: In-store pickup / Home delivery in Umuahia

Please confirm availability. Thank you!`;
    window.open(`https://wa.me/2349039777679?text=${encodeURIComponent(text)}`, '_blank');
    setOrderedItem(item.id);
    setTimeout(() => setOrderedItem(null), 3000);
  };

  return (
    <section id="naveda-mart" className="py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/20 relative overflow-hidden">
      {/* Very visible Cookware Mall Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=80"
          alt="Naveda Mart Background"
          className="w-full h-full object-cover object-center opacity-70 filter brightness-100 contrast-125 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/65 to-neutral-950/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-amber-500/20">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              Retail Shopping Mall &amp; Supermarket
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              Naveda Mart &amp; Household Mall
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Shop top-tier culinary cookware, heavy-duty blenders, dining sets, cleaning essentials, and everyday groceries in an upscale, air-conditioned mall setting on the ground floor.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.navedaworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-900 text-neutral-200 border border-neutral-800 text-xs font-semibold transition-colors"
            >
              <span>Visit navedaworld.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Naveda Mart Visual Showcase Banner */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative group">
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src="/src/assets/images/naveda_mart_supermarket_1793370403426.jpg"
              alt="Inside Naveda Mart Supermarket and Mall in Umuahia"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Subtle scrim ensuring the background is clearly visible while text pops */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/35 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-xs font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                Naveda Mart · Supermarket &amp; Home Mall
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 max-w-2xl text-left space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800">
                Pristine Aisles · Guaranteed Genuine Brands
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Cookware, Stainless Pots, Appliances &amp; Pantry Staples
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200">
                Pick up quality cookware for your home or combine your restaurant dinner with daily supermarket grocery shopping in one stop.
              </p>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold text-white shadow-md'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search pots, blenders, rice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Mall Items Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between p-5 space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {item.brand && (
                      <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                        {item.brand}
                      </div>
                    )}
                    <h3 className="text-base font-bold text-white font-display group-hover:text-amber-400 transition-colors mt-0.5">
                      {item.name}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-850 text-xs text-neutral-300 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400">Specifications</span>
                  <div className="font-mono text-[11px] text-neutral-300">{item.specs}</div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Price & Cart Actions */}
              <div className="pt-3 border-t border-neutral-850 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-medium">Mart Price</div>
                  <div className="text-lg font-bold text-white tabular-nums text-amber-400 font-display">
                    {item.price}
                  </div>
                </div>

                <button
                  onClick={() => handleOrderMartItemWhatsApp(item)}
                  className="py-2 px-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  {orderedItem === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Item Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buy / Inquire</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mall Delivery Notice */}
        <div className="mt-12 p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Naveda Mart offers same-day delivery within Umuahia and instant curbside pickup at Okwuta Road.</span>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-white font-semibold whitespace-nowrap"
          >
            Chat with Mart Desk on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
