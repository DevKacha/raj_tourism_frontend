// India Page - Hero Images
import { domesticInclusions, domesticExclusions } from './tourInclusions';
import { getTourImages } from '../utils/imageHelper';

export const heroImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    "https://images.unsplash.com/photo-1532664189809-02133fee698d?w=1200&q=80",
];

// India Page - Tour Packages
export const tours = [
    {
        id: 100,
        title: "Goa Beach & Heritage",
        duration: "5D/4N",
        ...getTourImages('india', 100),
        location: "Goa, India",
        price: "On Request",
        rating: "4.8",
        reviews: "215",
        itinerary: [
            {
                day: 1,
                title: "Arrival & North Goa Beaches",
                description: "Arrive in Goa and check in at your hotel. Start at Candolim Beach for a relaxed morning. Visit Fort Aguada for panoramic sea views. Explore Calangute, Baga, and Anjuna Beaches. Attend Anjuna Flea Market (Wednesday) or enjoy the vibrant beach nightlife. Dinner at Thalassa for Greek food and live performances.",
                highlights: ["Candolim Beach", "Fort Aguada", "Anjuna Beach"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "North Goa Exploration & Adventure",
                description: "Morning dolphin spotting trip (optional). Visit Reis Magos Fort overlooking the Mandovi River. Enjoy water sports like parasailing, jet skiing at Calangute/Baga. Afternoon coffee/snacks at Artjuna Café. Sunset at Vagator Beach. Nightlife experience at Club Tito’s or Café Mambo.",
                highlights: ["Dolphin Spotting", "Water Sports", "Vagator Sunset"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "South Goa Heritage & Beaches",
                description: "After breakfast, visit Shri Shantadurga and Shri Manguesh Temples. Explore Old Goa heritage sites: Basilica of Bom Jesus and Se Cathedral. Drive to Colva Beach for some beach time. Visit Cabo de Rama Fort for a peaceful sunset. Dinner at Martin’s Corner in Betalbatim, famous for Goan seafood.",
                highlights: ["Old Goa Churches", "Colva Beach", "Cabo de Rama Fort"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "South Goa Nature & Leisure",
                description: "Morning visit to Palolem or Agonda Beach. Take a boat ride to Butterfly Beach to spot dolphins. Spice Plantation tour with traditional Goan meal on banana leaves. Relax at the serene Palolem beach or nearby lagoons. Evening sunset cruise on Mandovi River with folk music. Enjoy a quiet dinner at a beach shack or your hotel.",
                highlights: ["Palolem Beach", "Spice Plantation", "Sunset Cruise"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 5,
                title: "Departure",
                description: "Morning at leisure for shopping or beach walk. Check-out and transfer to the airport or railway station.",
                highlights: ["Leisure", "Shopping", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 101,
        title: "Royal Rajasthan",
        duration: "7D/6N",
        ...getTourImages('india', 101),
        location: "Jaipur, Pushkar, Jodhpur, Udaipur",
        price: "On Request",
        rating: "4.9",
        reviews: "187",
        itinerary: [
            {
                day: 1,
                title: "Jaipur Arrival",
                description: "Arrive in Jaipur. Visit Hawa Mahal, City Palace, Jantar Mantar, and local bazaars.",
                highlights: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Jaipur Sightseeing",
                description: "Explore Amber Fort with elephant or jeep ride. Visit Jaigarh Fort, Nahargarh Fort, and Birla Mandir. Enjoy traditional Rajasthani cuisine in the evening.",
                highlights: ["Amber Fort", "Nahargarh Fort", "Birla Mandir"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Pushkar",
                description: "Drive to Pushkar. Visit Pushkar Lake and Brahma Temple. Explore markets and soak in the spiritual atmosphere.",
                highlights: ["Pushkar Lake", "Brahma Temple", "Local Markets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Jodhpur",
                description: "Drive to Jodhpur. Visit Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace. Explore Clock Tower and Sardar Market.",
                highlights: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Clock Tower"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Udaipur",
                description: "Drive to Udaipur. Visit City Palace, Jagdish Temple, Saheliyon ki Bari. Boat ride on Lake Pichola and cultural show at Bagore Ki Haveli.",
                highlights: ["City Palace", "Lake Pichola Boat Ride", "Bagore Ki Haveli"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Udaipur Sightseeing",
                description: "Visit Monsoon Palace, Fateh Sagar Lake. Relax and explore local markets.",
                highlights: ["Monsoon Palace", "Fateh Sagar Lake", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Departure from Udaipur",
                description: "Departure from Udaipur.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 102,
        title: "Rajasthan Heritage with Chittorgarh",
        duration: "7D/6N",
        ...getTourImages('india', 102),
        location: "Jaipur, Pushkar, Jodhpur, Chittorgarh, Udaipur",
        price: "On Request",
        rating: "4.9",
        reviews: "156",
        itinerary: [
            {
                day: 1,
                title: "Jaipur Arrival",
                description: "Arrive in Jaipur. Visit Hawa Mahal, City Palace, Jantar Mantar, and local bazaars.",
                highlights: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Jaipur Sightseeing",
                description: "Explore Amber Fort with elephant or jeep ride. Visit Jaigarh Fort, Nahargarh Fort, and Birla Mandir. Enjoy traditional Rajasthani cuisine in the evening.",
                highlights: ["Amber Fort", "Nahargarh Fort", "Birla Mandir"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Pushkar",
                description: "Drive to Pushkar. Visit Pushkar Lake and Brahma Temple. Explore local markets and enjoy the spiritual atmosphere.",
                highlights: ["Pushkar Lake", "Brahma Temple", "Local Markets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Jodhpur",
                description: "Drive to Jodhpur. Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Explore Clock Tower and Sardar Market.",
                highlights: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Clock Tower"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Chittorgarh",
                description: "Drive to Chittorgarh. Visit Chittorgarh Fort, the largest fort in India, including Rana Kumbha Palace, Tower of Victory, and other historic sites. Overnight stay in Chittorgarh or proceed to Udaipur in the evening.",
                highlights: ["Chittorgarh Fort", "Tower of Victory", "Rana Kumbha Palace"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Udaipur",
                description: "Visit City Palace, Jagdish Temple, Saheliyon ki Bari. Take a boat ride on Lake Pichola and attend a cultural show at Bagore Ki Haveli.",
                highlights: ["City Palace", "Lake Pichola Boat Ride", "Bagore Ki Haveli"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Udaipur Sightseeing & Departure",
                description: "Visit Monsoon Palace, Fateh Sagar Lake. Leisure time before departure.",
                highlights: ["Monsoon Palace", "Fateh Sagar Lake", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 103,
        title: "Delhi to Auli Adventure",
        duration: "8D/7N",
        ...getTourImages('india', 103),
        location: "Delhi, Agra, Haridwar, Rishikesh, Auli",
        price: "On Request",
        rating: "4.8",
        reviews: "145",
        itinerary: [
            {
                day: 1,
                title: "Delhi Sightseeing",
                description: "Visit key attractions: Red Fort, India Gate, Qutub Minar, Humayun’s Tomb. Explore Connaught Place for shopping and dining. Overnight stay in Delhi.",
                highlights: ["Red Fort", "India Gate", "Qutub Minar"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Delhi to Agra",
                description: "Travel early morning to Agra. Visit Taj Mahal, Agra Fort, and Mehtab Bagh for sunset views. Overnight stay in Agra.",
                highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Agra to Haridwar",
                description: "Early departure to Haridwar. Evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
                highlights: ["Har Ki Pauri", "Ganga Aarti", "Spiritual"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Haridwar Sightseeing",
                description: "Visit Mansa Devi Temple, Chandi Devi Temple, Daksha Mahadev Temple. Explore Shantikunj and Bharat Mata Mandir. Overnight stay in Haridwar.",
                highlights: ["Mansa Devi Temple", "Chandi Devi Temple", "Temples"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Haridwar to Rishikesh",
                description: "Short drive to Rishikesh. Visit Lakshman Jhula, Ram Jhula, Swargashram, evening Ganga Aarti at Triveni Ghat. Overnight stay in Rishikesh.",
                highlights: ["Lakshman Jhula", "Ram Jhula", "Triveni Ghat"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Rishikesh to Auli",
                description: "Early morning drive to Auli via Joshimath. Evening leisure in Auli. Overnight stay in Auli.",
                highlights: ["Scenic Drive", "Joshimath", "Auli Arrival"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Auli Sightseeing",
                description: "Cable car ride, optional skiing or trekking, enjoy views of Nanda Devi and Trishul peaks. Overnight stay in Auli.",
                highlights: ["Cable Car", "Skiing/Trekking", "Mountain Views"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Auli to Delhi",
                description: "Early morning drive back to Delhi. End of trip.",
                highlights: ["Return Drive", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 104,
        title: "Delhi - Rishikesh",
        duration: "7D/6N",
        ...getTourImages('india', 104),
        location: "Delhi, Agra, Vrindavan, Mathura, Haridwar, Rishikesh",
        price: "On Request",
        rating: "4.9",
        reviews: "167",
        itinerary: [
            {
                day: 1,
                title: "Delhi Sightseeing",
                description: "Arrive in Delhi. Visit Qutub Minar, Humayun’s Tomb, India Gate, Lotus Temple. Explore Red Fort, Jama Masjid, and Chandni Chowk. Overnight stay in Delhi.",
                highlights: ["Qutub Minar", "Lotus Temple", "Chandni Chowk"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Delhi to Agra",
                description: "Early morning drive to Agra. Visit Taj Mahal at sunrise. Explore Agra Fort and Fatehpur Sikri. Evening free for local markets. Overnight stay in Agra.",
                highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Agra to Vrindavan via Gokul",
                description: "Drive to Vrindavan via Gokul. Visit sacred sites in Gokul. Explore Govind Dev Temple, ISKCON Temple, Banke Bihari Temple in Vrindavan. Overnight stay in Vrindavan.",
                highlights: ["Gokul", "Banke Bihari Temple", "ISKCON Temple"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Mathura & Vrindavan",
                description: "Visit Krishna Janmabhoomi, Dwarkadhish Temple in Mathura. Explore Prem Mandir and Rangnathji Temple in Vrindavan. Attend evening Yamuna Aarti. Overnight stay in Vrindavan.",
                highlights: ["Krishna Janmabhoomi", "Prem Mandir", "Yamuna Aarti"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Vrindavan to Haridwar",
                description: "Drive to Haridwar. Evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.",
                highlights: ["Drive to Haridwar", "Ganga Aarti", "Spiritual"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Haridwar & Rishikesh",
                description: "Morning visit to Mansa Devi Temple, Chandi Devi Temple. Afternoon visit to Rishikesh: Laxman Jhula, Ram Jhula, Neelkanth Mahadev Temple. Evening Ganga Aarti at Triveni Ghat. Overnight in Haridwar.",
                highlights: ["Mansa Devi Temple", "Laxman Jhula", "Triveni Ghat"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Haridwar to Delhi",
                description: "Morning drive back to Delhi for onward journey. Tour concludes.",
                highlights: ["Return Drive", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 105,
        title: "Shimla Manali Escape",
        duration: "8D/7N",
        ...getTourImages('india', 105),
        location: "Shimla, Kullu, Manali",
        price: "On Request",
        rating: "4.8",
        reviews: "234",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Shimla",
                description: "Travel from Delhi to Shimla. Check-in at hotel. Evening stroll at The Mall Road and Ridge. Dinner and overnight stay in Shimla.",
                highlights: ["Mall Road", "The Ridge", "Shimla Arrival"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Shimla Sightseeing",
                description: "Visit Jakhu Temple, Christ Church, Indian Institute of Advanced Study. Explore Kalibari Temple and Shimla State Museum. Afternoon excursion to Kufri. Dinner and overnight stay in Shimla.",
                highlights: ["Jakhu Temple", "Christ Church", "Kufri"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Shimla to Kullu",
                description: "Depart for Kullu. En route stop at Manikaran Sahib to visit hot springs. Arrival in Kullu, explore local markets. Overnight stay in Kullu.",
                highlights: ["Manikaran Sahib", "Hot Springs", "Kullu Arrival"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Kullu Valley",
                description: "Visit Bijli Mahadev Temple, scenic spots around Kullu. Experience river rafting on the Beas River (seasonal). Explore Kullu Shawl Factory. Return to Kullu/Manali. Dinner and overnight stay.",
                highlights: ["Bijli Mahadev", "River Rafting", "Shawl Factory"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Kullu to Manali",
                description: "Drive to Manali. Visit Hadimba Devi Temple, Manu Temple, and Vashisht hot springs. Explore Mall Road and Tibetan Monastery. Dinner and overnight stay in Manali.",
                highlights: ["Hadimba Temple", "Vashisht Hot Springs", "Mall Road"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Solang Valley & Rohtang Pass",
                description: "Early morning visit to Solang Valley for adventure sports. Visit Rohtang Pass (subject to permit). Return to Manali. Optional visit to Naggar Castle. Dinner and overnight stay.",
                highlights: ["Solang Valley", "Rohtang Pass", "Adventure Sports"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Leisure Day",
                description: "Options include trekking, river rafting, club house, or exploring local markets. Relax and enjoy the beautiful surroundings. Dinner and overnight stay.",
                highlights: ["Leisure", "Trekking", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Departure",
                description: "Check out after breakfast. Return journey to Delhi or onwards.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 106,
        title: "Darjeeling & Gangtok",
        duration: "9D/8N",
        ...getTourImages('india', 106),
        location: "Darjeeling, Gangtok, Lachung, Pelling",
        price: "On Request",
        rating: "4.8",
        reviews: "156",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Darjeeling",
                description: "Arrival at NJP/Bagdogra. Transfer to Darjeeling. Check-in at hotel. Evening free for leisure or local shopping.",
                highlights: ["Arrival", "Leisure", "Shopping"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Darjeeling Sightseeing",
                description: "Early morning Tiger Hill sunrise. Visit Ghoom Monastery, Batasia Loop, Toy Train, Zoo, and HMI. Evening free for leisure.",
                highlights: ["Tiger Hill Sunrise", "Toy Train", "Ghoom Monastery"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Darjeeling to Gangtok",
                description: "Transfer to Gangtok. En route visit Tashi Viewpoint. Check-in at hotel. Evening free for leisure or MG Road shopping.",
                highlights: ["Transfer to Gangtok", "Tashi Viewpoint", "MG Road"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Gangtok to Lachung",
                description: "Drive to Lachung. Stop at Singik View Point and Seven Sisters Waterfall. Check-in at Lachung hotel. Evening free to explore Lachung village.",
                highlights: ["Lachung", "Seven Sisters Waterfall", "Village Walk"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 5,
                title: "Lachung Excursion",
                description: "Visit Yumthang Valley (Valley of Flowers) and hot springs. Explore local orchards and trekking options. Return to Lachung.",
                highlights: ["Yumthang Valley", "Hot Springs", "Valley of Flowers"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 6,
                title: "Lachung to Pelling",
                description: "Drive to Pelling via Gangtok. En route visit attractions. Arrive in Pelling and check-in at hotel.",
                highlights: ["Drive to Pelling", "Scenic Views"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Pelling Sightseeing",
                description: "Visit Pemayangtse Monastery, Khecheopalri Lake, Shingshore Bridge. Explore Kanchenjunga Waterfalls. Relax and enjoy views.",
                highlights: ["Pemayangtse Monastery", "Khecheopalri Lake", "Kanchenjunga Falls"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Pelling to Darjeeling",
                description: "Drive back to Darjeeling. Check-in at hotel. Evening free for leisure.",
                highlights: ["Return to Darjeeling", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Departure",
                description: "Transfer to NJP or Bagdogra for onward journey.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 107,
        title: "Seven Sisters Expedition",
        duration: "14D/13N",
        ...getTourImages('india', 107),
        location: "Assam, Meghalaya, Mizoram, Manipur, Nagaland, Arunachal Pradesh",
        price: "On Request",
        rating: "5.0",
        reviews: "112",
        itinerary: [
            {
                day: 1,
                title: "Arrive Guwahati (Assam)",
                description: "Visit Kamakhya Temple. Brahmaputra River cruise in the evening. Overnight in Guwahati.",
                highlights: ["Kamakhya Temple", "River Cruise", "Guwahati"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Kaziranga National Park",
                description: "Drive to Kaziranga. Evening jeep safari in the park. Overnight in Kaziranga.",
                highlights: ["Kaziranga", "Jeep Safari", "Wildlife"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Kaziranga & Majuli Island",
                description: "Morning elephant safari in Kaziranga. Drive to Jorhat, then ferry to Majuli Island. Visit local satras and cultural sites. Overnight in Majuli.",
                highlights: ["Elephant Safari", "Majuli Island", "Satras"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Majuli Island Exploration",
                description: "Explore various satras such as Kamala Bari and Auniati. Cultural experiences and bird watching. Return to Jorhat and overnight.",
                highlights: ["Cultural Tour", "Bird Watching", "Jorhat"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Shillong (Meghalaya)",
                description: "Fly or drive to Shillong. Visit Elephant Falls and Shillong Peak. Overnight in Shillong.",
                highlights: ["Shillong", "Elephant Falls", "Shillong Peak"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Cherrapunjee Day Trip",
                description: "Visit Nohkalikai Falls, Mawsmai Cave, and Seven Sisters Falls. Visit Mawlynnong Village (living root bridge). Dawki river boating. Return to Shillong.",
                highlights: ["Cherrapunjee", "Living Root Bridge", "Dawki River"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Aizawl (Mizoram)",
                description: "Fly to Aizawl. City sightseeing: Mizoram State Museum, Bara Bazaar. Overnight in Aizawl.",
                highlights: ["Aizawl", "State Museum", "Bara Bazaar"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Mizoram Sightseeing",
                description: "Visit Vantawng Falls. Explore nearby tribal villages. Overnight in Aizawl.",
                highlights: ["Vantawng Falls", "Tribal Villages", "Nature"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Imphal (Manipur)",
                description: "Fly to Imphal. Visit Shri Govindajee Temple, Kangla Fort, and Ima Market. Overnight in Imphal.",
                highlights: ["Imphal", "Kangla Fort", "Ima Market"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 10,
                title: "Loktak Lake",
                description: "Boat trip on Loktak Lake. Explore Keibul Lamjao National Park (floating national park). Visit INA Museum and Japanese War Cemetery. Overnight in Imphal.",
                highlights: ["Loktak Lake", "Floating Park", "INA Museum"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 11,
                title: "Dimapur & Kohima (Nagaland)",
                description: "Fly to Dimapur. Drive to Kohima. Visit Kohima War Memorial and local Angami villages. Overnight in Kohima.",
                highlights: ["Kohima", "War Memorial", "Angami Villages"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 12,
                title: "Tawang (Arunachal Pradesh)",
                description: "Drive to Tawang via Bomdila. Stop at Sela Pass and Sela Lake. Visit Jaswant Garh War Memorial. Overnight in Tawang.",
                highlights: ["Tawang", "Sela Pass", "War Memorial"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 13,
                title: "Tawang Sightseeing",
                description: "Visit Tawang Monastery, Urgelling Monastery, and local markets. Explore local culture and museums. Overnight in Tawang.",
                highlights: ["Tawang Monastery", "Local Culture", "Museums"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 14,
                title: "Return to Guwahati",
                description: "Drive back to Guwahati. Departure.",
                highlights: ["Return Drive", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 108,
        title: "Kashmir - The Heaven on Earth",
        duration: "6D/5N",
        ...getTourImages('india', 108),
        location: "Srinagar, Sonmarg, Gulmarg, Pahalgam",
        price: "On Request",
        rating: "4.9",
        reviews: "289",
        itinerary: [
            {
                day: 1,
                title: "Srinagar Arrival",
                description: "Arrive in Srinagar. Explore the Mughal Gardens: Shalimar Bagh, Nishat Bagh. Enjoy a Shikara ride on Dal Lake, visit floating markets. Overnight stay in Srinagar (Houseboat).",
                highlights: ["Mughal Gardens", "Shikara Ride", "Houseboat Stay"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Srinagar to Sonmarg",
                description: "Drive to Sonmarg. Visit Thajiwas Glacier (pony ride or trek). Explore Baltal Valley, enjoy river rafting (seasonal). Return to Srinagar.",
                highlights: ["Sonmarg", "Thajiwas Glacier", "River Rafting"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Srinagar to Gulmarg",
                description: "Drive to Gulmarg. Ride the Gulmarg Gondola, highest cable car in Asia. Enjoy snow sports like skiing, snowboarding. Visit Maharani Temple and St. Mary’s Church. Stay overnight in Gulmarg.",
                highlights: ["Gulmarg Gondola", "Skiing", "Snow Sports"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Gulmarg to Pahalgam",
                description: "Drive to Pahalgam. Visit Aru Valley, Betaab Valley, and Chandanwari. Try river rafting on the Lidder River. Overnight stay in Pahalgam.",
                highlights: ["Aru Valley", "Betaab Valley", "Lidder River"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Pahalgam to Srinagar",
                description: "Drive to Doodhpathri, a hidden scenic meadow spot. Explore the lush meadows. Return to Srinagar in the evening.",
                highlights: ["Doodhpathri", "Meadows", "Return Drive"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Departure",
                description: "Departure from Srinagar.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 109,
        title: "Mahabaleshwar & Lonavala",
        duration: "4D/3N",
        ...getTourImages('india', 109),
        location: "Mahabaleshwar, Lonavala",
        price: "On Request",
        rating: "4.7",
        reviews: "112",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Mahabaleshwar",
                description: "Arrive at Mahabaleshwar. Visit Arthur’s Seat, Elphinstone Point, Panchganga Temple. Explore Kate’s Point and take a boat ride or relax at Venna Lake. Evening stroll and local market visit.",
                highlights: ["Arthur’s Seat", "Venna Lake", "Local Market"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Mahabaleshwar Exploration",
                description: "Visit Wilson Point for sunrise views. See Elephant’s Head Point, Lingmala Waterfalls. Explore Pratapgad Fort and Bhavani Mata Temple. Stop at Mapro Garden for strawberries.",
                highlights: ["Wilson Point", "Pratapgad Fort", "Mapro Garden"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Travel to Lonavala",
                description: "Drive to Lonavala. Visit Tiger’s Leap, Bhushi Dam, Lion’s Point. Explore Karla Caves and Bhaja Caves. Visit the Celebrity Wax Museum. Overnight stay in Lonavala.",
                highlights: ["Tiger’s Leap", "Bhushi Dam", "Karla Caves"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Lonavala Adventure & Departure",
                description: "Visit Lohagad Fort for trekking. Spend time at Pawna Lake. Explore local markets for chikkis. Return to Mumbai or onward destination.",
                highlights: ["Lohagad Fort", "Pawna Lake", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 110,
        title: "Kerala - God's Own Country",
        duration: "7D/6N",
        ...getTourImages('india', 110),
        location: "Kochi, Munnar, Thekkady, Alleppey, Kovalam",
        price: "On Request",
        rating: "4.9",
        reviews: "256",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kochi",
                description: "Explore Fort Kochi with its colonial history. Visit Chinese Fishing Nets, St. Francis Church, and Dutch Palace. Evening option for Kathakali dance performance. Overnight stay in Kochi.",
                highlights: ["Fort Kochi", "Chinese Fishing Nets", "Kathakali"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Kochi to Munnar",
                description: "Drive to Munnar. Visit waterfalls en route. Evening free for leisure or shopping in Munnar. Overnight stay at Munnar.",
                highlights: ["Drive to Munnar", "Waterfalls", "Leisure"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Munnar Sightseeing",
                description: "Visit Mattupetty Dam, Kundale Lake, and Echo Point. Afternoon visit to Rajamalai (Eravikulam) National Park. Explore tea and spice plantations.",
                highlights: ["Mattupetty Dam", "Eravikulam National Park", "Tea Plantations"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Munnar to Thekkady",
                description: "Drive to Thekkady. Evening guided spice plantation tour. Optional traditional Kerala dance show. Overnight stay in Thekkady.",
                highlights: ["Thekkady", "Spice Plantation", "Cultural Show"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Periyar Safari & Alleppey",
                description: "Morning boat safari on Periyar Lake. Drive to Alleppey. Board houseboat for overnight cruise on Kerala backwaters. Enjoy scenic views and traditional Kerala meals.",
                highlights: ["Periyar Boat Safari", "Alleppey Houseboat", "Backwaters"],
                meals: ["Breakfast", "Lunch", "Dinner"]
            },
            {
                day: 6,
                title: "Alleppey to Kovalam",
                description: "Disembark houseboat. Drive to Kovalam. Relax on beaches or explore nearby lighthouse. Overnight stay in Kovalam.",
                highlights: ["Kovalam Beach", "Lighthouse", "Relaxation"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Kovalam & Departure",
                description: "Visit Padmanabhaswamy Temple and local sightseeing in Trivandrum if time permits. Departure from Trivandrum airport.",
                highlights: ["Padmanabhaswamy Temple", "Departure"],
                meals: ["Breakfast"]
            }
        ]
    }
];

// India Page - Premium Featured Experiences
export const featuredExperiences = [
    {
        id: 104,
        title: "Taj Mahal Wonder",
        description: "Experience the eternal symbol of love at sunrise",
        image: getTourImages('india', 104).image,
        buttonText: "View Package",
    },
    {
        id: 101,
        title: "Royal Rajasthan",
        description: "Explore majestic forts and vibrant culture",
        image: getTourImages('india', 101).image,
        buttonText: "View Package",
    },
    {
        id: 110,
        title: "Kerala Backwaters",
        description: "Serene houseboats and lush green landscapes",
        image: getTourImages('india', 110).image,
        buttonText: "View Package",
    },
];

// India Page - Hero Section Content
export const heroContent = {
    title: "INCREDIBLE INDIA",
    subtitle: "Discover the Soul of India",
    description:
        "Embark on an extraordinary journey through India's diverse landscapes, rich heritage, and vibrant culture with our carefully curated tour packages designed for unforgettable experiences.",
};

// India Page - Section Headings
export const sectionHeadings = {
    exploreTours: {
        title: "Explore India",
        highlightWord: "India",
        description:
            "From the snow-capped Himalayas to tropical beaches, from ancient temples to modern marvels - discover the incredible diversity of India with our expertly crafted tour packages",
    },
    premiumExperiences: {
        badge: "ICONIC DESTINATIONS",
        title: "Premium India Experiences",
        description: "Curated luxury tours across India's most celebrated destinations",
    },
};

// Tour Inclusions & Exclusions (Domestic)
export const inclusions = domesticInclusions;
export const exclusions = domesticExclusions;
