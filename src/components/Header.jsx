// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from "../assets/raj_tourism/rt-logo_final.png";
import logo24x7 from "../assets/24x7Logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open || sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, sidebarOpen]);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
    setSidebarOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/india", label: "India" },
    { path: "/gujarat", label: "Gujarat" },
    { path: "/international", label: "International" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo & Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative"
              aria-label="Raj Tourism Home"
            >
              <div
                className={`relative w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center inset-0 inset-shadow-sm transition-all duration-500 ease-out group-hover:shadow-2xl ${scrolled
                  ? " group-hover:scale-110 group-hover:rotate-3"
                  : " group-hover:scale-125 group-hover:-rotate-6"
                  }`}
              >
                {/* <span className="text-white font-bold text-lg md:text-xl transition-transform duration-300 group-hover:scale-110">
                  RT
                </span> */}
                <img
                  src={logo}
                  alt="Raj Tourism Logo"
                  className="w-full object-cover rounded-lg"
                />
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-lg border-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-lg md:text-xl transition-all duration-500 ease-out group-hover:tracking-wide ${scrolled ? "text-gray-900" : "text-white"
                    }`}
                >
                  Raj Tourism
                </span>
                <span
                  className={`text-xs transition-all duration-500 ease-out transform group-hover:translate-x-1 ${scrolled ? "text-gray-600" : "text-white/90"
                    }`}
                >
                  Dream Holiday, Think Raj
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-2"
              role="navigation"
            >
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-0.5 ${scrolled
                      ? isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-300/50"
                        : "text-gray-700 hover:bg-gray-100 hover:shadow-md"
                      : isActive
                        ? "bg-white/20 text-white backdrop-blur-sm shadow-lg"
                        : "text-white/90 hover:bg-white/20 hover:backdrop-blur-sm"
                      }`}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* QR Code Button (Desktop) */}
              <button
                onClick={() => navigate("/payment-qr")}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${scrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:shadow-xl"
                  }`}
                aria-label="Show QR Code"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <span className="transition-all duration-300">QR</span>
              </button>

              {/* Call Button */}
              <a
                href="tel:+919428252181"
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95 group ${scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-300/50"
                  : "bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-2xl"
                  }`}
              >
                <img
                  src={logo24x7}
                  alt="24x7"
                  className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
                <span className="transition-all duration-300">
                  Call: +91 96368 98368
                </span>
              </a>

              {/* Mobile: Call Icon Only */}
              <a
                href="tel:+919428252181"
                className={`md:hidden p-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-110 hover:-translate-y-1 active:scale-95 ${scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:shadow-xl"
                  }`}
                aria-label="Call us"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>

              {/* Desktop Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 active:scale-95 ${scrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:shadow-xl"
                  }`}
                aria-label="Open menu"
              >
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span>Menu</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setOpen((s) => !s)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${scrolled
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-blue-500 hover:shadow-lg"
                  : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 focus:ring-white hover:shadow-xl"
                  } ${open ? "rotate-90" : "rotate-0"}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? (
                  <svg
                    className="w-6 h-6 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Desktop Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
