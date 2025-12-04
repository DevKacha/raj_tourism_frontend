// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import heroImgPath from "../assets/hero2.jpeg";
import gujaratImg from "../assets/gujarat.jpg"
import kashmirImg from "../assets/kasmir.jpg";
import goaImg from "../assets/goa.jpg";
import dubaiImg from "../assets/dubai.jpg";
import goa from "../assets/india/id100/main.jpg"


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCopied, setShowCopied] = useState(false);

  const phoneNumber = "+919825012345"; // Raj Tourism phone number

  // Handle Explore Now click - scroll to ExploreIndia section
  const handleExploreClick = (e) => {
    e.preventDefault();
    const exploreSection = document.querySelector('#explore-india-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Handle Contact Us click - copy on desktop, call on mobile
  const handleContactClick = (e) => {
    e.preventDefault();

    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile: open dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop: copy to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy:', err);
        // Fallback: show alert
        alert(`Phone: ${phoneNumber}`);
      });
    }
  };

  // Animate elements on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-play slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
      setIsTyping(true);
      setDisplayedText("");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Discover Goa",
      subtitle: "Explore the vibrant culture and heritage",
      image: goa
    },
    {
      title: "Journey Through India",
      subtitle: "Experience diverse landscapes and traditions",
      image: kashmirImg
    },
    {
      title: "Unforgettable Memories",
      subtitle: "Create stories that last a lifetime",
      image: goaImg
    },
    {
      title: "Explore Dubai",
      subtitle: "Discover luxury and adventure in the desert",
      image: dubaiImg
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
    setIsTyping(true);
    setDisplayedText("");
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
    setIsTyping(true);
    setDisplayedText("");
  };

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return;

    const currentText = slides[currentSlide].title;
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentSlide, isTyping]);

  return (
    <header className="relative w-full overflow-hidden">
      {/* Full-bleed background image with blur */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImgPath}
          alt="Scenic travel"
          className="w-full h-full object-cover blur-sm"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Copied notification */}
      {showCopied && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          ✓ Phone number copied!
        </div>
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[90vh] py-12 sm:py-16 lg:py-20">

          {/* Left column: Title + CTAs */}
          <div className="z-20 pt-20 sm:pt-24 lg:pt-8 order-1 lg:order-1">
            {/* Welcome badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Welcome to</span>
            </div>

            {/* EMPHASIZED Brand Name */}
            <div className="overflow-hidden mb-1 sm:mb-2">
              <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-3 sm:mb-4 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                <span className="inline-block text-white drop-shadow-lg">
                  RAJ
                </span>
                <br />
                <span className="inline-block text-white drop-shadow-lg">
                  TOURISM
                </span>
              </h1>
              {/* Animated underline */}
              <div className={`h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transform transition-all duration-1000 delay-400 ${isVisible ? 'w-32 sm:w-40 md:w-48 opacity-100' : 'w-0 opacity-0'
                }`}></div>
            </div>

            {/* Main heading with typewriter animation */}
            <div className="overflow-hidden mb-1 sm:mb-2 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                {displayedText}
                <span className="inline-block w-0.5 h-6 sm:h-8 md:h-10 lg:h-12 bg-white ml-1 animate-pulse"></span>
              </h2>
            </div>

            {/* Subtitle with fade */}
            <p className={`text-base sm:text-lg md:text-xl text-white/95 font-medium mb-1 sm:mb-2 drop-shadow transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p className={`text-sm sm:text-base md:text-lg text-white/90 max-w-xl mb-4 sm:mb-6 drop-shadow transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              Curated trips across Gujarat & India — tailor-made itineraries, trusted guides, and 24×7 support for your perfect journey.
            </p>


            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <button
                onClick={handleExploreClick}
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-gray-900 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-sm sm:text-base"
              >
                <span>Explore Now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/40 text-white font-bold hover:bg-white/20 hover:border-white hover:scale-105 backdrop-blur-sm transform transition-all duration-300 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact Us</span>
              </button>
            </div>

            {/* Stats section */}
            <div className={`mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-lg transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
              <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow">500+</div>
                <div className="text-xs sm:text-sm text-white/90 mt-1">Happy Clients</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow">50+</div>
                <div className="text-xs sm:text-sm text-white/90 mt-1">Destinations</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow">24/7</div>
                <div className="text-xs sm:text-sm text-white/90 mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right column: Image carousel */}
          <div className={`z-10 flex justify-center lg:justify-end order-2 lg:order-2 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Main carousel card */}
              <div className="relative group">
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition duration-1000"></div>

                {/* Image container */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white p-1.5 sm:p-2">
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                    {/* Carousel images */}
                    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px]">
                      {slides.map((slide, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-700 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Floating badges */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex gap-2">
                      <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 shadow-lg animate-bounce">
                        🎯 Best Rated
                      </div>
                    </div>

                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-green-600 shadow-lg">
                        ✓ Verified
                      </div>
                    </div>

                    {/* Carousel navigation arrows - Sleek Modern Design */}
                    <button
                      onClick={prevSlide}
                      className="group/btn absolute left-3 sm:left-5 top-3/4 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 z-10"
                      aria-label="Previous slide"
                    >
                      {/* Animated background circle */}
                      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-xl group-hover/btn:bg-black/60 transition-all duration-300"></div>
                      {/* Glowing ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover/btn:border-white/60 group-hover/btn:scale-110 transition-all duration-300"></div>
                      {/* Icon */}
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover/btn:-translate-x-0.5 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover/btn:bg-blue-500/20 blur-xl transition-all duration-300"></div>
                    </button>

                    <button
                      onClick={nextSlide}
                      className="group/btn absolute right-3 sm:right-5 top-3/4 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 z-10"
                      aria-label="Next slide"
                    >
                      {/* Animated background circle */}
                      <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-xl group-hover/btn:bg-black/60 transition-all duration-300"></div>
                      {/* Glowing ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover/btn:border-white/60 group-hover/btn:scale-110 transition-all duration-300"></div>
                      {/* Icon */}
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover/btn:translate-x-0.5 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover/btn:bg-blue-500/20 blur-xl transition-all duration-300"></div>
                    </button>
                  </div>

                  {/* Navigation dots - Enhanced UI */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-8 flex gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    {[0, 1, 2, 3].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentSlide(idx);
                          setIsTyping(true);
                          setDisplayedText("");
                        }}
                        className={`rounded-full transition-all duration-300 ${currentSlide === idx
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8 sm:w-10 h-2 shadow-md shadow-blue-500/50'
                          : 'bg-gray-300 w-2 h-2 hover:bg-gray-400 hover:scale-125'
                          }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-purple-200 rounded-full blur-2xl opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-semibold text-white/90 uppercase tracking-wider drop-shadow">Scroll Down</span>
          <svg className="w-6 h-6 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </header>
  );
}