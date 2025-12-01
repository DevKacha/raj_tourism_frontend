import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="src\assets\raj_tourism\rt-logo_final.png"
                  alt="Raj Tourism Logo"
                  className="w-full object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  Raj Tourism
                </div>
                <div className="text-xs text-gray-500">Discover Goa</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Your trusted travel partner for exploring the vibrant culture and
              beauty of Gujarat and beyond.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {/* Twitter */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {/* Facebook */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-100 hover:bg-pink-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {/* Instagram */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-100 hover:bg-blue-700 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                {/* LinkedIn */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              <Link
                to="/"
                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                <span className="relative">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>

              <Link
                to="/about"
                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                <span className="relative">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>

              <Link
                to="/contact"
                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                <span className="relative">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">
              Destinations
            </h4>
            <nav className="space-y-2.5">
              <Link
                to="/india"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-all group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                </svg>
                <span className="relative">
                  Domestic Tours
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>

              <Link
                to="/international"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-all group"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="relative">
                  International Tours
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M17.657..."></path>
                </svg>
                <p className="text-sm text-gray-600">
                  RAJ TOURISM, Rajkot
                  <br />
                  Gujarat, India
                </p>
              </div>

              <div className="flex items-center gap-3 group">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2..."></path>
                </svg>
                <div>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    +91 9876543210
                  </a>
                  <p className="text-xs text-gray-500">Mon-Sat: 10AM - 8PM</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89..."></path>
                </svg>
                <a
                  href="mailto:info@rajtourism.com"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@rajtourism.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Raj Tourism. All rights reserved.
              </p>

              <span className="hidden sm:inline text-gray-300">•</span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Crafted with</span>
                <svg
                  className="w-3.5 h-3.5 text-red-500 animate-pulse"
                  fill="currentColor"
                >
                  <path d="M3.172..."></path>
                </svg>
                <span className="text-xs text-gray-500">by</span>

                <a
                  href="https://in.linkedin.com/in/dev-kacha-6bba66291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-xs font-medium text-white transition-all"
                >
                  Dev
                </a>

                <span className="text-xs text-gray-400">&</span>

                <a
                  href="https://www.linkedin.com/in/devansh-ganatra-254336317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-xs font-medium text-white transition-all"
                >
                  Devansh
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Terms of Service
              </Link>

              <Link
                to="/payment-qr"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Payment Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
