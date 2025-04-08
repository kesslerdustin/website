"use client";

import { useEffect, useState, useRef } from "react";

export function ScrollEffects() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [sections, setSections] = useState<Element[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);

  // Collect sections only once when component mounts
  useEffect(() => {
    const allSections = document.querySelectorAll('section');
    setSections(Array.from(allSections));
    
    // Add the animated gradient class to the body
    document.documentElement.classList.add('animated-bg');

    // Start animation loop for smooth orb movement
    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp;
      const elapsed = timestamp - timeRef.current;
      timeRef.current = timestamp;
      
      // Use timestamp to create smoother animations that run independently of scroll
      setTimeElapsed(prev => prev + elapsed);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Track time for smooth animations
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Handle scroll effects with sections as a dependency
  useEffect(() => {
    // Skip if sections aren't loaded yet
    if (sections.length === 0) return;

    const highlightVisibleSections = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = window.scrollY + viewportHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if section is in view (with some threshold)
        if (viewportCenter >= sectionTop - 100 && viewportCenter <= sectionBottom + 100) {
          section.classList.add('section-active');
        } else {
          section.classList.remove('section-active');
        }
      });
    };

    const updateScrollEffects = () => {
      const scrollY = window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const windowHeight = window.innerHeight;
      const scrollable = documentHeight - windowHeight;
      
      // Calculate scroll percentage (0 to 100)
      const percentage = Math.min(Math.max((scrollY / scrollable) * 100, 0), 100);
      setScrollPercentage(percentage);
      
      // Update scroll-based CSS variables
      document.documentElement.style.setProperty('--scroll-percent', `${percentage}%`);
      document.documentElement.style.setProperty('--scroll-factor', `${percentage / 100}`);
      
      setScrollY(scrollY);
      highlightVisibleSections();
    };
    
    window.addEventListener("scroll", updateScrollEffects, { passive: true });
    
    // Initial update
    updateScrollEffects();
    
    // Handle window resize
    window.addEventListener("resize", updateScrollEffects, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", updateScrollEffects);
      window.removeEventListener("resize", updateScrollEffects);
    };
  }, [sections]);

  // Calculate orb positions based on scroll and time
  // Reduce scale changes to make them subtler
  const orbScale = 1 + (scrollPercentage * 0.001); // Even subtler scale effect
  // Keep opacity more consistent so orbs don't fade too much
  const orbOpacity = Math.max(0.6 - (scrollPercentage * 0.001), 0.45); // Smoother opacity
  
  // Time-based animation for smoother, more random movement
  const time = timeElapsed / 1000; // Convert to seconds for easier math
  
  // First orb movement calculation with multiple frequencies
  // Even gentler movement amplitude for more subtle motion
  const orb1X = Math.sin(time * 0.17) * 4 + Math.cos(time * 0.11) * 2;
  const orb1Y = Math.cos(time * 0.12) * 2 + Math.sin(time * 0.09) * 1.5;
  
  // Second orb with different frequencies
  const orb2X = Math.cos(time * 0.14) * 5 + Math.sin(time * 0.08) * 3;
  const orb2Y = Math.sin(time * 0.13) * 3 + Math.cos(time * 0.10) * 2;
  
  // Add some scroll influence as well - very subtle effect
  const scrollInfluenceX = Math.sin(scrollY * 0.0004) * 2;
  const scrollInfluenceY = Math.cos(scrollY * 0.0004) * 1.5;

  return (
    <div className="orb-container">
      <div className="gradient-orb orb-1" style={{ 
        transform: `translate(${orb1X + scrollInfluenceX}vw, ${orb1Y + scrollInfluenceY}vh) scale(${orbScale})`,
        opacity: orbOpacity
      }} />
      <div className="gradient-orb orb-2" style={{ 
        transform: `translate(${orb2X - scrollInfluenceX}vw, ${orb2Y - scrollInfluenceY}vh) scale(${orbScale * 0.95})`,
        opacity: orbOpacity
      }} />
    </div>
  );
} 