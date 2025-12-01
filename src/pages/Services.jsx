import React, { useEffect } from "react";
import {
  Plane,
  Globe,
  Train,
  Hotel,
  FileText,
  Car,
  Banknote,
  ShieldCheck,
  HeadphonesIcon,
  Phone
} from "lucide-react";
import Footer from "../components/Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Plane,
      title: "Flight & Railway Bookings",
      desc: "Best deals on International & Domestic flights and hassle-free confirmed train tickets. We handle all your travel bookings.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Tour Packages",
      desc: "Customized holiday packages for domestic and international destinations. Experience the world with our curated itineraries.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Hotel,
      title: "Hotel Stays",
      desc: "From luxury resorts to budget-friendly stays, we book accommodations worldwide at the best available rates.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      desc: "Expert guidance for tourist, business, and student visas. We simplify the documentation process for you.",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Car,
      title: "Car Rentals",
      desc: "Sanitized and comfortable cars for local and outstation travel. Choose from a wide fleet of vehicles.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: Banknote,
      title: "Forex Services",
      desc: "Currency exchange and forex cards at best market rates. Secure and quick transactions for your international trips.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Our Premium Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Experience world-class travel services tailored to your needs. From flights to visas, we handle it all with expertise and care.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Trip?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Contact our experts today and get the best deals for your next adventure. We are available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <HeadphonesIcon className="w-5 h-5 mr-2" />
                Contact Support
              </a>
              <a 
                href="tel:+919636898368" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl border border-blue-500 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}