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
                description: "Arrive in Goa and check in at your hotel, (transport by private car/coach)",
                highlights: ["Hotel Relax"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "North Goa Exploration & Adventure",
                description: "After Breakfast, Start at Candolim Beach then Visit Fort Aguada for panoramic sea views. Explore Calangute, Baga, and Anjuna Beaches. (transport by private car/coach)",
                highlights: ["Candolim Beach", "Fort Aguada", "Anjuna Beach"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "South Goa Heritage & Beaches",
                description: "After breakfast, visit Shri Shantadurga and Shri Manguesh Temples. Explore Old Goa heritage sites: Basilica of Bom Jesus and Se Cathedral. Visit Cabo de Rama Fort for a peaceful sunset.",
                highlights: ["Old Goa Churches", "Colva Beach", "Cabo de Rama Fort"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Shoping & Leisure",
                description: "- Explore local shopping markets and enjoy some time to yourself. (can enjoy rental bikes/cars (on self-expense) )",
                highlights: ["Shopping"],
                meals: ["Breakfast",  "Dinner"]
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
        duration: "5D/4N",
        ...getTourImages('india', 101),
        location: "Jodhpur,Jaisalmer, Pushkar",
        price: "On Request",
        rating: "4.9",
        reviews: "187",
        itinerary: [

            {
                day: 1,
                title: "Jodhpur",
                description: "Arrive at Jodhpur. Visit Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace. Explore Clock Tower and Sardar Market.",
                highlights: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Clock Tower"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Jaisalmer",
                description: "After Breakfast head towards Jaisalmer, relax at Tent City, Spend your afternoon on an adventurous jeep safari & camel ride across the desert, followed by vibrant cultural activities at night under the starlit sky after the dinner.",
                highlights: ["Jaisalmer","Tent-city","Desert Safari"],
                meals: ["Dinner"]
            },
            {
                day: 3,
                title: "Jaisalmer",
                description: "After breakfast, drive towards the historic Longewala border (Indo/Pak), continue to Tanot Mata Temple, explore the Pakistan Canal from 1971, and conclude the day with dinner.",
                highlights: ["Longewala Border","Tanot Mata Temple"],
                meals: ["Dinner"]
            },
            {
                day: 4,
                title: "Pushkar",
                description: "After Breakfast Drive to Pushkar & see Ramdevra Temple enroute. Visit Pushkar Lake and Brahma Temple. Explore markets and soak in the spiritual atmosphere.",
                highlights: ["Ramdevra Temple","Pushkar Lake", "Brahma Temple", "Local Markets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure from Pushkar",
                description: "Departure from Pushkar.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 102,
        title: "Rajasthan Heritage with Nath Dwara",
        duration: "5D/4N",
        ...getTourImages('india', 102),
        location: "NathDwara, Udaipur, Kumbhalgarh, Chittorgarh",
        price: "On Request",
        rating: "4.9",
        reviews: "156",
        itinerary: [
            {
                day: 1,
                title: "NathDwara",
                description: "Arrive in Nathdwara in the morning and attend the Mangla Arti at Shree Nath Ji Temple. After breakfast, proceed to visit Govardhan Hill, Eklingji Mahadev Temple, and the historic Haldi Ghati. Conclude the day with a night stay at Shree Nath Ji.",
                highlights: ["Shree Nath ji Temple", "Govardhan Hill", "Eklingji Mahadev Temple", "Haldi Ghati"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 2,
                title: "Udaipur",
                description: "After Breakfast move to Udaipur & check in at hotel then, Visit City Palace, Jagdish Temple, Saheliyon ki Bari. Take a boat ride on Lake Pichola and Fateh Sagar Lake, then attend a cultural show at Bagore Ki Haveli.",
                highlights: ["City Palace", "Lake Pichola Boat Ride","Fateh Sagar Lake", "Bagore Ki Haveli"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Kumbhalgarh",
                description: "After breakfast, proceed to Kumbhalgarh and check in at your hotel. Visit the majestic Kumbhalgarh Fort along with nearby local sites, followed by leisure time.",
                highlights: ["Kumbhalgarh Fort", "Local sightseen"],
                meals: ["Breakfast","Dinner"]
            },
            {
                day: 4,
                title: "Chittorgarh",
                description: "Drive to Chittorgarh and check in at your hotel. Visit Chittorgarh Fort, the largest fort in India, including Rana Kumbha Palace, Tower of Victory, and other historic sites. Overnight stay in Chittorgarh .",
                highlights: ["Chittorgarh Fort", "Tower of Victory", "Rana Kumbha Palace"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure from Chittorgarh",
                description: "Departure from Chittorgarh to Udaipur.",
                highlights: ["Departure"],
                meals: ["Breakfast"]
            }
            
        ]
    },
    {
        id: 103,
        title: "Delhi to Auli Adventure",
        duration: "9D/8N",
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
                title: "Auli to Rishikesh",
                description: "Early morning drive back to Rishikesh. enjoy leisure time at Rishikesh",
                highlights: ["Return Drive", "Rishikesh"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Rishikesh to Delhi",
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
        duration: "10D/9N",
        ...getTourImages('india', 105),
        location: "Shimla, Manali, Delhousie, Amritsar",
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
                description: "After Breakfast ,Visit Jakhu Temple, Christ Church, Indian Institute of Advanced Study. Explore Kalibari Temple and Shimla State Museum. Afternoon excursion to Kufri. Dinner and overnight stay in Shimla.",
                highlights: ["Jakhu Temple", "Christ Church", "Kufri"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Shimla to Manali",
                description: "After Breakfast, Depart for Manali. En route enjoy scenic views and Enjoy Dinner at Manali Hotel & overnight stay at manali",
                highlights: ["Scenic beauty"],
                meals: ["Breakfast", "Dinner"]
            },
        
            {
                day: 5,
                title: "Manali Local sight seen + Kullu Local Sight seen",
                description: "After Breakfast, Visit Hadimba Devi Temple, Manu Temple, and Vashisht hot springs. Explore Mall Road and Tibetan Monastery. Dinner and overnight stay in Manali.",
                highlights: ["Hadimba Temple", "Vashisht Hot Springs", "Mall Road"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Solang Valley & Rohtang Pass",
                description: "Early morning visit to Solang Valley for adventure sports. Visit Rohtang Pass (subject to permit). Return to Manali. Dinner and overnight stay.",
                highlights: ["Solang Valley", "Rohtang Pass", "Adventure Sports"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Manali to Delhousie",
                description: "After Breakfast at manali go to Dalhouise enroute visit Local Sight seen & then, Dinner and overnight stay at Delhouise.",
                highlights: ["Local Sight seen", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Delhousie to Khajiyar",
                description: "After Breakfast at Delhousie, go to Khajiyar (Mini Switserland) & then again move back to delhousie, Dinner and overnight stay at Delhouise.",
                highlights: ["Local Sight seen", "Shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Delhousie to Amritsar",
                description: "After breakfast in Dalhousie, transfer to Amritsar. In the afternoon, visit the Wagah Border to witness the Bharat–Pakistan parade. Later, enjoy dinner at your hotel before heading to the Golden Temple for a serene evening visit. Conclude the day with a trip to Jallianwala Bagh.",
                highlights: ["Wagah Border", "Golden Temple", "Jallianwala Bagh"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 10,
                title: "Departure",
                description: "Check out after breakfast. then Departure.",
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
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Lachung Sight seen",
                description: "Visit Yumthang Valley (Valley of Flowers) and hot springs. Explore local orchards and trekking options. Return to Lachung.",
                highlights: ["Yumthang Valley", "Hot Springs", "Valley of Flowers"],
                meals: ["Breakfast", "Dinner"]
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
                description: "Arrive in Srinagar. Explore the Mughal Gardens: Shalimar Bagh, Nishat Bagh. Enjoy a Shikara ride on Dal Lake, visit floating markets. Overnight stay in Srinagar (4 star hotel).",
                highlights: ["Mughal Gardens", "Shikara Ride"],
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
                description: "Drive to Gulmarg. Ride the Gulmarg Gondola, highest cable car in Asia. Enjoy snow sports like skiing, snowboarding. Visit Maharani Temple and St. Mary’s Church. again come back to Srinagar and enjoy Houseboat Night Stay at Dal Lake.",
                highlights: ["Gulmarg Gondola", "Skiing", "Snow Sports", "House boat Stay"],
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
        title: "Mahabaleshwar & Lonavala with Imagica",
        duration: "6D/5N",
        ...getTourImages('india', 109),
        location: "Mahabaleshwar, Lonavala",
        price: "On Request",
        rating: "4.7",
        reviews: "112",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Mahabaleshwar",
                description: "Arrive at Mahabaleshwar. and check in at the Hotel & enjoy leisure",
                highlights: ["Arrival", "Hotel Stay"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Mahabaleshwar Exploration",
                description: "Visit Arthurs Seat, Elphinstone Point, Panchganga Temple. Explore Kates Point and take a boat ride or relax at Venna Lake. Evening stroll and local market visit. then night stay at Mahabaleshwar",
                highlights: ["Arthurs Seat", "Elphinstone Point", "Panchganga Temple", "Kates Point","Venna Lake"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Mahabaleshwar Sighseen",
                description: "After Breakfast , Visit Wilson Point for sunrise views. See Elephants Head Point, Lingmala Waterfalls. Explore Pratapgad Fort and Bhavani Mata Temple. Stop at Mapro Garden for strawberries, again night-stay at Mahabaleshwar",
                highlights: ["Wilson Point", "Lingmala Waterfalls", "Pratapgad Fort", "Bhavani Mata Temple","Mapro Garden"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Travel to Lonavala",
                description: "Drive to Lonavala. Visit Tigers Leap, Bhushi Dam, Lions Point. Explore Karla Caves and Bhaja Caves. Visit the Celebrity Wax Museum. Overnight stay in Lonavala.",
                highlights: ["Tigers Leap", "Bhushi Dam", "Karla Caves"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Lonavala Adventure & Departure",
                description: "Visit Lohagad Fort for trekking. Spend time at Pawna Lake. Explore local markets for chikkis. Return to Mumbai or onward destination.",
                highlights: ["Lohagad Fort", "Pawna Lake"],
                meals: ["Breakfast","Dinner"]
            },
            {
                day: 6,
                title: "Imagica park & then Drop to Pune/Mumbai",
                description: "After Breakfast go to Imagica Park, then after enjoying the day departure to pune/mumbai",
                highlights: ["Imagica", "Departure"],
                meals: ["Breakfast",]
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
                meals: ["Breakfast",  "Dinner"]
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
    },
    {
        id: 111,
        title: "Char Dham Yatra",
        duration: "12D/11N",
        ...getTourImages('india', 111),
        location: "Haridwar, Barkot, Yamunotri, Uttarkashi, Gangotri, Kedarnath, Badrinath, Rishikesh",
        price: "On Request",
        rating: "4.9",
        reviews: "210",
        itinerary: [
            {
                day: 1,
                title: "Delhi - Haridwar",
                description: "Arrive at Delhi by 9 AM. After breakfast depart for Haridwar (225 km / 5 hrs). Check-in at hotel and visit Har Ki Pauri for Ganga Aarti in the evening.",
                highlights: ["Har Ki Pauri", "Ganga Aarti"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Haridwar - Barkot",
                description: "After breakfast complete RTO process and depart for Barkot (4000 ft / 160 km / 6 hrs). Check-in at hotel and relax.",
                highlights: ["Scenic Drive to Barkot"],
                meals: ["Breakfast",  "Dinner"]
            },
            {
                day: 3,
                title: "Barkot - Yamunotri - Barkot",
                description: "After breakfast drive to Jankichatti (8600 ft / 45 km / 2 hrs). Trek or hire pony/dolly to Yamunotri (10700 ft). After darshan return to Jankichatti, packed lunch, and drive back to Barkot.",
                highlights: ["Yamunotri Darshan", "Yamuna Temple", "Trek Experience"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Barkot - Uttarkashi",
                description: "Drive to Uttarkashi (3800 ft / 80 km / 3 hrs). Check-in and after lunch visit Kashi Vishwanath Temple.",
                highlights: ["Kashi Vishwanath Temple", "Uttarkashi Town"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Uttarkashi - Gangotri - Uttarkashi",
                description: "After breakfast leave for Gangotri (11200 ft / 140 km / 6 hrs). Darshan of River Ganga. Lunch enroute. Return to Uttarkashi by evening.",
                highlights: ["Gangotri Temple", "Bhagirathi River", "Scenic Mountain Drive"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Uttarkashi - Phata",
                description: "After breakfast depart for Phata (4400 ft / 230 km / 10 hrs). Lunch enroute. Check-in upon arrival.",
                highlights: ["Scenic Himalayan Route"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Phata - Sonprayag - Kedarnath",
                description: "Drive to Sonprayag (30 km / 2 hrs). Begin Kedarnath journey (11800 ft) by walk, pony, dolly, or helicopter (self expense). Check-in at guest house and visit Kedarnath Temple.",
                highlights: ["Kedarnath Temple", "Mountain Trek", "Helicopter Option"],
                meals: ["Breakfast", "Packed Lunch", "Dinner"]
            },
            {
                day: 8,
                title: "Kedarnath - Sonprayag - Phata",
                description: "After breakfast return to Sonprayag and transfer to Phata. Check-in and relax.",
                highlights: ["Return Trek", "Rest at Phata"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Phata - Badrinath",
                description: "Depart for Badrinath (10200 ft / 185 km / 9 hrs). Lunch enroute. Evening visit to Badrinath Temple.",
                highlights: ["Badrinath Temple", "Alaknanda River"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 10,
                title: "Badrinath - Rudraprayag",
                description: "After breakfast depart for Rudraprayag (160 km / 6 hrs). Lunch enroute and check-in at hotel.",
                highlights: ["Confluence Views", "Holy Town of Rudraprayag"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 11,
                title: "Rudraprayag - Rishikesh - Haridwar",
                description: "Drive to Rishikesh (135 km / 4 hrs). Visit major attractions. After lunch proceed to Haridwar (25 km / 1 hr) and check-in.",
                highlights: ["Rishikesh Sightseeing", "Lakshman Jhula", "Ganga Views"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 12,
                title: "Haridwar - Delhi Departure",
                description: "After breakfast depart for Delhi (250 km / 6 hrs). Lunch enroute. Drop at Delhi by 5 PM.",
                highlights: ["Scenic Drive"],
                meals: ["Breakfast", "Lunch"]
            }
        ]
    },
    {
        id: 112,
        title: "Andaman & Nicobar Islands",
        duration: "6D/5N",
        ...getTourImages('india', 112),
        location: "Port Blair, Havelock (Swaraj Dweep), Neil Island",
        price: "On Request",
        rating: "4.8",
        reviews: "128",
        itinerary: [
            {
                day: 1,
                title: "Arrival — Port Blair",
                description: "Arrival at Port Blair. Airport pick-up, hotel check-in and rest. Afternoon visit to Cellular Jail. In the evening attend the Light & Sound Show (subject to availability), then return to hotel.",
                highlights: ["Cellular Jail", "Light & Sound Show (subject to availability)"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Ross Island & North Bay",
                description: "Morning boat excursion to Ross Island (Netaji Subhash Chandra Bose Island) to explore old British ruins and scenic sea views. Continue to North Bay for optional glass-bottom boat ride, snorkelling or other water-sports. Return to Port Blair for overnight.",
                highlights: ["Ross Island ruins", "North Bay snorkelling & glass-bottom boat"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Port Blair - Havelock (Swaraj Dweep)",
                description: "Early breakfast and transfer to jetty for ferry to Havelock (approx. 1.5 hrs depending on ticket). Check-in at Havelock resort and visit Radhanagar Beach (Beach No.7) for swimming and sunset. Overnight at Havelock.",
                highlights: ["Radhanagar Beach (Beach No.7)", "Ferry ride to Havelock"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Havelock — Water Activities",
                description: "Boat trip to Elephant Beach for coral viewing, snorkelling and optional paid water-sports (sea walk, scuba etc.). Return to resort; evening at leisure.",
                highlights: ["Elephant Beach snorkelling", "Coral reef sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Havelock - Neil Island — Sightseeing",
                description: "Transfer by ferry to Neil Island. Explore Bharatpur Beach, Laxmanpur Beach and other island attractions. Leisure time on beaches and local sightseeing.",
                highlights: ["Bharatpur Beach", "Laxmanpur Beach", "Island sightseeing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Neil - Port Blair — Departure",
                description: "Morning ferry from Neil to Port Blair (if staying on Neil). Last-minute shopping or quick local visit (Marina Park) in Port Blair before airport drop as per flight schedule.",
                highlights: ["Local shopping", "Marina Park (optional)"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 114,
        title: "Lakshadweep — Agatti, Kavaratti & Bangaram",
        duration: "5D/4N",
        ...getTourImages('india', 114),
        location: "Agatti, Kavaratti, Bangaram, Kadmat/Thinnakara",
        price: "On Request",
        rating: "4.7",
        reviews: "92",
        itinerary: [
            {
                day: 1,
                title: "Arrival — Agatti - Kavaratti",
                description: "Fly Kochi - Agatti. Speedboat transfer (1–3 hrs) to Kavaratti. Resort check-in and beach relaxation. Afternoon snorkeling at coral reefs and glass-bottom boat ride. Evening dolphin spotting. Overnight Kavaratti.",
                highlights: ["Kavaratti snorkeling", "Glass-bottom boat", "Dolphin spotting"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Kavaratti - Agatti Activities",
                description: "Morning sightseeing of Kavaratti Beach and Chicken Neck Lagoon with options for kayaking or scuba (extra cost). Speedboat transfer to Agatti with optional deep-sea fishing or beach sports. Overnight Agatti resort.",
                highlights: ["Chicken Neck Lagoon", "Kayaking/Scuba (optional)"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Agatti - Bangaram & Thinnakara Day Trip",
                description: "Speedboat day trip to uninhabited Bangaram for lagoon snorkeling and scuba. Visit Thinnakara sandbank for picnic and relaxation. Return to Agatti in the evening.",
                highlights: ["Bangaram lagoon snorkeling", "Thinnakara sandbank picnic"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Agatti - Kadmat/Kalpitti",
                description: "Speedboat to Kadmat or Kalpitti (approx. 3 hrs). Lagoon kayaking, birdwatching and coral viewing. Leisure time or optional sea-walk activities. Return to Agatti for overnight.",
                highlights: ["Kadmat lagoon activities", "Birdwatching & coral viewing"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Departure from Agatti",
                description: "Morning at leisure for beach/snorkel and relaxation; transfer to airport for Kochi flight as per schedule.",
                highlights: ["Beach time", "Last-minute snorkeling"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 115,
        title: "Leh — Ladakh Explorer",
        duration: "7D/6N",
        ...getTourImages('india', 115),
        location: "Leh, Nubra Valley, Pangong Lake",
        price: "On Request",
        rating: "4.9",
        reviews: "304",
        itinerary: [
            {
                day: 1,
                title: "Arrival & Acclimatization — Leh",
                description: "Arrive at Leh airport (~3,500 m). Transfer to hotel and rest to acclimatize. Avoid strenuous activity; short, easy walks nearby recommended.",
                highlights: ["Leh acclimatization", "Light local walks"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Leh — Local Sightseeing",
                description: "Sightseeing in Leh: Leh Palace, Shanti Stupa, Namgyal Tsemo Gompa and Main Bazaar. Optional visits: Hall of Fame Museum and Gurudwara Pathar Sahib.",
                highlights: ["Leh Palace", "Shanti Stupa", "Main Bazaar"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Sham Valley Tour",
                description: "Explore Sham Valley: Alchi Monastery, Basgo Castle, Likir Monastery and surrounding traditional villages. Return to Leh for overnight.",
                highlights: ["Alchi Monastery", "Likir Monastery", "Basgo Castle"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Leh - Nubra Valley via Khardung La",
                description: "Drive via Khardung La Pass (5,359 m) to Nubra Valley. Visit Diskit Monastery and Hunder Sand Dunes; enjoy double-humped camel ride. Overnight in Nubra.",
                highlights: ["Khardung La Pass", "Diskit Monastery", "Hunder sand dunes & camels"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Nubra - Pangong Lake",
                description: "Drive from Nubra to Pangong Lake across scenic mountain routes. Arrive and relax by Pangong Lake (evening views and photos). Overnight near Pangong.",
                highlights: ["Pangong Lake sunset", "Stunning high-altitude lake"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Pangong - Leh via Chang La",
                description: "Morning at the lake, then drive back to Leh via Chang La Pass. Evening free for shopping or local exploration in Leh market.",
                highlights: ["Chang La Pass", "Leh market time"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Departure from Leh",
                description: "Transfer to Leh airport for onward journey.",
                highlights: ["Airport transfer"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 116,
        title: "Assam & Shillong — Wildlife, Culture & Hills",
        duration: "7D/6N",
        ...getTourImages('india', 116),
        location: "Guwahati, Kaziranga, Majuli, Sivasagar, Shillong",
        price: "On Request",
        rating: "4.7",
        reviews: "156",
        itinerary: [
            {
                day: 1,
                title: "Guwahati — Arrival & Local Sights",
                description: "Arrive in Guwahati. Visit Kamakhya Temple and take a ferry to Umananda Island (subject to timings). Overnight Guwahati.",
                highlights: ["Kamakhya Temple", "Umananda Island ferry"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Guwahati - Kaziranga",
                description: "Drive via tea gardens to Kaziranga (approx. 4–5 hrs). Evening jeep safari in the Central Range for sightings of one-horned rhinoceros and other wildlife. Overnight Kaziranga.",
                highlights: ["Kaziranga jeep safari", "Tea garden views en route"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Kaziranga — Safaris",
                description: "Morning elephant safari followed by afternoon jeep safari (Eastern/Western ranges). Visit a local tea estate if time permits. Overnight Kaziranga.",
                highlights: ["Elephant safari", "Jeep safari", "Tea estate visit"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Kaziranga - Majuli",
                description: "Drive and ferry to Majuli (approx. 3–4 hrs + ferry). Explore Auniati Satra, Mishing villages and experience satriya dance & local culture. Overnight Majuli.",
                highlights: ["Auniati Satra", "Mishing village cultural visit"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Majuli - Sivasagar",
                description: "Morning cultural walks in Majuli. Drive to Sivasagar (approx. 2 hrs). Visit Rang Ghar, Talatal Ghar and Shiva Dol. Overnight Sivasagar.",
                highlights: ["Rang Ghar", "Talatal Ghar", "Shivadol"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Sivasagar - Shillong (via scenic route)",
                description: "After morning exploration, drive to Shillong (approx. 6–7 hrs) via Umiam Lake. Evening free at Police Bazar/MG Road. Overnight Shillong.",
                highlights: ["Umiam Lake", "Police Bazar shopping"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Shillong Sightseeing & Departure",
                description: "Sightseeing at Ward's Lake, Elephant Falls, Shillong Peak and Don Bosco Museum. Return / drive (~3 hrs) to Guwahati for onward flight/rail connections as per schedule.",
                highlights: ["Elephant Falls", "Shillong Peak", "Don Bosco Museum"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 117,
        title: "Karnataka — Bangalore • Mysore • Ooty • Coorg",
        duration: "9D/8N",
        ...getTourImages('india', 117),
        location: "Bangalore, Mysore, Ooty, Coonoor, Coimbatore, Coorg (Kodagu)",
        price: "On Request",
        rating: "4.7",
        reviews: "128",
        itinerary: [
            {
                day: 1,
                title: "Bangalore — Arrival & Local Sights",
                description: "Arrive Bangalore. Visit Lalbagh Botanical Garden, Cubbon Park and Bangalore Palace. Evening at leisure; overnight Bangalore.",
                highlights: ["Lalbagh Garden", "Cubbon Park", "Bangalore Palace"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Bangalore - Mysore",
                description: "Drive to Mysore (~3 hrs) via Srirangapatna. Visit Mysore Palace, Chamundi Hills and evening Brindavan Gardens light & musical fountain show. Overnight Mysore.",
                highlights: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens light show"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Mysore - Ooty (via Bandipur)",
                description: "Drive to Ooty (6–7 hrs) via Bandipur Tiger Reserve and scenic Nilgiri ghats (approx. 36 hairpin bends). Arrive Ooty and check-in. Overnight Ooty.",
                highlights: ["Bandipur scenic drive", "Nilgiri ghats hairpin bends"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Ooty — Local Sightseeing",
                description: "Explore Ooty: Government Botanical Garden, Ooty Lake (boating), Doddabetta Peak, Rose Garden and Thread Garden. Evening at leisure. Overnight Ooty.",
                highlights: ["Botanical Gardens", "Ooty Lake boating", "Doddabetta Peak"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Ooty - Coonoor (Day Trip) - Ooty",
                description: "Day trip to Coonoor: visit Sim's Park, Lamb's Rock, Dolphin's Nose and tea estates. Return to Ooty in the evening. Overnight Ooty.",
                highlights: ["Sim's Park", "Dolphin's Nose", "Coonoor tea estates"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Ooty - Coimbatore",
                description: "Drive to Coimbatore (~3 hrs). Visit Marudhamalai Temple, Perur Pateeswarar Temple and optional Isha Yoga Center / Dhyanalinga. Overnight Coimbatore.",
                highlights: ["Marudhamalai Temple", "Perur Pateeswarar Temple", "Isha Yoga Center (optional)"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Coimbatore - Coorg (Kodagu)",
                description: "Morning market/short local visit. Drive to Coorg (~4 hrs) through Western Ghats. Visit Abbey Falls and Raja's Seat viewpoint. Overnight Coorg.",
                highlights: ["Abbey Falls", "Raja's Seat", "Scenic Western Ghats drive"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Coorg — Exploration",
                description: "Explore Coorg: Dubare Elephant Camp (river activities), Namdroling (Golden Temple) at Bylakuppe, coffee plantation walk/trek and Talacauvery (birthplace of River Cauvery). Overnight Coorg.",
                highlights: ["Dubare Elephant Camp", "Namdroling Golden Temple", "Coffee plantation trek"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Coorg - Bangalore — Departure",
                description: "Morning visit to Nisargadhama / local bamboo forest. Drive back to Bangalore (5–6 hrs) for airport drop / onward journey.",
                highlights: ["Nisargadhama bamboo island", "Return transfer to Bangalore"],
                meals: ["Breakfast"]
            }
        ]
    },

    {
        id: 118,
        title: "Tamil Nadu to Rameswaram/ Kanyakumari",
        duration: "7D/6N",
        ...getTourImages('india', 118),
        location: "Chennai, Mahabalipuram, Pondicherry, Madurai, Rameswaram, Kanyakumari",
        price: "On Request",
        rating: "4.6",
        reviews: "162",
        itinerary: [
            {
                day: 1,
                title: "Arrive Chennai — Local Sights",
                description: "Arrive Chennai. Visits include Kapaleeshwarar Temple, Fort St. George and Marina Beach promenade. Overnight Chennai.",
                highlights: ["Kapaleeshwarar Temple", "Fort St. George", "Marina Beach"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Chennai - Mahabalipuram",
                description: "Drive to Mahabalipuram (~60 km). Explore Shore Temple (UNESCO), Pancha Rathas, Arjuna's Penance rock carvings and cave temples. Evening beach walk; overnight Mahabalipuram.",
                highlights: ["Shore Temple", "Pancha Rathas", "Arjuna's Penance"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Mahabalipuram - Pondicherry",
                description: "Drive to Pondicherry (~100 km). Explore the French Quarter, Aurobindo Ashram and Promenade Beach. Evening café stroll and shopping; overnight Pondicherry.",
                highlights: ["French Colony", "Aurobindo Ashram", "Promenade Beach"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Pondicherry - Madurai",
                description: "Early drive to Madurai (~330 km / 6–7 hrs). Visit Meenakshi Amman Temple, Thirumalai Nayak Palace and Gandhi Museum. Overnight Madurai.",
                highlights: ["Meenakshi Amman Temple", "Thirumalai Nayak Palace", "Gandhi Museum"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Madurai - Rameswaram",
                description: "Drive to Rameswaram (~170 km). Visit Ramanathaswamy Temple, Agnitheertham sacred shores, Pamban Bridge and explore Dhanushkodi (if accessible). Overnight Rameswaram.",
                highlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Agnitheertham"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Rameswaram - Kanyakumari",
                description: "Drive to Kanyakumari (~300 km). Visit Vivekananda Rock Memorial, Thiruvalluvar Statue and Gandhi Memorial. Watch sunset at Indias southern tip. Overnight Kanyakumari.",
                highlights: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Sunset at Kanyakumari"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Kanyakumari - Chennai / Departure",
                description: "Return drive to Chennai or proceed to onward connection as per schedule. Option to extend stay at Kanyakumari or catch flights from Trivandrum/Chennai.",
                highlights: ["Departure / onward connections"],
                meals: ["Breakfast"]
            }
        ]
    },
    {
        id: 119,
        title: "Nainital to Dehradun",
        duration: "10D/9N",
        ...getTourImages('india', 119),
        location: "Nainital, Ranikhet, Almora, Jim Corbett, Kasol, Mussoorie, Dehradun",
        price: "On Request",
        rating: "4.8",
        reviews: "144",
        itinerary: [
            {
                day: 1,
                title: "Delhi - Nainital",
                description: "Drive Delhi to Nainital (300 km / 7 hrs). Enjoy boating at Naini Lake, visit Naina Devi Temple and evening Mall Road stroll. Overnight Nainital.",
                highlights: ["Naini Lake Boating", "Naina Devi Temple", "Mall Road"],
                meals: ["Dinner"]
            },
            {
                day: 2,
                title: "Nainital Lake Tour",
                description: "Visit Sattal, Bhimtal, Naukuchiatal. Explore Snow View Point and Tiffin Top. Overnight Nainital.",
                highlights: ["Bhimtal", "Sattal", "Naukuchiatal", "Snow View", "Tiffin Top"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 3,
                title: "Nainital - Ranikhet",
                description: "Drive to Ranikhet (90 km / 3 hrs). Visit Chaubatia Gardens, Jhula Devi Temple, Golf Course and Bhalu Dam. Overnight Ranikhet.",
                highlights: ["Chaubatia Gardens", "Jhula Devi Temple", "Ranikhet Golf Course", "Bhalu Dam"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 4,
                title: "Ranikhet - Almora",
                description: "Drive to Almora (50 km / 2 hrs). Visit Kasar Devi Temple, Nanda Devi Temple, Bright End Corner views, local markets. Overnight Almora.",
                highlights: ["Kasar Devi Temple", "Nanda Devi Temple", "Bright End Corner", "Almora Markets"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 5,
                title: "Almora - Jim Corbett",
                description: "Drive Almora to Corbett (170 km / 6 hrs). En route visit Garjiya Temple. Evening visit Corbett Museum or waterfall. Overnight Corbett.",
                highlights: ["Garjiya Temple", "Corbett Museum", "Corbett Waterfall"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 6,
                title: "Jim Corbett — Safari Day",
                description: "Early morning jeep safari for tigers, elephants and wildlife at Corbett National Park. Relax by Kosi River. Overnight Corbett.",
                highlights: ["Jeep Safari", "Tiger Spotting", "Kosi River"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 7,
                title: "Corbett - Kasol",
                description: "Long scenic drive to Kasol (450 km / 10 hrs). Arrive Parvati Valley; enjoy riverside walk and chill vibe. Overnight Kasol.",
                highlights: ["Parvati Valley", "Riverside Walk", "Kasol Market"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 8,
                title: "Kasol - Mussoorie",
                description: "Drive Kasol to Mussoorie (350 km / 9 hrs via Chandigarh). Visit Kempty Falls, Mall Road and Gun Hill (cable car). Overnight Mussoorie.",
                highlights: ["Kempty Falls", "Mall Road", "Gun Hill Cable Car"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 9,
                title: "Mussoorie - Dehradun",
                description: "Drive to Dehradun (35 km / 1 hr). Visit Robber’s Cave, Sahastradhara, Paltan Bazaar; optional Tapkeshwar Temple. Overnight Dehradun.",
                highlights: ["Robber’s Cave", "Sahastradhara", "Paltan Bazaar", "Tapkeshwar Temple"],
                meals: ["Breakfast", "Dinner"]
            },
            {
                day: 10,
                title: "Dehradun - Delhi",
                description: "Drive to Delhi (250 km / 6 hrs). Optional visit to Forest Research Institute if time permits. Drop at Delhi.",
                highlights: ["Forest Research Institute", "Return Drive"],
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