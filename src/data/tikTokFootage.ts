export interface TikTokReel {
  id: string;
  title: string;
  creator: string;
  views: string;
  likes: string;
  shares: string;
  duration: string;
  soundTrack: string;
  description: string;
  tags: string[];
  thumbnail: string;
  category: 'nightlife' | 'mart' | 'food' | 'sports' | 'building';
}

export const TIKTOK_FOOTAGE: TikTokReel[] = [
  {
    id: 'reel-nightlife-vip',
    title: 'POV: Saturday Night Bottle Service at Naveda Lounge Umuahia 🔥🥂',
    creator: '@naveda.world',
    views: '48.2K',
    likes: '6.4K',
    shares: '890',
    duration: '0:38',
    soundTrack: 'DJ Blaze - Highlife Fusion Mix Live',
    description: 'When the sparklers come out and the vibes don’t stop until dawn! 🍾 Naveda World Lounge on Okwuta Road is the pulse of Abia nightlife.',
    tags: ['#NavedaWorld', '#UmuahiaNightlife', '#AbiaState', '#BottleService', '#HighlifeNights'],
    thumbnail: '/src/assets/images/naveda_nightlife_vibes_1793370404797.jpg',
    category: 'nightlife',
  },
  {
    id: 'reel-naveda-mart-shopping',
    title: 'Full Supermarket & Cookware Haul at Naveda Mart 🛒✨',
    creator: '@naveda.world',
    views: '34.9K',
    likes: '4.2K',
    shares: '640',
    duration: '0:45',
    soundTrack: 'Amapiano Grooves 2026',
    description: 'Everything you need under one roof! Stocking up on heavy-duty cookware, blenders, and fresh food staples at Naveda Mart.',
    tags: ['#NavedaMart', '#UmuahiaShopping', '#CookwareHaul', '#AbiaSupermarket', '#HouseholdEssentials'],
    thumbnail: '/src/assets/images/naveda_mart_supermarket_1793370403426.jpg',
    category: 'mart',
  },
  {
    id: 'reel-live-highlife-band',
    title: 'Black & Proud: Live Igbo Highlife Band on Stage at Naveda 🎺🥁',
    creator: '@naveda.world',
    views: '62.7K',
    likes: '9.8K',
    shares: '1.4K',
    duration: '0:52',
    soundTrack: 'Original Live Sax & Ogene Solo - Naveda Band',
    description: 'Authentic Isiagu attires, sweet brass horns, and raw percussion. You cannot experience this anywhere else in Eastern Nigeria! ❤️',
    tags: ['#IgboHighlife', '#Isiagu', '#LiveBand', '#NavedaLive', '#UmuahiaSounds'],
    thumbnail: '/src/assets/images/naveda_live_band_nigerian_1792727546331.jpg',
    category: 'nightlife',
  },
  {
    id: 'reel-super-eagles-arena',
    title: 'Matchday Madness! Super Eagles Victory Celebration at The Arena ⚽🇳🇬',
    creator: '@naveda.world',
    views: '51.3K',
    likes: '7.1K',
    shares: '1.2K',
    duration: '0:35',
    soundTrack: 'Nigerian Football Anthem Live Crowd',
    description: 'Cold Star & Guinness, spicy Asun, and 500+ fans cheering together. Best sports viewing experience in Umuahia!',
    tags: ['#SuperEagles', '#TheArenaNaveda', '#MatchdayVibes', '#SportsLounge', '#AbiaFans'],
    thumbnail: '/src/assets/images/naveda_sports_and_games_1793370404991.jpg',
    category: 'sports',
  },
  {
    id: 'reel-nkwobi-and-soups',
    title: 'Hot Nkwobi in Mortar & Pounded Yam Plated Fresh 🤤🍲',
    creator: '@naveda.world',
    views: '43.1K',
    likes: '5.6K',
    shares: '780',
    duration: '0:30',
    soundTrack: 'Flavour - Eastern Flavors Acoustic',
    description: 'Direct from our 24/7 kitchen to your table. Spicy cow foot with utazi and steaming Egusi soup with stockfish!',
    tags: ['#Nkwobi', '#PoundedYam', '#AfricanNativeFood', '#NavedaEats', '#AbiaFoodie'],
    thumbnail: '/src/assets/images/naveda_african_native_cuisine_1792727581159.jpg',
    category: 'food',
  },
  {
    id: 'reel-naveda-complex-twilight',
    title: 'Golden Hour at the Iconic Naveda World Building Complex 🏢🌇',
    creator: '@naveda.world',
    views: '39.8K',
    likes: '5.2K',
    shares: '620',
    duration: '0:28',
    soundTrack: 'Afro Chill Sunset Instrumental',
    description: 'The premier commercial & hospitality landmark along Okwuta Road by Ahiaeke Junction. Mart by day, luxury lounge by night.',
    tags: ['#NavedaWorld', '#OkwutaRoad', '#AhiaekeJunction', '#UmuahiaArchitecture', '#VisitAbia'],
    thumbnail: '/src/assets/images/naveda_building_exterior_1793370403231.jpg',
    category: 'building',
  },
];
