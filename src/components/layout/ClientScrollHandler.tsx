'use client';

import { useEffect } from 'react';

/**
 * Reads the URL hash (e.g., #about) on initial load and scrolls the viewport 
 * to the target section. This is necessary in Next.js SPAs to ensure that
 * deep links persist correctly after a page refresh.
 */
export function ClientScrollHandler() {
  useEffect(() => {
    // Check if a hash exists in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Find the element matching the hash selector (e.g., #about)
      const targetElement = document.querySelector(hash);
      
      if (targetElement) {
        // Use requestAnimationFrame to ensure the DOM is fully stable before scrolling
        // (a common pattern for scroll hacks in React/Next.js)
        requestAnimationFrame(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
      }
    }
  }, []); // Run only once on initial client-side mount

  return null; // This component renders nothing.
}