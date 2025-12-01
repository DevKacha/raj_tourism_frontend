import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import {
  Globe,
  Award,
  Users,
  Heart,
  Phone,
  Mail,
  MapPin,
  Plane,
  Calendar,
  Shield,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ years: 0, clients: 0, destinations: 0 });
  const statsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Only animate when entering view, not when leaving
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          animateStats();
        } else if (!entry.isIntersecting && isInView) {
          setIsInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  const animateStats = () => {
    setStats({ years: 0, clients: 0, destinations: 0 });

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;

      setStats({
        years: Math.floor(19 * progress),
        clients: Math.floor(5000 * progress),
        destinations: Math.floor(150 * progress),
      });

      if (current >= steps) clearInterval(timer);
    }, increment);
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white py-24 md:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="src/assets/rt-logo.jpeg"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-800/85"></div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Plane
            className="absolute top-20 right-1/4 w-8 h-8 opacity-30 animate-bounce text-blue-200"
            style={{ animationDuration: "3s" }}
          />
          <Globe
            className="absolute bottom-32 left-1/3 w-6 h-6 opacity-30 animate-bounce text-purple-200"
            style={{ animationDuration: "4s", animationDelay: "0.5s" }}
          />
          <Heart
            className="absolute top-40 left-1/4 w-6 h-6 opacity-30 animate-bounce text-pink-200"
            style={{ animationDuration: "3.5s", animationDelay: "1s" }}
          />
        </div>

        <div
          className={`container mx-auto px-6 text-center relative z-10 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Globe
                className="w-16 h-16 md:w-20 md:h-20 text-blue-300 drop-shadow-2xl animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute inset-0 bg-blue-300/30 rounded-full filter blur-xl animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
            About Raj Tourism
          </h1>

          <p className="text-xl md:text-2xl font-light italic drop-shadow-lg text-blue-100 mb-6">
            Dream Holiday Think Raj...
          </p>

          <div className="flex items-center justify-center gap-3 mt-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full w-fit mx-auto border border-white/20 shadow-xl">
            <Calendar className="w-5 h-5 text-blue-200" />
            <span className="text-lg font-medium text-white">
              Serving Since 2006
            </span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className={`container mx-auto px-6 -mt-16 relative z-20 transform transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                <TrendingUp className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.years}+
              </h3>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.clients.toLocaleString()}+
              </h3>
              <p className="text-gray-600 font-medium">Happy Travelers</p>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                <Globe className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.destinations}+
              </h3>
              <p className="text-gray-600 font-medium">Destinations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container mx-auto px-6 py-20">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              A UNIT OF RAJ GROUP
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Your Gateway to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Unforgettable Journeys
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Since 2006, we have been dedicated to crafting exceptional travel
            experiences that turn dreams into reality.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            With nearly two decades of expertise in the travel and tourism
            industry, we specialize in both domestic and international travel
            solutions, ensuring every journey is memorable and hassle-free.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg">
              The visionaries behind your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Founder */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              onClick={() => handleCardClick("founder")}
            >
              <div
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100 cursor-pointer ${
                  activeCard === "founder"
                    ? "shadow-2xl scale-105"
                    : "hover:shadow-2xl md:hover:scale-105"
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-orange-500 to-orange-600 p-8 relative overflow-hidden transition-all duration-500 ${
                    activeCard === "founder"
                      ? "from-orange-600 to-orange-700"
                      : "md:group-hover:from-orange-600 md:group-hover:to-orange-700"
                  }`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 ${
                      activeCard === "founder"
                        ? "scale-150"
                        : "md:group-hover:scale-150"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 transition-transform duration-700 ${
                      activeCard === "founder"
                        ? "scale-150"
                        : "md:group-hover:scale-150"
                    }`}
                  ></div>

                  <div className="flex justify-center relative z-10">
                    <div
                      className={`relative transition-transform duration-500 ${
                        activeCard === "founder"
                          ? "scale-105"
                          : "md:group-hover:scale-105"
                      }`}
                    >
                      <div className="w-48 h-48 rounded-full bg-white p-2 shadow-2xl overflow-hidden">
                        <img
                          src="src\assets\raj_tourism\saroj_bhuptani.png"
                          alt="Saroj Bhuptani"
                          className={`w-full h-full rounded-full object-cover transition-transform duration-500 ${
                            activeCard === "founder"
                              ? "scale-110"
                              : "md:group-hover:scale-110"
                          }`}
                        />
                      </div>
                      <div
                        className={`absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-xl transition-all duration-300 ${
                          activeCard === "founder"
                            ? "rotate-12 scale-110"
                            : "md:group-hover:rotate-12 md:group-hover:scale-110"
                        }`}
                      >
                        <Award className="w-8 h-8 text-orange-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                      FOUNDER
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    SAROJ BHUPTANI
                  </h3>

                  <p className="text-orange-600 font-medium text-center mb-6">
                    Visionary & Founder
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-center">
                      The visionary founder who established Raj Tourism in 2006,
                      bringing warmth, dedication, and a deep commitment to
                      customer satisfaction in every journey we create.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 bg-orange-50 rounded-xl p-4 border border-orange-200">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-gray-800">
                      +91 9510 675 675
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietor */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              onClick={() => handleCardClick("proprietor")}
            >
              <div
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100 cursor-pointer ${
                  activeCard === "proprietor"
                    ? "shadow-2xl scale-105"
                    : "hover:shadow-2xl md:hover:scale-105"
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-blue-600 to-purple-600 p-8 relative overflow-hidden transition-all duration-500 ${
                    activeCard === "proprietor"
                      ? "from-blue-700 to-purple-700"
                      : "md:group-hover:from-blue-700 md:group-hover:to-purple-700"
                  }`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 ${
                      activeCard === "proprietor"
                        ? "scale-150"
                        : "md:group-hover:scale-150"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 transition-transform duration-700 ${
                      activeCard === "proprietor"
                        ? "scale-150"
                        : "md:group-hover:scale-150"
                    }`}
                  ></div>

                  <div className="flex justify-center relative z-10">
                    <div
                      className={`relative transition-transform duration-500 ${
                        activeCard === "proprietor"
                          ? "scale-105"
                          : "md:group-hover:scale-105"
                      }`}
                    >
                      <div className="w-48 h-48 rounded-full bg-white p-2 shadow-2xl overflow-hidden">
                        <img
                          src="src\assets\raj_tourism\raj_bhuptani.jpeg"
                          alt="Raj Bhuptani"
                          className={`w-full h-full rounded-full object-cover transition-transform duration-500 ${
                            activeCard === "proprietor"
                              ? "scale-110"
                              : "md:group-hover:scale-110"
                          }`}
                        />
                      </div>
                      <div
                        className={`absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-xl transition-all duration-300 ${
                          activeCard === "proprietor"
                            ? "rotate-12 scale-110"
                            : "md:group-hover:rotate-12 md:group-hover:scale-110"
                        }`}
                      >
                        <Star className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                      PROPRIETOR
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 text-center mb-2">
                    RAJ BHUPTANI
                  </h3>

                  <p className="text-blue-600 font-medium text-center mb-6">
                    Proprietor & Strategic Leader
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Pursuing CA & MBA, B.Com graduate. Bringing fresh
                      perspectives and modern business strategies to the family
                      legacy while maintaining core values of excellence and
                      trust.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-800">
                      +91 96368 98368
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-20">
        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive travel solutions for every journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Plane,
                title: "Air Tickets",
                desc: "International & Domestic bookings with best fares",
                color: "blue",
              },
              {
                icon: Globe,
                title: "Tour Packages",
                desc: "Curated domestic & international tours",
                color: "green",
              },
              {
                icon: MapPin,
                title: "Railway Tickets",
                desc: "Hassle-free train bookings across India",
                color: "purple",
              },
              {
                icon: Heart,
                title: "Hotel Booking",
                desc: "Best accommodations worldwide",
                color: "pink",
              },
              {
                icon: Shield,
                title: "Visa Services",
                desc: "Passport & visa assistance",
                color: "orange",
              },
              {
                icon: Users,
                title: "Car Hire",
                desc: "Comfortable transportation solutions",
                color: "indigo",
              },
            ].map((service, index) => {
              const colorClasses = {
                blue: { bg: "bg-blue-100", text: "text-blue-600" },
                green: { bg: "bg-green-100", text: "text-green-600" },
                purple: { bg: "bg-purple-100", text: "text-purple-600" },
                pink: { bg: "bg-pink-100", text: "text-pink-600" },
                orange: { bg: "bg-orange-100", text: "text-orange-600" },
                indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
              };

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(`service-${index}`)}
                  className={`bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer ${
                    activeCard === `service-${index}`
                      ? "shadow-2xl -translate-y-2 scale-105"
                      : "hover:shadow-2xl md:hover:-translate-y-2 md:hover:scale-105"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div
                      className={`w-16 h-16 rounded-xl ${
                        colorClasses[service.color].bg
                      } flex items-center justify-center mb-4 transition-all duration-300 shadow-md ${
                        activeCard === `service-${index}`
                          ? "scale-110 rotate-6"
                          : "md:group-hover:scale-110 md:group-hover:rotate-6"
                      }`}
                    >
                      <service.icon
                        className={`w-9 h-9 ${
                          colorClasses[service.color].text
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 ${
                        activeCard === `service-${index}`
                          ? "text-blue-600"
                          : "md:group-hover:text-blue-600"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.desc}
                    </p>

                    <div
                      className={`mt-4 flex items-center text-blue-600 font-semibold text-sm transition-opacity duration-300 ${
                        activeCard === `service-${index}`
                          ? "opacity-100"
                          : "opacity-0 md:group-hover:opacity-100"
                      }`}
                    >
                      <span>Learn more</span>
                      <CheckCircle2
                        className={`w-4 h-4 ml-2 transition-transform ${
                          activeCard === `service-${index}`
                            ? "translate-x-1"
                            : "md:group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div
            className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden transform transition-all duration-1000 delay-1100 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                Get In Touch
              </h2>
              <p className="text-center text-blue-100 text-lg mb-12">
                We're here to make your travel dreams come true
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Visit Us</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    112, Cosmo Complex, Mahila College Circle, Kalawad Road,
                    Rajkot - 360 001, Gujarat
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Call Us</h3>
                  <p className="text-sm mb-2">+91 96368 98368</p>
                  <p className="text-sm mb-3">+91 9510 675 675</p>
                  <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs font-semibold">
                    24/7 Service Available
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Email Us</h3>
                  <p className="text-sm text-blue-100">rajtourisam@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Banner */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center bg-white rounded-3xl p-12 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-8 h-8 text-yellow-500 fill-yellow-500 group-hover:scale-125 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            19 Years of Excellence
          </h3>
          <p className="text-lg md:text-xl text-gray-600 italic max-w-3xl mx-auto">
            Thousands of Happy Travelers | Your Dream Journey Awaits
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
