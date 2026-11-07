import React, { useState, useMemo } from 'react';
import {
  Search,
  Flame,
  Clock,
  Sparkles,
  UtensilsCrossed,
  Wine,
  Coffee,
  MessageCircle,
  Filter,
  CheckCircle2,
  ChevronRight,
  Shield,
  HeartHandshake,
  Maximize2,
  X
} from 'lucide-react';
import { NAVEDA_MENU_82, MENU_SECTIONS, MenuItem82 } from '../data/navedaMenu82';
import { BUSINESS_INFO } from '../data/businessInfo';

interface NavedaMenu82SectionProps {
  onOrderDish?: (dishName: string) => void;
  standalone?: boolean;
}

export const NavedaMenu82Section: React.FC<NavedaMenu82SectionProps> = ({
  onOrderDish,
  standalone = false,
}) => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [spicyFilter, setSpicyFilter] = useState<string>('all');
  const [previewDish, setPreviewDish] = useState<MenuItem82 | null>(null);

  // Filter items based on section, search term, and spicy level
  const filteredDishes = useMemo(() => {
    return NAVEDA_MENU_82.filter((dish) => {
      // Section match
      if (selectedSection !== 'all' && dish.section !== selectedSection) {
        return false;
      }
      // Spicy filter
      if (spicyFilter === 'spicy' && !dish.spicyLevel) {
        return false;
      }
      if (spicyFilter === 'non-spicy' && dish.spicyLevel) {
        return false;
      }
      if (spicyFilter === 'favorites' && dish.badge !== 'Chef Favorite' && dish.badge !== 'House Special' && dish.badge !== 'Iconic Signature') {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesSection = dish.sectionTitle.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        return matchesName || matchesDesc || matchesSection || matchesIngredients;
      }
      return true;
    });
  }, [selectedSection, searchQuery, spicyFilter]);

  const handleWhatsAppOrder = (dish: MenuItem82) => {
    const text = encodeURIComponent(
      `Hello Naveda World Bites & Brews! I would like to order from the menu:\n\n` +
      `🍽️ Dish: ${dish.name}\n` +
      `💰 Price: ${dish.price}\n` +
      `⏱️ Prep: ${dish.prepTime}\n` +
      `📦 Portion: ${dish.portion}\n\n` +
      `Please confirm table availability / instant pickup details.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="naveda-menu-82"
      className={`relative w-full max-w-full overflow-hidden ${
        standalone ? 'py-10 sm:py-16' : 'py-16 sm:py-24'
      } bg-neutral-950 text-neutral-100`}
    >
      {/* VERY VISIBLE Rich Dining Hall & Wine Cellar Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80"
          alt="Naveda Luxury Ambience"
          className="w-full h-full object-cover object-center opacity-70 filter brightness-100 contrast-125 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/65 to-neutral-950/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-[80vw] max-w-[450px] h-96 bg-yellow-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Header Block with Luxury Black & Golden Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-inner">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span>The Complete 82 Dishes &amp; Drinks Menu</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
            Gourmet Pan-African &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Native Gastronomy</span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Crafted with authentic indigenous spices, open-flame grills, slow-simmered herbal broths, and fresh market harvest. Every recipe is cooked fresh to order 24 hours a day at Naveda World.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 text-[11px] sm:text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900/90 border border-neutral-800 rounded-full">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              100% Authentic Recipes
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900/90 border border-neutral-800 rounded-full">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              Cooked Fresh 24/7
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900/90 border border-neutral-800 rounded-full">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
              Direct Table &amp; WhatsApp Orders
            </span>
          </div>
        </div>

        {/* Search & Quick Filter Controls - Black & Golden */}
        <div className="w-full bg-neutral-900/95 border border-amber-500/20 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="w-4 h-4 text-amber-400/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 82 dishes (e.g., Oxtail, Seafood Okro, Jollof, Nsala, Chapman)..."
                className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white px-1.5 py-0.5 rounded bg-neutral-900 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Tags */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSpicyFilter('all')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  spicyFilter === 'all'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold shadow-md shadow-amber-950/40'
                    : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                All 82 Items
              </button>
              <button
                onClick={() => setSpicyFilter('favorites')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  spicyFilter === 'favorites'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold'
                    : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Chef Highlights
              </button>
              <button
                onClick={() => setSpicyFilter('spicy')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  spicyFilter === 'spicy'
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold'
                    : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Spicy Classics
              </button>
              <button
                onClick={() => setSpicyFilter('non-spicy')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  spicyFilter === 'non-spicy'
                    ? 'bg-neutral-800 text-amber-300 font-bold border border-amber-500/40'
                    : 'bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                Mild / Continental
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation Pills (Full 10 Menu Sections) - Golden Highlight */}
        <div className="w-full flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 scrollbar-none">
          {MENU_SECTIONS.map((sec) => {
            const isActive = selectedSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-neutral-950 font-bold border-amber-300 shadow-lg shadow-amber-950/40'
                    : 'bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border-neutral-800'
                }`}
              >
                <span>{sec.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-neutral-950/40 text-neutral-950 font-black' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {sec.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 px-1">
          <div>
            Showing <span className="text-amber-400 font-bold">{filteredDishes.length}</span> of 82 menu items
            {selectedSection !== 'all' && (
              <span className="text-neutral-400"> in <strong className="text-neutral-200">{MENU_SECTIONS.find(s => s.id === selectedSection)?.title}</strong></span>
            )}
          </div>
          {(searchQuery || selectedSection !== 'all' || spicyFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSection('all');
                setSpicyFilter('all');
              }}
              className="text-amber-400 hover:underline font-semibold cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* 82 Items Grid - Bold Visible Images on EVERY Card, Black & Golden Theme, No Edge Overlap */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-neutral-900/50 rounded-2xl border border-neutral-800 p-6">
            <UtensilsCrossed className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <p className="text-base text-neutral-300 font-medium">No dishes match your search query.</p>
            <p className="text-xs text-neutral-500 mt-1">Try searching for &quot;Pepper Soup&quot;, &quot;Seafood&quot;, &quot;Yam&quot;, or &quot;Chapman&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSection('all');
                setSpicyFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 text-xs font-bold hover:from-amber-400 hover:to-yellow-500 transition-colors cursor-pointer"
            >
              Show All 82 Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredDishes.map((dish) => {
              const isHighlight = dish.badge === 'Chef Favorite' || dish.badge === 'House Special' || dish.badge === 'Iconic Signature';

              return (
                <article
                  key={dish.id}
                  className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden w-full box-border ${
                    isHighlight
                      ? 'bg-neutral-900/95 border-amber-500/40 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-950/50'
                      : 'bg-neutral-900/80 border-neutral-800 hover:border-amber-500/30 hover:bg-neutral-900 hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* BOLD, PROMINENT DISH IMAGE (Top of Card - Larger, Clearer & Bolder) */}
                    <div
                      onClick={() => setPreviewDish(dish)}
                      className="relative w-full h-60 sm:h-64 lg:h-72 bg-neutral-950 overflow-hidden cursor-pointer group/img"
                    >
                      <img
                        src={dish.image || '/images/dishes/pss.jpg'}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-500 filter brightness-100 contrast-110"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-black/60 pointer-events-none" />

                      {/* Expand / HD View Floating Hint */}
                      <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/40 text-amber-300 text-[11px] font-bold flex items-center gap-1 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>View HD Photo</span>
                      </div>

                      {/* Top Badges Overlaid on Image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                        <span className="text-[10px] sm:text-[11px] uppercase font-black tracking-wider text-amber-300 bg-neutral-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/50 shadow-md">
                          {dish.sectionTitle.split('(')[0].trim()}
                        </span>

                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                          {dish.badge && (
                            <span
                              className={`text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-md ${
                                dish.badge === 'Chef Favorite' || dish.badge === 'Iconic Signature'
                                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950'
                                  : dish.badge === 'Spicy' || dish.badge === 'Hot'
                                  ? 'bg-red-500/95 text-white'
                                  : 'bg-neutral-900/95 text-neutral-200 border border-neutral-700'
                              }`}
                            >
                              {dish.badge}
                            </span>
                          )}

                          {dish.spicyLevel && (
                            <span
                              className="inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] text-red-300 font-bold bg-neutral-950/90 backdrop-blur-md px-2 py-0.5 rounded border border-red-500/50"
                              title={`Spicy Level: ${dish.spicyLevel}`}
                            >
                              <Flame className="w-3 h-3 text-red-400" />
                              {dish.spicyLevel}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6">
                      {/* Dish Name & Price */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <div className="text-right shrink-0">
                          <span className="text-base sm:text-lg font-black text-amber-400 font-mono tracking-tight block">
                            {dish.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                        {dish.description}
                      </p>

                      {/* Ingredients Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {dish.ingredients.slice(0, 4).map((ing, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] sm:text-[10.5px] px-2 py-0.5 rounded-md bg-neutral-950/80 text-neutral-400 border border-neutral-800"
                          >
                            {ing}
                          </span>
                        ))}
                        {dish.ingredients.length > 4 && (
                          <span className="text-[10px] px-1.5 py-0.5 text-neutral-500">
                            +{dish.ingredients.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats & Actions */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-neutral-800/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>Prep: <strong className="text-neutral-300">{dish.prepTime}</strong></span>
                      </span>
                      <span>
                        Portion: <strong className="text-neutral-300">{dish.portion}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => {
                          if (onOrderDish) {
                            onOrderDish(dish.name);
                          } else {
                            handleWhatsAppOrder(dish);
                          }
                        }}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-amber-950/40 cursor-pointer"
                      >
                        <UtensilsCrossed className="w-3 h-3 text-neutral-950" />
                        <span>Order Now</span>
                      </button>

                      <button
                        onClick={() => handleWhatsAppOrder(dish)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-850 text-neutral-200 border border-amber-500/30 hover:border-amber-400/60 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* 24/7 Kitchen Guarantee Banner - Black & Golden */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-neutral-900 to-yellow-950/40 border border-amber-500/30 text-center space-y-3 sm:space-y-4 w-full box-border">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400">
            <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Craving Fresh Native Delicacies at 2:00 AM?
          </h3>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Unlike standard restaurants with restricted kitchen cutoff times, Naveda World’s native cooks and grill masters operate 24 hours a day. Enjoy piping hot Oxtail Pepper Soup, fresh catfish, or Nkwobi whenever you desire.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-white text-neutral-900 text-xs font-bold hover:bg-neutral-200 transition-colors"
            >
              Call Kitchen Direct: {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp (24/7 Instant Reply)
            </a>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN HD DISH PREVIEW LIGHTBOX MODAL */}
      {previewDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewDish(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setPreviewDish(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-white flex items-center justify-center border border-neutral-700 transition-colors cursor-pointer shadow-lg"
              title="Close Preview"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>

            {/* High Definition Dish Photo */}
            <div className="relative w-full h-72 sm:h-96 bg-neutral-950">
              <img
                src={previewDish.image || '/images/dishes/pss.jpg'}
                alt={previewDish.name}
                className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/40" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 bg-neutral-950/80 px-2.5 py-1 rounded-md border border-amber-500/30">
                    {previewDish.sectionTitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-2">
                    {previewDish.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {previewDish.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Details & Direct Order Actions */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-neutral-300 leading-relaxed">
                {previewDish.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-neutral-400 font-semibold mr-1">Ingredients:</span>
                {previewDish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <span>Estimated Prep Time: <strong className="text-neutral-200">{previewDish.prepTime}</strong></span>
                <span>Portion Size: <strong className="text-neutral-200">{previewDish.portion}</strong></span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    const dish = previewDish;
                    setPreviewDish(null);
                    if (onOrderDish) {
                      onOrderDish(dish.name);
                    } else {
                      handleWhatsAppOrder(dish);
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-amber-950/40 cursor-pointer flex items-center justify-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4 text-neutral-950" />
                  <span>Reserve Table / Order</span>
                </button>
                <button
                  onClick={() => {
                    const dish = previewDish;
                    setPreviewDish(null);
                    handleWhatsAppOrder(dish);
                  }}
                  className="w-full py-3 rounded-xl bg-neutral-950 hover:bg-neutral-850 text-white border border-amber-500/40 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
