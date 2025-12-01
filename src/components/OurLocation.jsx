import { useState } from 'react';

export default function OurLocation() {
  const [showCopied, setShowCopied] = useState(false);
  const phoneNumber = "+919825012345";

  const handleCallClick = (e) => {
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
        alert(`Phone: ${phoneNumber}`);
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="location">
      {/* Copied notification */}
      {showCopied && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          ✓ Phone number copied!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase">
            Visit Us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
            Our Location
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Come meet us in person, discuss your next trip, and let us plan a
            memorable journey for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <div className="relative w-full h-[320px] md:h-[420px]">
              <iframe
                title="Raj Tourism Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.549216679969!2d70.78581489999999!3d22.2950595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca222b72ce7d%3A0x2fe199b2e136949e!2sRAJ%20TOURISM!5e0!3m2!1sen!2sin!4v1763992952410!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Info card */}
          <div className="flex">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col justify-between w-full">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  RAJ TOURISM Office
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We’re located in the heart of Rajkot and easily accessible by
                  road. Visit us to explore Gujarat tour packages, hotel
                  bookings, flights, and more.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="mt-1 text-blue-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">
                        RAJ TOURISM, Rajkot, Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-blue-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Office Hours</p>
                      <p className="text-gray-600">
                        Monday – Saturday: 10:00 AM – 8:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: By appointment</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="mt-1 text-blue-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.518.76a11.042 11.042 0 005.517 5.517l.76-1.518a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V21a2 2 0 01-2 2h-.75C9.678 23 3 16.322 3 8.75V8a2 2 0 012-2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-gray-600">+91 98250 12345</p>
                      <p className="text-gray-600">info@rajtourism.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/place/RAJ+TOURISM/@22.2950595,70.7858149,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Open in Google Maps
                </a>
                <button
                  onClick={handleCallClick}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition"
                >
                  Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
