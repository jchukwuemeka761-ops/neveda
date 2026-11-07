/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MobileQuickBar } from './components/MobileQuickBar';

// Separate Page Components
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';
import { NightlifePage } from './pages/NightlifePage';
import { MartPage } from './pages/MartPage';
import { SportsPage } from './pages/SportsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

type PageRoute = 'home' | 'restaurant' | 'nightlife' | 'mart' | 'sports' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Fine Dining & Native Dishes (Nkwobi / Soups)');

  // Sync state with URL hash for true multi-page navigation, bookmarks, and back/forward browser support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
      if (['restaurant', 'menu', 'dishes'].includes(hash)) {
        setCurrentPage('restaurant');
      } else if (['nightlife', 'lounge', 'live-band', 'cellar'].includes(hash)) {
        setCurrentPage('nightlife');
      } else if (['mart', 'mall', 'supermarket', 'cookware'].includes(hash)) {
        setCurrentPage('mart');
      } else if (['sports', 'arena', 'recreation'].includes(hash)) {
        setCurrentPage('sports');
      } else if (['about', 'complex', 'story'].includes(hash)) {
        setCurrentPage('about');
      } else if (['contact', 'location', 'hours'].includes(hash)) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    // Initialize from current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const targetPage = (page as PageRoute) || 'home';
    setCurrentPage(targetPage);
    window.location.hash = targetPage === 'home' ? '#/' : `#/${targetPage}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReservation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950 pb-14 sm:pb-0 w-full max-w-full overflow-x-hidden">
      {/* Top Navigation Bar with Official Naveda Logo & Active Page Indicators */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Main Multi-Page Routed Viewport */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'restaurant' && (
          <RestaurantPage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'nightlife' && (
          <NightlifePage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'mart' && (
          <MartPage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'sports' && (
          <SportsPage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onBack={() => navigateTo('home')}
            onOpenReservation={handleOpenReservation}
          />
        )}
      </main>

      {/* Global Footer with Multi-Page Links */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Reservation / Booking Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseReservation}
        defaultService={selectedService}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenReservation={() => handleOpenReservation()} />
    </div>
  );
}
