import stews from "../../assets/stews.jpg";
import baking from "../../assets/bakedgoods.jpg";
import braai from "../../assets/braai.jpg";
import frying from "../../assets/ingr1.jpg";
import marinating from "../../assets/braai.jpg";
import roasting from "../../assets/braai.jpg";
import herbs from "../../assets/rosemary1.jpg";
import sauces from "../../assets/sauce.jpg";
import chips from "../../assets/frenchfries.jpg";

const CategoryData = [
  {
    id: 1,
    name: "masala mixes",
    image: stews,
    spiceList: [
      {
        name: "mother in law",
        flavorProfile: "Spicy and tangy",
        bestUsedIn: "Curries, marinades",
        healthBenefits: "Boosts metabolism",
      },
      {
        name: "tandoori masala",
        flavorProfile: "Smoky and earthy",
        bestUsedIn: "Grilled dishes, tandoori chicken",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "durban curry",
        flavorProfile: "Hot and aromatic",
        bestUsedIn: "Curries, stews",
        healthBenefits: "Aids digestion",
      },
      {
        name: "mild curry",
        flavorProfile: "Mildly spicy and sweet",
        bestUsedIn: "Curries, soups",
        healthBenefits: "Anti-inflammatory properties",
      },
      {
        name: "hot curry",
        flavorProfile: "Very spicy and hot",
        bestUsedIn: "Curries, stir-fries",
        healthBenefits: "Boosts immunity",
      },
      {
        name: "mixed spice",
        flavorProfile: "Sweet and warm",
        bestUsedIn: "curries, stews, desserts",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "curry raja",
        flavorProfile: "Complex and aromatic",
        bestUsedIn: "Curries, rice dishes",
        healthBenefits: "Aids digestion",
      },
    ],
  },

  {
    id: 2,
    name: "meat seasonings",
    image: braai,
    spiceList: [
      {
        name: "beef stew",
        flavorProfile: "Rich and hearty",
        bestUsedIn: "Beef stews, casseroles",
        healthBenefits: "Aids digestion",
      },
      {
        name: "chicken masala",
        flavorProfile: "Spicy and aromatic",
        bestUsedIn: "Chicken curries, marinades",
        healthBenefits: "Boosts metabolism",
      },
      {
        name: "steak and chop",
        flavorProfile: "Savory and peppery",
        bestUsedIn: "Steaks, pork chops",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "chisanyama",
        flavorProfile: "Smoky and spicy",
        bestUsedIn: "Barbecued meats",
        healthBenefits: "Boosts immunity",
      },
      {
        name: "portuguese chicken",
        flavorProfile: "Spicy and tangy",
        bestUsedIn: "Chicken dishes, grills",
        healthBenefits: "Anti-inflammatory properties",
      },
      {
        name: "braai spice",
        flavorProfile: "Smoky and robust",
        bestUsedIn: "Barbecues, grills",
        healthBenefits: "Aids digestion",
      },
      {
        name: "meat tenderiser",
        flavorProfile: "Neutral",
        bestUsedIn: "Tough cuts of meat",
        healthBenefits: "Improves digestibility of meat",
      },
      {
        name: "chicken spice",
        flavorProfile: "Savory and mild",
        bestUsedIn: "Chicken dishes, roasts",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "royal chicken",
        flavorProfile: "Rich and aromatic",
        bestUsedIn: "Chicken dishes, curries",
        healthBenefits: "Boosts metabolism",
      },
    ],
  },
  {
    id: 3,
    name: "all-purpose magic",
    image: frying,
    spiceList: [
      {
        name: "ginger powder",
        flavorProfile: "Warm and spicy",
        bestUsedIn: "Asian dishes, teas, desserts",
        healthBenefits: "Aids digestion, reduces nausea",
      },
      {
        name: "garlic powder",
        flavorProfile: "Savory and pungent",
        bestUsedIn: "Almost any savory dish",
        healthBenefits: "Boosts immunity, reduces blood pressure",
      },
      {
        name: "lemon and herb",
        flavorProfile: "Citrusy and aromatic",
        bestUsedIn: "Chicken dishes, seafood, salads",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
      {
        name: "lemon garlic and BBQ",
        flavorProfile: "Tangy, savory, and smoky",
        bestUsedIn: "Grilled meats, marinades",
        healthBenefits: "Boosts immunity, aids digestion",
      },
      {
        name: "lemon garlic and herb",
        flavorProfile: "Citrusy, savory, and aromatic",
        bestUsedIn: "Chicken dishes, seafood, marinades",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
      {
        name: "mixed herb",
        flavorProfile: "Varies, generally aromatic",
        bestUsedIn: "Almost any savory dish",
        healthBenefits: "Varies, generally rich in antioxidants",
      },
    ],
  },
  {
    id: 4,
    name: "exotic ethnic flavors",
    image: marinating,
    spiceList: [
      {
        name: "italian seasoning",
        flavorProfile: "Herbaceous and aromatic",
        bestUsedIn: "Pasta dishes, pizza, marinades",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "italian potjekos",
        flavorProfile: "Savory and hearty",
        bestUsedIn: "Stews, casseroles",
        healthBenefits: "Aids digestion",
      },
      {
        name: "durban curry",
        flavorProfile: "Hot and aromatic",
        bestUsedIn: "Curries, stews",
        healthBenefits: "Boosts metabolism",
      },
      {
        name: "portugese chicken",
        flavorProfile: "Spicy and tangy",
        bestUsedIn: "Chicken dishes, grills",
        healthBenefits: "Rich in antioxidants",
      },
    ],
  },
  {
    id: 5,
    name: "BBQ and grill",
    image: roasting,
    spiceList: [
      {
        name: "BBQ",
        flavorProfile: "Smoky and sweet",
        bestUsedIn: "Grilled meats, marinades",
        healthBenefits: "Rich in antioxidants",
      },
      {
        name: "lemon and herb",
        flavorProfile: "Citrusy and aromatic",
        bestUsedIn: "Chicken dishes, seafood, salads",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
      {
        name: "braai spice",
        flavorProfile: "Smoky and robust",
        bestUsedIn: "Barbecues, grills",
        healthBenefits: "Aids digestion",
      },
      {
        name: "bird's eye",
        flavorProfile: "Hot and spicy",
        bestUsedIn: "Curries, stir-fries",
        healthBenefits: "Boosts metabolism, aids digestion",
      },
      {
        name: "steak and chop",
        flavorProfile: "Savory and peppery",
        bestUsedIn: "Steaks, pork chops",
        healthBenefits: "Rich in antioxidants",
      },
    ],
  },
  {
    id: 6,
    name: "essential kitchen wonders",
    image: herbs,
    spiceList: [
      {
        name: "turmeric",
        flavorProfile: "Earthy and slightly bitter",
        bestUsedIn: "Curries, rice dishes, teas",
        healthBenefits: "Anti-inflammatory, antioxidant properties",
      },
      {
        name: "six gun",
        flavorProfile: "Complex and spicy",
        bestUsedIn: "Grilled meats, stews",
        healthBenefits: "Boosts metabolism, aids digestion",
      },
      {
        name: "paprika",
        flavorProfile: "Sweet or hot, smoky",
        bestUsedIn: "Goulash, chicken paprikash",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
      {
        name: "black pepper",
        flavorProfile: "Hot, pungent",
        bestUsedIn: "Almost any savory dish",
        healthBenefits: "Improves digestion, has antioxidant properties",
      },
      {
        name: "white pepper",
        flavorProfile: "Mildly hot, less aromatic than black pepper",
        bestUsedIn: "White sauces, soups",
        healthBenefits: "Aids digestion, improves appetite",
      },
      {
        name: "cayenne pepper",
        flavorProfile: "Very spicy",
        bestUsedIn: "Hot sauces, spicy dishes",
        healthBenefits: "Boosts metabolism, aids digestion",
      },
      {
        name: "cumin",
        flavorProfile: "Earthy, spicy-sweet",
        bestUsedIn: "Curries, chili, stews",
        healthBenefits: "Aids digestion, source of iron",
      },
      {
        name: "coriander",
        flavorProfile: "Sweet, floral",
        bestUsedIn: "Curries, soups, stews",
        healthBenefits: "Aids digestion, source of antioxidants",
      },
      {
        name: "parsley",
        flavorProfile: "Fresh, slightly peppery",
        bestUsedIn: "Garnish, salads, soups",
        healthBenefits: "Rich in vitamins A, C, and K",
      },
      {
        name: "rosemary",
        flavorProfile: "Piney, slightly bitter",
        bestUsedIn: "Roasted meats, breads",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
      {
        name: "basil",
        flavorProfile: "Sweet, slightly peppery",
        bestUsedIn: "Pasta sauces, pizzas, salads",
        healthBenefits: "Anti-inflammatory, source of vitamins A and K",
      },
      {
        name: "bay leaves",
        flavorProfile: "Mildly bitter, tea-like",
        bestUsedIn: "Soups, stews, braises",
        healthBenefits: "Aids digestion, has anti-inflammatory properties",
      },
      {
        name: "cloves",
        flavorProfile: "Sweet, warm, and aromatic",
        bestUsedIn: "Baking, curries, teas",
        healthBenefits: "Rich in antioxidants, aids digestion",
      },
    ],
  },
  {
    id: 7,
    name: "sweet and fiery delights",
    image: baking,
    spiceList: [
      {
        name: "cinnamon",
        flavorProfile: "Sweet, warm",
        bestUsedIn: "Baking, teas, curries",
        healthBenefits: "Lowers blood sugar, rich in antioxidants",
      },
      {
        name: "cocoa powder",
        flavorProfile: "Bitter, chocolatey",
        bestUsedIn: "Baking, hot chocolate",
        healthBenefits: "Rich in antioxidants, mood booster",
      },
      {
        name: "nutmeg",
        flavorProfile: "Sweet, nutty",
        bestUsedIn: "Baking, sauces, stews",
        healthBenefits: "Aids digestion, pain relief",
      },
      {
        name: "raisins",
        flavorProfile: "Sweet, fruity",
        bestUsedIn: "Baking, salads, curries",
        healthBenefits: "Rich in fiber, iron, and calcium",
      },
      {
        name: "chutney",
        flavorProfile: "Varies, generally sweet and tangy",
        bestUsedIn: "Dips, spreads, marinades",
        healthBenefits: "Depends on ingredients, generally rich in vitamins",
      },
      {
        name: "aromat",
        flavorProfile: "Savory, umami",
        bestUsedIn: "Soups, stews, sauces",
        healthBenefits: "Enhances flavor, aids digestion",
      },
    ],
  },
  {
    id: 8,
    name: "snack enhancers",
    image: chips,
    spiceList: [
      {
        name: "cheese and onion",
        flavorProfile: "Savory, cheesy, and oniony",
        bestUsedIn: "Snacks, popcorn, chips",
        healthBenefits: "Enhances flavor, aids digestion",
      },
      {
        name: "popcorn sprinkle",
        flavorProfile: "Varies, generally savory or sweet",
        bestUsedIn: "Popcorn, snacks",
        healthBenefits: "Depends on ingredients, generally enhances flavor",
      },
      {
        name: "butter sprinkle",
        flavorProfile: "Rich, buttery",
        bestUsedIn: "Popcorn, breads, vegetables",
        healthBenefits: "Enhances flavor, source of fat",
      },
      {
        name: "chip sprinkle",
        flavorProfile: "Varies, generally savory",
        bestUsedIn: "Chips, snacks",
        healthBenefits: "Depends on ingredients, generally enhances flavor",
      },
    ],
  },
  {
    id: 9,
    name: "boost your health",
    image: sauces,
    spiceList: [
      {
        name: "chia seeds",
        flavorProfile: "Mild, nutty",
        bestUsedIn: "Smoothies, salads, baked goods",
        healthBenefits:
          "Rich in fiber, antioxidants, omega-3 fatty acids, and various micronutrients",
      },
      {
        name: "fenugreek seeds",
        flavorProfile: "Bitter, maple-like",
        bestUsedIn: "Curries, stews, teas",
        healthBenefits:
          "Aids digestion, lowers blood sugar, boosts breast milk production",
      },
    ],
  },
  {
    id: 10,
    name: "saucy indulgences",
    image: sauces,
    spiceList: [
      {
        name: "lemon and herb sauce",
        flavorProfile: "Citrusy and aromatic",
        bestUsedIn: "Chicken dishes, seafood, salads",
        healthBenefits: "Rich in vitamin C, aids digestion",
      },
      {
        name: "BBQ sauce",
        flavorProfile: "Sweet, tangy, and smoky",
        bestUsedIn: "Grilled meats, burgers, fries",
        healthBenefits: "Source of lycopene from tomatoes",
      },
      {
        name: "sweet chilli",
        flavorProfile: "Sweet and mildly spicy",
        bestUsedIn: "Dipping sauce, stir-fries, glazes",
        healthBenefits: "Chilli peppers can boost metabolism",
      },
      {
        name: "hot chilli",
        flavorProfile: "Very spicy and hot",
        bestUsedIn: "Curries, soups, marinades",
        healthBenefits: "Chilli peppers can boost metabolism, aid digestion",
      },
    ],
  },
];

export default CategoryData;
