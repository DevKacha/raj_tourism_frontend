// Gujarat Page - Hero Images
import { domesticInclusions, domesticExclusions } from './tourInclusions';
import { getTourImages } from '../utils/imageHelper';

export const heroImages = [
    "https://www.trawell.in/admin/images/upload/899428835Somnath_Main.jpg",
    "https://www.peakadventuretour.com/assets/imgs/gujarat-tourism-05.webp",
    "https://namasteindiatrip.wordpress.com/wp-content/uploads/2015/06/ahmedabad-kakaria-lake.jpg",
    "https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-7a5c3ea2775bfae.jpg?w=376&dpr=2.6",
];

// Gujarat Page - Tour Packages
export const tours = [
    {
        id: 1,
        title: "Gujarat Heritage & Wildlife",
        duration: "5D/4N",
        ...getTourImages('gujarat', 1),
        location: "Ahmedabad, Dwarka, Somnath, Gir",
        price: "On Request",
        rating: "4.8",
        reviews: "124",
        itinerary: [
            {
                day: 1,
                title: "Arrive in Ahmedabad",
                description: "Explore Ahmedabad’s heritage sites like Akshardham Temple and Hutheesingh Jain Temple. Visit Sabarmati Ashram, a key place in Gandhi’s life.",
                highlights: ["Akshardham Temple", "Sabarmati Ashram", "Heritage Walk"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Ahmedabad to Jamnagar & Dwarka",
                description: "Travel to Jamnagar, visit Lakhotia Lake and Bala Hanuman Temple. Proceed to Dwarka, visit Dwarkadhish Temple, Rukmini Temple, and Bet Dwarka. Attend the evening aarti at Dwarkadhish Temple.",
                highlights: ["Dwarkadhish Temple", "Bet Dwarka", "Bala Hanuman Temple"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Dwarka to Porbandar & Somnath",
                description: "Visit Kirti Mandir, Mahatma Gandhi’s birthplace, in Porbandar. Travel to Somnath, visiting the Somnath Temple, Bhalka Tirth, Geeta Mandir, and Triveni Sangam. Experience the evening aarti and sound & light show at Somnath Temple.",
                highlights: ["Somnath Temple", "Kirti Mandir", "Sound & Light Show"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Somnath to Gir National Park",
                description: "Head to Sasan Gir for a jungle safari to see Asiatic lions. Enjoy wildlife safari and stay overnight near Gir.",
                highlights: ["Gir Jungle Safari", "Asiatic Lions", "Wildlife"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 5,
                title: "Gir to Junagadh & Return",
                description: "Visit Uparkot Fort, Ashok Rock Edict, and Mahabat Maqbara in Junagadh. Travel back to Ahmedabad for onward journey.",
                highlights: ["Uparkot Fort", "Mahabat Maqbara", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 2,
        title: "Kutch Rann Utsav & Heritage",
        duration: "5D/4N",
        ...getTourImages('gujarat', 2),
        location: "Bhuj, Dhordo, Mandvi",
        price: "On Request",
        rating: "4.9",
        reviews: "189",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bhuj",
                description: "Arrive at Bhuj airport or railway station. Explore Bhuj city including Swaminarayan Temple, Kutch Museum, and local bazaars. Overnight stay in Bhuj.",
                highlights: ["Swaminarayan Temple", "Kutch Museum", "Bhuj City"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Bhuj to Dhordo (Rann Utsav)",
                description: "Drive to Dhordo (Tent City). Visit local craft villages like Bhujodi and Hodka. Evening visit to the White Rann salt desert for sunset views. Enjoy cultural performances and dinner at the Tent City.",
                highlights: ["Rann Utsav", "White Rann Sunset", "Craft Villages"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Kala Dungar & Surroundings",
                description: "Visit Kala Dungar (Black Hill) for panoramic views. See India Bridge near the Indo-Pak border. Explore nearby handicraft villages such as Gandhi Nu Gaam. Return to Tent City.",
                highlights: ["Kala Dungar", "India Bridge", "Handicraft Villages"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 4,
                title: "Mandvi Beach Experience",
                description: "Visit Mandvi Beach for camel rides, ATV rides, parasailing. Explore Vijay Vilas Palace and traditional shipbuilding yard. Return to Bhuj or Tent City.",
                highlights: ["Mandvi Beach", "Vijay Vilas Palace", "Water Sports"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Narayan Sarovar & Departure",
                description: "Visit Narayan Sarovar if time permits. End of tour and departure.",
                highlights: ["Narayan Sarovar", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    }
];

// Gujarat Page - Premium Featured Experiences
export const featuredExperiences = [
    {
        id: 1,
        packageId: 1,
        title: "Somnath Spiritual Journey",
        description: "Experience divine temples and sacred rituals",
        image: getTourImages('gujarat', 1).galleryImages[1],
        buttonText: "View Package",
    },
    {
        id: 2,
        packageId: 2,
        title: "Rann Utsav Experience",
        description: "White desert magic under starlit skies",
        image: getTourImages('gujarat', 2).image,
        buttonText: "View Package",
    },
    {
        id: 3,
        packageId: 1,
        title: "Gir National Park Wildlife",
        description: "Home of the majestic Asiatic Lions",
        image: getTourImages('gujarat', 1).image,
        buttonText: "View Package",
    },
];

// Gujarat Page - Hero Section Content
export const heroContent = {
    badge: "Location", // Currently commented out in the component
    title: "GUJARAT TOURISM",
    subtitle: "Journey Through Gujarat",
    description:
        "Experience vibrant destinations and unforgettable memories with our expertly crafted Gujarat tour packages tailored to your dream getaway.",
    buttonText: "Explore Now", // Currently commented out in the component
};

// Gujarat Page - Section Headings
export const sectionHeadings = {
    exploreTours: {
        title: "Explore Gujarat",
        highlightWord: "Gujarat",
        description:
            "Travel destinations specifically designed to cater to your desires. We curate the ultimate journey in the land of vibrant culture and heritage",
    },
    premiumExperiences: {
        badge: "JOURNEY BEYOND BORDERS",
        title: "Premium Gujarat Experiences",
        description: "Curated luxury tours across Gujarat's finest destinations",
    },
};

// Tour Inclusions & Exclusions (Domestic)
export const inclusions = domesticInclusions;
export const exclusions = domesticExclusions;