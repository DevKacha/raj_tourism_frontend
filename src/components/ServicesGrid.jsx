// src/components/ServicesGrid.jsx
import React, { useEffect, useRef, useState } from "react";
import airIcon from "../assets/services/air-tickets.png";
import packagesIcon from "../assets/services/packages.png";
import railwayIcon from "../assets/services/railway.png";
import carIcon from "../assets/services/car-hire.png";
import hotelIcon from "../assets/services/hotel.png";
import passportIcon from "../assets/services/passport.png";
import moneyIcon from "../assets/services/money-exchange.png";

const services = [
  { id: 1, title: "International & Domestic Air Tickets", icon: airIcon },
  { id: 2, title: "Domestic & International Packages", icon: packagesIcon },
  { id: 3, title: "Railway Ticket Booking", icon: railwayIcon },
  { id: 4, title: "Car Hire", icon: carIcon },
  { id: 5, title: "Hotel Booking", icon: hotelIcon },
  { id: 6, title: "Passport & Visa Formalities", icon: passportIcon },
  { id: 7, title: "Money Exchange", icon: moneyIcon },
];
function ServiceCard({ service, isMobile, onClick }) {
  return (
    <div
      onClick={() => onClick(service)}
      className={`flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-sm group ${!isMobile ? 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:border-blue-300' : ''
        }`}
      style={{ width: "210px", aspectRatio: "1/1" }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-50 via-indigo-100 to-purple-50 flex items-center justify-center mb-3 shadow-sm transition-all duration-300 ${!isMobile ? 'group-hover:from-blue-100 group-hover:via-indigo-200 group-hover:to-purple-100 group-hover:shadow-md group-hover:scale-110' : ''
        }`}>
        <img
          src={service.icon}
          alt=""
          className={`w-10 h-10 object-contain transition-transform duration-300 ${!isMobile ? 'group-hover:rotate-12 group-hover:scale-110' : ''
            }`}
        />
      </div>
      <h3 className={`text-xs font-semibold text-gray-800 text-center leading-relaxed px-2 transition-colors duration-300 ${!isMobile ? 'group-hover:text-blue-600' : ''
        }`}>
        {service.title}
      </h3>
    </div>
  );
}

/* -------------------- Auto-Scrolling Row (like Reviews) -------------------- */
function ServicesScroller({ items, isMobile, isPaused, setIsPaused, onCardClick }) {
  const scrollRef = useRef(null);
  const scrollPosRef = useRef(0);
  const isPausedRef = useRef(false);

  // keep ref in sync with state (to avoid stale closure)
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const speed = isMobile ? 0.7 : 0.6;

    const animate = () => {
      if (!isPausedRef.current) {
        const halfWidth = scrollContainer.scrollWidth / 2;
        let next = scrollPosRef.current + speed;
        if (next >= halfWidth) {
          next = 0; // loop back
        }
        scrollPosRef.current = next;
        scrollContainer.scrollLeft = next;
      }
      animationId = requestAnimationFrame(animate);
    };

    // start from current scrollLeft instead of 0
    scrollPosRef.current = scrollContainer.scrollLeft || 0;
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isMobile]);

  const duplicatedServices = [...items, ...items];

  // Handle hover pause only on desktop (not mobile)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsPaused(false);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-hidden py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedServices.map((service, index) => (
          <div key={`${service.id}-${index}`} className="flex-shrink-0">
            <ServiceCard service={service} isMobile={isMobile} onClick={onCardClick} />
          </div>
        ))}
      </div>

      {/* Gradient overlays like Reviews */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
    </div>
  );
}

/* -------------------- Main Component -------------------- */
export default function ServicesGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // pause scroll on hover / modal

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = (service) => {
    setActiveService(service);
    setIsPaused(true);
  };

  const closeModal = () => {
    setActiveService(null);
    setIsPaused(false);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 border-b-4 border-blue-500 inline-block">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Comprehensive travel solutions for all your needs
          </p>
        </div>

        {/* 🔁 Auto-scrolling services row (same feel as Reviews) */}
        <ServicesScroller
          items={services}
          isMobile={isMobile}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          onCardClick={handleCardClick}
        />
      </div>

      {/* ⬇️ EXPAND MODAL ON TAP */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 relative animate-[zoomIn_0.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 text-lg hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center">
              <img src={activeService.icon} className="w-20 h-20 mb-4" alt="" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {activeService.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trusted service with expert guidance and hassle‑free travel experience.
              </p>
            </div>


          </div>
        </div>
      )}
    </section>
  );
}
