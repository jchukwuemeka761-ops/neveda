import React, { useState } from 'react';
import { Utensils, Flame, Clock, Plus, Check, MessageCircle, Phone, ArrowUpRight, Sparkles, ChefHat } from 'lucide-react';
import { RESTAURANT_DISHES, DishItem } from '../data/restaurantDishes';
import { BUSINESS_INFO } from '../data/businessInfo';

interface DishesShowcaseProps {
  onOrderDish: (dishName: string) => void;
  standalone?: boolean;
}

export const DishesShowcase: React.FC<DishesShowcaseProps> = ({ onOrderDish, standalone = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [orderedDish, setOrderedDish] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Dishes & Bites' },
    { id: 'grills', label: 'Grills & Suya' },
    { id: 'eastern', label: 'Nkwobi & Native Specials' },
    { id: 'soups', label: 'Soups & Swallows' },
    { id: 'rice', label: 'Party Jollof & Rice' },
    { id: 'bites', label: 'Shawarma & Bites' },
    { id: 'drinks', label: 'Zobo & Native Drinks' },
  ];

  const filteredDishes = selectedCategory === 'all'
    ? RESTAURANT_DISHES
    : RESTAURANT_DISHES.filter((dish) => dish.category === selectedCategory);

  const handleQuickWhatsAppOrder = (dish: DishItem) => {
    const text = `Hello Naveda World Bites & Brews, I would like to order:
- Dish: ${dish.name}
- Portion: ${dish.portion}
- Price: ${dish.price}
- Order Type: Dine-in / Takeaway / Delivery

Please confirm availability and wait time. Thank you!`;
    window.open(`https://wa.me/2349039777679?text=${encodeURIComponent(text)}`, '_blank');
    setOrderedDish(dish.id);
    setTimeout(() => setOrderedDish(null), 3000);
  };

  return (
    <section id="restaurant-dishes" className={`${standalone ? 'py-10' : 'py-16 sm:py-24'} bg-neutral-900/40 border-b border-neutral-900 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-500">
              <ChefHat className="w-3.5 h-3.5" />
              <span>Fresh 24/7 Kitchen Menu · No Stockouts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              Authentic Eastern Nigerian Native Cuisine &amp; Grills
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From spicy Nkwobi in wooden mortars and white soup (Ofe Nsala) with pounded yam to whole roasted catfish and smoky party jollof—prepared fresh around the clock along Okwuta Road, Umuahia.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white transition-colors"
            >
              Call Kitchen: {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dishes Grid: No Repetitive Dummy Images */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group rounded-2xl bg-neutral-950 border border-neutral-850 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              <div>
                {/* Media Image ONLY if unique and genuine */}
                {dish.image ? (
                  <div className="relative h-52 w-full bg-neutral-900 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                    {/* Overlaid Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {dish.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-orange-600/90 px-2 py-0.5 rounded shadow">
                          {dish.badge}
                        </span>
                      )}
                      {dish.spicyLevel && (
                        <span className="text-[10px] font-medium text-amber-300 bg-neutral-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-800 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-orange-500" />
                          {dish.spicyLevel}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-white font-bold text-sm tabular-nums text-orange-400 font-display">
                      {dish.price}
                    </div>
                  </div>
                ) : (
                  /* Clean, Non-Repetitive Gourmet Editorial Header */
                  <div className="p-5 pb-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400">
                          {dish.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {dish.spicyLevel && (
                          <span className="text-[10px] font-medium text-amber-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-500" />
                            {dish.spicyLevel}
                          </span>
                        )}
                        <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-white font-bold text-sm tabular-nums text-orange-400 font-display">
                          {dish.price}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                      {dish.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        {dish.prepTime}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-300 font-medium">
                        {dish.portion}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Ingredients Breakdown */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">Key Ingredients</span>
                    <div className="flex flex-wrap gap-1.5">
                      {dish.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10.5px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-850"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Actions */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-neutral-850 flex items-center gap-2">
                  <button
                    onClick={() => handleQuickWhatsAppOrder(dish)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                  >
                    {orderedDish === dish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Order Opened</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span>Order via WhatsApp</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOrderDish(dish.name)}
                    className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                    title="Reserve table with this dish"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 24-Hour Kitchen Promise Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white font-display">
              Craving Fresh Nkwobi or Pounded Yam at 2:00 AM?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Our kitchen operates 24 hours non-stop in Umuahia. Walk in anytime or message for fast delivery and pickup along Okwuta Road.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shadow"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
