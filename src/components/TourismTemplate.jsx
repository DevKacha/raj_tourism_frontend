import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Star,
    ArrowRight,
    MapPin,
} from "lucide-react";
import Footer from "./Footer";

const TourismTemplate = ({
    heroImages,
    heroContent,
    tours,
    featuredExperiences,
    sectionHeadings,
}) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [likedTours, setLikedTours] = useState({});
    const [showAllPackages, setShowAllPackages] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const toggleLike = (tourId) => {
        setLikedTours((prev) => ({
            ...prev,
            [tourId]: !prev[tourId],
        }));
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow bg-white">
                {/* Hero Banner with Auto-Scrolling Images */}
                <div className="relative w-full h-[500px] overflow-hidden">
                    {/* Images Container */}
                    <div
                        className="flex transition-transform duration-1000 ease-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {heroImages.map((image, index) => (
                            <div key={index} className="min-w-full h-full relative">
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                            </div>
                        ))}
                    </div>

                    {/* Overlay Content - Centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                {heroContent.title}
                            </h1>
                            <p className="text-lg text-white/90 mb-6 leading-relaxed">
                                {heroContent.subtitle}
                            </p>
                            <p className="text-white/80 text-sm mb-8 max-w-2xl mx-auto">
                                {heroContent.description}
                            </p>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={() =>
                            setCurrentSlide(
                                (prev) => (prev - 1 + heroImages.length) % heroImages.length
                            )
                        }
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-all duration-300 z-10"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() =>
                            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
                        }
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/40 transition-all duration-300 z-10"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`transition-all duration-300 rounded-full ${currentSlide === index
                                    ? "bg-white w-8 h-2"
                                    : "bg-white/50 w-2 h-2"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Explore Section */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {sectionHeadings.exploreTours.title.split(
                                sectionHeadings.exploreTours.highlightWord
                            )[0]}
                            <span className="text-orange-600">
                                {sectionHeadings.exploreTours.highlightWord}
                            </span>
                            {sectionHeadings.exploreTours.title.split(
                                sectionHeadings.exploreTours.highlightWord
                            )[1]}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {sectionHeadings.exploreTours.description}
                        </p>
                    </div>

                    {/* Empty State - No Tours Available */}
                    {tours.length === 0 ? (
                        <div className="max-w-2xl mx-auto text-center py-16 px-6">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-12 shadow-lg border border-orange-200">
                                <div className="mb-6">
                                    <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        No Packages Available Yet
                                    </h3>
                                    <p className="text-gray-700 text-lg mb-6">
                                        We're currently working on exciting tour packages for this destination.
                                        In the meantime, we'd love to create a custom package just for you!
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        Contact Us for Custom Packages
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <p className="text-sm text-gray-600">
                                        Call us at <a href="tel:+919825012345" className="text-orange-600 font-semibold hover:underline">+91 98250 12345</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Tours Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                {(showAllPackages ? tours : tours.slice(0, 8)).map((tour) => (
                                    <div
                                        key={tour.id}
                                        onClick={() =>
                                            navigate(`/package-details/${tour.id}`, {
                                                state: { package: tour },
                                            })
                                        }
                                        className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    >
                                        {/* Tour Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={tour.image}
                                                alt={tour.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            {/* Duration Badge */}
                                            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                                                {tour.duration}
                                            </div>
                                        </div>

                                        {/* Tour Details */}
                                        <div className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">
                                                    {tour.location}
                                                </span>
                                            </div>

                                            <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-1">
                                                {tour.title}
                                            </h3>

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <div className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                                    <span className="text-sm font-semibold text-gray-900">
                                                        {tour.rating}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        ({tour.reviews})
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* View All Packages Button */}
                            {tours.length > 8 && (
                                <div className="text-center">
                                    <button
                                        onClick={() => setShowAllPackages(!showAllPackages)}
                                        className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 inline-flex items-center gap-2"
                                    >
                                        {showAllPackages ? "Show Less" : "View All Packages"}
                                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAllPackages ? "rotate-180" : ""}`} />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Premium Experiences Section */}
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-8">
                            <span className="text-orange-500 text-sm font-semibold">
                                {sectionHeadings.premiumExperiences.badge}
                            </span>
                            <h2 className="text-3xl font-bold text-white mt-2 mb-2">
                                {sectionHeadings.premiumExperiences.title}
                            </h2>
                            <p className="text-gray-400">
                                {sectionHeadings.premiumExperiences.description}
                            </p>
                        </div>

                        {/* Empty State or Experiences */}
                        {!featuredExperiences || featuredExperiences.length === 0 ? (
                            <div className="max-w-2xl mx-auto text-center py-12 px-6">
                                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl p-10 border border-orange-500/20">
                                    <div className="mb-6">
                                        <Star className="w-14 h-14 text-orange-400 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            Premium Experiences Coming Soon
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-6">
                                            We're curating exclusive premium experiences for this destination.
                                            Contact us to learn about our luxury tour options!
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            Contact Us for Details
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                        <p className="text-sm text-gray-400">
                                            Call us at <a href="tel:+919825012345" className="text-orange-400 font-semibold hover:underline">+91 98250 12345</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {featuredExperiences.map((experience) => (
                                    <div
                                        key={experience.id}
                                        className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                                    >
                                        <img
                                            src={experience.image}
                                            alt={experience.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="px-8">
                                                <h3 className="text-3xl font-bold text-white mb-2">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-white/80 text-sm mb-4">
                                                    {experience.description}
                                                </p>
                                                <button
                                                    onClick={() => navigate(`/package-details/${experience.id}`)}
                                                    className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all"
                                                >
                                                    {experience.buttonText}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TourismTemplate;
