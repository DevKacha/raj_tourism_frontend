// International Countries Data Configuration
// Maps country slugs to their specific content and tour IDs from internationalData.js

export const internationalCountriesData = {
    dubai: {
        name: "Dubai",
        heroImages: [
            "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?w=1200&q=80",
            "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1200&q=80",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80",
            "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&q=80"
        ],
        heroContent: {
            title: "DUBAI TOURISM",
            subtitle: "City of Gold",
            description: "Experience the futuristic skyline, luxury shopping, and desert adventures in the dazzling city of Dubai."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Dubai",
                highlightWord: "Dubai",
                description: "From the Burj Khalifa to the Palm Jumeirah, discover the architectural marvels of the UAE."
            },
            premiumExperiences: {
                badge: "DESERT LUXURY",
                title: "Premium Dubai Experiences",
                description: "Private yacht cruises and luxury desert safaris."
            }
        },
        tourIds: [207], // Dubai Luxury Experience
        featuredExperiences: [
            {
                id: 1,
                title: "Burj Khalifa",
                description: "Views from the top of the world",
                image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Desert Safari",
                description: "Dune bashing and BBQ dinner",
                image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
                buttonText: "View Details"
            }
        ]
    },
    vietnam: {
        name: "Vietnam",
        heroImages: [
            "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=80",
            "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1200&q=80",
            "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&q=80",
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80"
        ],
        heroContent: {
            title: "VIETNAM TOURISM",
            subtitle: "Timeless Charm",
            description: "Discover the breathtaking limestone islands of Ha Long Bay, the bustling streets of Hanoi, and the rich history of Vietnam."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Vietnam",
                highlightWord: "Vietnam",
                description: "A journey through emerald waters, ancient temples, and vibrant culture."
            },
            premiumExperiences: {
                badge: "NATURAL WONDERS",
                title: "Premium Vietnam Experiences",
                description: "Luxury cruises in Ha Long Bay and private heritage tours."
            }
        },
        tourIds: [209], // Vietnam Highlights
        featuredExperiences: [
            {
                id: 1,
                title: "Ha Long Bay Cruise",
                description: "Overnight luxury cruise",
                image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Golden Bridge",
                description: "Walk on the famous hands bridge",
                image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80",
                buttonText: "View Details"
            }
        ]
    },
    singapore: {
        name: "Singapore",
        heroImages: [
            "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80",
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
            "https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?w=1200&q=80",
            "https://images.unsplash.com/photo-1555217851-6141535bd771?w=1200&q=80"
        ],
        heroContent: {
            title: "SINGAPORE TOURISM",
            subtitle: "City in a Garden",
            description: "Explore the futuristic Gardens by the Bay, world-class shopping on Orchard Road, and the vibrant culture of Singapore."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Singapore",
                highlightWord: "Singapore",
                description: "A perfect blend of nature, technology, and culture in the Lion City."
            },
            premiumExperiences: {
                badge: "URBAN OASIS",
                title: "Premium Singapore Experiences",
                description: "Marina Bay Sands stay and private city tours."
            }
        },
        tourIds: [203, 204, 205, 206], // Singapore Malaysia, Singapore Delight, Singapore w/ Cruise, Singapore Malaysia Bangkok Pattaya
        featuredExperiences: [
            {
                id: 1,
                title: "Gardens by the Bay",
                description: "Visit the Supertree Grove",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Sentosa Island",
                description: "Fun and adventure at Sentosa",
                image: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&q=80",
                buttonText: "View Details"
            }
        ]
    },
    thailand: {
        name: "Thailand",
        heroImages: [
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80",
            "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&q=80",
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80",
            "https://images.unsplash.com/photo-1582468578550-6e97e02ce617?w=1200&q=80"
        ],
        heroContent: {
            title: "THAILAND TOURISM",
            subtitle: "Land of Smiles",
            description: "From the bustling streets of Bangkok to the pristine beaches of Phuket and Krabi, Thailand offers an unforgettable tropical escape."
        },
        sectionHeadings: {
            exploreTours: {
                title: "Explore Thailand",
                highlightWord: "Thailand",
                description: "Experience the vibrant nightlife, ancient temples, and crystal-clear waters."
            },
            premiumExperiences: {
                badge: "TROPICAL PARADISE",
                title: "Premium Thailand Experiences",
                description: "Luxury beach resorts and private island hopping."
            }
        },
        tourIds: [200, 201, 202], // Bangkok Pattaya (6D), Bangkok Phuket (9D), Bangkok Pattaya (5D)
        featuredExperiences: [
            {
                id: 1,
                title: "Phi Phi Islands",
                description: "Speedboat tour to the islands",
                image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80",
                buttonText: "View Details"
            },
            {
                id: 2,
                title: "Grand Palace",
                description: "Visit the historic palace in Bangkok",
                image: "https://images.unsplash.com/photo-1582468578550-6e97e02ce617?w=800&q=80",
                buttonText: "View Details"
            }
        ]
    }
};
