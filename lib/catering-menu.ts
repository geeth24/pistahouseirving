import type { MenuSection } from "./catalog"

export const cateringMenu: MenuSection[] = [
  {
    id: "biryani-rice",
    aliases: ["Rice"],
    name: "Biryani, rice & noodles",
    items: [
      {
        name: "Paneer Biryani",
        vegetarian: true,
      },
      {
        name: "Hyderabadi Veg Dum Biryani",
        vegetarian: true,
      },
      {
        name: "Gutti Vankaya Biryani",
        vegetarian: true,
      },
      {
        name: "Gongura Veg Dum Biryani",
        vegetarian: true,
      },
      {
        name: "Jack Fruit Dum Biryani",
        vegetarian: true,
      },
      {
        name: "Special Veg Fried Rice",
        vegetarian: true,
      },
      {
        name: "Gobi Manchurian Fried Rice",
        vegetarian: true,
      },
      {
        name: "Veg Kheema Biryani",
        vegetarian: true,
      },
      {
        name: "Veg Schezwan Fried Rice",
        vegetarian: true,
      },
      {
        name: "Veg Kheema Pulav",
        vegetarian: true,
      },
      {
        name: "Gutti Vankaya Pulav",
        vegetarian: true,
      },
      {
        name: "Veg Noodles",
        vegetarian: true,
      },
      {
        name: "Veg Schezwan Noodles",
        vegetarian: true,
      },
      {
        name: "Egg Biryani",
        vegetarian: false,
      },
      {
        name: "Egg Roast Pulav",
        vegetarian: false,
      },
      {
        name: "Egg Fried Rice",
        vegetarian: false,
      },
      {
        name: "Egg Hakka Noodles",
        vegetarian: false,
      },
      {
        name: "Chicken Dum Biryani",
        vegetarian: false,
      },
      {
        name: "Special Chicken Fry Piece Biryani",
        vegetarian: false,
      },
      {
        name: "Vijayawada Boneless Chicken Biryani",
        vegetarian: false,
      },
      {
        name: "Boneless Chicken Biryani",
        vegetarian: false,
      },
      {
        name: "Vijayawada Chicken Pulav",
        vegetarian: false,
      },
      {
        name: "Boneless Chicken Pulav",
        vegetarian: false,
      },
      {
        name: "Chicken Fried Rice",
        vegetarian: false,
      },
      {
        name: "Goat Dum Biryani",
        vegetarian: false,
      },
      {
        name: "Mutton Kheema Biryani",
        vegetarian: false,
      },
      {
        name: "Goat Shank Biryani",
        vegetarian: false,
      },
      {
        name: "Shrimp Biryani",
        vegetarian: false,
      },
      {
        name: "Fish Biryani",
        vegetarian: false,
      },
      {
        name: "Shrimp Pulav",
        vegetarian: false,
      },
      {
        name: "Fish Pulav",
        vegetarian: false,
      },
    ],
  },
  {
    id: "veg-starters",
    aliases: ["VeggieAppetizers"],
    name: "Vegetarian appetizers",
    items: [
      {
        name: "Veg / Babycorn/Gobi Manchurian",
        vegetarian: true,
      },
      {
        name: "Cut Mirchi/Mirchi Bhajji",
        vegetarian: true,
      },
      {
        name: "Onion/Mixed Veg / Spinach Pakoda",
        vegetarian: true,
      },
      {
        name: "Curry Leaf Baby Corn",
        vegetarian: true,
      },
      {
        name: "Karivepaku Gobi (Curry Leaves)",
        vegetarian: true,
      },
      {
        name: "Temper Gobi",
        vegetarian: true,
      },
      {
        name: "Gobi / Paneer 65",
        vegetarian: true,
      },
      {
        name: "Pudina Gobi",
        vegetarian: true,
      },
      {
        name: "Chilli Paneer",
        vegetarian: true,
      },
      {
        name: "Paneer 555",
        vegetarian: true,
      },
      {
        name: "Kothimbir Vadi",
        vegetarian: true,
      },
      {
        name: "Paneer Tikka Kebab Grilled",
        vegetarian: true,
      },
    ],
  },
  {
    id: "starters",
    aliases: ["MeatAppetizers"],
    name: "Meat & seafood appetizers",
    items: [
      {
        name: "Egg Pakora",
        vegetarian: false,
      },
      {
        name: "Chilli Egg",
        vegetarian: false,
      },
      {
        name: "Pista House Special Chicken",
        vegetarian: false,
      },
      {
        name: "Guntur Kodi Vepudu",
        vegetarian: false,
      },
      {
        name: "Chicken Pepper Fry",
        vegetarian: false,
      },
      {
        name: "Ghee Roast Chicken",
        vegetarian: false,
      },
      {
        name: "Chicken Majestic",
        vegetarian: false,
      },
      {
        name: "Chilli Chicken",
        vegetarian: false,
      },
      {
        name: "Kaju Kodi Fry (Cashew Chicken Fry)",
        vegetarian: false,
      },
      {
        name: "Goat Sukka",
        vegetarian: false,
      },
      {
        name: "Goat Pepper Fry",
        vegetarian: false,
      },
      {
        name: "Goat 65 (Boneless)",
        vegetarian: false,
      },
      {
        name: "Lamb Chops",
        vegetarian: false,
      },
      {
        name: "Apollo Fish",
        vegetarian: false,
      },
      {
        name: "Chilli Fish",
        vegetarian: false,
      },
      {
        name: "Chilli Shrimp",
        vegetarian: false,
      },
      {
        name: "Pepper Garlic Shrimp",
        vegetarian: false,
      },
      {
        name: "Fish / Shrimp / Chicken 65",
        vegetarian: false,
      },
    ],
  },
  {
    id: "veg-kebabs",
    aliases: ["VeggieKebabs"],
    name: "Vegetarian kebabs",
    items: [
      {
        name: "Paneer Tikka Kebab",
        vegetarian: true,
      },
      {
        name: "Grilled Veg",
        vegetarian: true,
      },
      {
        name: "Paneer Achari Kebab",
        vegetarian: true,
      },
    ],
  },
  {
    id: "kebabs",
    aliases: ["MeatKebabs"],
    name: "Meat kebabs",
    items: [
      {
        name: "Chicken Hariyali Kebab",
        vegetarian: false,
      },
      {
        name: "Chicken Tikka Kebab",
        vegetarian: false,
      },
      {
        name: "Lamb Chops",
        vegetarian: false,
      },
      {
        name: "Goat Chapli Kebab",
        vegetarian: false,
      },
    ],
  },
  {
    id: "sandwiches",
    aliases: ["IndianSandwiches"],
    name: "Sandwiches & rolls",
    items: [
      {
        name: "Vada Pav",
        vegetarian: true,
      },
      {
        name: "Pav Bhaji",
        vegetarian: true,
      },
      {
        name: "Kheema Pav",
        vegetarian: false,
      },
      {
        name: "Paneer Tikka Kati Roll",
        vegetarian: true,
      },
      {
        name: "Chicken Tikka Kati Roll",
        vegetarian: false,
      },
      {
        name: "Egg Tikka Roll",
        vegetarian: false,
      },
      {
        name: "Lamb Sheek Kebab Kati Roll",
        vegetarian: false,
      },
      {
        name: "Chicken Sheek Kebab Kati Roll",
        vegetarian: false,
      },
      {
        name: "Dabeli",
        vegetarian: true,
      },
      {
        name: "Misal Pav",
        vegetarian: true,
      },
    ],
  },
  {
    id: "veg-curries",
    aliases: ["VeggieEntrees"],
    name: "Vegetarian entrées",
    items: [
      {
        name: "Aloo Mutter",
        vegetarian: true,
      },
      {
        name: "Vegetable Korma",
        vegetarian: true,
      },
      {
        name: "Kadai Paneer",
        vegetarian: true,
      },
      {
        name: "Phool Makhana",
        vegetarian: true,
      },
      {
        name: "Gutti Vankaya Curry",
        vegetarian: true,
      },
      {
        name: "Okra Kaju Masala",
        vegetarian: true,
      },
      {
        name: "Malai Kofta",
        vegetarian: true,
      },
      {
        name: "Aloo Gobi Masala",
        vegetarian: true,
      },
      {
        name: "Methi Malai Mutter",
        vegetarian: true,
      },
      {
        name: "Paneer Butter Masala",
        vegetarian: true,
      },
      {
        name: "Mutter Paneer",
        vegetarian: true,
      },
      {
        name: "Dal Makhani",
        vegetarian: true,
      },
      {
        name: "Navaratan Korma",
        vegetarian: true,
      },
      {
        name: "Karai Kudi Veg",
        vegetarian: true,
      },
      {
        name: "Palak Paneer",
        vegetarian: true,
      },
      {
        name: "Paneer Tikka Masala",
        vegetarian: true,
      },
      {
        name: "Kaju Kofta Curry",
        vegetarian: true,
      },
      {
        name: "Sanj Savera",
        vegetarian: true,
      },
      {
        name: "Aloo Korma",
        vegetarian: true,
      },
      {
        name: "Tawa Veg",
        vegetarian: true,
      },
    ],
  },
  {
    id: "curries",
    aliases: ["MeatEntrees"],
    name: "Meat & seafood entrées",
    items: [
      {
        name: "Kadai Chicken",
        vegetarian: false,
      },
      {
        name: "Gongura Chicken",
        vegetarian: false,
      },
      {
        name: "Methi Chicken",
        vegetarian: false,
      },
      {
        name: "House Special Chicken Curry",
        vegetarian: false,
      },
      {
        name: "Dum Ka Chicken Curry",
        vegetarian: false,
      },
      {
        name: "Chicken Tikka Masala",
        vegetarian: false,
      },
      {
        name: "Butter Chicken",
        vegetarian: false,
      },
      {
        name: "Chicken Chetinadu Curry",
        vegetarian: false,
      },
      {
        name: "Chef Special Goat Curry",
        vegetarian: false,
      },
      {
        name: "Gongura Goat Curry",
        vegetarian: false,
      },
      {
        name: "Goat Chettinadu Curry",
        vegetarian: false,
      },
      {
        name: "Lamb Rogan Gosh",
        vegetarian: false,
      },
      {
        name: "Malai Methi Mutton",
        vegetarian: false,
      },
      {
        name: "Fish Pulusu",
        vegetarian: false,
      },
      {
        name: "Shrimp Masala",
        vegetarian: false,
      },
    ],
  },
  {
    id: "chaat",
    aliases: ["Chats"],
    name: "Chaat",
    items: [
      {
        name: "Samosa Chaat",
        vegetarian: true,
      },
      {
        name: "Eggplant Chaat",
        vegetarian: true,
      },
      {
        name: "Aloo Tikki Chaat",
        vegetarian: true,
      },
      {
        name: "Papdi Chaat",
        vegetarian: true,
      },
      {
        name: "Zucchini Chaat",
        vegetarian: true,
      },
      {
        name: "Bhel Puri",
        vegetarian: true,
      },
      {
        name: "Sev Aloo Dahi Puri",
        vegetarian: true,
      },
      {
        name: "Pani Puri",
        vegetarian: true,
      },
      {
        name: "Ragada Pani Puri",
        vegetarian: true,
      },
      {
        name: "Mexican Bhel",
        vegetarian: true,
      },
      {
        name: "Kachori Chaat",
        vegetarian: true,
      },
      {
        name: "Egg Chaat",
        vegetarian: false,
      },
      {
        name: "Bhindi Kurkure Chaat",
        vegetarian: true,
      },
    ],
  },
  {
    id: "drinks",
    aliases: ["Drinks"],
    name: "Drinks",
    items: [
      {
        name: "Mango Lassi",
        vegetarian: true,
      },
      {
        name: "Sweet Lassi",
        vegetarian: true,
      },
      {
        name: "Salt Lassi",
        vegetarian: true,
      },
      {
        name: "Watermelon Drink",
        vegetarian: true,
      },
      {
        name: "Falooda",
        vegetarian: true,
      },
      {
        name: "Seethaphal Milk Shake",
        vegetarian: true,
      },
      {
        name: "Cheekoo Milk Shake",
        vegetarian: true,
      },
      {
        name: "Rose Milk",
        vegetarian: true,
      },
      {
        name: "Badam Milk",
        vegetarian: true,
      },
    ],
  },
  {
    id: "desserts",
    aliases: ["Desserts"],
    name: "Desserts",
    items: [
      {
        name: "Carrot Halwa",
        vegetarian: true,
      },
      {
        name: "Double Ka Meetha",
        vegetarian: true,
      },
      {
        name: "Qubani Ka Meetha",
        vegetarian: true,
      },
      {
        name: "Gulab Jamun",
        vegetarian: true,
      },
      {
        name: "Rasmalai",
        vegetarian: true,
      },
      {
        name: "Junnu",
        vegetarian: true,
      },
      {
        name: "Rabdi",
        vegetarian: true,
      },
      {
        name: "Mango Rasmalai",
        vegetarian: true,
      },
      {
        name: "Lychee Malai",
        vegetarian: true,
      },
      {
        name: "Kaddu Ka Kheer",
        vegetarian: true,
      },
      {
        name: "Rice Kheer",
        vegetarian: true,
      },
      {
        name: "Apricot Delight",
        vegetarian: true,
      },
      {
        name: "Fruit Custard",
        vegetarian: true,
      },
      {
        name: "Jelebi",
        vegetarian: true,
      },
      {
        name: "Kala Jamun",
        vegetarian: true,
      },
      {
        name: "Shahi Tukda",
        vegetarian: true,
      },
      {
        name: "Tawa Delight",
        vegetarian: true,
      },
      {
        name: "Chekkari Pongali",
        vegetarian: true,
      },
      {
        name: "Orange Kulfi",
        vegetarian: true,
      },
      {
        name: "Chocolate Walnut Spring Rolls",
        vegetarian: true,
      },
      {
        name: "Indian Flavored Macaroons",
        vegetarian: true,
      },
      {
        name: "Phirni",
        vegetarian: true,
      },
      {
        name: "Paan Mousse With Gulkand",
        vegetarian: true,
      },
      {
        name: "Rasmalai Cheesecake",
        vegetarian: true,
      },
      {
        name: "Gulabjamun Cheesecake",
        vegetarian: true,
      },
      {
        name: "Paan Shots",
        vegetarian: true,
      },
      {
        name: "Sweet Paan",
        vegetarian: true,
      },
      {
        name: "Mango Mousse",
        vegetarian: true,
      },
      {
        name: "Chocolate Mousse",
        vegetarian: true,
      },
      {
        name: "Chocolate Mousse With Hersheys Kisses",
        vegetarian: true,
      },
      {
        name: "Rabdi Gulabjamun Shots",
        vegetarian: true,
      },
      {
        name: "Pineapple Coconut Mousse",
        vegetarian: true,
      },
      {
        name: "Thandai Mousse",
        vegetarian: true,
      },
    ],
  },
]
