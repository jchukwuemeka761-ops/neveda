import React, { useState } from 'react';
import { Play, Heart, Share2, Eye, Music, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { TIKTOK_FOOTAGE, TikTokReel } from '../data/tikTokFootage';

export const TikTokReelsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All TikTok Clips' },
    { id: 'nightlife', label: 'VIP Nightlife & Highlife' },
    { id: 'mart', label: 'Naveda Mart Hauls' },
    { id: 'sports', label: 'Matchday @ The Arena' },
    { id: 'food', label: 'Kitchen & Native Food' },
    { id: 'building', label: 'Building & Surroundings' },
  ];

  const filteredReels = activeCategory === 'all'
    ? TIKTOK_FOOTAGE
    : TIKTOK_FOOTAGE.filter((r) => r.category === activeCategory);

  return (
    <section id="tiktok-vibes" className="py-16 sm:py-24 bg-neutral-950 border-b border-amber-500/15 relative overflow-hidden">
      {/* Very visible ambient background image of nightlife venue */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
          alt="Nightlife Energy"
          className="w-full h-full object-cover object-center opacity-65 filter brightness-100 contrast-125"
        />
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[0.5px]" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 box-border">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trending on TikTok &amp; Social Feeds</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display mt-2">
              #NavedaWorld TikTok Footages &amp; Moments
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Authentic clips from Naveda World Umuahia—from Saturday night bottle sparklers and Black Nigerian highlife bands to shopping hauls in Naveda Mart and Super Eagles celebrations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.tiktok.com/@naveda.world"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              <span>Follow @naveda.world</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
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

        {/* Reels Grid (styled like modern vertical social clips) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              className="group rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Video Thumbnail Box with visible realistic surroundings */}
              <div className="relative h-64 sm:h-72 w-full bg-neutral-950 overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Light gradient so background remains vividly visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 text-[10px] font-mono bg-neutral-950/85 backdrop-blur-sm text-neutral-300 px-2 py-0.5 rounded border border-neutral-800">
                  {reel.duration}
                </div>

                {/* Creator Watermark */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-semibold text-white bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-neutral-800">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>{reel.creator}</span>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => setPlayingId(playingId === reel.id ? null : reel.id)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-neutral-950 font-bold/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Play footage preview"
                >
                  <Play className="w-5 h-5 ml-0.5 fill-current" />
                </button>

                {/* Social Metrics Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <div className="flex items-center gap-3 bg-neutral-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-neutral-800">
                    <span className="flex items-center gap-1 text-neutral-300">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      {reel.views}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-300">
                      <Heart className="w-3.5 h-3.5 text-red-400" />
                      {reel.likes}
                    </span>
                  </div>
                  <span className="bg-neutral-950/80 backdrop-blur-sm px-2 py-1 rounded-md border border-neutral-800 text-[10px] text-neutral-300">
                    {reel.shares} shares
                  </span>
                </div>
              </div>

              {/* Description & Sound track */}
              <div className="p-5 space-y-3">
                <h3 className="text-sm font-bold text-white font-display group-hover:text-amber-400 transition-colors leading-snug">
                  {reel.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {reel.description}
                </p>

                {/* Soundtrack Tag */}
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                  <Music className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{reel.soundTrack}</span>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {reel.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-amber-400/90 hover:underline">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
