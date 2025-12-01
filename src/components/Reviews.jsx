import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Devansh Ganatra",
    rating: 5,
    time: "1 year ago",
    text: "Very satisfied from their service, best tour operator.",
  },
  {
    id: 2,
    name: "Vedant Wadhwani",
    rating: 5,
    time: "1 year ago",
    text: "Best tour operator and best packages pocket friendly.",
  },
  {
    id: 3,
    name: "Milan Bhuptani",
    rating: 5,
    time: "1 year ago",
    text: "Very good service.",
  },
  {
    id: 4,
    name: "Vidhi Bhuptani",
    rating: 5,
    time: "1 year ago",
    text: "Had a great experience with Raj Tourism.",
  },
  {
    id: 5,
    name: "A142 Yash Ved",
    rating: 5,
    time: "1 year ago",
    text: "Service is excellent 💯",
  },
  {
    id: 6,
    name: "Falguniba Gohil",
    rating: 5,
    time: "1 year ago",
    text: "Excellent service.",
  },
  {
    id: 7,
    name: "Rahul Thakrar",
    rating: 5,
    time: "1 year ago",
    text: "An excellent experience.",
  },
  {
    id: 8,
    name: "Kashyap Ruparel",
    rating: 5,
    time: "1 year ago",
    text: "Superb services.",
  },
  {
    id: 9,
    name: "Chirag Ghanshani",
    rating: 5,
    time: "1 year ago",
    text: "Best!!",
  },
  {
    id: 10,
    name: "Raj Bhuptani",
    rating: 5,
    time: "1 year ago",
    text: "Great service and hospitality.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const getInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-pink-500 to-pink-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-orange-600",
    "from-red-500 to-red-600",
  ];

  const colorClass = colors[name.length % colors.length];

  return (
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-sm shadow-md`}
    >
      {getInitials(name)}
    </div>
  );
}

export default function Reviews() {
  const scrollRef = useRef(null);
  const scrollPosRef = useRef(0);        // 🔹 keep scroll position across re-renders
  const isPausedRef = useRef(false);     // 🔹 ref mirror of isPaused for animation
  const [isPaused, setIsPaused] = useState(false);
  const [activeReview, setActiveReview] = useState(null); // 🔹 for mobile/modal view

  // keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const speed = 0.5;

    const animate = () => {
      if (!isPausedRef.current) {
        const halfWidth = scrollContainer.scrollWidth / 2;

        let next = scrollPosRef.current + speed;
        if (next >= halfWidth) {
          next = 0; // loop
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
  }, []); // 🔹 run only once

  const duplicatedReviews = [...reviews, ...reviews];

  const handleCardClick = (review) => {
    setActiveReview(review);
    setIsPaused(true);
  };

  const closeActiveReview = () => {
    setActiveReview(null);
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <svg
              className="w-6 h-6 text-blue-600 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <h2 className="text-3xl font-black text-gray-900">
              Loved by Travelers
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl font-black text-gray-900">4.8</span>
            <div>
              <StarRating rating={5} />
              <p className="text-sm text-gray-600 mt-1">Google Reviews</p>
            </div>
          </div>

          <a
            href="https://share.google/b2BAS9eRHMixEPBhz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-200 rounded-full hover:border-blue-600 hover:shadow-lg transition-all duration-300 group text-sm font-semibold"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
              View all on Google
            </span>
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
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

        {/* Scrolling Reviews */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                onClick={() => handleCardClick(review)} // 🔹 tap to open on mobile
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <Avatar name={review.name} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        {review.name}
                      </h3>
                      <p className="text-xs text-gray-500">{review.time}</p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <StarRating rating={review.rating} />
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  "{review.text}"
                </p>

                {/* Quote decoration */}
                <div className="flex justify-end">
                  <svg
                    className="w-6 h-6 text-blue-100 group-hover:text-blue-200 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* 🔹 Modal for mobile / click view */}
      {activeReview && (
        <div
          className="fixed inset-0 z-40 bg-black/40 flex items-center justify-center px-4"
          onClick={closeActiveReview} // click outside to dismiss
        >
          <div
            className="max-w-md w-full bg-white rounded-2xl p-5 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // prevent outside click
          >
            <button
              className="absolute top-3 right-3 text-xs text-gray-500 hover:text-gray-800"
              onClick={closeActiveReview} // click on card back/close
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-3">
              <Avatar name={activeReview.name} />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  {activeReview.name}
                </h3>
                <p className="text-xs text-gray-500">{activeReview.time}</p>
                <StarRating rating={activeReview.rating} />
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              "{activeReview.text}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
