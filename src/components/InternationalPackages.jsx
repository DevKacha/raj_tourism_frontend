// src/components/InternationalScrollStack.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTourImages } from "../utils/imageHelper";
import heroImgPath from "../assets/hero.jpg";

// Map actual tour packages to scenes
const scenes = [
  {
    id: 207,
    title: "Dubai Luxury",
    label: "Dubai • UAE",
    image: getTourImages('international', 207).image,
    description: "Skyscrapers, desert safaris and late-night marina cruises.",
    packageId: 207,
  },
  {
    id: 209,
    title: "Vietnam Highlights",
    label: "Hanoi • Ha Long Bay • Da Nang",
    image: getTourImages('international', 209).image,
    description: "Lantern-lit streets, limestone cliffs and calm emerald waters all in one trip.",
    packageId: 209,
  },
  {
    id: 203,
    title: "Singapore Malaysia",
    label: "Singapore • Kuala Lumpur",
    image: getTourImages('international', 203).image,
    description: "Futuristic skyline, Gardens by the Bay and ultra-clean city experiences.",
    packageId: 203,
  },
  {
    id: 200,
    title: "Bangkok Pattaya",
    label: "Bangkok • Pattaya",
    image: getTourImages('international', 200).image,
    description: "Street food, island hopping and sunsets over crystal clear beaches.",
    packageId: 200,
  },
  {
    id: 208,
    title: "Bali Island Retreat",
    label: "Ubud • Nusa Penida • Kuta",
    image: getTourImages('international', 208).image,
    description: "Tropical paradise with stunning temples, rice terraces and pristine beaches.",
    packageId: 208,
  },
];


export default function InternationalScrollStack() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const isManualScroll = useRef(false);

  // Reveal section on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track which card is in the center of viewport
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const options = {
      root: null,
      threshold: 0.6,
      rootMargin: "-20% 0px -20% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      // Skip updates if we are manually scrolling to a card
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.index) {
          const idx = Number(entry.target.dataset.index);
          setActiveIndex(idx);
        }
      });
    }, options);

    cardRefs.current.forEach((el, index) => {
      if (el) {
        el.dataset.index = index;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="international-packages"
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Background image + dark gradient */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImgPath}
          alt="Travel background"
          className="w-full h-full object-cover blur-md scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      {/* Soft color glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 top-10 w-72 h-72 bg-blue-500/25 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-0 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-12 transform transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold text-white mb-3 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span>International Visual Moodboard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight drop-shadow">
            <span
              className="
                bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300
                bg-clip-text text-transparent
                text-3xl sm:text-4xl md:text-5xl
                font-extrabold
                drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
              "
            >
              International Holidays
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-white/70">
            Scroll down to explore the world, visually.
          </p>
        </div>

        {/* STACKED SCROLL CARDS */}
        <div className="space-y-5 sm:space-y-6">
          {scenes.map((scene, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={scene.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => {
                  // Lock observer updates
                  isManualScroll.current = true;
                  setActiveIndex(index);

                  // Wait for the state update and layout change to take effect
                  setTimeout(() => {
                    cardRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                      inline: 'center'
                    });

                    // Unlock observer after scroll animation completes (approx 700ms)
                    setTimeout(() => {
                      isManualScroll.current = false;
                    }, 700);
                  }, 100);
                }}
                className={`
                  relative overflow-hidden rounded-[2.5rem] cursor-pointer
                  bg-white/10 backdrop-blur-xl border
                  transition-all duration-700 ease-out will-change-transform
                  ${isActive
                    ? "border-emerald-300/80 shadow-[0_24px_65px_rgba(0,0,0,0.85)] h-64 sm:h-72 md:h-80 scale-[1.02]"
                    : "border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.6)] h-28 sm:h-32 md:h-36 scale-[0.96]"
                  }
                `}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isActive ? "scale-110" : "scale-100"
                      }`}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between px-5 sm:px-7 py-3 sm:py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] sm:text-xs text-white/70 uppercase tracking-[0.18em]">
                        INTERNATIONAL
                      </p>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow">
                        {scene.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-white/80">
                        {scene.label}
                      </p>
                    </div>

                    <div
                      className={`
                        hidden sm:flex items-center justify-center
                        rounded-full px-3 py-1 text-[10px] font-semibold
                        bg-white/15 border border-white/40 text-white
                        backdrop-blur transition-all duration-700 ease-out
                        ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      `}
                    >
                      Scroll to explore
                    </div>
                  </div>

                  {/* Extra description only when expanded */}
                  <div
                    className={`
                      mt-3 text-[11px] sm:text-sm text-white/85 max-w-xl
                      transition-all duration-700 ease-out
                      ${isActive
                        ? "opacity-100 translate-y-0 max-h-24 sm:max-h-28"
                        : "opacity-0 translate-y-2 max-h-0"
                      }
                      overflow-hidden
                    `}
                  >
                    {scene.description}

                  </div>

                  {/* View Details Button - Absolute Bottom Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/package-details/${scene.packageId}`);
                    }}
                    className={`
                      absolute top-4 right-5 sm:top-auto sm:bottom-4 sm:right-7
                      px-4 py-2 rounded-full 
                      bg-white/20 hover:bg-white/30 
                      border border-white/30 
                      text-white text-xs font-semibold 
                      backdrop-blur-md 
                      transition-all duration-700 ease-out
                      flex items-center gap-2
                      group
                      z-10
                      ${isActive ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
                    `}
                  >
                    View Details
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small note */}
        <p className="mt-6 text-[10px] sm:text-xs text-white/65 text-center">
          Final itineraries, pricing, and bookings are discussed personally – this section
          is just to show the kind of experiences we can design.
        </p>
      </div>
    </section>
  );
}
