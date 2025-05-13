import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Export gsap instance for use throughout the application
export { gsap, ScrollTrigger, ScrollToPlugin };

// Common animation presets
export const fadeIn = (element, duration = 0.5) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    ease: 'power2.out'
  });
};

export const fadeOut = (element, duration = 0.5) => {
  return gsap.to(element, {
    opacity: 0,
    duration,
    ease: 'power2.in'
  });
};

export const slideIn = (element, direction = 'left', duration = 0.5) => {
  const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const y = direction === 'up' ? -100 : direction === 'down' ? 100 : 0;
  
  return gsap.from(element, {
    x,
    y,
    opacity: 0,
    duration,
    ease: 'power2.out'
  });
}; 