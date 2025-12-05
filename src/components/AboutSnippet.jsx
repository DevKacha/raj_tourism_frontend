import { useState } from "react";

export default function AboutSnippet() {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = "+919428252181";

  // Handle Call button click - copy on desktop, call on mobile
  const handleCallClick = (e) => {
    e.preventDefault();

    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile: open dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // On desktop: copy to clipboard
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          alert(`Phone: ${phoneNumber}`);
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Copied notification */}
      {showCopied && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          ✓ Phone number copied!
        </div>
      )}

      {/* Boarding Pass Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Blue Section - 4 columns */}
          <div className="md:col-span-4 bg-gradient-to-br from-blue-600 to-blue-700 relative p-6">
            {/* Semi-circle cutouts on right edge */}
            <div className="absolute -right-3 top-1/4 w-6 h-6 bg-gray-50 rounded-full animate-pulse"></div>
            <div
              className="absolute -right-3 top-2/4 w-6 h-6 bg-gray-50 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="absolute -right-3 top-3/4 w-6 h-6 bg-gray-50 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>

            {/* Vertical dashed line */}
            <div className="absolute right-0 top-0 bottom-0 border-r-2 border-dashed border-white/30"></div>

            {/* Blue section content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 group">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-black text-white">About Us</h1>
                </div>
                <div className="h-1 w-16 bg-white/40 rounded animate-[slideIn_0.6s_ease-out]"></div>
              </div>

              {/* From/To destinations */}
              <div className="space-y-4">
                <div className="transform hover:translate-x-1 transition-transform duration-300">
                  <p className="text-xs text-white/70 uppercase font-bold mb-1">
                    From
                  </p>
                  <p className="text-3xl font-black text-white">GUJ</p>
                  <p className="text-xs text-white/90">Gujarat</p>
                </div>

                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-white/30"></div>
                  <svg
                    className="w-5 h-5 text-white/50 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <div className="flex-1 h-px bg-white/30"></div>
                </div>

                <div className="transform hover:translate-x-1 transition-transform duration-300">
                  <p className="text-xs text-white/70 uppercase font-bold mb-1">
                    To
                  </p>
                  <p className="text-3xl font-black text-white">WORLD</p>
                  <p className="text-xs text-white/90">Everywhere</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-4 border-t border-white/20 space-y-2">
                <div className="flex justify-between items-center group hover:bg-white/10 px-2 py-1 rounded transition-colors duration-300">
                  <span className="text-xs text-white/70 uppercase font-bold">
                    Travelers
                  </span>
                  <span className="text-lg font-black text-white group-hover:scale-110 transition-transform duration-300">
                    25000+
                  </span>
                </div>
                <div className="flex justify-between items-center group hover:bg-white/10 px-2 py-1 rounded transition-colors duration-300">
                  <span className="text-xs text-white/70 uppercase font-bold">
                    Destinations
                  </span>
                  <span className="text-lg font-black text-white group-hover:scale-110 transition-transform duration-300">
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center group hover:bg-white/10 px-2 py-1 rounded transition-colors duration-300">
                  <span className="text-xs text-white/70 uppercase font-bold">
                    Support
                  </span>
                  <span className="text-lg font-black text-white group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right White Section - 8 columns */}
          <div className="md:col-span-8 p-6 md:p-8 bg-white">
            <div className="mb-4">
              <h2 className="text-2xl font-black text-gray-900 mb-1">
                Raj Tourism
              </h2>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">
                Your Travel Partner Since 2006
              </p>
            </div>

            <div className="prose prose-gray max-w-none mb-5">
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <span className="font-bold text-gray-900">Raj Tourism</span> is
                your trusted travel specialist for Domestic and 
                International tours. We believe that travel is not just about visiting
                places—it's about experiencing cultures, creating memories, and
                discovering stories that last a lifetime.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                With over a two decade of experience, we specialize in crafting
                personalized itineraries that showcase the best of Gujarat's
                heritage, India's diversity, and beyond.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs leading-tight">
                    Expert Guides
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs leading-tight">
                    Customised Trips
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs leading-tight">
                    24/7 Support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs leading-tight">
                    Trusted
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Call us & Plan the Journey</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 text-sm font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                <span>More About Us</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Bottom booking reference */}
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 font-mono">
                BOOKING ID: RT-GUJ-2024 | CLASS: PREMIUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
