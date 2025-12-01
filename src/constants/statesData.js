// State Data Configuration
// Maps state slugs to their specific content and tour IDs from indiaData.js
import { getTourImages } from '../utils/imageHelper';
import logo from '../assets/default/default.jpg';

export const statesData = {
    goa: {
        name: "Goa",
        heroImages: [
            getTourImages('india', 100).image,
            getTourImages('india', 100).galleryImages[0],
            getTourImages('india', 100).galleryImages[1],
            getTourImages('india', 100).galleryImages[2]
        ],
        heroContent: {
            title: "GOA TOURISM",
            subtitle: "Pearl of the Orient",
            description: "Discover the perfect blend of sun, sand, and spices. From pristine beaches to Portuguese heritage, Goa offers an unforgettable escape."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Goa",
                highlightWord: "Goa",
                description: "Experience the vibrant culture, stunning coastlines, and laid-back vibe of India's favorite beach destination."
            },
            premiumExperiences: {
                badge: "COASTAL PARADISE",
                title: "Premium Goa Experiences",
                description: "Luxury beach resorts, private cruises, and exclusive heritage tours."
            }
        },
        tourIds: [100], // Goa Beach & Heritage
        featuredExperiences: [
            {
                id: 1,
                title: "Sunset Cruise",
                description: "Sail along the Mandovi River at sunset",
                image: getTourImages('india', 100).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Dudhsagar Trek",
                description: "Adventure trek to the majestic waterfalls",
                image: getTourImages('india', 100).galleryImages[1],
                buttonText: "View Details"
            }
        ]
    },
    rajasthan: {
        name: "Rajasthan",
        heroImages: [
            getTourImages('india', 101).image,
            getTourImages('india', 101).galleryImages[0],
            getTourImages('india', 101).galleryImages[1],
            getTourImages('india', 101).galleryImages[2]
        ],
        heroContent: {
            title: "RAJASTHAN TOURISM",
            subtitle: "The Land of Kings",
            description: "Immerse yourself in the royal grandeur of palaces, forts, and vibrant deserts. Experience the timeless heritage of Rajasthan."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Rajasthan",
                highlightWord: "Rajasthan",
                description: "Journey through the golden sands, majestic forts, and colorful cities of India's most royal state."
            },
            premiumExperiences: {
                badge: "ROYAL HERITAGE",
                title: "Premium Rajasthan Experiences",
                description: "Stay in heritage palaces and experience the life of royalty."
            }
        },
        tourIds: [101, 102], // Royal Rajasthan, Rajasthan w/ Chittorgarh
        featuredExperiences: [
            {
                id: 1,
                title: "Desert Safari",
                description: "Camel ride and camping in the Thar Desert",
                image: getTourImages('india', 101).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Palace Stay",
                description: "Luxury accommodation in heritage palaces",
                image: getTourImages('india', 101).galleryImages[1],
                buttonText: "View Details"
            }
        ]
    },
    kerala: {
        name: "Kerala",
        heroImages: [
            getTourImages('india', 110).image,
            getTourImages('india', 110).galleryImages[0],
            getTourImages('india', 110).galleryImages[1],
            getTourImages('india', 110).galleryImages[2]
        ],
        heroContent: {
            title: "KERALA TOURISM",
            subtitle: "God's Own Country",
            description: "Relax in the serene backwaters, explore lush tea gardens, and rejuvenate with Ayurveda in the tropical paradise of Kerala."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Kerala",
                highlightWord: "Kerala",
                description: "From the misty hills of Munnar to the tranquil backwaters of Alleppey, discover nature at its best."
            },
            premiumExperiences: {
                badge: "NATURE'S BLISS",
                title: "Premium Kerala Experiences",
                description: "Luxury houseboats and exclusive Ayurvedic retreats."
            }
        },
        tourIds: [110], // Kerala
        featuredExperiences: [
            {
                id: 1,
                title: "Houseboat Cruise",
                description: "Overnight stay on a traditional houseboat",
                image: getTourImages('india', 110).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Tea Tasting",
                description: "Sample fresh tea in the hills of Munnar",
                image: getTourImages('india', 110).galleryImages[1],
                buttonText: "View Details"
            }
        ]
    },
    "himachal-pradesh": {
        name: "Himachal Pradesh",
        heroImages: [
            getTourImages('india', 105).image,
            getTourImages('india', 105).galleryImages[0],
            getTourImages('india', 105).galleryImages[1],
            getTourImages('india', 105).galleryImages[2]
        ],
        heroContent: {
            title: "HIMACHAL TOURISM",
            subtitle: "Land of the Gods",
            description: "Experience the magic of the Himalayas. Snow-capped peaks, lush valleys, and spiritual sanctuaries await you."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Himachal",
                highlightWord: "Himachal",
                description: "Adventure, spirituality, and nature come together in the majestic mountains of Himachal Pradesh."
            },
            premiumExperiences: {
                badge: "MOUNTAIN MAGIC",
                title: "Premium Himachal Experiences",
                description: "Luxury mountain resorts and adventure sports packages."
            }
        },
        tourIds: [105], // Shimla Manali
        featuredExperiences: [
            {
                id: 1,
                title: "Paragliding",
                description: "Soar high above the valleys in Bir Billing or Solang",
                image: getTourImages('india', 105).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "River Rafting",
                description: "Thrilling rafting on the Beas River",
                image: getTourImages('india', 105).galleryImages[1],
                buttonText: "View Details"
            }
        ]
    },
    uttarakhand: {
        name: "Uttarakhand",
        heroImages: [
            getTourImages('india', 104).image,
            getTourImages('india', 104).galleryImages[0],
            getTourImages('india', 104).galleryImages[1],
            getTourImages('india', 104).galleryImages[2]
        ],
        heroContent: {
            title: "UTTARAKHAND TOURISM",
            subtitle: "Simply Heaven",
            description: "From the holy Ganges to the ski slopes of Auli, Uttarakhand offers a journey of spirituality and adventure."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Uttarakhand",
                highlightWord: "Uttarakhand",
                description: "Discover the divine beauty of the Himalayas, ancient temples, and thrilling wildlife sanctuaries."
            },
            premiumExperiences: {
                badge: "DIVINE JOURNEY",
                title: "Premium Uttarakhand Experiences",
                description: "Spiritual retreats and luxury ski resorts."
            }
        },
        tourIds: [103, 104], // Delhi-Auli, Spiritual Circuit
        featuredExperiences: [
            {
                id: 1,
                title: "Ganga Aarti",
                description: "Witness the divine evening ritual at Har Ki Pauri",
                image: getTourImages('india', 104).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Skiing in Auli",
                description: "World-class skiing slopes with Nanda Devi views",
                image: getTourImages('india', 103).galleryImages[0],
                buttonText: "View Details"
            }
        ]
    },
    maharashtra: {
        name: "Maharashtra",
        heroImages: [
            getTourImages('india', 109).image,
            getTourImages('india', 109).galleryImages[0],
            getTourImages('india', 109).galleryImages[1],
            getTourImages('india', 109).galleryImages[2]
        ],
        heroContent: {
            title: "MAHARASHTRA TOURISM",
            subtitle: "Unlimited",
            description: "Explore the Sahyadri ranges, ancient caves, and pristine beaches. Maharashtra is a land of diverse landscapes and rich history."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Maharashtra",
                highlightWord: "Maharashtra",
                description: "From the hill stations of Mahabaleshwar to the historic forts of Lonavala, experience the best of the West."
            },
            premiumExperiences: {
                badge: "WESTERN WONDERS",
                title: "Premium Maharashtra Experiences",
                description: "Luxury hill retreats and heritage fort tours."
            }
        },
        tourIds: [109], // Mahabaleshwar
        featuredExperiences: [
            {
                id: 1,
                title: "Cave Exploration",
                description: "Visit the ancient Karla and Bhaja caves",
                image: getTourImages('india', 109).galleryImages[0],
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Strawberry Picking",
                description: "Fresh strawberries at Mapro Garden",
                image: getTourImages('india', 109).galleryImages[1],
                buttonText: "View Details"
            }
        ]
    },
    "tamil-nadu": {
        name: "Tamil Nadu",
        heroImages: [
            logo
        ],
        heroContent: {
            title: "TAMIL NADU TOURISM",
            subtitle: "Enchanting Tamil Nadu",
            description: "Journey through the land of temples, culture, and heritage. Discover the architectural marvels and coastal beauty of Tamil Nadu."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Tamil Nadu",
                highlightWord: "Tamil Nadu",
                description: "Experience the Dravidian grandeur, serene beaches, and vibrant festivals of the south."
            },
            premiumExperiences: {
                badge: "TEMPLE TRAILS",
                title: "Premium Tamil Nadu Experiences",
                description: "Heritage temple tours and luxury coastal resorts."
            }
        },
        tourIds: [], // No tours yet
        featuredExperiences: []
    }
};
