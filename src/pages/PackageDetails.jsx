import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {
  tours as gujaratTours,
  inclusions as gujaratInclusions,
  exclusions as gujaratExclusions,
} from "../constants/gujaratData";
import {
  tours as indiaTours,
  inclusions as indiaInclusions,
  exclusions as indiaExclusions,
} from "../constants/indiaData";
import {
  tours as internationalTours,
  inclusions as internationalInclusions,
  exclusions as internationalExclusions,
} from "../constants/internationalData";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// ==================== ICONS ====================
const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const MapPin = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Calendar = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Coffee = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
  </svg>
);

const Home = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
  </svg>
);

const Car = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
);

const Check = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Star = ({ className }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Phone = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Moon = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Download = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

// ==================== MAIN COMPONENT ====================
const PackageDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeDay, setActiveDay] = useState(-1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRefs = useRef([]);

  // Combine all tours from different regions
  const allTours = [...gujaratTours, ...indiaTours, ...internationalTours];

  let pkg = location.state?.package;
  if (!pkg) pkg = allTours.find((t) => t.id === parseInt(id)) || allTours[0];

  // Determine if package is international (id >= 201) or domestic
  const isInternational = pkg.id >= 201;

  // Get appropriate inclusions and exclusions based on package type
  let inclusions = isInternational
    ? [...internationalInclusions]
    : pkg.id >= 101
      ? [...indiaInclusions]
      : [...gujaratInclusions];
  const exclusions = isInternational
    ? internationalExclusions
    : pkg.id >= 101
      ? indiaExclusions
      : gujaratExclusions;

  // Check if Cruise should be included for international packages
  if (isInternational) {
    const hasCruise =
      pkg.title.toLowerCase().includes("cruise") ||
      (pkg.itinerary &&
        pkg.itinerary.some(
          (day) =>
            day.title.toLowerCase().includes("cruise") ||
            day.description.toLowerCase().includes("cruise")
        ));

    if (hasCruise && !inclusions.includes("Cruise")) {
      inclusions.push("Cruise");
    }
  }

  // Image gallery
  const galleryImages = pkg.galleryImages || [
    pkg.image,
    "https://images.unsplash.com/photo-1626621341517-4b6ef54b3917?w=1200&q=80",
    "https://images.unsplash.com/photo-1598096662515-c9ecc097e19f?w=1200&q=80",
    "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=1200&q=80",
  ];

  // Detailed itinerary
  const itinerary = pkg.itinerary || [
    {
      day: 1,
      title: "Arrival & Welcome",
      description:
        "Arrival at destination, transfer to hotel, and leisure time.",
      highlights: ["Arrival", "Transfer", "Leisure"],
      meals: ["Dinner"],
    },
    {
      day: 2,
      title: "Sightseeing",
      description: "Full day sightseeing tour of major attractions.",
      highlights: ["Sightseeing", "Monuments", "Culture"],
      meals: ["Breakfast", "Dinner"],
    },
    // Add more default days if needed or handle empty
  ];

  // Hotels
  const hotels = [
    {
      name: "Hotel Grand Palace",
      location: "Dwarka",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
      amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Room Service"],
    },
    {
      name: "Heritage Resort & Spa",
      location: "Somnath",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
      amenities: ["Spa", "Gym", "Bar", "Conference Hall"],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Smooth scroll to active card when expanded
  useEffect(() => {
    if (activeDay !== -1 && cardRefs.current[activeDay]) {
      setTimeout(() => {
        cardRefs.current[activeDay].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100); // Small delay to allow card expansion animation to start
    }
  }, [activeDay]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Colors
    const orange = [234, 88, 12]; // #ea580c
    const gray = [75, 85, 99]; // #4b5563
    const lightGray = [243, 244, 246]; // #f3f4f6

    // Header
    doc.setFontSize(22);
    doc.setTextColor(...orange);
    doc.text("Raj Tourism", 20, 20);

    doc.setFontSize(10);
    doc.setTextColor(...gray);
    doc.text("Contact: +91 94282 52181", 190, 15, { align: "right" });
    doc.text("Email: rajtourisam@gmail.com", 190, 20, { align: "right" });
    doc.text("Adress: 112, Cosmo Complex, Mahila College", 190, 25, { align: "right" });
    doc.text("Circle, Kalawad Road, Rajkot-Gujarat", 190, 30, { align: "right" });

    doc.setDrawColor(...orange);
    doc.setLineWidth(0.5);
    doc.line(20, 30, 190, 32);

    // Package Title
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text(pkg.title, 20, 45);

    // Info Line
    doc.setFontSize(12);
    doc.setTextColor(...gray);
    doc.text(`${pkg.duration} | ${pkg.location} | ${pkg.rating} Stars`, 20, 55);

    // Overview
    doc.setFontSize(14);
    doc.setTextColor(...orange);
    doc.text("Overview", 20, 70);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    const overviewText = `Experience the best of ${pkg.location} with our ${pkg.title} package. This carefully curated tour offers a perfect blend of sightseeing, culture, and relaxation. Enjoy comfortable accommodations, guided tours, and memorable experiences throughout your ${pkg.duration} journey.`;
    const overviewLines = doc.splitTextToSize(overviewText, 170);
    doc.text(overviewLines, 20, 80);

    let yPos = 80 + overviewLines.length * 5 + 10;

    // Itinerary
    doc.setFontSize(14);
    doc.setTextColor(...orange);
    doc.text("Itinerary", 20, yPos);
    yPos += 10;

    const itineraryData = itinerary.map((day) => [
      `Day ${day.day}`,
      day.title,
      day.description,
      day.meals.join(", "),
    ]);

    autoTable(doc, {
      startY: yPos,
      head: [["Day", "Title", "Description", "Meals"]],
      body: itineraryData,
      headStyles: { fillColor: orange, textColor: [255, 255, 255] },
      columnStyles: {
        0: { cellWidth: 20, fontStyle: "bold" },
        1: { cellWidth: 40, fontStyle: "bold" },
        2: { cellWidth: "auto" },
        3: { cellWidth: 30 },
      },
      alternateRowStyles: { fillColor: lightGray },
      margin: { top: 20 },
    });

    yPos = doc.lastAutoTable.finalY + 15;

    // Add closing message after itinerary
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }

    yPos += 10;

    // Add decorative top line
    doc.setDrawColor(234, 88, 12); // Orange color
    doc.setLineWidth(0.3);
    doc.line(60, yPos, 150, yPos);

    yPos += 8;

    // Closing message with enhanced styling
    doc.setFontSize(16);
    doc.setFont(undefined, "italic");
    doc.setTextColor(180, 83, 9); // Rich orange-brown color

    const closingLine1 = "The beautiful journey with Raj Tourism comes to an end,";
    const closingLine2 = "leaving behind a treasure of sweet memories to cherish forever...";

    doc.text(closingLine1, 105, yPos, { align: "center" });
    yPos += 7;
    doc.text(closingLine2, 105, yPos, { align: "center" });

    yPos += 8;

    // Add decorative bottom line
    doc.setDrawColor(234, 88, 12); // Orange color
    doc.setLineWidth(0.3);
    doc.line(60, yPos, 150, yPos);

    // Reset font style
    doc.setFont(undefined, "normal");
    yPos += 15;

    // Inclusions & Exclusions
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(...orange);
    doc.text("Inclusions & Exclusions", 20, yPos);
    yPos += 10;

    const maxRows = Math.max(inclusions.length, exclusions.length);
    const incExcData = [];
    for (let i = 0; i < maxRows; i++) {
      incExcData.push([inclusions[i] || "", exclusions[i] || ""]);
    }

    autoTable(doc, {
      startY: yPos,
      head: [["Inclusions", "Exclusions"]],
      body: incExcData,
      headStyles: { fillColor: orange, textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: lightGray },
      margin: { top: 20 },
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(...gray);
      doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: "center" });
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 190, 290, {
        align: "right",
      });
    }

    doc.save(`${pkg.title.replace(/\s+/g, "_")}_Brochure.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={galleryImages[currentImageIndex]}
            alt={pkg.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-105"
            key={currentImageIndex}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentImageIndex(
                (prev) =>
                  (prev - 1 + galleryImages.length) % galleryImages.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-20 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-white/25 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className="absolute top-20 right-6 bg-orange-600/90 backdrop-blur-md border border-orange-500/20 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-orange-600 hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Brochure
          </button>

          {/* Package Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 text-orange-300 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">{pkg.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {pkg.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{pkg.rating}</span>
                  <span className="text-white/70">({pkg.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-gray-900 py-4">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex gap-3 ">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentImageIndex === idx
                    ? "border-orange-500 scale-105 shadow-lg"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-105 hover:border-orange-300"
                    }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-12 space-y-8">
            {/* Package Overview */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Package Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Embark on an unforgettable journey through Gujarat's most iconic
                destinations. This carefully curated tour package offers a
                perfect blend of spirituality, culture, and natural beauty.
                Experience the divine atmosphere of ancient temples, explore
                magnificent historical monuments, and immerse yourself in the
                vibrant local culture.
              </p>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center transition-all duration-300 md:hover:shadow-lg md:hover:scale-105 md:hover:from-orange-100 md:hover:to-orange-200 active:scale-105 cursor-pointer group">
                  <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-xs text-gray-600 mb-1">Days</p>
                  <p className="font-bold text-gray-900">
                    {pkg.duration.split("/")[0].replace("D", "")} Days
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center transition-all duration-300 md:hover:shadow-lg md:hover:scale-105 md:hover:from-blue-100 md:hover:to-blue-200 active:scale-105 cursor-pointer group">
                  <Moon className="w-8 h-8 text-blue-600 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-xs text-gray-600 mb-1">Nights</p>
                  <p className="font-bold text-gray-900">
                    {pkg.duration.split("/")[1]?.replace("N", "") || 0} Nights
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center transition-all duration-300 md:hover:shadow-lg md:hover:scale-105 md:hover:from-green-100 md:hover:to-green-200 active:scale-105 cursor-pointer group">
                  <Coffee className="w-8 h-8 text-green-600 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-xs text-gray-600 mb-1">Meals</p>
                  <p className="font-bold text-gray-900">Included</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center transition-all duration-300 md:hover:shadow-lg md:hover:scale-105 md:hover:from-purple-100 md:hover:to-purple-200 active:scale-105 cursor-pointer group">
                  <Car className="w-8 h-8 text-purple-600 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-xs text-gray-600 mb-1">Transport</p>
                  <p className="font-bold text-gray-900">Private AC</p>
                </div>
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Detailed Itinerary
              </h2>

              <div className="space-y-4">
                {itinerary.map((day, index) => (
                  <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 transform origin-top ${activeDay === index
                      ? "shadow-2xl border-orange-300 scale-[1.02]"
                      : "shadow-sm hover:shadow-lg hover:border-orange-200"
                      }`}
                  >
                    <button
                      onClick={() =>
                        setActiveDay(activeDay === index ? -1 : index)
                      }
                      className="w-full p-5 sm:p-6 flex items-center justify-between bg-white hover:bg-orange-50/30 transition-colors duration-300 group text-left"
                    >
                      <div className="flex items-center gap-6">
                        {/* Big Day Text */}
                        <div
                          className={`flex-shrink-0 transition-all duration-500 ${activeDay === index
                            ? "scale-110 translate-x-2"
                            : "group-hover:scale-105"
                            }`}
                        >
                          <h3
                            className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${activeDay === index
                              ? "text-orange-600"
                              : "text-gray-300 group-hover:text-orange-300"
                              }`}
                          >
                            DAY-{day.day}
                          </h3>
                        </div>

                        {/* Title */}
                        <div
                          className={`border-l-2 pl-6 transition-colors duration-300 ${activeDay === index
                            ? "border-orange-200"
                            : "border-gray-100 group-hover:border-orange-100"
                            }`}
                        >
                          <h3
                            className={`font-bold text-lg sm:text-xl transition-colors duration-300 ${activeDay === index
                              ? "text-gray-900"
                              : "text-gray-600 group-hover:text-gray-900"
                              }`}
                          >
                            {day.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeDay === index
                          ? "bg-orange-100 text-orange-600 rotate-180"
                          : "bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500"
                          }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {activeDay === index && (
                      <div className="p-6 pt-4 border-t border-gray-100 animate-[slideDown_0.3s_ease-out]">
                        <p className="text-gray-700 leading-relaxed mb-4 animate-[fadeIn_0.4s_ease-out]">
                          {day.description}
                        </p>

                        <div className="mb-4 animate-[fadeIn_0.5s_ease-out]">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-600" />
                            Highlights
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {day.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-100 hover:scale-105 transition-all duration-200 cursor-default"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="animate-[fadeIn_0.6s_ease-out]">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Coffee className="w-5 h-5 text-blue-600" />
                            Meals
                          </h4>
                          <div className="flex gap-2">
                            {day.meals.map((meal, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-200 cursor-default"
                                style={{ animationDelay: `${idx * 50}ms` }}
                              >
                                {meal}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Inclusions & Exclusions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {inclusions.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <X className="w-6 h-6" />
                    What's Not Included
                  </h3>
                  <ul className="space-y-3">
                    {exclusions.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Hotel Information */}
            {/* <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Accommodation
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {hotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900">
                          {hotel.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(hotel.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {hotel.location}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
          </div>

          {/* Right Column - Booking Sidebar */}
          {/* <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              Price & Booking Card
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-orange-100">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-1">Starting from</p>
                  <p className="text-4xl font-bold text-orange-600">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per person</p>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Book Now
                </button>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center mb-3">
                    Need help with booking?
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-orange-500" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a
                      href="mailto:info@rajtourism.com"
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-orange-600 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-orange-500" />
                      <span>info@rajtourism.com</span>
                    </a>
                  </div>
                </div>
              </div>

              Why Book With Us
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Why Book With Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Best Price Guarantee",
                    "24/7 Customer Support",
                    "Instant Confirmation",
                    "Flexible Cancellation",
                    "Trusted by 10,000+ Travelers",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackageDetails;
