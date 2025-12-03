// International Tours Page - Hero Images
import { internationalInclusions, internationalExclusions } from './tourInclusions';
import { getTourImages } from '../utils/imageHelper';

export const heroImages = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
];

// International Tours Page - Tour Packages
export const tours = [
    {
        id: 200,
        title: "Bangkok Pattaya",
        duration: "6D/5N",
        ...getTourImages('international', 200),
        location: "Bangkok & Pattaya, Thailand",
        price: "On Request",
        rating: "4.8",
        reviews: "156",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangkok & Transfer to Pattaya",
                description: "Arrive at Bangkok International Airport. Transfer to your hotel in Pattaya. Check-in and relax at the hotel. Overnight stay in Pattaya.",
                highlights: ["Airport Transfer", "Pattaya Arrival", "Leisure"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Coral Island Tour",
                description: "Breakfast at your Hotel. Pick-up and transfer to Pattaya Beach. Speedboat ride to Koh Larn (Coral Island). In the Afternoon, Thai lunch at a beachfront open-air restaurant. Return to Pattaya by speedboat and Hotel drop-off. Overnight stay at your Hotel.",
                highlights: ["Coral Island", "Speedboat Ride", "Beachfront Lunch"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Aquaverse WaterPark",
                description: "Breakfast at Aquaverse. Experience adrenaline-pumping rides and attractions inspired by blockbuster films like Men in Black, Ghostbusters, and Hotel Transylvania. Relish a sumptuous lunch inside the park before returning to your hotel for some relaxation. Overnight stay at your Hotel.",
                highlights: ["Aquaverse WaterPark", "Theme Rides", "Water Activities"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 4,
                title: "Pattaya – Bangkok Transfer & City Tour",
                description: "After breakfast, check out and drive toward Bangkok. En route, enjoy a city and temple tour, covering iconic landmarks such as Wat Traimit (Golden Buddha) and Wat Benchamabophit (Marble Temple). Later, check in at your Bangkok hotel and spend the evening at leisure – shop, dine, or explore the city lights. Overnight stay at your Hotel.",
                highlights: ["Bangkok Transfer", "City Tour", "Temple Visits"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Chao Phraya Dinner Cruise",
                description: "Breakfast at your Hotel. Evening luxury dinner cruise along the Chao Phraya River – enjoy music, dance, and glittering city views. Overnight stay at your Hotel.",
                highlights: ["Chao Phraya River", "Dinner Cruise", "Live Entertainment"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Departure From Bangkok",
                description: "Enjoy Scrumptious Breakfast at the hotel. You will be picked up and transferred to Bangkok for your departure.",
                highlights: ["Hotel Check-out", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 201,
        title: "Bangkok Phuket Pattaya Krabi",
        duration: "9D/8N",
        ...getTourImages('international', 201),
        location: "Bangkok, Pattaya, Krabi, Phuket",
        price: "On Request",
        rating: "4.9",
        reviews: "189",
        itinerary: [
            {
                day: 1,
                title: "Arrival In Bangkok - Transfer To Pattaya",
                description: "Meet and assist at the airport. Private transfer to hotel & check-in. Free time at leisure.",
                highlights: ["Airport Transfer", "Pattaya Arrival", "Leisure"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Half Day Coral Island Tour",
                description: "Breakfast at hotel. Half-day Coral Island tour with lunch. Enjoy water sports (parasailing, snorkeling, jet ski – at own cost). Indian lunch included on the island. Return to Pattaya by afternoon. Evening free for shopping or optional walking street exploration.",
                highlights: ["Coral Island", "Water Sports", "Indian Lunch"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Transfer To Bangkok – Bangkok City Tour",
                description: "Breakfast at hotel. En route Bangkok City Tour: Visit Golden Buddha Temple (Wat Traimit), Marble Temple (Wat Benchamabophit) and Gems Gallery. Check-in at Bangkok hotel. Evening at leisure or optional Chao Phraya Dinner Cruise. Overnight stay at Bangkok.",
                highlights: ["Bangkok Transfer", "City Tour", "Gems Gallery"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Day At Leisure",
                description: "Breakfast at hotel. Day at leisure to explore on your own or do some shopping in the blinging streets on bangkok. Overnight stay in Bangkok.",
                highlights: ["Leisure Day", "Shopping", "Bangkok Streets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Fly to Krabi",
                description: "Breakfast at hotel. Transfer to airport for flight to Krabi. Arrive in Krabi, meet and transfer to hotel. Day free to explore Ao Nang beach or night markets. Overnight stay in Krabi.",
                highlights: ["Flight to Krabi", "Ao Nang Beach", "Night Markets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Krabi 4 Island Tour",
                description: "Breakfast at hotel. Embark on a Krabi 4 Island Tour by Long Tail Boat. Visit Phra Nang Cave, Tup Island, Chicken Island, and Poda Island. Enjoy a delicious local lunch during the tour. (Note: National Park fee is not included in the package). Overnight stay in Krabi.",
                highlights: ["4 Island Tour", "Long Tail Boat", "Phra Nang Cave"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 7,
                title: "Transfer to Phuket & Leisure Day",
                description: "Breakfast at hotel. After breakfast, transfer from your Krabi hotel to your Phuket hotel. Check-in and enjoy your leisure time in Phuket. Optional: Explore Patong Beach, shop at local markets, or enjoy the nightlife.",
                highlights: ["Transfer to Phuket", "Patong Beach", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Full-Day Phi Phi Island Tour",
                description: "Breakfast at hotel. Embark on a picturesque boat ride to the stunning Phi Phi Islands. Explore the beauty of Maya Bay (subject to availability), Loh Samah Bay, and Viking Cave. Enjoy a delicious local lunch on the island. Overnight stay in Phuket.",
                highlights: ["Phi Phi Islands", "Maya Bay", "Viking Cave"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 9,
                title: "Departure From Phuket",
                description: "Breakfast at hotel. Transfer from your hotel to Phuket International Airport. Depart with beautiful memories of your Phuket getaway.",
                highlights: ["Hotel Check-out", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 202,
        title: "Bangkok Pattaya",
        duration: "5D/4N",
        ...getTourImages('international', 202),
        location: "Bangkok & Pattaya, Thailand",
        price: "On Request",
        rating: "4.7",
        reviews: "142",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangkok - Transfer to Pattaya",
                description: "Arrive at Bangkok Airport. Meet and greet at the airport and transfer to Pattaya hotel (Private Basis). Enroute visit Sanctuary of Truth. Overnight stay in Pattaya.",
                highlights: ["Airport Transfer", "Sanctuary of Truth", "Pattaya Arrival"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Coral Island Tour",
                description: "Breakfast at Hotel. Full day Coral Island Tour with Local Lunch on SIC Basis (Exclude National Park Fees). Return to hotel and relax. Overnight stay in Pattaya.",
                highlights: ["Coral Island", "Local Lunch", "Beach Activities"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Transfer to Bangkok - City Tour",
                description: "Breakfast at the hotel and check out. Proceed to Bangkok. Enroute Bangkok City Tour. Check-in at Bangkok hotel. Overnight stay in Bangkok.",
                highlights: ["Bangkok Transfer", "City Tour", "Hotel Check-in"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Leisure Day & Dinner Cruise",
                description: "Breakfast at the hotel. Day free for shopping or optional tours (at own cost). In the evening, enjoy the Chao Phraya Dinner Cruise (SIC basis). Overnight stay in Bangkok.",
                highlights: ["Leisure Time", "Shopping", "Chao Phraya Dinner Cruise"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure",
                description: "Breakfast at Hotel. Check out and Transfer to the airport on Private Basis.",
                highlights: ["Hotel Check-out", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 203,
        title: "Singapore Malaysia",
        duration: "8D/7N",
        ...getTourImages('international', 203),
        location: "Singapore & Malaysia",
        price: "On Request",
        rating: "4.9",
        reviews: "215",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Singapore",
                description: "Arrive at Singapore Changi Airport. Private transfer to hotel. Check in to the hotel. Evening at leisure.",
                highlights: ["Airport Transfer", "Hotel Check-in", "Leisure"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "City Tour + Gardens by the Bay",
                description: "Breakfast at hotel. Half day Singapore city tour on SIC Basis. In the evening Visit Gardens by the Bay on SIC Basis. Overnight stay at hotel.",
                highlights: ["City Tour", "Gardens by the Bay", "Sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Sentosa Island Tour",
                description: "Breakfast at hotel. Proceed for an exciting Sentosa Island Tour on SIC Basis. Overnight stay at hotel.",
                highlights: ["Sentosa Island", "Island Attractions", "Fun Activities"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Universal Studios Singapore",
                description: "Breakfast at hotel. Enjoy a full-day visit to Universal Studios Singapore on SIC Basis. Overnight stay at hotel.",
                highlights: ["Universal Studios", "Theme Park", "Entertainment"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure from Singapore / Arrival in Kuala Lumpur",
                description: "Breakfast at hotel. Check out from hotel in Singapore and transfer to airport. Arrival in Kuala Lumpur and check in to hotel. Evening at leisure. Overnight stay at hotel.",
                highlights: ["Transfer to KL", "Hotel Check-in", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Genting Highlands + Batu Caves Tour",
                description: "Breakfast at hotel. Proceed to Genting Highlands with a two-way cable car ride. Enroute 30-minute photo stop at Batu Caves (Theme Park Entry is Excluded). Return to hotel. Overnight stay at hotel.",
                highlights: ["Genting Highlands", "Cable Car Ride", "Batu Caves"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Kuala Lumpur City Tour",
                description: "Breakfast at hotel. Half day Kuala Lumpur city tour. Visit KL Tower (Entry is Included). Return to hotel. Overnight stay at hotel.",
                highlights: ["KL City Tour", "KL Tower", "Sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Departure from Kuala Lumpur",
                description: "Breakfast at hotel. Checkout and private airport transfer.",
                highlights: ["Hotel Check-out", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 204,
        title: "Singapore Delight",
        duration: "6D/5N",
        ...getTourImages('international', 204),
        location: "Singapore",
        price: "On Request",
        rating: "4.8",
        reviews: "178",
        itinerary: [
            {
                day: 1,
                title: "Arrival In Singapore",
                description: "Arrive at Changi International Airport. Excursion at canopy Park at the airport. Meet & transfer to the hotel and check-in. Overnight stay at Hotel.",
                highlights: ["Airport Transfer", "Canopy Park", "Hotel Check-in"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "City Tour + Night Safari",
                description: "Breakfast at the Hotel. Half day Singapore city tour on SIC Basis. In the evening, proceed for the world-famous Night Safari on SIC Basis. Overnight stay at Hotel.",
                highlights: ["City Tour", "Night Safari", "Wildlife"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Sentosa Island Tour",
                description: "Breakfast at the Hotel. Proceed for an exciting Sentosa Island Tour (Includes: One way cable car, Sky Helix and Wings of Time show) on SIC Basis. Overnight stay at Hotel.",
                highlights: ["Sentosa Island", "Cable Car", "Wings of Time"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Universal Studios Singapore",
                description: "Breakfast at the Hotel. Enjoy a full-day visit to Universal Studios Singapore on SIC Basis. Overnight stay at Hotel.",
                highlights: ["Universal Studios", "Theme Park", "Entertainment"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Museum of Ice Cream",
                description: "Breakfast at the Hotel. Get a different experience like never before at the museum of ice cream. Overnight stay at hotel.",
                highlights: ["Museum of Ice Cream", "Sweet Treats", "Fun Experience"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Departure from Singapore",
                description: "Enjoy a delicious breakfast. Check out from the hotel and transfer to the airport for your flight back home.",
                highlights: ["Hotel Check-out", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 205,
        title: "Singapore with Cruise",
        duration: "7D/6N",
        ...getTourImages('international', 205),
        location: "Singapore & Cruise",
        price: "On Request",
        rating: "4.9",
        reviews: "198",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Singapore and City Exploration",
                description: "Arrive at Changi Airport; transfer to hotel. Visit Merlion Park, Chinatown, and Little India. Evening: Gardens by the Bay and Marina Bay Sands Light Show.",
                highlights: ["City Tour", "Gardens by the Bay", "Light Show"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Sentosa Island and Attractions",
                description: "Cable Car ride to Sentosa Island. SEA Aquarium, Madame Tussauds, and Wings of Time show. Return to hotel for overnight stay.",
                highlights: ["Sentosa Island", "SEA Aquarium", "Wings of Time"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Cruise Embarkation",
                description: "Leisure morning with optional sightseeing or shopping at Orchard Road. Transfer to cruise terminal. Board cruise ship (e.g., Genting Dream, Royal Caribbean). Enjoy onboard facilities and entertainment.",
                highlights: ["Cruise Embarkation", "Onboard Entertainment", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Cruise Day — Port Excursion",
                description: "Cruise sails to Penang, Bintan, or nearby destination. Shore excursion with guided tour and shopping opportunities. Evening onboard entertainment and dining.",
                highlights: ["Port Excursion", "Shore Visit", "Cruise Entertainment"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 5,
                title: "Cruise Returns to Singapore",
                description: "Cruise returns to Singapore port. Disembark and transfer to hotel. Rest or short city walk in the evening.",
                highlights: ["Disembarkation", "Leisure", "City Walk"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Universal Studios Singapore or Adventure Cove",
                description: "Full day at Universal Studios or Adventure Cove Waterpark. Evening at leisure or optional shopping.",
                highlights: ["Universal Studios", "Adventure Cove", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Transfer to airport for flight back home.",
                highlights: ["Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 206,
        title: "Singapore Malaysia Bangkok Pattaya",
        duration: "12D/11N",
        ...getTourImages('international', 206),
        location: "Singapore, Malaysia, Thailand",
        price: "On Request",
        rating: "5.0",
        reviews: "245",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Singapore City Tour",
                description: "Arrive in Singapore and transfer to the hotel. Afternoon city tour covering Marina Bay Sands, Gardens by the Bay, Merlion Park. Evening at leisure or explore Clarke Quay.",
                highlights: ["Arrival", "City Tour", "Marina Bay Sands"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Singapore - Sentosa Island",
                description: "Morning visit to Sentosa Island attractions: Universal Studios, S.E.A Aquarium. Experience the cable car ride and Beach activities. Evening Wings of Time light and sound show.",
                highlights: ["Sentosa Island", "Universal Studios", "Wings of Time"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Singapore - Zoo & Night Safari",
                description: "Morning visit to the Singapore Zoo. Afternoon free for shopping or exploring Little India and Chinatown. Night Safari experience, the world’s first nocturnal zoo.",
                highlights: ["Singapore Zoo", "Night Safari", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Fly to Kuala Lumpur - City Tour",
                description: "Morning flight to Kuala Lumpur. Visit Petronas Twin Towers, KL Tower, and Batu Caves. Evening stroll in Bukit Bintang area and markets.",
                highlights: ["Flight to KL", "Petronas Towers", "Batu Caves"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Day Trip to Genting Highlands",
                description: "Full day excursion to Genting Highlands including cable car ride. Visit casinos and enjoy theme park options.",
                highlights: ["Genting Highlands", "Cable Car", "Theme Park"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Cultural Exploration / Travel to Thailand",
                description: "Morning visit to Putrajaya and local markets. Afternoon flight to Bangkok, Thailand. Evening free or optional local dinner.",
                highlights: ["Putrajaya", "Flight to Bangkok", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Bangkok - Chao Phraya River Dinner Cruise",
                description: "City tour of Bangkok covering Grand Palace, Wat Arun, Wat Phra Kaew. Evening scenic dinner cruise on Chao Phraya river with views of illuminated temples.",
                highlights: ["Bangkok City Tour", "Grand Palace", "Dinner Cruise"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Bangkok to Pattaya - Coral Island Tour",
                description: "Transfer to Pattaya in the morning. Speedboat tour to Coral Island, beach activities and snorkeling. Evening visit to Nong Nooch Tropical Garden or Alcazar cabaret show.",
                highlights: ["Transfer to Pattaya", "Coral Island", "Alcazar Show"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 9,
                title: "Pattaya City Tour and Leisure",
                description: "Visit Sanctuary of Truth and Khao Chi Chan (Buddha Mountain). Leisure time on Pattaya beaches or optional water sports.",
                highlights: ["Sanctuary of Truth", "Buddha Mountain", "Beach Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 10,
                title: "Phuket Local Sightseeing",
                description: "Transfer to Phuket. Local sightseeing and exploration.",
                highlights: ["Phuket Arrival", "Sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 11,
                title: "Phuket Sightseeing & Nature",
                description: "Phuket local sightseeing and natural scenes exploration.",
                highlights: ["Nature Tour", "Sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 12,
                title: "Departure from Phuket to Bangkok",
                description: "Transfer to airport for your flight home.",
                highlights: ["Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 207,
        title: "Dubai Luxury Experience",
        duration: "7D/6N",
        ...getTourImages('international', 207),
        location: "Dubai, UAE",
        price: "On Request",
        rating: "4.9",
        reviews: "312",
        itinerary: [
            {
                day: 1,
                title: "Downtown Dubai Highlights",
                description: "Visit the iconic Burj Khalifa, the world’s tallest building. Experience the observation deck views from Level 124 or Level 148. Explore the Dubai Mall, the world’s largest shopping mall. Watch the Dubai Fountain evening light and music show.",
                highlights: ["Burj Khalifa", "Dubai Mall", "Fountain Show"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Dubai Heritage & Modern Marvels",
                description: "Visit Dubai Frame to see panoramic views of Old and New Dubai. Explore the Museum of the Future. Visit Old Dubai’s Al Seef district and the Gold Souk for traditional shopping experience. Spend time at Dubai Marina.",
                highlights: ["Dubai Frame", "Museum of the Future", "Gold Souk"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Beach and Desert Safari",
                description: "Relax at Jumeirah Beach or visit entertainment venues like Aya Universe. Experience a desert safari with dune bashing, camel rides, sandboarding, and an optional overnight desert camp stay.",
                highlights: ["Jumeirah Beach", "Desert Safari", "Dune Bashing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Iconic Attractions and Gardens",
                description: "Visit Burj Al Arab for photos or afternoon tea. Explore Dubai Miracle Garden (open October to April). Visit Global Village in the evening for cultural pavilions, cuisine, and rides.",
                highlights: ["Burj Al Arab", "Miracle Garden", "Global Village"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Theme Parks and Attractions",
                description: "Spend a day at Legoland Theme Park or Warner Bros theme park in Abu Dhabi. Explore Atlantis The Palm and Lost Chambers Aquarium.",
                highlights: ["Theme Parks", "Atlantis The Palm", "Lost Chambers"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Shopping and Nightlife",
                description: "Shop at Meena Bazaar, Gold Souk, and Ibn Battuta Mall. Experience Glow Garden and Dino Park after dark. Enjoy a yacht ride through Dubai Marina with nightlife views.",
                highlights: ["Shopping", "Glow Garden", "Yacht Ride"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Cultural Sites and Departure",
                description: "Visit Sheikh Zayed Mosque in Abu Dhabi or the Louvre Abu Dhabi. Visit Ferrari World theme park. Depart from Dubai International Airport.",
                highlights: ["Sheikh Zayed Mosque", "Ferrari World", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 208,
        title: "Bali Island Retreat",
        duration: "7D/6N",
        ...getTourImages('international', 208),
        location: "Bali, Indonesia",
        price: "On Request",
        rating: "4.9",
        reviews: "267",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali – Transfer to Ubud",
                description: "Meet & Greet at Denpasar Airport. Private Transfer to Ubud. Check in to the Hotel. Evening at Leisure. Overnight stay in Ubud.",
                highlights: ["Airport Transfer", "Ubud Arrival", "Leisure"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Full Day Kintamani Volcano & Ubud Tour",
                description: "Breakfast at the hotel. Full Day Kintamani Volcano Tour with Ubud Village. Visit Includes: Mount Batur Viewing Only, Ubud Monkey Forest, Tegenungan Waterfall, Ubud Palace, Swing by Alas Harum. Return to Ubud hotel. Overnight stay in Ubud.",
                highlights: ["Kintamani Volcano", "Monkey Forest", "Tegenungan Waterfall"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Transfer to Nusa Penida",
                description: "Breakfast & check-out from Ubud. Transfer to harbor for fast boat to Nusa Penida. Arrive and Check in to the Hotel. Rest of the day free to explore or relax. Overnight stay in Nusa Penida.",
                highlights: ["Transfer to Nusa Penida", "Fast Boat", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Full Day Nusa Penida East Island Tour",
                description: "Breakfast at the hotel. Full Day Nusa Penida East Island Tour. East Nusa Penida Tour (typical spots may include Atuh Beach, Diamond Beach, Tree House, Thousand Islands Viewpoint). Return to hotel. Overnight stay in Nusa Penida.",
                highlights: ["East Nusa Penida", "Diamond Beach", "Thousand Islands Viewpoint"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Return to Mainland – Transfer to Kuta",
                description: "Breakfast & check-out from Nusa Penida. Transfer via fast boat to Bali mainland. Private transfer to Kuta. Check in to the Hotel. Evening at leisure. Overnight stay in Kuta.",
                highlights: ["Transfer to Kuta", "Fast Boat", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Full Day Handara Gate & Tanah Lot Tour",
                description: "Breakfast at the hotel. Full Day Handara Golf Gate. Visit Tanah Lot Temple. Return to hotel. Overnight stay in Kuta.",
                highlights: ["Handara Gate", "Tanah Lot Temple", "Sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Departure",
                description: "Breakfast & check-out. Transfer to airport for departure.",
                highlights: ["Hotel Check-out", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 209,
        title: "Vietnam Highlights",
        duration: "8D/7N",
        ...getTourImages('international', 209),
        location: "Hanoi, Ha Long Bay, Da Nang, Ho Chi Minh",
        price: "On Request",
        rating: "4.8",
        reviews: "134",
        itinerary: [
            {
                day: 1,
                title: "Hanoi Arrival & City Tour",
                description: "Arrive in Hanoi, visit Ho Chi Minh Mausoleum, Temple of Literature. Explore Hoan Kiem Lake, Old Quarter & Dong Xuan Market. Check in and overnight in Hanoi.",
                highlights: ["Hanoi Arrival", "Old Quarter", "Hoan Kiem Lake"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Hanoi to Ha Long Bay (Overnight Cruise)",
                description: "Scenic drive to Ha Long Bay. Board cruise, visit Sung Sot Cave & Titop Island. Sunset views, dinner & overnight on board.",
                highlights: ["Ha Long Bay", "Overnight Cruise", "Sung Sot Cave"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Ha Long to Hanoi",
                description: "Morning cruise around the islets & Bai Tu Long Bay. Brunch on board, drive back to Hanoi. Check in and overnight in Hanoi.",
                highlights: ["Cruise Brunch", "Return to Hanoi", "Leisure"],
                meals: ["Breakfast", "Brunch", "Dinner"]
            },
            {
                day: 4,
                title: "Fly to Da Nang & City Tour",
                description: "Flight to Da Nang, visit Dragon Bridge & My Khe Beach. Shop at Han Market, check in and relax. Overnight in Da Nang.",
                highlights: ["Flight to Da Nang", "Dragon Bridge", "My Khe Beach"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Ba Na Hills & Golden Bridge",
                description: "Cable car to Ba Na Hills & Fantasy Park. Visit the iconic Golden Bridge. Indian buffet lunch, overnight in Da Nang.",
                highlights: ["Ba Na Hills", "Golden Bridge", "Fantasy Park"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 6,
                title: "Fly to Ho Chi Minh & City Tour",
                description: "Fly to Ho Chi Minh City. Visit Cathedral, Post Office, War Museum & Ben Thanh Market. Check in and overnight in Ho Chi Minh.",
                highlights: ["Flight to Ho Chi Minh", "War Museum", "Ben Thanh Market"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Mekong Delta Day Tour",
                description: "Drive to My Tho & cruise to Thoi Son Islet. Visit bee farms, candy workshop & enjoy folk music. Lunch & return to Ho Chi Minh City. Overnight in Ho Chi Minh.",
                highlights: ["Mekong Delta", "River Cruise", "Folk Music"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 8,
                title: "Departure from Ho Chi Minh City",
                description: "Free time until airport transfer. Depart with memories of Vietnam.",
                highlights: ["Leisure", "Airport Transfer", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 210,
        title: "Azerbaijan - Land of Fire",
        duration: "6D/5N",
        ...getTourImages('international', 210),
        location: "Baku, Azerbaijan",
        price: "On Request",
        rating: "4.7",
        reviews: "98",
        itinerary: [
            {
                day: 1,
                title: "Welcome to Baku",
                description: "Arrival at Baku Airport. Meet and greet, followed by transfer to the hotel. Check in and rest at leisure. Dinner and overnight stay at the hotel.",
                highlights: ["Baku Arrival", "Hotel Check-in", "Leisure"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Full-Day Baku City Tour",
                description: "Breakfast at the hotel. Visit the Heydar Aliyev Center (photo stop). Lunch at an Indian restaurant. Explore Highland Park and the Alley of Martyrs. Stroll along the Baku Boulevard. Dinner at an Indian restaurant. Overnight stay in Baku.",
                highlights: ["Heydar Aliyev Center", "Highland Park", "Baku Boulevard"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Flames & Old City Tour",
                description: "Breakfast at the hotel. Visit Ateshgah (Fire Temple) and Yanardag (Fire Mountain). Lunch at an Indian restaurant. Explore Old City (Icherisheher) – a UNESCO World Heritage Site. Dinner at an Indian restaurant. Overnight stay in Baku.",
                highlights: ["Fire Temple", "Fire Mountain", "Old City"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 4,
                title: "Shahdag Mountain Adventure",
                description: "Breakfast at the hotel. Depart for Shahdag Mountain Resort. Enjoy cable car rides, scenic views, and leisure time. Lunch at a local restaurant. Return to Baku. Dinner at an Indian restaurant. Overnight stay in Baku.",
                highlights: ["Shahdag Mountain", "Cable Car", "Scenic Views"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 5,
                title: "Gobustan & Shopping Tour",
                description: "Breakfast at the hotel. Visit Gobustan National Park (rock carvings and mud volcanoes). Stop at the Bibi-Heybat Mosque. Lunch at an Indian restaurant. Enjoy a shopping experience at 28 Mall. Dinner at an Indian restaurant. Overnight stay in Baku.",
                highlights: ["Gobustan National Park", "Mud Volcanoes", "Shopping"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 6,
                title: "Leisure & Departure",
                description: "Breakfast at the hotel. Check-out and some free time for last-minute shopping. Lunch and dinner at Indian restaurants. Evening transfer to the airport for your flight home.",
                highlights: ["Shopping", "Leisure", "Departure"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            }
        ]
    },
    {
        id: 211,
        title: "Sri Lanka Island Paradise",
        duration: "7D/6N",
        ...getTourImages('international', 211),
        location: "Colombo, Kandy, Nuwara Eliya, Ella, Yala, Mirissa",
        price: "On Request",
        rating: "4.8",
        reviews: "145",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Colombo",
                description: "Arrive in Colombo and settle into your hotel. Explore Colombo city: visit Gangaramaya Temple, Independence Square, and Pettah Market. Overnight stay in Colombo.",
                highlights: ["Colombo City Tour", "Gangaramaya Temple", "Pettah Market"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Colombo to Kandy",
                description: "Drive to Kandy. Visit the Temple of the Sacred Tooth Relic, Kandy Lake, and Royal Botanical Gardens. Evening cultural dance show. Overnight stay in Kandy.",
                highlights: ["Temple of Tooth Relic", "Botanical Gardens", "Cultural Show"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Kandy to Nuwara Eliya",
                description: "Scenic drive or train journey to Nuwara Eliya through tea plantations. Visit tea estates, waterfalls, and Hakgala Botanical Garden. Explore colonial town ambiance. Overnight stay in Nuwara Eliya.",
                highlights: ["Tea Plantations", "Waterfalls", "Colonial Town"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Nuwara Eliya to Ella",
                description: "Continue the scenic train from Nuwara Eliya to Ella. Visit Nine Arch Bridge, Little Adam’s Peak. Relax in the charming town of Ella. Overnight stay in Ella.",
                highlights: ["Scenic Train Ride", "Nine Arch Bridge", "Little Adam’s Peak"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Ella to Yala National Park",
                description: "Drive to Yala. Afternoon jeep safari to spot leopards, elephants, and other wildlife. Overnight stay near Yala.",
                highlights: ["Yala Jeep Safari", "Wildlife Spotting", "Leopards"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Yala to Mirissa",
                description: "Drive to Mirissa beach. Relax on the beach or take a boat trip for whale watching (seasonal). Overnight stay in Mirissa.",
                highlights: ["Mirissa Beach", "Whale Watching", "Relaxation"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Mirissa to Colombo & Departure",
                description: "Drive back to Colombo. Last minute shopping or relaxation depending on flight time. Departure from Colombo airport.",
                highlights: ["Return Drive", "Shopping", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 212,
        title: "Hong Kong Highlights",
        duration: "7D/6N",
        ...getTourImages('international', 212),
        location: "Hong Kong & Macau (optional day trip)",
        price: "On Request",
        rating: "4.8",
        reviews: "198",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Victoria Harbour",
                description: "Arrive at Hong Kong International Airport and transfer to Tsim Sha Tsui. Evening Star Ferry across Victoria Harbour, Symphony of Lights show and stroll along the Avenue of Stars.",
                highlights: ["Star Ferry", "Victoria Harbour", "Avenue of Stars"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Hong Kong Disneyland",
                description: "Full day at Hong Kong Disneyland — rides, parades (Golden Mickeys) and the Momentous nighttime spectacular. Return to city for dinner at Temple Street Night Market.",
                highlights: ["Disneyland rides", "Golden Mickeys Parade", "Temple Street Night Market"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Ocean Park Adventure",
                description: "Explore Ocean Park’s marine exhibits, thrill rides and Water World splash zones. Evening shopping time at Harbour City or Elements Mall.",
                highlights: ["Ocean Park", "Marine Exhibits", "Harbour City Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Victoria Peak & Central",
                description: "Peak Tram up to Victoria Peak for Sky Terrace 428 panoramic views. Descend via the Mid-Levels Escalator to visit Man Mo Temple and sample Central street food; optional HSBC building photo stop.",
                highlights: ["Victoria Peak", "Peak Tram", "Man Mo Temple"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Lantau Island & Big Buddha",
                description: "Ngong Ping 360 cable car to Tian Tan Buddha and Po Lin Monastery. Visit Tai O fishing village to see stilt houses and enjoy fresh seafood.",
                highlights: ["Ngong Ping 360", "Tian Tan Buddha", "Tai O Village"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Macau Day Trip (Optional)",
                description: "Ferry to Macau for the Ruins of St. Paul’s, Senado Square and Cotai casino strip (Venetian etc.). Return to Hong Kong for evening leisure.",
                highlights: ["Macau Ferry", "Ruins of St. Paul’s", "Cotai Casinos"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Markets, Relaxation & Departure",
                description: "Morning at Stanley Market and Repulse Bay. Optional visit to Ten Thousand Buddhas Monastery before transfer to airport for departure.",
                highlights: ["Stanley Market", "Repulse Bay", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 213,
        title: "Maldives Retreat",
        duration: "5D/4N",
        ...getTourImages('international', 213),
        location: "Maldives (Male + Resort)",
        price: "On Request",
        rating: "4.9",
        reviews: "214",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Male City Orientation",
                description: "Arrive at Malé International Airport and transfer to your resort. Quick Male city visit if time permits — Sultan Park, National Museum, Friday Mosque and fish market — then relax at your resort.",
                highlights: ["Male City Tour", "Resort Transfer", "Beach Time"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Snorkelling & Water Sports",
                description: "Enjoy house-reef snorkelling, or try resort water sports such as jet-ski, paddleboarding or kayaking. Afternoon at leisure on the beach.",
                highlights: ["Snorkelling", "Water Sports", "Beach Relaxation"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 3,
                title: "Island Hopping & Local Islands",
                description: "Island-hopping tour to nearby local islands (example: Maafushi / Gulhi) — experience local island life, sample Maldivian cuisine and pristine sandbanks.",
                highlights: ["Island Hopping", "Local Culture", "Pristine Beaches"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 4,
                title: "Spa & Romantic Experiences",
                description: "Relax with spa treatments or wellness activities. Optional romantic add-ons: sunset cruise, private beach dining or floating breakfast in your villa (great for honeymooners).",
                highlights: ["Spa Treatments", "Sunset Cruise", "Private Dining"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure or Extra Leisure",
                description: "Final morning at leisure for snorkeling or beach time, transfer to Malé for your international flight home.",
                highlights: ["Last-minute Relaxation", "Resort Checkout", "Airport Transfer"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 214,
        title: "Nepal Scenic & Cultural",
        duration: "7D/6N",
        ...getTourImages('international', 214),
        location: "Kathmandu • Pokhara • Chitwan • Nagarkot",
        price: "On Request",
        rating: "4.7",
        reviews: "172",
        itinerary: [
            {
                day: 1,
                title: "Kathmandu Arrival & Temples",
                description: "Arrive in Kathmandu. Visit Swayambhunath (Monkey Temple) and Pashupatinath to get an introduction to Nepalese spirituality and rituals.",
                highlights: ["Swayambhunath", "Pashupatinath", "Kathmandu Arrival"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Kathmandu Valley Heritage",
                description: "Explore Boudhanath Stupa, Patan Durbar Square and Bhaktapur’s medieval squares and pottery streets.",
                highlights: ["Boudhanath", "Patan Durbar Square", "Bhaktapur"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Drive to Pokhara",
                description: "Scenic 6–7 hour drive to Pokhara. Evening stroll along Phewa Lake and Lakeside market.",
                highlights: ["Phewa Lake", "Lakeside Market", "Scenic Drive"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Pokhara Adventures & Sunrise",
                description: "Early Sarangkot sunrise over the Annapurna range. Boat on Phewa Lake to Tal Barahi Temple, visit Devi’s Fall and Gupteshwor Cave.",
                highlights: ["Sarangkot Sunrise", "Phewa Lake Boating", "Devi's Fall"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Drive to Chitwan",
                description: "Drive to Chitwan (approx. 5 hrs). Tharu village walk, canoe ride and evening cultural program. Overnight near Chitwan National Park.",
                highlights: ["Tharu Village", "Canoe Ride", "Cultural Program"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Chitwan Safari & Nagarkot",
                description: "Early jungle jeep safari for wildlife (rhinos, birds, possible tiger sightings). Later drive to Nagarkot for sunset Himalayan panoramas.",
                highlights: ["Jeep Safari", "Wildlife", "Nagarkot Sunset"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Nagarkot Sunrise & Departure",
                description: "Sunrise over the Himalaya in Nagarkot. Return to Kathmandu for final shopping in Thamel before airport transfer.",
                highlights: ["Himalayan Sunrise", "Thamel Shopping", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 215,
        title: "Bhutan Cultural Journey",
        duration: "7D/6N",
        ...getTourImages('international', 215),
        location: "Paro • Thimphu • Punakha",
        price: "On Request",
        rating: "4.9",
        reviews: "128",
        itinerary: [
            {
                day: 1,
                title: "Paro Arrival & Dzong",
                description: "Arrive at Paro Airport. Visit Rinpung Dzong and Kyichu Lhakhang, evening stroll through Paro town.",
                highlights: ["Rinpung Dzong", "Kyichu Lhakhang", "Paro Arrival"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Tiger’s Nest (Taktsang) Hike",
                description: "Hike to Taktsang (Tiger’s Nest) Monastery — 4–5 hours round trip. Afternoon visit to Ta Dzong (National Museum).",
                highlights: ["Tiger's Nest", "Ta Dzong Museum", "Mountain Hike"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Dochula Pass & Thimphu",
                description: "Drive to Thimphu via Dochula Pass (108 stupas and panoramic views). Explore Thimphu market and local sights.",
                highlights: ["Dochula Pass", "Thimphu Market", "Scenic Drive"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Thimphu Cultural Tour",
                description: "Visit Buddha Dordenma, Tashichho Dzong, Folk Heritage Museum and Takin Preserve; enjoy local handicraft shops.",
                highlights: ["Buddha Dordenma", "Tashichho Dzong", "Folk Heritage Museum"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Drive to Punakha",
                description: "Scenic drive to Punakha (approx. 2 hrs). Visit Punakha Dzong at the river confluence and Chimi Lhakhang (Fertility Temple).",
                highlights: ["Punakha Dzong", "Chimi Lhakhang", "River Confluence"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Punakha Excursions & Return",
                description: "Rice field walk and Khamsum Yulley Namgyal Chorten hike. Return to Paro with scenic stops en route.",
                highlights: ["Khamsum Yulley Namgyal", "Rice Field Walk", "Scenic Return"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Paro Leisure & Departure",
                description: "Free morning for shopping or optional Chele La Pass visit (weather permitting). Transfer to Paro Airport for departure.",
                highlights: ["Shopping", "Optional Chele La Pass", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    }
];

// International Tours Page - Premium Featured Experiences
export const featuredExperiences = [
    {
        id: 207,
        title: "Dubai Desert Safari",
        description: "Experience luxury and adventure in the golden dunes",
        image: getTourImages('international', 207).image,
        buttonText: "View Package",
    },
    {
        id: 208,
        title: "Bali Island Retreat",
        description: "Crystal clear waters and pristine white sand beaches",
        image: getTourImages('international', 208).image,
        buttonText: "View Package",
    },
    {
        id: 203,
        title: "Singapore & Malaysia",
        description: "Explore iconic landmarks and rich cultural heritage",
        image: getTourImages('international', 203).image,
        buttonText: "View Package",
    },
];

// International Tours Page - Hero Section Content
export const heroContent = {
    title: "INTERNATIONAL TOURS",
    subtitle: "Discover the World",
    description:
        "Embark on extraordinary journeys across the globe with our carefully curated international tour packages. From tropical paradises to historic European cities, experience the world's finest destinations with comfort and style.",
};

// International Tours Page - Section Headings
export const sectionHeadings = {
    exploreTours: {
        title: "Explore International",
        highlightWord: "International",
        description:
            "Discover breathtaking destinations across the world. From exotic beaches to historic cities, we offer premium international tour packages tailored to create unforgettable memories.",
    },
    premiumExperiences: {
        badge: "GLOBAL ADVENTURES",
        title: "Premium International Experiences",
        description: "Curated luxury tours to the world's most sought-after destinations",
    },
};

// Tour Inclusions & Exclusions (International)
export const inclusions = internationalInclusions;
export const exclusions = internationalExclusions;