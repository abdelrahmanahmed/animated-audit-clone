import { useEffect, useRef, useState } from "react";

/**
 * AnimatedBackground Component
 * 
 * Features:
 * - Full-page background image (swap URL at BACKGROUND_IMAGE_URL)
 * - Gradient drift overlay following image colors
 * - Soft moving light blobs with low opacity
 * - Grain texture
 * - Parallax on scroll
 * 
 * To change background image: Update the BACKGROUND_IMAGE_URL constant
 */

// ============================================
// CONFIGURATION - Change these values
// ============================================
const BACKGROUND_IMAGE_URL = "/images/background.png";

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.15;

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />

      {/* Gradient overlay matching image colors */}
      <div 
        className="absolute inset-0 animate-gradient-drift"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsla(142, 71%, 45%, 0.08) 0%,
              hsla(160, 84%, 39%, 0.06) 25%,
              hsla(175, 60%, 25%, 0.1) 50%,
              hsla(160, 35%, 9%, 0.15) 75%,
              hsla(150, 25%, 5%, 0.1) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />

      {/* Soft moving light blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Emerald blob - top right */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-blob-float-1"
          style={{
            top: '-10%',
            right: '-5%',
            background: 'radial-gradient(circle, hsla(142, 71%, 45%, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Teal blob - center left */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-blob-float-2"
          style={{
            top: '30%',
            left: '-10%',
            background: 'radial-gradient(circle, hsla(160, 84%, 39%, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Dark teal blob - bottom center */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full animate-blob-float-3"
          style={{
            bottom: '-20%',
            left: '30%',
            background: 'radial-gradient(circle, hsla(175, 60%, 25%, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Additional subtle emerald glow */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-pulse-soft"
          style={{
            top: '50%',
            right: '20%',
            background: 'radial-gradient(circle, hsla(142, 71%, 45%, 0.06) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Vignette overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsla(150, 25%, 5%, 0.4) 100%)',
        }}
      />

      {/* Top fade for header readability */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, hsla(150, 25%, 5%, 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Bottom fade for footer readability */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, hsla(150, 25%, 5%, 0.6) 0%, transparent 100%)',
        }}
      />

      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
