/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import Curation from './components/Curation';
import Encyclopedia from './components/Encyclopedia';
import Membership from './components/Membership';
import AromaLife from './components/AromaLife';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAB from './components/FAB';

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-sage/20 selection:text-sage">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <BrandStory />
        <Curation />
        <Encyclopedia />
        <Membership />
        <AromaLife />
        <Contact />
      </main>

      <Footer />
      <FAB />
    </div>
  );
}
