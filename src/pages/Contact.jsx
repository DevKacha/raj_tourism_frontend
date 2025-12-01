import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100">
            We'd love to hear from you. Plan your next journey with us.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Office Address */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-orange-500">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Office</h3>
            <p className="text-gray-600 font-semibold mb-2">RAJ TOURISM</p>
            <p className="text-gray-600 leading-relaxed">
              123, Tourism Plaza,<br />
              Near Main Square,<br />
              Rajkot, Gujarat, India - 360001
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-orange-500">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
            <div className="flex items-center text-gray-600 mb-3">
              <Clock className="w-5 h-5 mr-2 text-orange-500" />
              <span className="font-medium">Available 24/7</span>
            </div>
            <a
              href="tel:+919876543210"
              className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
            >
              +91 98765 43210
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-t-4 border-orange-500">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
            <p className="text-gray-600 mb-3">Drop us a line anytime</p>
            <a
              href="mailto:info@rajtourism.com"
              className="text-xl font-semibold text-orange-600 hover:text-orange-700 transition-colors break-all"
            >
              info@rajtourism.com
            </a>
          </div>
        </div>

       

        {/* Why Choose Us Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Raj Tourism?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Round the Clock Support</h4>
              <p className="text-gray-600">We're available anytime you need assistance</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Years of Experience</h4>
              <p className="text-gray-600">Trusted by thousands of happy travelers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">100%</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Customer Satisfaction</h4>
              <p className="text-gray-600">Your happiness is our priority</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}