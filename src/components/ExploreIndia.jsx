import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { getTourImages } from "../utils/imageHelper";
import logo from "../assets/default/default.jpg";

const ExploreIndia = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const destinations = [
    {
      id: 1,
      name: "Gujarat",
      image: getTourImages("gujarat", 1).image,
      description: "Land of legends and vibrant culture",
      rating: 4.8,
      tours: 2,
      link: "/gujarat",
    },
    {
      id: 2,
      name: "Goa",
      image: getTourImages("india", 100).image,
      description: "Sun, sand and endless beaches",
      rating: 4.9,
      tours: 1,
      link: "/india/goa",
    },
    {
      id: 3,
      name: "Rajasthan",
      image: getTourImages("india", 101).image,
      description: "Royal palaces and desert magic",
      rating: 4.7,
      tours: 2,
      link: "/india/rajasthan",
    },
    {
      id: 4,
      name: "Kerala",
      image: getTourImages("india", 110).image,
      description: "God's own country with backwaters",
      rating: 4.9,
      tours: 1,
      link: "/india/kerala",
    },
    {
      id: 5,
      name: "Himachal Pradesh",
      image: getTourImages("india", 105).image,
      description: "Mountain paradise and adventure",
      rating: 4.8,
      tours: 1,
      link: "/india/himachal-pradesh",
    },
    {
      id: 6,
      name: "Andaman & Nicobar",
      image: getTourImages("india", 112).image,
      description: "Pristine beaches, blue waters and tropical adventures",
      rating: 4.8,
      tours: 1,
      link: "/india/andaman",
    },
    {
      id: 7,
      name: "Uttarakhand",
      image: getTourImages("india", 104).image,
      description: "Spiritual journey to the Himalayas",
      rating: 4.7,
      tours: 4,
      link: "/india/uttarakhand",
    },
    {
      id: 8,
      name: "Maharashtra",
      image: getTourImages("india", 109).image,
      description: "From bustling cities to hill stations",
      rating: 4.5,
      tours: 1,
      link: "/india/maharashtra",
    },
  ];

  return (
    <div
      id="explore-india-section"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 via-50% to-slate-50"
    >
      {/* Soft color glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-10 top-20 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute right-10 top-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/3 bottom-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-orange-500/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold tracking-wide shadow-lg">
            DISCOVER INCREDIBLE INDIA
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
          Explore India
        </h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          From the snow-capped Himalayas to the tropical beaches, discover the
          diverse beauty and rich culture of India's most enchanting
          destinations
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <Link
            key={destination.id}
            to={destination.link}
            className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block
              ${index >= 4 ? "hidden md:block" : ""}
            `}
            style={{
              animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
            }}
            onMouseEnter={() => setHoveredCard(destination.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-900">
                  {destination.rating}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {destination.name}
                </h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {destination.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {destination.tours} tours available
                </span>
                <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all duration-300">
                  Explore
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredCard === destination.id ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative max-w-4xl mx-auto mt-16 text-center">
        <Link
          to="/india"
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto backdrop-blur-sm inline-flex"
        >
          View All Destinations
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExploreIndia;
