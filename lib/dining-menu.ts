import type { MenuSection } from "./catalog"

export const menu: MenuSection[] = [
  {
    id: "biryani",
    note: "Dum is a slow, covered cooking method. Chicken and goat are offered in several portions. Check online ordering for today’s sizes.",
    aliases: ["HyderabadiBiryani"],
    name: "Hyderabadi biryani",
    items: [
      {
        name: "Chicken Dum Biryani",
        vegetarian: false,
        description:
          "Spiced chicken and basmati rice steamed together with caramelized onions.",
      },
      {
        name: "Goat Dum Biryani",
        vegetarian: false,
        description: "Slow-cooked goat layered with fragrant basmati rice.",
      },
      {
        name: "Kheema Biryani",
        vegetarian: false,
        description: "Minced goat in a lightly spiced sauce with basmati rice.",
      },
      {
        name: "Boneless Chicken Biryani",
        vegetarian: false,
        description: "Boneless chicken layered with spiced basmati rice.",
      },
      {
        name: "Vijayawada Chicken Biryani",
        vegetarian: false,
        description: "Boneless chicken in Bezawada sauce with basmati rice.",
      },
      {
        name: "Fried Chicken Biryani",
        vegetarian: false,
        description:
          "Spiced fried chicken and basmati rice. Ask about weekend availability.",
      },
      {
        name: "Egg Biryani",
        vegetarian: false,
        description:
          "Boiled eggs tossed with spices and layered with basmati rice.",
      },
      {
        name: "Fish Biryani",
        vegetarian: false,
        description: "Spiced fish and basmati rice.",
      },
      {
        name: "Shrimp Biryani",
        vegetarian: false,
        description:
          "Shrimp sautéed with spices and layered with basmati rice.",
      },
      {
        name: "Paneer Biryani",
        vegetarian: true,
        description: "Paneer and basmati rice in a gently spiced sauce.",
      },
      {
        name: "Veg Biryani",
        vegetarian: true,
        description: "Vegetables and basmati rice cooked with biryani spices.",
      },
    ],
  },
  {
    id: "haleem",
    name: "Haleem",
    items: [
      {
        name: "Hyderabadi Haleem",
        vegetarian: false,
        description:
          "Meat, wheat, and lentils slow-cooked into a rich, savory stew.",
      },
    ],
  },
  {
    id: "kebabs",
    note: "Marinated chicken, paneer, and chops meet the high heat of the tandoor.",
    aliases: ["VeggieKebabs", "MeatKebabs"],
    name: "Tandoori kebabs",
    items: [
      {
        name: "Paneer Tikka",
        vegetarian: true,
        description: "Marinated paneer grilled in the clay oven.",
      },
      {
        name: "Chicken Fire (8)",
        vegetarian: false,
        description: "Boneless chicken with red chili and ground spices.",
      },
      {
        name: "Chicken Hariyali (8)",
        vegetarian: false,
        description: "Chicken marinated with yogurt, mint, and cilantro.",
      },
      {
        name: "Chicken Tikka (8)",
        vegetarian: false,
        description: "Spiced chicken breast grilled in the clay oven.",
      },
      {
        name: "Chicken Malai (8)",
        vegetarian: false,
        description: "Chicken breast marinated with cream and garlic.",
      },
      {
        name: "Tandoori Chicken (Half)",
        vegetarian: false,
        description: "Yogurt-marinated chicken roasted in the clay oven.",
      },
      {
        name: "Goat Chops (4)",
        vegetarian: false,
        description: "Rib chops marinated with garlic and spices.",
      },
    ],
  },
  {
    id: "starters",
    aliases: ["VeggieAppetizers", "MeatAppetizers"],
    name: "Appetizers",
    items: [
      {
        name: "Veg Gobi Manchurian",
        vegetarian: true,
        description: "Cauliflower tossed in a Manchurian sauce.",
      },
      {
        name: "Veg Baby Corn Manchurian",
        vegetarian: true,
        description: "Baby corn in a savory Manchurian sauce.",
      },
      {
        name: "Paneer 65",
        vegetarian: true,
        description: "Spiced, fried paneer.",
      },
      {
        name: "Gobi 65",
        vegetarian: true,
        description: "Crisp cauliflower tossed with spices.",
      },
      {
        name: "Chilli Gobi",
        vegetarian: true,
        description: "Cauliflower tossed with chilies.",
      },
      {
        name: "Cut Mirchi",
        vegetarian: true,
        description: "Battered and fried green chilies.",
      },
      {
        name: "Kaju Pakoda",
        vegetarian: true,
        description: "Cashew fritters.",
      },
      {
        name: "Onion Pakoda",
        vegetarian: true,
        description: "Crisp onion fritters.",
      },
      {
        name: "Veg Samosa (2)",
        vegetarian: true,
        description: "Pastry filled with spiced vegetables.",
      },
      {
        name: "Irani Onion Samosa (6)",
        vegetarian: true,
        description: "Thin pastry filled with seasoned onions.",
      },
      {
        name: "Pista House Special Chicken",
        vegetarian: false,
        description: "The kitchen’s house chicken appetizer.",
      },
      {
        name: "Chicken 65",
        vegetarian: false,
        description:
          "Fried chicken with green chilies, curry leaves, and garlic.",
      },
      {
        name: "Shrimp 65",
        vegetarian: false,
        description: "Fried shrimp with chilies and curry leaves.",
      },
      {
        name: "Shrimp Pepper Fry",
        vegetarian: false,
        description: "Shrimp sautéed with black pepper.",
      },
      {
        name: "Chicken Pepper Fry",
        vegetarian: false,
        description: "Chicken tossed with black pepper.",
      },
      {
        name: "Kodi Vepudu",
        vegetarian: false,
        description:
          "Bone-in chicken with onions, curry leaves, and ground spices.",
      },
      {
        name: "Goat Sukka",
        vegetarian: false,
        description: "Goat roasted with butter and spices.",
      },
      {
        name: "Apollo Fish",
        vegetarian: false,
        description: "Fried fish fillets in a spicy sauce.",
      },
      {
        name: "Fish Fry",
        vegetarian: false,
        description: "Fish fillets seasoned with onions, garlic, and spices.",
      },
      {
        name: "Egg Pakoda",
        vegetarian: false,
        description: "Boiled eggs dipped in spiced batter and fried.",
      },
      {
        name: "Irani Kheema Samosa (4)",
        vegetarian: false,
        description: "Crisp pastry with a minced goat filling.",
      },
      {
        name: "Goat Pepper Fry",
        vegetarian: false,
      },
      {
        name: "Curry Leaf Chicken",
        vegetarian: false,
      },
      {
        name: "Chili Chicken",
        vegetarian: false,
      },
    ],
  },
  {
    id: "curries",
    aliases: ["VeggieEntrees", "MeatEntrees"],
    name: "Curries",
    items: [
      {
        name: "Malai Kofta",
        vegetarian: true,
        description: "Vegetable dumplings in a creamy curry.",
      },
      {
        name: "Palak Paneer",
        vegetarian: true,
        description: "Paneer in a spinach sauce.",
      },
      {
        name: "Phool Makhana",
        vegetarian: true,
        description: "Lotus seeds in a spiced curry.",
      },
      {
        name: "Paneer Butter Masala",
        vegetarian: true,
        description: "Paneer simmered in a buttery tomato sauce.",
      },
      {
        name: "Kadai Paneer",
        vegetarian: true,
        description: "Paneer cooked with peppers and kadai spices.",
      },
      {
        name: "Chana Masala",
        vegetarian: true,
        description: "Chickpeas simmered in a spiced gravy.",
      },
      {
        name: "Bagara Baigan",
        vegetarian: true,
        description: "Eggplant in a nutty Hyderabadi gravy.",
      },
      {
        name: "Dal Tadka",
        vegetarian: true,
        description: "Lentils finished with tempered spices.",
      },
      {
        name: "Dum Ka Chicken Curry",
        vegetarian: false,
        description: "Chicken slow-cooked with spices.",
      },
      {
        name: "Butter Chicken",
        vegetarian: false,
        description: "Chicken in a creamy tomato and butter sauce.",
      },
      {
        name: "Chicken Tikka Masala",
        vegetarian: false,
        description: "Chicken tikka simmered in a masala sauce.",
      },
      {
        name: "Chicken Curry",
        vegetarian: false,
        description: "Chicken simmered in a spiced gravy.",
      },
      {
        name: "Goat Curry",
        vegetarian: false,
        description: "Goat cooked in a spiced curry.",
      },
      {
        name: "Methi Chicken Curry",
        vegetarian: false,
        description: "Chicken curry scented with fenugreek.",
      },
      {
        name: "Chettinad Chicken Curry",
        vegetarian: false,
        description: "Chicken in a Chettinad spice blend.",
      },
      {
        name: "Chettinad Goat Curry",
        vegetarian: false,
        description: "Goat in a Chettinad spice blend.",
      },
      {
        name: "Gongura Chicken Curry",
        vegetarian: false,
        description: "Chicken curry with tangy sorrel leaves.",
      },
      {
        name: "Gongura Goat Curry",
        vegetarian: false,
        description: "Goat curry with tangy sorrel leaves.",
      },
      {
        name: "Kheema Masala",
        vegetarian: false,
        description: "Minced meat simmered with masala.",
      },
    ],
  },
  {
    id: "bread-rice",
    aliases: ["NaanBread", "Rice"],
    name: "Bread & rice",
    items: [
      {
        name: "Butter Naan",
        vegetarian: true,
      },
      {
        name: "Bullet Naan",
        vegetarian: true,
      },
      {
        name: "Garlic Naan",
        vegetarian: true,
      },
      {
        name: "Plain Naan",
        vegetarian: true,
      },
      {
        name: "Tandoori Roti",
        vegetarian: true,
      },
      {
        name: "House Special Rice",
        vegetarian: true,
      },
      {
        name: "White Rice",
        vegetarian: true,
      },
    ],
  },
  {
    id: "pulavs",
    note: "These rice dishes range from green chili paneer to tangy gongura chicken. Gongura is the sorrel leaf that gives its namesake pulavs their tart flavor.",
    name: "Pulavs",
    items: [
      {
        name: "Fried Chicken Pulav",
        vegetarian: false,
        description: "Seasoned rice served with fried chicken.",
      },
      {
        name: "Special Goat Pulav",
        vegetarian: false,
        description: "Spiced basmati rice with pieces of goat.",
      },
      {
        name: "Vijayawada Chicken Pulav",
        vegetarian: false,
        description: "Chicken and seasoned rice with herbs.",
      },
      {
        name: "Goat Kheema Pulav",
        vegetarian: false,
        description: "Minced goat cooked with spiced rice.",
      },
      {
        name: "Paneer Pulav",
        vegetarian: true,
        description: "Paneer and mixed vegetables with basmati rice.",
      },
      {
        name: "Gongura Paneer Pulao",
        vegetarian: true,
        description: "Paneer and rice with tangy sorrel leaves.",
      },
      {
        name: "Gongura Chicken Pulav",
        vegetarian: false,
        description: "Chicken pulav with tart gongura leaves.",
      },
      {
        name: "Pachi Mirchi Paneer Pulao",
        vegetarian: true,
        description: "Green chili paneer with pilaf rice.",
      },
      {
        name: "Veg Kheema Pulav",
        vegetarian: true,
        description: "Spiced minced vegetables with basmati rice.",
      },
      {
        name: "Pachi Mirchi Egg Pulao",
        vegetarian: false,
        description: "Boiled eggs with green chili paste and rice.",
      },
      {
        name: "Eggplant Pulao",
        vegetarian: true,
        description: "Eggplant and basmati rice cooked with spices.",
      },
    ],
  },
  {
    id: "drinks",
    aliases: ["Drinks"],
    name: "Drinks",
    items: [
      {
        name: "Falooda",
        vegetarian: true,
        description: "Rose milk with vermicelli, basil seeds, and ice cream.",
      },
      {
        name: "Salt Lassi",
        vegetarian: true,
        description: "A salted yogurt drink.",
      },
      {
        name: "Bottled Water",
        vegetarian: true,
      },
      {
        name: "Mango Lassi",
        vegetarian: true,
        description: "Mango blended with yogurt.",
      },
      {
        name: "Soft Drinks",
        vegetarian: true,
      },
      {
        name: "Thums Up",
        vegetarian: true,
      },
      {
        name: "Limca",
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
        description: "Grated carrots cooked with milk and butter.",
      },
      {
        name: "Lychee Malai",
        vegetarian: true,
        description: "Lychee in sweet cream.",
      },
      {
        name: "Double Ka Meetha",
        vegetarian: true,
        description: "Hyderabadi bread pudding with milk and nuts.",
      },
      {
        name: "Gulab Jamun",
        vegetarian: true,
        description: "Milk dumplings soaked in syrup.",
      },
      {
        name: "Junnu",
        vegetarian: true,
        description: "Caramelized milk pudding.",
      },
      {
        name: "Qubani Ka Meetha",
        vegetarian: true,
        description: "A Hyderabadi dessert of stewed apricots.",
      },
      {
        name: "Rasmalai",
        vegetarian: true,
        description: "Soft cheese dumplings in sweet milk.",
      },
      {
        name: "Rabdi",
        vegetarian: true,
        description: "Slow-thickened milk with pistachios.",
      },
    ],
  },
]
