import React, { useEffect, useState } from "react";

// TEMP images (replace with real)
const destinations = [
  { id: 1, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", title: "Dubai", country: "UAE" },
  { id: 2, image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", title: "Vietnam", country: "Asia" },
  { id: 3, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", title: "Singapore", country: "Asia" },
  { id: 4, image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80", title: "Paris", country: "France" },
  { id: 5, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", title: "London", country: "UK" },
  { id: 6, image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80", title: "Tokyo", country: "Japan" },
  { id: 7, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", title: "Dubai", country: "UAE" },
  { id: 8, image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80", title: "Vietnam", country: "Asia" },
  { id: 9, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", title: "Singapore", country: "Asia" },
];

// Group destinations into slides of 3 for desktop
const slidesDesktop = [];
for (let i = 0; i < destinations.length; i += 3) {
  slidesDesktop.push(destinations.slice(i, i + 3));
}

// Group destinations into slides of 2 for mobile
const slidesMobile = [];
for (let i = 0; i < destinations.length; i += 2) {
  slidesMobile.push(destinations.slice(i, i + 2));
}

export default function TrendingAttractionsClean() {
  const [index, setIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset index when switching between mobile/desktop to avoid out-of-bounds
  useEffect(() => {
    setIndex(0);
    setActiveImage(null);
  }, [isMobile]);

  const slides = isMobile ? slidesMobile : slidesDesktop;

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setActiveImage(null);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
    setActiveImage(null);
  }

  function goTo(i) {
    setIndex(i);
    setActiveImage(null);
  }

  function toggleImage(slideIdx, destIdx) {
    const imageId = `${slideIdx}-${destIdx}`;
    setActiveImage(activeImage === imageId ? null : imageId);
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="lg:w-[35%] space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-[#d22b2b] leading-tight">
            Tourists <br /> Attractions
          </h2>

          <p className="text-gray-600 text-lg max-w-md">
            Travel when everything is arranged just for you.
          </p>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="lg:w-[65%] relative w-full">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-30 bg-white text-gray-700 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 hover:scale-110 transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* SLIDES */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slideGroup, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex justify-center gap-6 px-16">
                  {slideGroup.map((destination, destIndex) => {
                    const imageId = `${slideIndex}-${destIndex}`;
                    const isActive = activeImage === imageId;
                    const isAnyActive = activeImage !== null && activeImage.startsWith(`${slideIndex}-`);

                    return (
                      <div
                        key={destination.id}
                        className={`relative group cursor-pointer transition-all duration-700 ease-out ${isActive
                          ? 'flex-[2.5]'
                          : isAnyActive
                            ? 'flex-[0.6]'
                            : 'flex-1'
                          }`}
                        onClick={() => toggleImage(slideIndex, destIndex)}
                      >
                        {/* Image Container */}
                        <div
                          className="relative overflow-hidden w-full h-[450px] rounded-[100px] transition-all duration-500"
                          style={{
                            boxShadow: isActive ? '0 25px 70px rgba(210, 43, 43, 0.35)' : '0 15px 40px rgba(0, 0, 0, 0.12)'
                          }}
                        >
                          <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                            style={{
                              transform: isActive ? 'scale(1.05)' : 'scale(1)'
                            }}
                          />

                          {/* Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'
                            }`}></div>

                          {/* Title */}
                          <div className={`absolute bottom-8 left-0 right-0 px-6 sm:px-10 pb-4 sm:pb-6 transform transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'
                            }`}>
                            <h3 className="text-white text-xl sm:text-3xl font-bold truncate">{destination.title}</h3>
                            <p className="text-white/90 text-sm sm:text-base mt-1 sm:mt-2 truncate">{destination.country}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${index === i
                  ? "w-8 bg-[#d22b2b]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}