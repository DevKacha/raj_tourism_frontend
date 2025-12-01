// src/components/Sidebar.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ open, onClose }) {
  const panelRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) onClose();
    }
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/40 to-slate-900/40 backdrop-blur-sm"></div>
      </div>

      {/* Sidebar Panel */}
      <aside
        ref={panelRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85%] bg-gradient-to-b from-white via-blue-50/30 to-white shadow-2xl transform transition-all duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-hidden={!open}
      >
        {/* Header with Close Button */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-blue-100">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <span className="text-lg font-bold text-gray-800">Menu</span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 group"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-blue-600 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>

          <Link
            to="/"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">Home</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/india"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-200">India</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/gujarat"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-200">Gujarat</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/international"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-200">International</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/services"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">Our Services</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">About Us</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-pink-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            to="/payment-qr"
            onClick={onClose}
            className="group relative flex items-center justify-between py-4 px-5 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-transparent transition-all duration-300 transform hover:translate-x-2 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></div>
            <span className="text-base font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">Payment QR</span>
            <svg className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>

        {/* Footer Contact */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-100 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50">
          <div className="flex items-center gap-3 mb-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase">24×7 Support</div>
              <a href="tel:+919876543210" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center font-medium">
            © 2024 Raj Tourism
          </div>
        </div>
      </aside>
    </>
  );
}