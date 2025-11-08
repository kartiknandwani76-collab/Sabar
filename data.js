const SHOPS = [
  {
    "id": 1,
    "name": "Boys Stylish",
    "type": "Boys",
    "location": "Sector 4, Gurgaon",
    "rating": 4.7,
    "lat": 28.4595,
    "lng": 77.0266,
    "images": [
      "https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg",
      "https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-hairdresser_1303-20710.jpg"
    ],
    "about": "Premium gents grooming with experienced barbers.",
    "services": [
      {
        "name": "Classic Haircut",
        "price": 150,
        "duration": "30 mins",
        "category": "Hair",
        "description": "Choose from classic, trendy, or personalized haircut styles.",
        "type": "Boys",
        "rating": 4.8,
        "reviews": [
          {"user": "Amit", "text": "Great haircut, very professional!", "stars": 5},
          {"user": "Rohit", "text": "Quick and stylish.", "stars": 4}
        ]
      },
      {
        "name": "Fade Cut (Low)",
        "price": 250,
        "duration": "45 mins",
        "category": "Hair",
        "description": "Modern fade haircut with precision trimming",
        "type": "Boys",
        "rating": 4.7,
        "reviews": [
          {"user": "Sahil", "text": "Fade was sharp and clean.", "stars": 5}
        ]
      },
      {
        "name": "Beard Trim",
        "price": 120,
        "duration": "20 mins",
        "category": "Grooming",
        "description": "Professional beard shaping and trimming",
        "type": "Boys",
        "rating": 4.6,
        "reviews": [
          {"user": "Vikram", "text": "Perfect for my beard.", "stars": 5}
        ]
      },
      {
        "name": "Hair Color",
        "price": 600,
        "duration": "60 mins",
        "category": "Hair",
        "description": "Global hair coloring for men",
        "type": "Boys",
        "rating": 4.5,
        "reviews": [
          {"user": "Manish", "text": "Nice color, good coverage.", "stars": 4}
        ]
      },
      {
        "name": "Facial Clean Up",
        "price": 350,
        "duration": "40 mins",
        "category": "Facial",
        "description": "Deep cleansing facial for clear skin",
        "type": "Boys",
        "rating": 4.9,
        "reviews": [
          {"user": "Deepak", "text": "Skin feels fresh!", "stars": 5}
        ]
      },
      {
        "name": "Haircut – Classic, trendy, or personalized styles",
        "price": 180,
        "duration": "30 mins",
        "category": "Hair",
        "description": "Choose from classic, trendy, or personalized haircut styles.",
        "type": "Boys"
      },
      {
        "name": "Buzz Cut",
        "price": 120,
        "duration": "20 mins",
        "category": "Hair",
        "description": "Short, neat, and low-maintenance haircut.",
        "type": "Boys",
        "rating": 4.6,
        "reviews": [
          {"user": "Vikram", "text": "Perfect for summer.", "stars": 5}
        ]
      },
      {
        "name": "Fade / Taper",
        "price": 220,
        "duration": "35 mins",
        "category": "Hair",
        "description": "High, mid, or low fade/taper styles.",
        "type": "Boys",
        "rating": 4.7,
        "reviews": [
          {"user": "Sahil", "text": "Fade was sharp and clean.", "stars": 5}
        ]
      },
      {
        "name": "Trim / Edge-up / Line-up",
        "price": 100,
        "duration": "15 mins",
        "category": "Hair",
        "description": "Shape up hairline and beard for a clean look.",
        "type": "Boys",
        "rating": 4.5,
        "reviews": [
          {"user": "Manish", "text": "Very precise work.", "stars": 4}
        ]
      },
      {
        "name": "Hair Styling",
        "price": 80,
        "duration": "10 mins",
        "category": "Hair",
        "description": "Gel, wax, or pomade styling for any occasion.",
        "type": "Boys",
        "rating": 4.4,
        "reviews": [
          {"user": "Deepak", "text": "Loved the styling!", "stars": 5}
        ]
      },
      {
        "name": "Hair Coloring / Highlights",
        "price": 350,
        "duration": "50 mins",
        "category": "Hair",
        "description": "Single color, streaks, or full hair coloring.",
        "type": "Boys"
      },
      {
        "name": "Hair Spa / Conditioning",
        "price": 300,
        "duration": "40 mins",
        "category": "Hair",
        "description": "Deep conditioning and scalp treatment for healthy hair.",
        "type": "Boys"
      },
      {
        "name": "Shampoo & Blow-dry",
        "price": 90,
        "duration": "15 mins",
        "category": "Hair",
        "description": "Clean and style hair with shampoo and blow-dry.",
        "type": "Boys"
      },
      {
        "name": "Beard Trim / Shape-up",
        "price": 110,
        "duration": "15 mins",
        "category": "Beard",
        "description": "Custom beard shaping and trimming.",
        "type": "Boys"
      },
      {
        "name": "Beard Coloring",
        "price": 140,
        "duration": "20 mins",
        "category": "Beard",
        "description": "Dye or natural color for beard.",
        "type": "Boys"
      },
      {
        "name": "Shaving / Clean Shave",
        "price": 100,
        "duration": "15 mins",
        "category": "Beard",
        "description": "Straight razor or machine shave for a clean look.",
        "type": "Boys"
      },
      {
        "name": "Mustache Styling",
        "price": 70,
        "duration": "10 mins",
        "category": "Beard",
        "description": "Trim or wax mustache for perfect style.",
        "type": "Boys"
      },
      {
        "name": "Facial Hair Grooming Package",
        "price": 220,
        "duration": "30 mins",
        "category": "Beard",
        "description": "Beard + mustache + edge-up grooming package.",
        "type": "Boys"
      },
      {
        "name": "Basic Facial",
        "price": 180,
        "duration": "25 mins",
        "category": "Facial",
        "description": "Cleansing and refreshing facial treatment.",
        "type": "Boys",
        "rating": 4.7,
        "reviews": [
          {"user": "Ravi", "text": "Very relaxing facial.", "stars": 5}
        ]
      },
      {
        "name": "Eyebrow Shaping / Threading",
        "price": 60,
        "duration": "10 mins",
        "category": "Grooming",
        "description": "Eyebrow shaping and threading for neat look.",
        "type": "Boys",
        "rating": 4.5,
        "reviews": [
          {"user": "Karan", "text": "Quick and neat work.", "stars": 4}
        ]
      },
      {
        "name": "Ear / Nose Waxing",
        "price": 80,
        "duration": "10 mins",
        "category": "Grooming",
        "description": "Ear and nose waxing for hygiene.",
        "type": "Boys",
        "rating": 4.6,
        "reviews": [
          {"user": "Sunny", "text": "No pain, very clean.", "stars": 5}
        ]
      },
      {
        "name": "Hot Towel Treatment",
        "price": 90,
        "duration": "15 mins",
        "category": "Grooming",
        "description": "Relaxing and cleansing hot towel treatment.",
        "type": "Boys",
        "rating": 4.8,
        "reviews": [
          {"user": "Arjun", "text": "Loved the hot towel!", "stars": 5}
        ]
      },
      {
        "name": "Package Deal – Haircut + Beard Trim + Facial",
        "price": 400,
        "duration": "70 mins",
        "category": "Package",
        "description": "Combo package: haircut, beard trim, and facial.",
        "type": "Boys",
        "rating": 4.9,
        "reviews": [
          {"user": "Rahul", "text": "Best value package.", "stars": 5}
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Glam Studio",
    "type": "Girls",
    "location": "MG Road, Gurgaon",
    "rating": 4.8,
    "lat": 28.4596,
    "lng": 77.027,
    "images": [
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=60"
    ],
    "about": "Bridal and party makeup specialists.",
    "services": [
      {
        "name": "Women's Haircut",
        "price": 400,
        "duration": "60 mins",
        "category": "Hair",
        "description": "Professional haircut with wash and blow dry",
        "type": "Girls"
      },
      {
        "name": "Bridal Makeup",
        "price": 2500,
        "duration": "120 mins",
        "category": "Makeup",
        "description": "Complete bridal makeup with traditional or modern look",
        "type": "Girls"
      },
      {
        "name": "Hair Spa",
        "price": 900,
        "duration": "90 mins",
        "category": "Hair Care",
        "description": "Deep conditioning treatment with head massage",
        "type": "Girls"
      },
      {
        "name": "Manicure",
        "price": 350,
        "duration": "40 mins",
        "category": "Nails",
        "description": "Hand care and nail shaping",
        "type": "Girls"
      },
      {
        "name": "Pedicure",
        "price": 400,
        "duration": "45 mins",
        "category": "Nails",
        "description": "Foot care and nail cleaning",
        "type": "Girls"
      },
      {
        "name": "Haircut",
        "price": 400,
        "duration": "45 mins",
        "category": "Hair",
        "description": "Professional haircut for women.",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Priya", "text": "Loved my new haircut!", "stars": 5}]
      },
      {
        "name": "Hair Styling",
        "price": 350,
        "duration": "30 mins",
        "category": "Hair",
        "description": "Styling with gel, wax, or spray.",
        "type": "Girls",
        "rating": 4.6,
        "reviews": [{"user": "Neha", "text": "Perfect for my party.", "stars": 5}]
      },
      {
        "name": "Hair Spa / Conditioning",
        "price": 450,
        "duration": "40 mins",
        "category": "Hair",
        "description": "Deep conditioning and scalp treatment.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Ritu", "text": "Very relaxing spa.", "stars": 5}]
      },
      {
        "name": "Hair Coloring / Highlights / Balayage",
        "price": 800,
        "duration": "60 mins",
        "category": "Hair",
        "description": "Color, highlights, or balayage for stylish look.",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Simran", "text": "Loved the highlights!", "stars": 5}]
      },
      {
        "name": "Keratin / Smoothening Treatment",
        "price": 1500,
        "duration": "90 mins",
        "category": "Hair",
        "description": "Keratin or smoothening for silky hair.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Aarti", "text": "Hair feels so smooth.", "stars": 5}]
      },
      {
        "name": "Shampoo & Blow-dry",
        "price": 250,
        "duration": "20 mins",
        "category": "Hair",
        "description": "Shampoo and blow-dry for clean hair.",
        "type": "Girls",
        "rating": 4.5,
        "reviews": [{"user": "Megha", "text": "Quick and clean.", "stars": 4}]
      },
      {
        "name": "Basic Facial",
        "price": 400,
        "duration": "30 mins",
        "category": "Facial",
        "description": "Cleansing and refreshing facial.",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Shreya", "text": "Skin feels fresh!", "stars": 5}]
      },
      {
        "name": "Detox / Brightening Facial",
        "price": 600,
        "duration": "40 mins",
        "category": "Facial",
        "description": "Detox and glow facial for brighter skin.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Anjali", "text": "Great glow!", "stars": 5}]
      },
      {
        "name": "Anti-Acne / Oil Control Facial",
        "price": 550,
        "duration": "35 mins",
        "category": "Facial",
        "description": "Facial for oily and acne-prone skin.",
        "type": "Girls",
        "rating": 4.6,
        "reviews": [{"user": "Pooja", "text": "Helped my skin.", "stars": 4}]
      },
      {
        "name": "Gold / Diamond Facial",
        "price": 1200,
        "duration": "60 mins",
        "category": "Facial",
        "description": "Luxury gold or diamond facial.",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Rashmi", "text": "Very premium facial.", "stars": 5}]
      },
      {
        "name": "Bleach / Face Glow Treatment",
        "price": 300,
        "duration": "20 mins",
        "category": "Facial",
        "description": "Bleach or glow treatment for radiant skin.",
        "type": "Girls",
        "rating": 4.5,
        "reviews": [{"user": "Nisha", "text": "Good glow.", "stars": 4}]
      },
      {
        "name": "Eyebrow Threading / Shaping",
        "price": 150,
        "duration": "10 mins",
        "category": "Grooming",
        "description": "Eyebrow threading and shaping.",
        "type": "Girls",
        "rating": 4.6,
        "reviews": [{"user": "Kajal", "text": "Perfect shape!", "stars": 5}]
      },
      {
        "name": "Upper Lip / Chin Threading",
        "price": 100,
        "duration": "10 mins",
        "category": "Grooming",
        "description": "Threading for upper lip and chin.",
        "type": "Girls",
        "rating": 4.5,
        "reviews": [{"user": "Riya", "text": "Quick and neat.", "stars": 4}]
      },
      {
        "name": "Full Face Threading",
        "price": 250,
        "duration": "20 mins",
        "category": "Grooming",
        "description": "Full face threading for smooth skin.",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Sana", "text": "Very smooth skin.", "stars": 5}]
      },
      {
        "name": "Arm / Leg Waxing",
        "price": 400,
        "duration": "30 mins",
        "category": "Waxing",
        "description": "Waxing for arms and legs.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Tina", "text": "No pain, very clean.", "stars": 5}]
      },
      {
        "name": "Underarm / Bikini Waxing",
        "price": 300,
        "duration": "20 mins",
        "category": "Waxing",
        "description": "Waxing for underarms and bikini area.",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Meera", "text": "Very hygienic.", "stars": 5}]
      },
      {
        "name": "Party / Event Makeup",
        "price": 1200,
        "duration": "60 mins",
        "category": "Makeup",
        "description": "Makeup for parties and events.",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Shalini", "text": "Looked amazing!", "stars": 5}]
      },
      {
        "name": "Bridal Makeup",
        "price": 5000,
        "duration": "120 mins",
        "category": "Makeup",
        "description": "Complete bridal makeup for your big day.",
        "type": "Girls",
        "rating": 5.0,
        "reviews": [{"user": "Divya", "text": "Best bridal makeup!", "stars": 5}]
      },
      {
        "name": "Hair + Makeup Combo",
        "price": 2000,
        "duration": "90 mins",
        "category": "Package",
        "description": "Combo of hair styling and makeup.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Sneha", "text": "Great combo deal.", "stars": 5}]
      },
      {
        "name": "Manicure / Pedicure",
        "price": 400,
        "duration": "40 mins",
        "category": "Nails",
        "description": "Hand and foot care package.",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Pinky", "text": "Loved the pedicure!", "stars": 5}]
      },
      {
        "name": "Nail Art / Gel Nails",
        "price": 600,
        "duration": "50 mins",
        "category": "Nails",
        "description": "Creative nail art and gel nails.",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Roshni", "text": "Beautiful nail art.", "stars": 5}]
      },
      {
        "name": "Haircut + Facial + Manicure",
        "price": 900,
        "duration": "90 mins",
        "category": "Package",
        "description": "Combo of haircut, facial, and manicure.",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Jaya", "text": "Perfect package!", "stars": 5}]
      },
      {
        "name": "Hair Spa + Makeup",
        "price": 1800,
        "duration": "100 mins",
        "category": "Package",
        "description": "Hair spa and makeup combo.",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Nidhi", "text": "Loved the spa and makeup.", "stars": 5}]
      },
      {
        "name": "Full Salon Experience Package",
        "price": 3000,
        "duration": "180 mins",
        "category": "Package",
        "description": "Complete salon experience for women.",
        "type": "Girls",
        "rating": 5.0,
        "reviews": [{"user": "Komal", "text": "Best experience ever!", "stars": 5}]
      }
    ]
  },
  {
    "id": 3,
    "name": "Royal Unisex Salon",
    "type": "Unisex",
    "location": "Sector 10, Gurgaon",
    "rating": 4.9,
    "lat": 28.46,
    "lng": 77.025,
    "images": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=60"
    ],
    "about": "Luxury salon for all genders. Premium services and packages.",
    "services": [
      {
        "name": "Deluxe Haircut",
        "price": 350,
        "duration": "45 mins",
        "category": "Hair",
        "description": "Premium haircut with styling and hair care tips",
        "type": "Both",
        "rating": 4.8,
        "reviews": [{"user": "Rahul", "text": "Excellent premium service", "stars": 5}]
      },
      {
        "name": "Head Spa",
        "price": 500,
        "duration": "60 mins",
        "category": "Spa",
        "description": "Relaxing head massage with premium oils",
        "type": "Both",
        "rating": 4.9,
        "reviews": [{"user": "Priya", "text": "Most relaxing spa ever", "stars": 5}]
      },
      {
        "name": "Couple Package",
        "price": 1200,
        "duration": "120 mins",
        "category": "Package",
        "description": "Haircut and spa treatment for couples",
        "type": "Both",
        "rating": 4.9,
        "reviews": [{"user": "Amit & Neha", "text": "Perfect couple experience", "stars": 5}]
      },
      {
        "name": "Premium Hair Coloring",
        "price": 1000,
        "duration": "90 mins",
        "category": "Hair",
        "description": "High-quality hair coloring with premium products",
        "type": "Both",
        "rating": 4.8,
        "reviews": [{"user": "Riya", "text": "Love my new hair color", "stars": 5}]
      },
      {
        "name": "Keratin Treatment",
        "price": 2000,
        "duration": "120 mins",
        "category": "Hair",
        "description": "Professional keratin treatment for smooth hair",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Sneha", "text": "Amazing smooth hair", "stars": 5}]
      },
      {
        "name": "Premium Beard Styling",
        "price": 300,
        "duration": "45 mins",
        "category": "Grooming",
        "description": "Luxury beard grooming and styling",
        "type": "Boys",
        "rating": 4.8,
        "reviews": [{"user": "Vikas", "text": "Perfect beard shape", "stars": 5}]
      },
      {
        "name": "Diamond Facial",
        "price": 1500,
        "duration": "75 mins",
        "category": "Facial",
        "description": "Luxury diamond facial for glowing skin",
        "type": "Both",
        "rating": 4.9,
        "reviews": [{"user": "Meera", "text": "Skin is glowing", "stars": 5}]
      },
      {
        "name": "Royal Spa Package",
        "price": 2500,
        "duration": "150 mins",
        "category": "Package",
        "description": "Complete luxury spa treatment",
        "type": "Both",
        "rating": 5.0,
        "reviews": [{"user": "Karan", "text": "Worth every penny", "stars": 5}]
      },
      {
        "name": "Gel Nails",
        "price": 800,
        "duration": "60 mins",
        "category": "Nails",
        "description": "Premium gel nail treatment",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Pooja", "text": "Perfect gel nails", "stars": 5}]
      },
      {
        "name": "Premium Waxing",
        "price": 600,
        "duration": "60 mins",
        "category": "Waxing",
        "description": "Luxury waxing with premium products",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Anjali", "text": "Very professional service", "stars": 5}]
      },
      {
        "name": "Bridal Package",
        "price": 8000,
        "duration": "240 mins",
        "category": "Package",
        "description": "Complete luxury bridal package",
        "type": "Girls",
        "rating": 5.0,
        "reviews": [{"user": "Shreya", "text": "Perfect bridal look", "stars": 5}]
      },
      {
        "name": "Party Makeup",
        "price": 2000,
        "duration": "90 mins",
        "category": "Makeup",
        "description": "Professional party makeup with premium products",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Neha", "text": "Amazing party look", "stars": 5}]
      },
      {
        "name": "Hair and Makeup Package",
        "price": 2500,
        "duration": "120 mins",
        "category": "Package",
        "description": "Complete hair styling and makeup",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Sonia", "text": "Perfect combo package", "stars": 5}]
      }
    ]
  },
  {
    "id": 4,
    "name": "Fade Factory",
    "type": "Boys",
    "location": "Sector 5, Gurgaon",
    "rating": 4.6,
    "lat": 28.458,
    "lng": 77.024,
    "images": [
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=60"
    ],
    "about": "Specialists in fades and modern cuts.",
    "services": [
      {
        "name": "Skin Fade Premium",
        "price": 420,
        "duration": "60 mins",
        "category": "Hair",
        "description": "Professional skin fade with precision detailing",
        "type": "Boys"
      },
      {
        "name": "Low Fade",
        "price": 260,
        "duration": "45 mins",
        "category": "Hair",
        "description": "Classic low fade haircut with styling",
        "type": "Boys"
      },
      {
        "name": "High Fade",
        "price": 350,
        "duration": "45 mins",
        "category": "Hair",
        "description": "Modern high fade with sharp edges",
        "type": "Boys"
      }
    ]
  },
  {
    "id": 5,
    "name": "Beauty & Care Hub",
    "type": "Unisex",
    "location": "Sector 3, Gurgaon",
    "rating": 4.5,
    "lat": 28.457,
    "lng": 77.028,
    "images": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=60"
    ],
    "about": "Complete beauty solutions for everyone.",
    "services": [
      {
        "name": "Basic Haircut",
        "price": 160,
        "duration": "30 mins",
        "category": "Hair",
        "description": "Simple and quick haircut for all",
        "type": "Both",
        "rating": 4.6,
        "reviews": [{"user": "Rahul", "text": "Quick and neat service", "stars": 5}]
      },
      {
        "name": "Facial Glow",
        "price": 650,
        "duration": "60 mins",
        "category": "Facial",
        "description": "Rejuvenating facial for radiant skin",
        "type": "Both",
        "rating": 4.7,
        "reviews": [{"user": "Priya", "text": "Amazing glow after treatment", "stars": 5}]
      },
      {
        "name": "Relaxing Head Spa",
        "price": 480,
        "duration": "45 mins",
        "category": "Spa",
        "description": "Soothing head massage with aromatherapy",
        "type": "Both",
        "rating": 4.8,
        "reviews": [{"user": "Neha", "text": "Very relaxing experience", "stars": 5}]
      },
      {
        "name": "Hair Coloring",
        "price": 800,
        "duration": "90 mins",
        "category": "Hair",
        "description": "Professional hair coloring for all",
        "type": "Both",
        "rating": 4.7,
        "reviews": [{"user": "Amit", "text": "Great color and service", "stars": 5}]
      },
      {
        "name": "Hair Straightening",
        "price": 1500,
        "duration": "120 mins",
        "category": "Hair",
        "description": "Professional hair straightening treatment",
        "type": "Girls",
        "rating": 4.8,
        "reviews": [{"user": "Riya", "text": "Perfect straight hair", "stars": 5}]
      },
      {
        "name": "Beard Grooming",
        "price": 250,
        "duration": "30 mins",
        "category": "Grooming",
        "description": "Complete beard styling and grooming",
        "type": "Boys",
        "rating": 4.6,
        "reviews": [{"user": "Vikram", "text": "Perfect beard trim", "stars": 5}]
      },
      {
        "name": "Waxing Services",
        "price": 400,
        "duration": "45 mins",
        "category": "Waxing",
        "description": "Professional waxing services",
        "type": "Girls",
        "rating": 4.7,
        "reviews": [{"user": "Sneha", "text": "Clean and professional", "stars": 5}]
      },
      {
        "name": "Threading",
        "price": 100,
        "duration": "15 mins",
        "category": "Grooming",
        "description": "Eyebrow and face threading",
        "type": "Both",
        "rating": 4.6,
        "reviews": [{"user": "Pooja", "text": "Perfect shape", "stars": 5}]
      },
      {
        "name": "Manicure",
        "price": 300,
        "duration": "30 mins",
        "category": "Nails",
        "description": "Professional hand and nail care",
        "type": "Both",
        "rating": 4.7,
        "reviews": [{"user": "Deepa", "text": "Loved the service", "stars": 5}]
      },
      {
        "name": "Pedicure",
        "price": 400,
        "duration": "45 mins",
        "category": "Nails",
        "description": "Professional foot and nail care",
        "type": "Both",
        "rating": 4.8,
        "reviews": [{"user": "Sonia", "text": "Very relaxing pedicure", "stars": 5}]
      },
      {
        "name": "Party Makeup",
        "price": 1500,
        "duration": "60 mins",
        "category": "Makeup",
        "description": "Professional party makeup",
        "type": "Girls",
        "rating": 4.9,
        "reviews": [{"user": "Meera", "text": "Excellent makeup", "stars": 5}]
      },
      {
        "name": "Bridal Package",
        "price": 5000,
        "duration": "180 mins",
        "category": "Package",
        "description": "Complete bridal makeup and hair styling",
        "type": "Girls",
        "rating": 5.0,
        "reviews": [{"user": "Anjali", "text": "Perfect bridal look", "stars": 5}]
      }
    ]
  }
];